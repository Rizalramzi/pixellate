import React, { useState } from 'react';
import {
  FileText,
  Calculator,
  CreditCard,
  Code,
  Eye,
  CheckCircle,
  FolderGit2,
  ChevronRight,
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Briefing',
      subtitle: 'Formulir Order Detail Proyek',
      icon: FileText,
      description:
        'Klien menghubungi Pixellate via WhatsApp atau Instagram dan mengisi formulir order terstruktur (identitas, spesifikasi teknis, jumlah halaman, dan dokumen referensi tugas).',
      detail: 'Mencegah perbedaan pemahaman lingkup kerja di kemudian hari.',
    },
    {
      num: '02',
      title: 'Estimasi',
      subtitle: 'Perhitungan Biaya & Deadline',
      icon: Calculator,
      description:
        'Tim teknis Pixellate meninjau spesifikasi dan menghitung total biaya transparan berdasarkan jumlah halaman/fitur serta menentukan kepastian deadline serah terima.',
      detail: 'Perhitungan transparan tanpa biaya siluman di tengah jalan.',
    },
    {
      num: '03',
      title: 'DP 50%',
      subtitle: 'Validasi & Kunci Antrean',
      icon: CreditCard,
      description:
        'Klien melakukan pembayaran uang muka (DP 50%) melalui Bank Jago, Bank BRI, atau QRIS untuk validasi komitmen dan mengunci slot antrean pengerjaan tim teknis.',
      detail: 'Proyek langsung dimasukkan ke sprint board (Trello/Notion).',
    },
    {
      num: '04',
      title: 'Pengerjaan & QA',
      subtitle: 'Clean Code & Internal Testing',
      icon: Code,
      description:
        'Eksekusi pengerjaan oleh tim designer/developer dengan standar Clean Code dan penulisan komentar rapi, dilanjutkan tahap QA internal (bebas error dan responsif lintas perangkat).',
      detail: 'Uji responsivitas laptop/HP atau test APK emulator.',
    },
    {
      num: '05',
      title: 'Demo Hasil',
      subtitle: 'Review Video / Hosting / Figma',
      icon: Eye,
      description:
        'Klien meninjau hasil proyek secara transparan melalui video demo rekaman layar, link prototipe interaktif Figma, atau demo live di hosting sementara.',
      detail: 'Klien dapat memeriksa seluruh alur sesuai brief awal.',
    },
    {
      num: '06',
      title: 'Pelunasan',
      subtitle: 'Sisa 50% Setelah Validasi Sesuai',
      icon: CheckCircle,
      description:
        'Klien melakukan pelunasan sisa pembayaran 50% hanya setelah memastikan hasil pekerjaan sudah sesuai ekspektasi dan tidak ada kendala fungsi krusial.',
      detail: 'Aman dan adil untuk kedua belah pihak.',
    },
    {
      num: '07',
      title: 'Serah Terima',
      subtitle: 'Source Code & Sesi Logika Sidang',
      icon: FolderGit2,
      description:
        'Pengiriman seluruh berkas asli (source code repositori / aset desain Figma lengkap) disertai sesi penjelasan logika kode (video dokumentasi atau Google Meet).',
      detail: 'Siap hadapi demo dosen, sidang skripsi, atau launching!',
    },
  ];

  return (
    <section
      id="alur-kerja"
      className="py-20 md:py-28 bg-[#FAFCFF] dark:bg-[#080B11] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <span>Teknis Operasional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            7 Tahapan Kerja Terstruktur Pixellate
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Untuk menjaga profesionalisme, ketepatan deadline, dan kepuasan klien, kami menerapkan
            SOP alur pengerjaan yang transparan dari awal hingga tuntas.
          </p>
        </div>

        {/* Step Navigation Pill Bar */}
        <div className="gsap-item flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 border ${
                activeStep === idx
                  ? 'bg-[#0068FF] text-white border-[#0068FF] shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <span className="font-mono">{step.num}</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Feature Box */}
        <div className="gsap-item bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[#0068FF] dark:text-blue-300 font-mono text-xs font-bold">
                Tahap {steps[activeStep].num} dari 07
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {steps[activeStep].description}
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400">
                <ChevronRight className="w-4 h-4" />
                <span>Poin Penting: {steps[activeStep].detail}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50/60 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100/70 dark:border-slate-700 text-center">
              {React.createElement(steps[activeStep].icon, {
                className: 'w-16 h-16 text-[#0068FF] dark:text-blue-400 mb-4 stroke-[1.5]',
              })}
              <span className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {steps[activeStep].title}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Standar Operasional Pixellate
              </span>
            </div>
          </div>
        </div>

        {/* 7-Step Full Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-blue-50/40 dark:bg-blue-950/30 border-[#0068FF] dark:border-[#0068FF] shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#0068FF] dark:text-blue-400">
                      {step.num}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 leading-tight">
                    {step.title}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                  {step.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
