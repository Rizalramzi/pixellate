import React, { useState } from 'react';
import { Sun, Palette, Type, Sparkles } from 'lucide-react';
import { PixellateMark } from './PixellateLogo';

export const LogoPhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'symbol' | 'color' | 'typography'>('symbol');

  return (
    <section
      id="filosofi"
      className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="gsap-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Identitas & Nilai Brand</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Filosofi di Balik <span className="text-[#0068FF]">Pixellate</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Logo Pixellate bukan sekadar identitas visual, melainkan representasi dari visi, karakter,
            dan komitmen layanan kami dalam dunia IT. Setiap elemen di dalamnya memiliki makna mendalam.
          </p>
        </div>

        {/* Interactive Showcase & Explanations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: Visual Interactive Canvas */}
          <div className="gsap-item lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0A1A3A] dark:from-[#06080F] dark:via-[#080E1C] dark:to-[#0D1B36] rounded-3xl p-8 sm:p-10 text-white relative shadow-xl border border-slate-800 overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
            {/* Ambient Background Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0068FF]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Visual presentation based on active tab */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className={`p-6 rounded-2xl transition-all duration-500 mb-6 flex items-center justify-center ${
                  activeTab === 'color'
                    ? 'bg-[#0068FF] shadow-2xl shadow-[#0068FF]/50 scale-105'
                    : 'bg-slate-800/80 dark:bg-slate-800/50 border border-slate-700/60'
                }`}
              >
                <PixellateMark
                  size={activeTab === 'symbol' ? 100 : 80}
                  color={activeTab === 'color' ? '#FFFFFF' : '#0068FF'}
                  className={activeTab === 'symbol' ? 'animate-pulse' : ''}
                />
              </div>

              {/* Dynamic brand wordmark preview */}
              <div className="space-y-1">
                <span
                  className={`block text-3xl sm:text-4xl font-['Righteous'] tracking-tight transition-all duration-300 ${
                    activeTab === 'typography' ? 'text-[#0068FF] scale-110 drop-shadow-md' : 'text-white'
                  }`}
                >
                  Pixellate
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                  {activeTab === 'symbol' && '7 Code Blocks · Matahari Terbit'}
                  {activeTab === 'color' && 'Primary Color · #0068FF'}
                  {activeTab === 'typography' && 'Righteous Rounded + Montserrat'}
                </span>
              </div>

              {/* Color Code Chip */}
              {activeTab === 'color' && (
                <div className="mt-4 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-mono text-blue-300">
                  HEX: #0068FF · RGB(0, 104, 255)
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 3 Structured Cards matching PDF */}
          <div className="lg:col-span-7 space-y-4">
            {/* Card 1: Simbol Grafis */}
            <div
              onClick={() => setActiveTab('symbol')}
              className={`gsap-item cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === 'symbol'
                  ? 'bg-blue-50/60 dark:bg-blue-950/40 border-[#0068FF] dark:border-[#0068FF] shadow-md ring-1 ring-[#0068FF]/30'
                  : 'bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/60 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === 'symbol'
                      ? 'bg-[#0068FF] text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      1. Simbol Grafis (Matahari & Pixel)
                    </h3>
                    {activeTab === 'symbol' && (
                      <span className="text-[11px] font-semibold text-[#0068FF] dark:text-blue-300 bg-blue-100/70 dark:bg-blue-900/50 px-2 py-0.5 rounded-full">
                        Aktif
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Bentuk pancaran geometris menyerupai <strong className="text-slate-900 dark:text-white">matahari terbit</strong> melambangkan
                    solusi dan harapan baru bagi klien. Struktur balok terpisah di dalamnya merepresentasikan
                    <strong className="text-slate-900 dark:text-white"> "pixel" atau potongan kode (code blocks)</strong> yang menyatu secara logis menjadi
                    satu sistem utuh. Pola gerakan menyebar menegaskan arah dinamis, kreativitas, dan fleksibilitas tim Pixellate.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Filosofi Warna */}
            <div
              onClick={() => setActiveTab('color')}
              className={`gsap-item cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === 'color'
                  ? 'bg-blue-50/60 dark:bg-blue-950/40 border-[#0068FF] dark:border-[#0068FF] shadow-md ring-1 ring-[#0068FF]/30'
                  : 'bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/60 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === 'color'
                      ? 'bg-[#0068FF] text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      2. Filosofi Warna (#0068FF)
                    </h3>
                    {activeTab === 'color' && (
                      <span className="text-[11px] font-semibold text-[#0068FF] dark:text-blue-300 bg-blue-100/70 dark:bg-blue-900/50 px-2 py-0.5 rounded-full">
                        Aktif
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Warna dominan biru melambangkan <strong className="text-slate-900 dark:text-white">teknologi, profesionalisme, kepercayaan (trust),
                    dan ketenangan</strong>. Warna biru terang (#0068FF) ini memancarkan energi digital yang kuat
                    sekaligus memberikan efek psikologis menenangkan bagi klien yang sedang panik dikejar deadline.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Tipografi */}
            <div
              onClick={() => setActiveTab('typography')}
              className={`gsap-item cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === 'typography'
                  ? 'bg-blue-50/60 dark:bg-blue-950/40 border-[#0068FF] dark:border-[#0068FF] shadow-md ring-1 ring-[#0068FF]/30'
                  : 'bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/60 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === 'typography'
                      ? 'bg-[#0068FF] text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Type className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      3. Tipografi (Righteous & Montserrat)
                    </h3>
                    {activeTab === 'typography' && (
                      <span className="text-[11px] font-semibold text-[#0068FF] dark:text-blue-300 bg-blue-100/70 dark:bg-blue-900/50 px-2 py-0.5 rounded-full">
                        Aktif
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Font yang digunakan pada kata "Pixellate" memiliki sudut-sudut yang melengkung lembut
                    (rounded). Memberikan kesan bersahabat <strong className="text-slate-900 dark:text-white">(friendly)</strong>, santai, mudah didekati,
                    dan tidak kaku agar klien merasa nyaman dan bebas stres saat bekerja sama dengan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoPhilosophy;
