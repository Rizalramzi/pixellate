import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles, FileText, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrderFormGenerator: React.FC = () => {
  // Form states matching PDF Page 8
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [kontak, setKontak] = useState('');
  const [layanan, setLayanan] = useState('Web Development');
  const [techStack, setTechStack] = useState('');
  const [fiturUtama, setFiturUtama] = useState('');
  const [jumlahHalaman, setJumlahHalaman] = useState('1 Halaman (maks 5 section)');
  const [asetPendukung, setAsetPendukung] = useState('');
  const [copied, setCopied] = useState(false);

  // Quick fill example from PDF page 8
  const handleFillExample = () => {
    setNama('Ramzi');
    setInstansi('Universitas Airlangga');
    setKontak('089513622252');
    setLayanan('Web Development / Landing Page');
    setTechStack('Nuxt.js / Vue & Tailwind CSS');
    setFiturUtama('Landing Page profil produk & CRUD MVP dashboard');
    setJumlahHalaman('1 Halaman (5 section utama)');
    setAsetPendukung('https://docs.google.com/BriefTaskLandingPage');
  };

  const generateOrderText = () => {
    return `*FORMULIR ORDER PROYEK PIXELLATE*
====================================
*1. IDENTITAS KLIEN*
- Nama: ${nama || '-'}
- Asal Kampus / Instansi: ${instansi || '-'}
- Nomor Kontak / WA: ${kontak || '-'}

*2. SPESIFIKASI PROJEK*
- Kategori Layanan: ${layanan}
- Bahasa / Framework Wajib: ${techStack || 'Bebas / Rekomendasi Pixellate'}
- Daftar Fitur Utama: ${fiturUtama || '-'}

*3. KETENTUAN HALAMAN*
- Jumlah Halaman: ${jumlahHalaman}
  _(Catatan: 1 halaman maks 5 section/komponen visual)_

*4. ASET PENDUKUNG*
- Link Dokumen / Panduan: ${asetPendukung || 'Menyusul saat diskusi'}
====================================
Halo Pixellate, mohon info estimasi biaya dan waktu pengerjaannya. Terima kasih!`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateOrderText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0068FF', '#3B82F6', '#60A5FA', '#93C5FD'],
    });

    const encoded = encodeURIComponent(generateOrderText());
    window.open(`https://wa.me/6289513622252?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="order"
      className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Format Resmi Pemesanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Formulir Briefing Proyek
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Supaya tidak ada perdebatan di tengah jalan mengenai cakupan kerja (<em>scope creep</em>),
            setiap klien mengisi formulir terstruktur di bawah ini untuk kalkulasi estimasi awal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <div className="gsap-item lg:col-span-7 bg-[#FAFCFF] dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 dark:border-slate-800 mb-6">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Isi Detail Kebutuhan Anda
              </span>
              <button
                type="button"
                onClick={handleFillExample}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0068FF] dark:text-blue-400 hover:text-[#0055D6] dark:hover:text-blue-300 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gunakan Contoh PDF</span>
              </button>
            </div>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
              {/* Section 1: Identitas */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  1. Identitas Klien
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Kampus / Instansi"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="No. WhatsApp Aktif"
                    value={kontak}
                    onChange={(e) => setKontak(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                  />
                </div>
              </div>

              {/* Section 2: Spesifikasi */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  2. Spesifikasi Projek
                </label>
                <div className="space-y-3">
                  <select
                    value={layanan}
                    onChange={(e) => setLayanan(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-900 dark:text-white focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                  >
                    <option value="Web Development & Landing Page (Rp50.000/hal)">
                      Web Development & Landing Page (Rp50.000 / halaman)
                    </option>
                    <option value="Mobile App Development (Rp75.000/hal)">
                      Mobile App Development (Rp75.000 / halaman)
                    </option>
                    <option value="UI/UX Design Figma (Rp20.000/hal)">
                      UI/UX Design Figma (Rp20.000 / halaman)
                    </option>
                    <option value="Custom IT Project / Bug Fixing (Mulai Rp15.000)">
                      Custom IT Project / Bug Fixing (Mulai Rp15.000)
                    </option>
                  </select>

                  <input
                    type="text"
                    placeholder="Bahasa / Framework yang diwajibkan (misal: Nuxt.js, React, Flutter, Laravel)"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                  />

                  <textarea
                    rows={3}
                    placeholder="Daftar fitur utama atau modul yang ingin dibuat (misal: Auth login, CRUD data mahasiswa, export PDF, filter)"
                    value={fiturUtama}
                    onChange={(e) => setFiturUtama(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                  />
                </div>
              </div>

              {/* Section 3: Ketentuan Halaman */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    3. Ketentuan Halaman
                  </label>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    1 hal = maks 5 section visual
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Jumlah halaman (misal: 1 Halaman / 3 Halaman / 5 Halaman)"
                  value={jumlahHalaman}
                  onChange={(e) => setJumlahHalaman(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                />
              </div>

              {/* Section 4: Aset Pendukung */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  4. Aset Pendukung
                </label>
                <input
                  type="text"
                  placeholder="Link Google Drive panduan tugas, link referensi, skema database, atau brief Figma"
                  value={asetPendukung}
                  onChange={(e) => setAsetPendukung(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#0068FF] focus:outline-none focus:ring-2 focus:ring-[#0068FF]/20"
                />
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-[#0068FF] hover:bg-[#0055D6] transition-all shadow-md active:scale-[0.98] text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Format Order ke WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors text-xs sm:text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      <span>Salin Teks</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Live WhatsApp Message Preview */}
          <div className="gsap-item lg:col-span-5 bg-slate-900 dark:bg-slate-950 rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">
                    wa.me/6289513622252
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-400">Live Preview</span>
              </div>

              {/* WhatsApp chat bubble simulation */}
              <div className="bg-slate-800/90 dark:bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-slate-700/80 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto">
                {generateOrderText()}
              </div>

              <div className="mt-4 p-3 bg-slate-800/50 dark:bg-slate-900/50 rounded-xl border border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-400">
                <AlertCircle className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Setelah mengirim format order via WhatsApp, tim Pixellate akan langsung merespons
                  dengan kalkulasi estimasi total dan ketersediaan slot tanggal selesai.
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>Customer Care:</span>
              <span className="font-bold text-white">089513622252</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderFormGenerator;
