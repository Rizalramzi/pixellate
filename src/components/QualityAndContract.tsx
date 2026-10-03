import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
  Bug,
  Layout,
  Terminal,
  Trello,
} from 'lucide-react';

export const QualityAndContract: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qa' | 'contract'>('qa');

  return (
    <section
      id="qa"
      className="py-20 md:py-28 bg-[#FAFCFF] dark:bg-[#080B11] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kualitas & Regulasi Tertulis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Standar QA Teknis & Regulasi Kontrak
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Agar pengerjaan tepat waktu, kode bebas bug, dan kedua belah pihak terlindungi dengan aman,
            Pixellate menetapkan standar operasional baku dan transparan.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="gsap-item flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-2xl">
            <button
              onClick={() => setActiveTab('qa')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'qa'
                  ? 'bg-white dark:bg-slate-700 text-[#0068FF] dark:text-blue-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              1. Standar QA & Clean Code
            </button>
            <button
              onClick={() => setActiveTab('contract')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'contract'
                  ? 'bg-white dark:bg-slate-700 text-[#0068FF] dark:text-blue-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              2. Regulasi Kontrak, Garansi & Refund
            </button>
          </div>
        </div>

        {/* Content: QA & Clean Code Standard */}
        {activeTab === 'qa' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* QA Pillar 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-5">
                  <Trello className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Manajemen Antrean Proyek
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  Menggunakan sistem manajemen sprint internal (seperti Notion atau Trello) untuk melacak
                  status progres pengerjaan:
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    <span>To Do (Antrean Terkunci)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>In Progress (Eksekusi Koding)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>QA & Bug Checking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Done (Siap Demo)</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                Prioritas disusun berdasarkan kedekatan tanggal deadline.
              </div>
            </div>

            {/* QA Pillar 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-5">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Standar Clean Code
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  Kualitas penulisan kode berstandar tinggi yang ramah bagi mahasiswa untuk dipelajari:
                </p>
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900 dark:text-white">Wajib Menuliskan Komentar:</strong> Komentar singkat di setiap fungsi kode krusial
                      sehingga klien mudah menjawab pertanyaan penguji saat sidang.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900 dark:text-white">Penamaan Intuitif:</strong> Konsisten menggunakan standar CamelCase atau snake_case yang rapi dan teratur.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                Memudahkan perbaikan dan pemahaman logika teknis.
              </div>
            </div>

            {/* QA Pillar 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-5">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Prosedur Testing Sebelum Demo
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  Setiap jenis proyek diuji secara ketat sebelum ditunjukkan kepada klien:
                </p>
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#0068FF] dark:text-blue-400 shrink-0">UI/UX:</span>
                    <span>Memastikan seluruh tombol prototipe terhubung sesuai alur pengguna (user flow).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#0068FF] dark:text-blue-400 shrink-0">Web Dev:</span>
                    <span>Pengecekan responsivitas layout di layar laptop, tablet, dan smartphone.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#0068FF] dark:text-blue-400 shrink-0">Mobile Dev:</span>
                    <span>Pengujian file APK pada emulator dan perangkat riil agar aplikasi anti-crash.</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                Hasil demo terjamin minim kendala saat disajikan.
              </div>
            </div>
          </div>
        )}

        {/* Content: Regulasi Kontrak, Garansi & Refund */}
        {activeTab === 'contract' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Ketentuan Revisi */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-5">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Ketentuan Revisi
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  Kebijakan revisi yang adil untuk melindungi waktu dan kepuasan kedua belah pihak:
                </p>
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 bg-blue-50/60 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-900/50">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Maksimal 3x Revisi Minor (Gratis)
                    </span>
                    <span>
                      Termasuk ganti warna, penyesuaian teks, pergeseran tata letak, atau perbaikan bug kecil.
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Revisi Mayor (Biaya Tambahan)
                    </span>
                    <span>
                      Menambah halaman baru di luar kesepakatan awal atau merombak total arsitektur database dikenakan tarif normal per halaman.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Masa Garansi Bug */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                  <Bug className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Masa Garansi Bug Gratis (5 Hari)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  Pixellate memberikan perlindungan penuh setelah berkas diserahkan:
                </p>
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-800/60">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                      Garansi 5 Hari Penuh
                    </span>
                    <span>
                      Terhitung sejak berkas projek diserahterimakan. Jika ada bug yang terlewat, tim kami perbaiki tanpa tambahan biaya.
                    </span>
                  </div>
                  <div className="p-3 bg-amber-50/60 dark:bg-amber-950/40 rounded-xl border border-amber-100 dark:border-amber-800/60 text-amber-900 dark:text-amber-300">
                    <span className="font-bold block mb-1">Catatan Kebijakan:</span>
                    <span>
                      Garansi hangus jika source code terbukti telah dimodifikasi sendiri oleh klien atau pihak ketiga.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Kebijakan Refund */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Kebijakan Pembatalan (Refund)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  Perlindungan garansi risiko seimbang bagi klien dan tim Pixellate:
                </p>
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Pembatalan Sepihak oleh Klien
                    </span>
                    <span>
                      Jika klien membatalkan saat proyek sudah mulai dikerjakan, uang DP 50% dinyatakan hangus sebagai biaya ganti rugi pengerjaan.
                    </span>
                  </div>
                  <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/50 rounded-xl border border-emerald-100 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-300">
                    <span className="font-bold block mb-1">
                      Garansi Gagal Deadline (100% Refund):
                    </span>
                    <span>
                      Jika Pixellate gagal mengirimkan demo proyek tepat pada waktu deadline yang disepakati tanpa alasan mendesak, <strong className="text-emerald-900 dark:text-emerald-200">uang DP akan dikembalikan 100%</strong> kepada klien.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QualityAndContract;
