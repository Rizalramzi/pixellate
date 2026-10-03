import React from 'react';
import { Video, Users, CheckCircle2, PlayCircle, FolderTree, Database, Terminal } from 'lucide-react';

export const HandoverEducation: React.FC = () => {
  return (
    <section
      id="edukasi"
      className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <span>Keunggulan Utama Dibanding Kompetitor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Sesi Serah Terima & Edukasi Logika Kode
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Sesi Serah Terima adalah keunggulan utama Pixellate dibanding kompetitor joki biasa.
            Kami memastikan Anda benar-benar paham kode yang dibuat agar percaya diri di hadapan dosen penguji.
          </p>
        </div>

        {/* 2 Handover Delivery Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {/* Method 1: Video Dokumentasi */}
          <div className="gsap-item rounded-3xl p-8 bg-[#FAFCFF] dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#0068FF]/50 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#0068FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/50">
                  Opsi Paling Fleksibel
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                1. Video Dokumentasi (Loom / Google Drive)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Rekaman layar berdurasi <strong className="text-slate-900 dark:text-white">10–15 menit</strong> yang mengulas baris kode penting,
                arsitektur, dan cara running proyek. Klien dapat memutar ulang video kapan saja sebelum sidang dimulai.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0" />
                  <span>Bisa di-replay berulang kali tanpa batas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0068FF] dark:text-blue-400 shrink-0" />
                  <span>Tersedia link streaming & download file video MP4</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Gratis pada seluruh paket pengerjaan.
            </div>
          </div>

          {/* Method 2: Sesi Live Meeting */}
          <div className="gsap-item rounded-3xl p-8 bg-[#FAFCFF] dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#0068FF]/50 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/50">
                  Tanya Jawab Langsung
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                2. Sesi Live Meeting (Google Meet)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Sesi tatap muka virtual melalui Google Meet berdurasi <strong className="text-slate-900 dark:text-white">maksimal 15 menit</strong>.
                Cocok untuk proyek skala besar atau persiapan simulasi tanya-jawab sidang teknis.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Diskusi interaktif dua arah bersama developer pembuat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Bantu setup environment langsung di laptop klien</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Opsional untuk Paket Premium / Skala Besar.
            </div>
          </div>
        </div>

        {/* 3 Core Curriculum / Materi yang Dijelaskan */}
        <div className="gsap-item bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 dark:from-slate-900 dark:via-[#0F1626] dark:to-slate-900 rounded-3xl p-8 sm:p-10 border border-blue-100 dark:border-slate-800 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider block mb-2">
              Kurikulum Edukasi
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              3 Materi Inti yang Wajib Kami Jelaskan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                a. Setup Environment Lokal
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Panduan langkah demi langkah cara meng-install dependency, konfigurasi file <code className="dark:text-blue-300">.env</code>,
                migrasi database, dan menjalankan server localhost di perangkat laptop Anda.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-4">
                <FolderTree className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                b. Struktur Folder & File Utama
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Membedah fungsi tiap komponen, model database, controller, route, dan styling.
                Sehingga ketika dosen menunjuk file tertentu, Anda langsung tahu fungsinya.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                c. Alur Jalannya Data (Data Flow)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Penjelasan alur bagaimana data dari form input pengguna diproses oleh backend,
                disimpan ke database relasional/NoSQL, dan ditampilkan kembali ke antarmuka aplikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandoverEducation;
