import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoPhilosophy from './components/LogoPhilosophy';
import AboutAndAdvantages from './components/AboutAndAdvantages';
import TargetMarket from './components/TargetMarket';
import ServicesList from './components/ServicesList';
import PricingCalculator from './components/PricingCalculator';
import WorkflowSection from './components/WorkflowSection';
import OrderFormGenerator from './components/OrderFormGenerator';
import QualityAndContract from './components/QualityAndContract';
import HandoverEducation from './components/HandoverEducation';
import PaymentMethods from './components/PaymentMethods';
import TestimonialQuote from './components/TestimonialQuote';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

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

    const ctx = gsap.context(() => {
      // Query every section inside App.tsx
      const sections = mainEl.querySelectorAll('section');

      sections.forEach((section, index) => {
        // Skip hero section: it handles its own dedicated entrance animation
        if (section.id === 'hero' || index === 0) return;

        // 1. Fade-in and slide-up animation for the entire section container
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 48,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
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
              y: 28,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.1,
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
              y: 32,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
              delay: 0.18,
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
    }, mainEl);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFCFF] dark:bg-[#080B11] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#0068FF]/15 selection:text-[#0068FF] transition-colors duration-200">
      {/* 3-Zone Navigation Header with Dark Mode Toggle */}
      <Navbar />

      <main ref={mainRef}>
        {/* Hero Section */}
        <Hero />

        {/* Filosofi Logo & Nilai Brand (PDF Hal 2) */}
        <LogoPhilosophy />

        {/* Deskripsi Umum & 3 Keunggulan (PDF Hal 3) */}
        <AboutAndAdvantages />

        {/* Target Pasar: Mahasiswa IT, Fresh Graduates, UMKM (PDF Hal 4) */}
        <TargetMarket />

        {/* Daftar Layanan: Web, Mobile, UI/UX, Custom (PDF Hal 5) */}
        <ServicesList />

        {/* Penentuan Harga Resmi & Kalkulator Estimasi Interaktif (PDF Hal 6) */}
        <PricingCalculator />

        {/* 7 Tahapan Kerja Terstruktur (PDF Hal 7) */}
        <WorkflowSection />

        {/* Formulir Briefing & Generator Format WA (PDF Hal 8) */}
        <OrderFormGenerator />

        {/* Standar QA, Clean Code, Ketentuan Revisi & Kebijakan Refund (PDF Hal 9 & 10) */}
        <QualityAndContract />

        {/* Sesi Serah Terima & Edukasi Logika Sidang (PDF Hal 11) */}
        <HandoverEducation />

        {/* Saluran & Ketentuan Pembayaran (PDF Hal 12) */}
        <PaymentMethods />

        {/* Steve Jobs Quote & Final Conversion Action (PDF Hal 13) */}
        <TestimonialQuote />
      </main>

      {/* Footer (PDF Hal 13) */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
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
