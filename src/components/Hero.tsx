import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Sparkles,
  Layers,
  Code2,
} from 'lucide-react';
import { PixellateMark } from './PixellateLogo';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const floatingPillRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'uiux'>('web');

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Fluid Initial Entrance Animations (Page Load)
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      introTl
        .fromTo(
          '.hero-badge',
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.hero-proof',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          heroCardRef.current,
          { opacity: 0, scale: 0.94, y: 35 },
          { opacity: 1, scale: 1, y: 0, duration: 0.95 },
          '-=0.8'
        )
        .fromTo(
          floatingPillRef.current,
          { opacity: 0, scale: 0.85, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7 },
          '-=0.4'
        );

      // Subtle Idle Breathing Motion on Floating Pill
      if (floatingPillRef.current) {
        gsap.to(floatingPillRef.current, {
          y: '-=6',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.5,
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-white to-[#F5F8FF] dark:from-[#080B11] dark:via-[#0B0F19] dark:to-[#0D121F] bg-grid-pattern transition-colors duration-200"
    >
      {/* Ambient Atmospheric Glow */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-[#0068FF]/7 dark:bg-[#0068FF]/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Decorative Subtle Geometry Chips */}
      <div
        className="hidden lg:flex absolute top-24 right-16 z-0 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/70 shadow-sm text-[11px] font-mono text-[#0068FF] dark:text-blue-400 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Code2 className="w-3.5 h-3.5 text-[#0068FF] dark:text-blue-400" />
        <span>v2026.pre-launch</span>
      </div>

      <div
        className="hidden lg:flex absolute bottom-16 left-8 z-0 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 shadow-xs text-[11px] font-medium text-slate-500 dark:text-slate-400 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Layers className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
        <span>clean architecture</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Announcement / Pre-launch label */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-[#0068FF]/20 dark:border-[#0068FF]/40 text-[#0068FF] dark:text-blue-400 text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0068FF] animate-pulse" />
              <span>Pixellate · IT Project Assistance & Development</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-6 text-balance">
              Code done,{' '}
              <span className="text-[#0068FF] relative inline-block">
                Stress gone.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#0068FF]/25 -z-10"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Description based on PDF */}
            <p className="hero-desc text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Penyedia layanan bantuan proyek IT terpercaya untuk mahasiswa, fresh graduates,
              dan profesional muda. Dikerjakan dengan standar <strong className="text-slate-900 dark:text-white">Clean Code</strong>, harga transparan
              ramah kantong, dan sistem <strong className="text-slate-900 dark:text-white">bukan jual putus</strong> — kami dampingi hingga siap sidang & demo!
            </p>

            {/* Action CTAs */}
            <div className="hero-cta flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#harga"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#0068FF] hover:bg-[#0055D6] transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-sm group"
              >
                <span>Hitung Estimasi Biaya</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#order"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-800 transition-all text-sm hover:border-[#0068FF]/40 active:scale-[0.98]"
              >
                <span>Format Order Proyek</span>
              </a>
            </div>

            {/* Proof Points & Trust markers */}
            <div className="hero-proof pt-6 border-t border-slate-200/70 dark:border-slate-800/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0068FF] shrink-0" />
                <span>Clean Code & Komentar Rapi</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0068FF] shrink-0" />
                <span>Garansi Bug Gratis 5 Hari</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0068FF] shrink-0" />
                <span>Pendampingan Logika Sidang</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Console Visual */}
          <div className="lg:col-span-5 relative">
            <div
              ref={heroCardRef}
              className="hero-card relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden"
            >
              {/* Window Header */}
              <div className="bg-slate-900 dark:bg-slate-950 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">pixellate.workspace</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-blue-400 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>clean_build: OK</span>
                </div>
              </div>

              {/* Service Tab Switcher */}
              <div className="bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-700/80 px-4 py-2 flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'web'
                      ? 'bg-white dark:bg-slate-700 text-[#0068FF] dark:text-blue-300 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Web Dev
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'mobile'
                      ? 'bg-white dark:bg-slate-700 text-[#0068FF] dark:text-blue-300 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Mobile App
                </button>
                <button
                  onClick={() => setActiveTab('uiux')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'uiux'
                      ? 'bg-white dark:bg-slate-700 text-[#0068FF] dark:text-blue-300 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  UI/UX Figma
                </button>
              </div>

              {/* Simulated Code & Execution View */}
              <div className="p-5 font-mono text-xs text-slate-800 dark:text-slate-200 space-y-3 bg-[#FCFDFE] dark:bg-slate-950/60">
                {activeTab === 'web' && (
                  <>
                    <div className="text-slate-400 dark:text-slate-500 italic">// Pixellate Clean Code Standard: Web Project</div>
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-[#0068FF] dark:text-blue-400 font-semibold">export const</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">ClientPortal</span> = () =&gt; &#123;
                    </div>
                    <div className="pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500">// 1. Responsif di resolusi Desktop & Mobile</span>
                      </div>
                      <div>
                        <span className="text-indigo-600 dark:text-indigo-400">const</span> &#123; pages, features &#125; = useProjectScope();
                      </div>
                      <div>
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">return</span> (
                      </div>
                      <div className="pl-4 text-slate-600 dark:text-slate-400">
                        &lt;<span className="text-[#0068FF] dark:text-blue-400">ResponsiveLayout</span> quality="tested" minimalBug=&#123;true&#125; /&gt;
                      </div>
                      <div>);</div>
                    </div>
                    <div>&#125;;</div>
                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                      <span>Tarif: Rp50.000 / halaman</span>
                      <span className="text-[#0068FF] dark:text-blue-400 font-semibold">Termasuk Desain + Koding</span>
                    </div>
                  </>
                )}

                {activeTab === 'mobile' && (
                  <>
                    <div className="text-slate-400 dark:text-slate-500 italic">// Mobile App: Android & iOS tested on Emulator & Device</div>
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-[#0068FF] dark:text-blue-400 font-semibold">class</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">MobileAppScreen</span> extends StatelessWidget &#123;
                    </div>
                    <div className="pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500">// QA Prosedur: Pengujian APK anti-crash</span>
                      </div>
                      <div>
                        <span className="text-indigo-600 dark:text-indigo-400">@override</span>
                      </div>
                      <div>Widget build(BuildContext context) &#123;</div>
                      <div className="pl-4 text-slate-600 dark:text-slate-400">
                        return &lt;<span className="text-[#0068FF] dark:text-blue-400">SeamlessUserFlow</span> state="verified" /&gt;;
                      </div>
                      <div>&#125;</div>
                    </div>
                    <div>&#125;</div>
                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                      <span>Tarif: Rp75.000 / halaman</span>
                      <span className="text-[#0068FF] dark:text-blue-400 font-semibold">1.5x Web Development</span>
                    </div>
                  </>
                )}

                {activeTab === 'uiux' && (
                  <>
                    <div className="text-slate-400 dark:text-slate-500 italic">// Figma UI/UX: Wireframe, Interactive Prototype & Design System</div>
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-[#0068FF] dark:text-blue-400 font-semibold">designSystem</span> = &#123;
                    </div>
                    <div className="pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                      <div>palette: <span className="text-[#0068FF] dark:text-blue-400">"#0068FF (Pixellate Blue)"</span>,</div>
                      <div>typography: <span className="text-amber-600 dark:text-amber-400">"Montserrat & Righteous"</span>,</div>
                      <div>interactivePrototype: <span className="text-emerald-700 dark:text-emerald-400">true</span>,</div>
                      <div>components: <span className="text-indigo-600 dark:text-indigo-400">"Max 5 sections / page"</span></div>
                    </div>
                    <div>&#125;;</div>
                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                      <span>Tarif: Rp20.000 / halaman</span>
                      <span className="text-[#0068FF] dark:text-blue-400 font-semibold">Siap dieksekusi & interaktif</span>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Feature Micro-Strip */}
              <div className="p-3.5 bg-blue-50/70 dark:bg-slate-800/80 border-t border-blue-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0068FF] flex items-center justify-center text-white">
                    <PixellateMark size={18} color="#FFFFFF" />
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-tight">
                    <span className="block font-semibold text-slate-900 dark:text-white">Edukasi & Pendampingan</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Video dokumentasi 10-15m / Meet</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#0068FF] dark:text-blue-400">Sedia Sidang</span>
              </div>
            </div>

            {/* Floating Brand Badge */}
            <div
              ref={floatingPillRef}
              className="hidden sm:flex absolute -bottom-6 -left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-800 items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0068FF] flex items-center justify-center shadow-sm shrink-0">
                <PixellateMark size={24} color="#FFFFFF" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Matahari Terbit & Pixel Code</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Solusi & Harapan Baru Klien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
