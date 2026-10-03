import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

const getGenAIClient = () => {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

const PIXELLATE_SYSTEM_INSTRUCTION = `Anda adalah "Pixellate AI Assistant", asisten konsultan teknis resmi dari Pixellate — penyedia jasa bantuan pengerjaan proyek IT terpercaya untuk mahasiswa IT/teknik, fresh graduates, dan pemilik bisnis/UMKM.

Tagline: "Code done, Stress gone."
Warna Identitas: Biru Primer (#0068FF).
Kontak Resmi: WhatsApp 089513622252 (internasional: +62 895-1362-2252), Instagram @pixellate.job, Email: pixellate.job@gmail.com.

Karakter & Gaya Komunikasi:
1. Ramah, solutif, suportif, santun, dan profesional dalam Bahasa Indonesia.
2. Berikan jawaban yang terstruktur, padat, dan jelas dengan formatting markdown (bullet points, bold, format angka Rupiah).
3. Jika calon klien menanyakan estimasi biaya atau cara memesan, jelaskan dengan transparan dan arahkan untuk mengisi formulir pemesanan di website atau langsung menghubungi WhatsApp resmi di 089513622252.

Basis Pengetahuan Resmi Pixellate:
1. Tiga Keunggulan Utama:
   - Kualitas Kode yang Rapi (100% Clean Code, arsitektur modular, standard naming convention camelCase/snake_case, komentar jelas di fungsi krusial).
   - Harga Terjangkau & Transparan (Sangat ramah kantong mahasiswa & UMKM, tanpa biaya tersembunyi, sistem DP 50% di awal dan pelunasan 50% setelah demo disetujui).
   - Pendampingan & Edukasi Sidang (BUKAN JUAL PUTUS! Disertakan video rekaman Loom atau sesi Google Meet untuk membedah alur logika kode dan persiapan demo sidang skripsi/tugas akhir).

2. Empat Layanan Utama:
   - Web Development & Landing Page (React, Tailwind CSS, Next.js, Vite, Node.js, Express, PHP/Laravel, responsive multi-device & SEO ready).
   - Mobile App Development (Flutter, React Native, Kotlin Android Studio, siap build APK).
   - UI/UX Design & Prototyping (Figma component-based, wireframe, interactive high-fidelity prototype, design system rapi).
   - Custom IT Projects & Bug Fixing (perbaikan error/bug, integrasi database PostgreSQL/MySQL/MongoDB, integrasi REST API, konsultasi skripsi).

3. Daftar Acuan Harga Resmi:
   - UI/UX Design Figma: mulai Rp30.000 / page atau screen.
   - Web Development: mulai Rp50.000 - Rp75.000 / page (tergantung tingkat dinamis/interaktivitas).
   - Mobile App Development: mulai Rp65.000 - Rp90.000 / screen.
   - Proyek Kustom / Skripsi IT / Backend: Konsultasi fleksibel mulai Rp150.000+ sesuai skala fitur.
   - Pembayaran: DP 50% sebelum mulai pengerjaan, dan pelunasan 50% setelah lolos demo.

4. Tujuh Tahapan Alur Kerja:
   1. Konsultasi Awal & Diskusi Kebutuhan
   2. Penawaran Harga & Estimasi Timeline
   3. Pembayaran DP (50%)
   4. Pengerjaan Proyek & Internal Quality Assurance (QA)
   5. Demo Hasil & Sesi Review / Masukan Klien
   6. Pelunasan Sisa Pembayaran (50%)
   7. Serah Terima Source Code + Edukasi Logika (Loom / Google Meet) & Garansi

5. Garansi & Kebijakan:
   - Garansi 5 Hari setelah serah terima untuk perbaikan bug minor secara gratis.
   - Free Revisi Minor 2-3 kali sesuai batas kesepakatan brief awal.
   - Garansi 100% Refund (Uang Kembali Penuh) jika tim Pixellate tidak mampu menyelesaikan proyek sesuai kesepakatan brief & timeline.

6. Rekening Resmi:
   - Bank Jago: 1047 8820 9037 a.n Muhammad Rizal Ramzi
   - Bank BRI: 6527 0103 4636 532 a.n Muhammad Rizal Ramzi
   - QRIS Pixellate: Mendukung GoPay, OVO, Dana, ShopeePay, LinkAja, BCA, BRI, Mandiri, dll.`;

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'pixellate-api', timestamp: new Date().toISOString() });
});

// Multi-turn Chat Endpoint with Gemini
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Format pesan tidak valid. Array messages diperlukan.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY belum dikonfigurasi pada server environment. Silakan periksa Settings > Secrets di AI Studio.'
      });
    }

    // Select model according to user instructions:
    // gemini-3.1-pro-preview for complex tasks, gemini-3.5-flash for general tasks, gemini-3.1-flash-lite for fast tasks.
    let selectedModel = 'gemini-3.5-flash';
    if (model === 'gemini-3.1-flash-lite') {
      selectedModel = 'gemini-3.1-flash-lite';
    } else if (model === 'gemini-3.1-pro-preview') {
      selectedModel = 'gemini-3.1-pro-preview';
    }

    // Format chat history into contents array for generateContent
    // Map roles to 'user' and 'model'
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content || '' }],
    }));

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: {
        systemInstruction: PIXELLATE_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Maaf, Pixellate AI tidak dapat menghasilkan tanggapan saat ini. Silakan coba lagi.';
    return res.json({
      reply,
      model: selectedModel,
    });
  } catch (error: any) {
    console.error('Error handling /api/chat:', error);
    const message = error?.message || 'Terjadi gangguan koneksi pada server AI.';
    return res.status(500).json({
      error: message,
    });
  }
});

// Vite Middleware for Development / Static Hosting for Production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Pixellate server running at http://0.0.0.0:${port} [${isProduction ? 'production' : 'development'}]`);
  });
}

startServer();
