import React from 'react';
import { MessageSquare, ArrowRight, Quote } from 'lucide-react';
import { PixellateMark } from './PixellateLogo';

export const TestimonialQuote: React.FC = () => {
  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
        {/* Quote Container */}
        <div className="gsap-header relative bg-gradient-to-b from-[#FAFCFF] to-blue-50/40 dark:from-slate-900 dark:to-slate-900/80 rounded-3xl p-8 sm:p-14 border border-blue-100 dark:border-slate-800 shadow-sm mb-14">
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700 flex items-center justify-center mx-auto mb-6 text-[#0068FF] dark:text-blue-400">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight leading-relaxed mb-6 font-['Montserrat']">
            "Great things in business are never done by one person. They're done by a team of people."
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
            <cite className="not-italic text-sm font-bold text-slate-900 dark:text-white tracking-wider uppercase">
              Steve Jobs
            </cite>
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
          </div>
        </div>

        {/* Final Conversion Callout Card */}
        <div className="gsap-item bg-gradient-to-br from-slate-900 via-slate-950 to-[#0A1A3A] dark:from-[#06080F] dark:via-[#091021] dark:to-[#0C1A38] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0068FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center p-2 rounded-xl bg-white/10 dark:bg-white/5 mb-2">
              <PixellateMark size={32} color="#FFFFFF" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Siap Selesaikan Proyek IT Anda Tanpa Stres?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Konsultasikan deadline dan rancangan tugas Anda secara gratis bersama tim developer Pixellate.
              Kami siap dampingi sampai tuntas hingga siap demo & sidang!
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6289513622252?text=Halo%20Pixellate,%20saya%20ingin%20konsultasi%20bantuan%20proyek%20IT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md active:scale-[0.98] text-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#0068FF]" />
                <span>Konsultasi WhatsApp (089513622252)</span>
              </a>

              <a
                href="#order"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-sm"
              >
                <span>Isi Format Order</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
