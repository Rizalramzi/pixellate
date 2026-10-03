import React from 'react';
import { BookOpen, Briefcase, Store, Check, ArrowRight } from 'lucide-react';

export const TargetMarket: React.FC = () => {
  const targets = [
    {
      icon: BookOpen,
      segment: '1. Mahasiswa IT & Rumpun Teknik',
      subtitle: 'Tugas Praktikum, Tugas Kuliah, & Skripsi',
      description:
        'Mahasiswa yang kewalahan dengan tugas praktikum, projek perkuliahan, atau tugas akhir (skripsi) karena keterbatasan waktu, kendala logika pemrograman rumit, atau stuck berhari-hari saat proses debugging.',
      solutions: [
        'Bantuan debugging & perbaikan error',
        'Pembuatan sistem skripsi full-stack / mobile',
        'Dokumentasi alur & bimbingan demo sidang',
      ],
      tag: 'Paling Populer',
    },
    {
      icon: Briefcase,
      segment: '2. Fresh Graduates',
      subtitle: 'Portofolio Teknis Siap Kerja',
      description:
        'Lulusan baru yang membutuhkan bantuan atau validasi komprehensif dalam membangun portofolio projek teknis yang berkualitas dan terstruktur untuk meningkatkan daya saing saat melamar kerja di industri IT.',
      solutions: [
        'Review & standarisasi Clean Code portofolio',
        'Pembuatan landing page portfolio pribadi',
        'Penyusunan arsitektur project showcase',
      ],
      tag: 'Karier & Kerja',
    },
    {
      icon: Store,
      segment: '3. Profesional Muda & UMKM',
      subtitle: 'Solusi Digital Efisien & Hemat Biaya',
      description:
        'Pemilik bisnis skala kecil, pelaku UMKM, atau pekerja kantoran non-teknis yang memerlukan solusi IT instan (seperti landing page produk atau otomasi sederhana) tanpa harus mengeluarkan modal agensi besar.',
      solutions: [
        'Landing page promosi cepat & responsif',
        'Otomasi data & integrasi formulir bisnis',
        'Biaya ramah kantong & pengerjaan kilat',
      ],
      tag: 'Bisnis & UMKM',
    },
  ];

  return (
    <section
      id="target-pasar"
      className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <span>Siapa yang Kami Bantu?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Target Pasar & Solusi Spesifik
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Pixellate hadir menjawab pain point spesifik dari mereka yang membutuhkan bantuan teknis
            berkualitas tinggi dengan pendampingan langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {targets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="gsap-item rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-[#0068FF]/50 dark:hover:border-[#0068FF]/50 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center group-hover:bg-[#0068FF] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0068FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-900/50">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.segment}
                  </h3>
                  <div className="text-xs font-medium text-[#0068FF] dark:text-blue-400 mb-4">
                    {item.subtitle}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      Solusi Pixellate:
                    </div>
                    {item.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#0068FF] dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="#order"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0068FF] dark:text-blue-400 hover:text-[#0055D6] dark:hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Mulai Konsultasi Segmen Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
