import React from 'react';
import { Globe, Smartphone, Figma, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export const ServicesList: React.FC = () => {
  const services = [
    {
      number: '01',
      icon: Globe,
      title: 'Web Development & Landing Page',
      tagline: 'Responsif, Cepat & Siap Publikasi',
      description:
        'Pembuatan website responsif, portfolio digital, company profile, atau halaman promosi (landing page) menggunakan teknologi web modern (React, Next.js, Vue, Tailwind CSS, PHP, Laravel).',
      deliverables: [
        'Desain responsif (Mobile, Tablet, Desktop)',
        'Struktur Clean Code & modular',
        'Integrasi API / database CRUD',
        'Testing cross-browser & performance check',
      ],
      priceHint: 'Rp50.000 / halaman',
      popular: true,
    },
    {
      number: '02',
      icon: Smartphone,
      title: 'Mobile App Development',
      tagline: 'Android & iOS Skala Ringan-Menengah',
      description:
        'Pengembangan aplikasi berbasis Android dan iOS untuk skala proyek ringan hingga menengah menggunakan Flutter, React Native, maupu Native Android (Kotlin). Siap uji di emulator & perangkat riil.',
      deliverables: [
        'File APK / build siap install',
        'Navigasi & alur pengguna intuitif',
        'Integrasi storage lokal & remote API',
        'Pengujian anti-crash sebelum serah terima',
      ],
      priceHint: 'Rp75.000 / halaman',
      popular: false,
    },
    {
      number: '03',
      icon: Figma,
      title: 'UI/UX Design (Figma)',
      tagline: 'Wireframe, Prototype & Design System',
      description:
        'Pembuatan desain antarmuka aplikasi atau website yang modern, estetis, rapi, dan mudah digunakan menggunakan Figma. Sudah mencakup wireframing, prototipe klik interaktif, dan panduan desain sistem.',
      deliverables: [
        'Desain visual rapi & berpedoman 8pt grid',
        'Prototipe interaktif (bisa diklik)',
        'Maksimal 5 section per halaman desain',
        'Link file Figma editable & aset lengkap',
      ],
      priceHint: 'Rp20.000 / halaman',
      popular: false,
    },
    {
      number: '04',
      icon: Wrench,
      title: 'Custom IT Project',
      tagline: 'Bug Fix, Modifikasi Fitur & Tugas Kuliah',
      description:
        'Layanan fleksibel untuk pengerjaan tugas pemrograman harian praktikum, perbaikan bug/error yang bikin pusing, modifikasi fitur yang sudah ada, atau pengerjaan komponen spesifik.',
      deliverables: [
        'Perbaikan script & query database',
        'Modifikasi logic algoritma & fungsi',
        'Penyelesaian tugas harian praktikum IT',
        'Penjelasan baris kode yang diperbaiki',
      ],
      priceHint: 'Mulai dari Rp15.000',
      popular: false,
    },
  ];

  return (
    <section
      id="layanan"
      className="py-20 md:py-28 bg-[#FAFCFF] dark:bg-[#080B11] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <span>Katalog Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Daftar Layanan Teknis Pixellate
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Pixellate menyediakan beberapa kategori layanan utama yang disesuaikan dengan kebutuhan teknis
            klien, didukung alur pengerjaan berstandar industri dan harga bersahabat.
          </p>
        </div>

        {/* 2x2 Grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`gsap-item relative rounded-2xl bg-white dark:bg-slate-900 border p-8 flex flex-col justify-between transition-all hover:shadow-lg group ${
                  item.popular
                    ? 'border-[#0068FF]/60 dark:border-[#0068FF]/70 shadow-sm ring-1 ring-[#0068FF]/20'
                    : 'border-slate-200/90 dark:border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center group-hover:bg-[#0068FF] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                          Layanan {item.number}
                        </span>
                        <div className="text-xs font-semibold text-[#0068FF] dark:text-blue-400">
                          {item.tagline}
                        </div>
                      </div>
                    </div>
                    {item.popular && (
                      <span className="text-[11px] font-semibold text-[#0068FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-900/50">
                        Populer
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#0068FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                      Termasuk dalam paket:
                    </div>
                    {item.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0068FF] dark:text-blue-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 block font-medium">Estimasi Biaya:</span>
                    <span className="text-base font-extrabold text-[#0068FF] dark:text-blue-400 font-mono">
                      {item.priceHint}
                    </span>
                  </div>
                  <a
                    href="#harga"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-[#0068FF] dark:hover:text-blue-300 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <span>Kalkulator</span>
                    <ArrowRight className="w-3 h-3" />
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

export default ServicesList;
