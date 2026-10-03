import React, { useState, useEffect } from 'react';
import PixellateLogo from './PixellateLogo';
import { Menu, X, MessageSquare, ArrowUpRight, Sun, Moon, Bot } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useChat } from '../context/ChatContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const { openChat } = useChat();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Harga & Kalkulator', href: '#harga' },
    { label: 'Alur Kerja', href: '#alur-kerja' },
    { label: 'Form Order', href: '#order' },
    { label: 'Standar QA', href: '#qa' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0068FF] rounded-lg"
            aria-label="Pixellate Beranda"
          >
            <PixellateLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#0068FF] dark:hover:text-[#0068FF] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0068FF] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Dark Mode Toggle + Gemini AI Trigger */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-600 dark:text-amber-400 hover:text-[#0068FF] dark:hover:text-amber-300 hover:border-[#0068FF]/40 dark:hover:border-amber-400/40 transition-all duration-200 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0068FF]"
              aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
              title={isDark ? 'Mode Terang' : 'Mode Gelap'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* Gemini Chatbot Trigger Button */}
            <button
              onClick={openChat}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#0068FF] bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all shadow-2xs hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0068FF]"
              title="Tanya Pixellate AI (Gemini Chatbot)"
            >
              <Bot className="w-3.5 h-3.5 text-[#0068FF]" />
              <span>Tanya AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </button>

            <a
              href="https://wa.me/6289513622252?text=Halo%20Pixellate,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20IT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0068FF] hover:bg-[#0055D6] transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0068FF] focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Konsultasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile hamburger + Dark toggle button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-600 dark:text-amber-400 transition-colors"
              aria-label={isDark ? 'Mode Terang' : 'Mode Gelap'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-[#0068FF] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
              aria-label="Buka navigasi menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#0B0F19]/98 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-200 hover:text-[#0068FF] hover:bg-blue-50/60 dark:hover:bg-slate-800/60 font-medium py-2.5 px-3 rounded-lg transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openChat();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0068FF] bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 transition-colors"
              >
                <Bot className="w-4 h-4" />
                <span>Tanya Pixellate AI (Gemini Chatbot)</span>
              </button>

              <a
                href="https://wa.me/6289513622252?text=Halo%20Pixellate,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20IT"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#0068FF] hover:bg-[#0055D6] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi WhatsApp (089513622252)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
