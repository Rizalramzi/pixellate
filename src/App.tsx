import React, { useEffect, useRef, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionSkeleton from './components/SectionSkeleton';

// Lazy-load all below-the-fold heavy components & sections for enhanced load performance
const LogoPhilosophy = lazy(() => import('./components/LogoPhilosophy'));
const AboutAndAdvantages = lazy(() => import('./components/AboutAndAdvantages'));
const TargetMarket = lazy(() => import('./components/TargetMarket'));
const ServicesList = lazy(() => import('./components/ServicesList'));
const PricingCalculator = lazy(() => import('./components/PricingCalculator'));
const WorkflowSection = lazy(() => import('./components/WorkflowSection'));
const OrderFormGenerator = lazy(() => import('./components/OrderFormGenerator'));
const QualityAndContract = lazy(() => import('./components/QualityAndContract'));
const HandoverEducation = lazy(() => import('./components/HandoverEducation'));
const PaymentMethods = lazy(() => import('./components/PaymentMethods'));
const TestimonialQuote = lazy(() => import('./components/TestimonialQuote'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppFloatingButton = lazy(() => import('./components/WhatsAppFloatingButton'));

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MainContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx: gsap.Context;

    const setupSectionAnimations = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const sections = mainEl.querySelectorAll('section');

        sections.forEach((section, index) => {
          // Skip hero section: it handles its own dedicated entrance animation
          if (section.id === 'hero' || index === 0 || section.getAttribute('data-gsap-init') === 'true') return;
          section.setAttribute('data-gsap-init', 'true');

          // 1. Fade-in and slide-up animation for the entire section container
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 44,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );

          // 2. Coordinated reveal for section headers (.gsap-header)
          const header = section.querySelector('.gsap-header');
          if (header) {
            gsap.fromTo(
              header,
              {
                opacity: 0,
                y: 24,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                delay: 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  once: true,
                },
              }
            );
          }

          // 3. Staggered reveal for interactive cards, grids & list rows (.gsap-item)
          const items = section.querySelectorAll('.gsap-item');
          if (items.length > 0) {
            gsap.fromTo(
              items,
              {
                opacity: 0,
                y: 28,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.08,
                delay: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  once: true,
                },
              }
            );
          }
        });

        ScrollTrigger.refresh();
      }, mainEl);
    };

    // Initial setup for eagerly loaded components
    setupSectionAnimations();

    // Observe DOM mutations so as lazy-loaded sections mount, ScrollTrigger recalculates
    const mutationObserver = new MutationObserver(() => {
      setupSectionAnimations();
    });

    mutationObserver.observe(mainEl, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFCFF] dark:bg-[#080B11] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#0068FF]/15 selection:text-[#0068FF] transition-colors duration-200">
      {/* 3-Zone Navigation Header with Dark Mode Toggle (Eagerly loaded) */}
      <Navbar />

      <main ref={mainRef}>
        {/* Hero Section (Above the fold - Eagerly loaded for fast FCP & LCP) */}
        <Hero />

        {/* Filosofi Logo & Nilai Brand (PDF Hal 2) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[460px]" />}>
          <LogoPhilosophy />
        </Suspense>

        {/* Deskripsi Umum & 3 Keunggulan (PDF Hal 3) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[480px]" />}>
          <AboutAndAdvantages />
        </Suspense>

        {/* Target Pasar: Mahasiswa IT, Fresh Graduates, UMKM (PDF Hal 4) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[440px]" />}>
          <TargetMarket />
        </Suspense>

        {/* Daftar Layanan: Web, Mobile, UI/UX, Custom (PDF Hal 5) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[520px]" />}>
          <ServicesList />
        </Suspense>

        {/* Penentuan Harga Resmi & Kalkulator Estimasi Interaktif (PDF Hal 6 - Heavy interactive module) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[600px]" />}>
          <PricingCalculator />
        </Suspense>

        {/* 7 Tahapan Kerja Terstruktur (PDF Hal 7) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[480px]" />}>
          <WorkflowSection />
        </Suspense>

        {/* Formulir Briefing & Generator Format WA (PDF Hal 8 - Heavy form module) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[560px]" />}>
          <OrderFormGenerator />
        </Suspense>

        {/* Standar QA, Clean Code, Ketentuan Revisi & Kebijakan Refund (PDF Hal 9 & 10) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" />}>
          <QualityAndContract />
        </Suspense>

        {/* Sesi Serah Terima & Edukasi Logika Sidang (PDF Hal 11) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[440px]" />}>
          <HandoverEducation />
        </Suspense>

        {/* Saluran & Ketentuan Pembayaran (PDF Hal 12) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[440px]" />}>
          <PaymentMethods />
        </Suspense>

        {/* Steve Jobs Quote & Final Conversion Action (PDF Hal 13) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[380px]" />}>
          <TestimonialQuote />
        </Suspense>
      </main>

      {/* Footer (PDF Hal 13) */}
      <Suspense fallback={<div className="h-64 bg-slate-900 animate-pulse" />}>
        <Footer />
      </Suspense>

      {/* Floating WhatsApp Action Button */}
      <Suspense fallback={null}>
        <WhatsAppFloatingButton />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
