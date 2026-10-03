import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Kontak Cepat WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/6289513622252?text=Halo%20Pixellate,%20saya%20ingin%20tanya%20mengenai%20bantuan%20proyek%20IT"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0068FF] text-white shadow-xl hover:bg-[#0055D6] hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0068FF]"
        aria-label="Chat WhatsApp Pixellate di 089513622252"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0068FF]" />
        </div>
        <span className="text-xs font-semibold hidden sm:inline-block pr-1">
          Konsultasi (089513622252)
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppFloatingButton;
