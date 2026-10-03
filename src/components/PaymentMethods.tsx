import React, { useState } from 'react';
import { CreditCard, Copy, Check, QrCode, ShieldAlert, Building2 } from 'lucide-react';

export const PaymentMethods: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const copyToClipboard = (account: string, bankName: string) => {
    navigator.clipboard.writeText(account);
    setCopiedBank(bankName);
    setTimeout(() => setCopiedBank(null), 2500);
  };

  const paymentAccounts = [
    {
      bank: 'Bank Jago',
      type: 'Bank Digital',
      accountNumber: '106447502077',
      holder: 'Muhammad Rizal Ramzi',
      color: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50',
    },
    {
      bank: 'Bank BRI',
      type: 'Bank BUMN / Konvensional',
      accountNumber: '652701034636532',
      holder: 'Muhammad Rizal Ramzi',
      color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/50',
    },
  ];

  const paymentRules = [
    {
      step: '1',
      title: 'DP 50%',
      desc: 'Proyek baru mulai dikerjakan setelah pembayaran uang muka (DP 50%) dikonfirmasi oleh admin Pixellate.',
    },
    {
      step: '2',
      title: 'Pelunasan 50%',
      desc: 'Sisa pembayaran dilunasi setelah demo hasil jadi ditunjukkan dan disetujui, sebelum source code diserahkan.',
    },
    {
      step: '3',
      title: 'Pembatalan Sepihak',
      desc: 'Jika klien membatalkan proyek secara sepihak di tengah jalan saat pengerjaan telah dimulai, DP dinyatakan hangus.',
    },
    {
      step: '4',
      title: 'Garansi Gagal Deadline',
      desc: 'Jika proyek telat dari tenggat deadline tanpa alasan force majeure mendesak, DP dikembalikan 100% penuh.',
    },
  ];

  return (
    <section
      id="pembayaran"
      className="py-20 md:py-28 bg-[#FAFCFF] dark:bg-[#080B11] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="gsap-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Saluran Pembayaran Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Ketentuan & Saluran Pembayaran
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Untuk memberikan kemudahan dan kenyamanan bagi setiap klien, Pixellate menyediakan
            berbagai alternatif saluran pembayaran yang aman, resmi, dan bebas repot.
          </p>
        </div>

        {/* 3 Channels: Bank Jago, Bank BRI, QRIS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {paymentAccounts.map((acc, idx) => (
            <div
              key={idx}
              className="gsap-item bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {acc.type}
                  </span>
                  <Building2 className="w-5 h-5 text-[#0068FF] dark:text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{acc.bank}</h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-6">a.n {acc.holder}</div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 mb-4">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 block mb-1">Nomor Rekening:</span>
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-white tracking-wider">
                    {acc.accountNumber}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(acc.accountNumber, acc.bank)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[#0068FF] dark:hover:border-[#0068FF] bg-white dark:bg-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors"
              >
                {copiedBank === acc.bank ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">Nomor Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          ))}

          {/* QRIS Card */}
          <div className="gsap-item bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#0068FF] dark:text-blue-400 uppercase tracking-wider">
                  Universal Payment
                </span>
                <QrCode className="w-5 h-5 text-[#0068FF] dark:text-blue-400" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">QRIS Dinamis</h3>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-6">Instant Scan & Konfirmasi Otomatis</div>

              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900/40 text-xs text-slate-600 dark:text-slate-300 space-y-2 mb-4">
                <div className="font-semibold text-slate-800 dark:text-slate-200">Mendukung Seluruh Aplikasi:</div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-medium">Dana</span>
                  <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-medium">GoPay</span>
                  <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-medium">OVO</span>
                  <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-medium">ShopeePay</span>
                  <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-medium">LinkAja</span>
                  <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-medium">BCA/Mandiri/BRI Mobile</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/6289513622252?text=Halo%20Pixellate,%20saya%20ingin%20meminta%20barcode%20QRIS%20untuk%20pembayaran"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[#0068FF] dark:hover:border-[#0068FF] bg-white dark:bg-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors"
            >
              <QrCode className="w-4 h-4 text-[#0068FF] dark:text-blue-400" />
              <span>Minta Barcode QRIS via WA</span>
            </a>
          </div>
        </div>

        {/* 4 Payment Regulations from PDF */}
        <div className="gsap-item bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0068FF] dark:text-blue-400 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Catatan & Regulasi Pembayaran
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Aturan resmi transaksi untuk transparansi dan ketertiban administrasi
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentRules.map((rule, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#0068FF] text-white font-mono text-xs font-bold flex items-center justify-center mb-3">
                    0{rule.step}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {rule.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
