import React from 'react';
import PixellateLogo from './PixellateLogo';
import { Instagram, MessageSquare, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#05070B] text-slate-400 py-16 border-t border-slate-800 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14 pb-12 border-b border-slate-800 dark:border-slate-800/80">
          {/* Col 1: Brand Wordmark & Mission */}
          <div className="md:col-span-5 space-y-4">
            <PixellateLogo variant="white" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Penyedia layanan bantuan proyek (<em>project assistance</em>) di bidang IT untuk
              mahasiswa, fresh graduates, dan profesional muda. Code done, Stress gone.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/pixellate.job"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#0068FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Pixellate"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6289513622252"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#0068FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Pixellate"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Menu Navigasi
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang Pixellate
                </a>
              </li>
              <li>
                <a href="#filosofi" className="hover:text-white transition-colors">
                  Filosofi Logo & Brand
                </a>
              </li>
              <li>
                <a href="#target-pasar" className="hover:text-white transition-colors">
                  Target Pasar
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Daftar Layanan Teknis
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition-colors">
                  Daftar Harga & Kalkulator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operational Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Standar Operasional
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#alur-kerja" className="hover:text-white transition-colors">
                  7 Tahapan Kerja
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-white transition-colors">
                  Formulir Briefing
                </a>
              </li>
              <li>
                <a href="#qa" className="hover:text-white transition-colors">
                  Standar QA & Clean Code
                </a>
              </li>
              <li>
                <a href="#qa" className="hover:text-white transition-colors">
                  Garansi & Refund
                </a>
              </li>
              <li>
                <a href="#pembayaran" className="hover:text-white transition-colors">
                  Saluran Pembayaran
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contacts from PDF */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Kontak Resmi
            </span>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div>
                <span className="block text-[11px] text-slate-500 font-medium">WhatsApp:</span>
                <a
                  href="https://wa.me/6289513622252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white hover:text-[#0068FF] transition-colors"
                >
                  089513622252
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 font-medium">Instagram:</span>
                <a
                  href="https://instagram.com/pixellate.job"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0068FF] transition-colors"
                >
                  @pixellate.job
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 font-medium">Status:</span>
                <span className="text-slate-300">Studio IT Independen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Pixellate. All Rights Reserved. Pre-Launch Strategy.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2 rounded focus:outline-none"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
