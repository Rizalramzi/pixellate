import React from 'react';
import { Code2, Wallet, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

export const AboutAndAdvantages: React.FC = () => {
  const advantages = [
    {
      icon: Code2,
      title: 'Kualitas Kode yang Rapi (Clean Code)',
      description:
        'Kami berkomitmen memberikan hasil pengerjaan yang terstruktur, rapi, dan berfungsi dengan baik (minimal bug), bukan sekadar asal jadi. Kode dilengkapi komentar penjelasan agar mudah dipelajari.',
      badge: 'Bukan Asal Jadi',
    },
    {
      icon: Wallet,
      title: 'Harga yang Kompetitif & Transparan',
      description:
        'Skema tarif yang kami tawarkan sangat fleksibel dan disesuaikan dengan tingkat kesulitan proyek, sehingga tetap bersahabat untuk kantong mahasiswa tanpa biaya tersembunyi.',
      badge: 'Ramah Mahasiswa',
    },
    {
      icon: GraduationCap,
      title: 'Edukasi & Pendampingan Sidang',
      description:
        'Kami tidak menggunakan sistem "jual putus". Jika klien membutuhkan persiapan untuk sidang atau demo proyek, kami siap memberikan penjelasan alur dan logika kode hingga benar-benar paham.',
      badge: 'Bukan Jual Putus',
    },
  ];

  return (
    <section
      id="tentang"
      className="py-20 md:py-28 bg-[#FAFCFF] dark:bg-[#080B11] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Main About Statement */}
        <div className="gsap-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <span>Tentang Pixellate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Solusi Praktis Bantuan Proyek IT Tanpa Beban Stres.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Pixellate adalah penyedia layanan bantuan proyek (<em>project assistance</em>) di bidang IT
            yang dirancang khusus untuk menjadi solusi praktis bagi <strong className="text-slate-900 dark:text-white">mahasiswa, fresh graduates,
            maupun profesional muda</strong>. Kami fokus membantu penyelesaian berbagai proyek teknologi,
            mulai dari pengembangan website, aplikasi mobile, hingga tugas pemrograman lainnya yang sering kali menyita waktu dan tenaga.
          </p>
        </div>

        {/* 3 Pillars of Advantage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="gsap-item bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-[#0068FF] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-semibold text-[#0068FF] dark:text-blue-400 mb-2 tracking-wide uppercase">
                    {item.badge}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#0068FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400">
                  <CheckCircle className="w-4 h-4 text-[#0068FF] dark:text-blue-400" />
                  <span>Standar Resmi Pixellate</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Box */}
        <div className="gsap-item mt-12 bg-gradient-to-r from-blue-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-[#0E1526] dark:to-slate-900 rounded-2xl p-6 sm:p-8 border border-blue-100/90 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Punya deadline tugas atau skripsi yang semakin dekat?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Konsultasikan kendala kode atau rancangan aplikasimu bersama tim teknis Pixellate sekarang.
            </p>
          </div>
          <a
            href="https://wa.me/6289513622252?text=Halo%20Pixellate,%20saya%20ingin%20konsultasi%20bantuan%20proyek%20IT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[#0068FF] hover:bg-[#0055D6] text-xs transition-colors shrink-0 shadow-sm"
          >
            <span>Hubungi WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutAndAdvantages;
