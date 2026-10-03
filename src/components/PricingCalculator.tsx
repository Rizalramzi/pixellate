import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Info } from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  // Calculator state
  const [serviceType, setServiceType] = useState<'web' | 'mobile' | 'uiux' | 'custom'>('web');
  const [pageCount, setPageCount] = useState<number>(3);
  const [includeVideoExplanation, setIncludeVideoExplanation] = useState<boolean>(true);
  const [liveMeetSession, setLiveMeetSession] = useState<boolean>(false);

  // Price calculation
  const calculatePrice = () => {
    let basePerPage = 0;
    if (serviceType === 'uiux') basePerPage = 20000;
    if (serviceType === 'web') basePerPage = 50000; // Desain 20k + Koding 30k
    if (serviceType === 'mobile') basePerPage = 75000; // 1.5x web dev
    if (serviceType === 'custom') {
      return {
        total: Math.max(15000, 15000 * pageCount),
        dp: Math.round(Math.max(15000, 15000 * pageCount) * 0.5),
        pelunasan: Math.round(Math.max(15000, 15000 * pageCount) * 0.5),
        rateNote: 'Mulai dari Rp15.000 (disesuaikan tingkat kesulitan bug / fitur)',
      };
    }

    const total = basePerPage * pageCount;
    const dp = Math.round(total * 0.5);
    const pelunasan = total - dp;

    return {
      total,
      dp,
      pelunasan,
      rateNote: `Rp${basePerPage.toLocaleString('id-ID')} / halaman`,
    };
  };

  const pricing = calculatePrice();

  const handleWhatsAppWithEstimate = () => {
    const serviceName =
      serviceType === 'web'
        ? 'Web Development & Landing Page (Rp50.000/hal)'
        : serviceType === 'mobile'
        ? 'Mobile App Development (Rp75.000/hal)'
        : serviceType === 'uiux'
        ? 'UI/UX Design Figma (Rp20.000/hal)'
        : 'Kustom Projek (Mulai Rp15.000)';

    const text = `Halo Pixellate, saya ingin konsultasi proyek IT dengan estimasi berikut:
- Layanan: ${serviceName}
- Jumlah Halaman: ${pageCount} halaman (maks 5 section/halaman)
- Estimasi Total Biaya: Rp${pricing.total.toLocaleString('id-ID')}
- DP 50%: Rp${pricing.dp.toLocaleString('id-ID')}
- Metode Edukasi: ${liveMeetSession ? 'Sesi Live Google Meet' : 'Video Dokumentasi Loom/Drive'}
Mohon info ketersediaan slot pengerjaan. Terima kasih!`;

    window.open(`https://wa.me/6289513622252?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="harga"
      className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Skema Tarif Ramah Mahasiswa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Penentuan Harga & Kalkulator Estimasi
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Pixellate menggunakan sistem hitungan harga yang sangat transparan dan ramah kantong
            berdasarkan jumlah halaman (1 halaman didefinisikan maksimal memiliki 5 section visual).
          </p>
        </div>

        {/* Official PDF Price Table */}
        <div className="gsap-item mb-16 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Tabel Resmi Biaya Layanan Pixellate
            </h3>
            <span className="text-xs font-medium text-[#0068FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-900/50">
              Per Halaman (Maks. 5 Section)
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6">Kategori Jasa</th>
                  <th className="py-3.5 px-6">Detail & Ketentuan</th>
                  <th className="py-3.5 px-6 text-right">Harga Resmi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">UI/UX Design</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                    Desain visual, Wireframe, Prototype (bisa diklik), dan Design System (Figma).
                    <span className="block text-slate-400 dark:text-slate-500 text-xs mt-0.5">Maksimal 5 section per halaman</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#0068FF] dark:text-blue-400 font-mono whitespace-nowrap">
                    Rp20.000 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ halaman</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors bg-blue-50/20 dark:bg-blue-950/20">
                  <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                    Web Dev / Landing Page
                    <span className="ml-2 text-[10px] font-semibold text-[#0068FF] dark:text-blue-300 bg-blue-100/70 dark:bg-blue-900/50 px-1.5 py-0.5 rounded">
                      Rekomendasi
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                    Hitungan terpadu: Jasa Desain Rp20.000 + Jasa Koding Rp30.000.
                    <span className="block text-slate-400 dark:text-slate-500 text-xs mt-0.5">Kode bersih, responsif HP & laptop</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#0068FF] dark:text-blue-400 font-mono whitespace-nowrap">
                    Rp50.000 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ halaman</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">Mobile App</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                    Pengembangan aplikasi mobile (Android/iOS). Tarifikasinya 1.5x lebih mahal dari biaya web development.
                    <span className="block text-slate-400 dark:text-slate-500 text-xs mt-0.5">Pengujian APK anti-crash pada emulator & HP</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#0068FF] dark:text-blue-400 font-mono whitespace-nowrap">
                    Rp75.000 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ halaman</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">Kustom Projek</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                    Modifikasi projek yang sudah ada, perbaikan bug/error, atau pembuatan aplikasi cepat menggunakan template.
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#0068FF] dark:text-blue-400 font-mono whitespace-nowrap">
                    Mulai dari Rp15.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Pricing Estimator Tool */}
        <div className="gsap-item grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-[#FAFCFF] dark:bg-slate-900/60 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 dark:border-slate-800 shadow-sm">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  1. Pilih Jenis Layanan
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'web', label: 'Web Dev', desc: 'Rp50k/hal' },
                  { id: 'mobile', label: 'Mobile App', desc: 'Rp75k/hal' },
                  { id: 'uiux', label: 'UI/UX Figma', desc: 'Rp20k/hal' },
                  { id: 'custom', label: 'Custom/Bug', desc: 'Min Rp15k' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceType(s.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      serviceType === s.id
                        ? 'bg-white dark:bg-slate-800 border-[#0068FF] dark:border-[#0068FF] shadow-sm ring-2 ring-[#0068FF]/20 text-[#0068FF] dark:text-blue-400 font-bold'
                        : 'bg-white/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{s.label}</div>
                    <div className="text-[11px] opacity-75 font-mono">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Page Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  2. Jumlah Halaman / Komponen
                </span>
                <span className="text-sm font-extrabold text-[#0068FF] dark:text-blue-400 font-mono px-3 py-1 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-100 dark:border-blue-900/50">
                  {pageCount} {serviceType === 'custom' ? 'Fitur / Modul' : 'Halaman'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0068FF]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-1 font-mono">
                <span>1 Halaman</span>
                <span>5 Halaman</span>
                <span>10 Halaman</span>
                <span>20 Halaman</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#0068FF] dark:text-blue-400 shrink-0" />
                <span>Ketentuan: 1 halaman didefinisikan maksimal memiliki 5 section atau komponen visual utama.</span>
              </p>
            </div>

            {/* Handover Preference Options */}
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                3. Opsi Sesi Edukasi & Serah Terima
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/90 dark:border-slate-700 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeVideoExplanation}
                    onChange={(e) => setIncludeVideoExplanation(e.target.checked)}
                    className="w-4 h-4 text-[#0068FF] rounded border-slate-300 dark:border-slate-600 focus:ring-[#0068FF]"
                  />
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white block">Video Dokumentasi Kode (10–15 menit)</span>
                    <span className="text-slate-500 dark:text-slate-400">Penjelasan baris kode penting, setup environment, struktur folder (Termasuk Gratis)</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/90 dark:border-slate-700 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <input
                    type="checkbox"
                    checked={liveMeetSession}
                    onChange={(e) => setLiveMeetSession(e.target.checked)}
                    className="w-4 h-4 text-[#0068FF] rounded border-slate-300 dark:border-slate-600 focus:ring-[#0068FF]"
                  />
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white block">Sesi Live Google Meet (15 menit)</span>
                    <span className="text-slate-500 dark:text-slate-400">Diskusi langsung persiapan sidang atau review interaktif tanya jawab</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Estimasi Biaya
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Transparan 100%
                </span>
              </div>

              {/* Total Price */}
              <div className="mb-6">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Total Estimasi Pengerjaan:</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0068FF] dark:text-blue-400 font-mono tracking-tight">
                  Rp{pricing.total.toLocaleString('id-ID')}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{pricing.rateNote}</div>
              </div>

              {/* DP and Final Payment Breakdown */}
              <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">Uang Muka (DP 50%):</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">
                    Rp{pricing.dp.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">Pelunasan Akhir (50% setelah demo):</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">
                    Rp{pricing.pelunasan.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400">
                  *DP dibayar saat antrean dikunci. Pelunasan dilakukan setelah hasil demo dipastikan sesuai.
                </div>
              </div>

              {/* Benefits included */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0" />
                  <span>Garansi bug gratis 5 hari pasca serah terima</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0" />
                  <span>Maksimal 3 kali revisi minor tanpa biaya tambahan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0" />
                  <span>Garansi refund 100% jika meleset dari deadline</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleWhatsAppWithEstimate}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-[#0068FF] hover:bg-[#0055D6] transition-all shadow-md hover:shadow active:scale-[0.98] text-sm group"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi & Kunci Antrean via WA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
