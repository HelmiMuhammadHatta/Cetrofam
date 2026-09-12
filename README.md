# Cetrofarm (v2 - Investor Pitch Ready)

Cetrofarm adalah platform web modern untuk PT. Cetro Tama Indonesia. Versi v2 ini telah direstrukturisasi dan dioptimasi secara khusus sebagai representasi digital perusahaan untuk kebutuhan **presentasi kepada calon investor**.

Proyek ini dibangun menggunakan **TanStack Start** dengan kombinasi teknologi mutakhir untuk performa yang cepat, SEO yang baik, serta antarmuka (UI) bernuansa *pitch-deck* yang profesional, faktual, dan *data-driven*.

## Fitur Unggulan (v2)

- **Halaman Khusus Investor (`/investor`)**: Terstruktur mengikuti standar *investor pitch* (Market Size TAM/SAM/SOM, Unit Economics, Traction Data, Risk Management).
- **Integrasi Dokumen (PDF)**: Mendukung pengunduhan instan dokumen PDF *Company Profile* resmi melalui modal yang elegan. (Script PDF generator via Puppeteer tersedia di `scripts/generate_pdf.mjs`).
- **Visualisasi Traksi**: Menggunakan komponen grafik interaktif (Recharts) untuk menunjukkan tren pertumbuhan Q2 2026.
- **Performa & SEO (Optimasi Aset)**: Gambar yang telah dioptimalkan ke format WebP (`<200KB`), *lazy-loading*, *fallback avatar*, dan meta-tag standar untuk *indexing*.
- **Data Tersentralisasi**: Memisahkan sumber *single-source of truth* (`src/data/`) agar angka metrik (jumlah mitra petani, luasan lahan, volume produksi) dapat diperbarui dengan cepat sebelum pertemuan bisnis.

## Teknologi Utama

- **Framework:** [TanStack Start](https://tanstack.com/start/latest)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Tailwind CSS v4 & Vanilla CSS custom tokens
- **Data & Visualisasi:** Recharts, Zod
- **Ikon & Grafis:** Lucide-React
- **Scripting:** Node.js Puppeteer (PDF Generation), PowerShell (Image Optimization)

## Memulai Proyek (Lokal)

Pastikan kamu memiliki Node.js (minimal v20+).

1. **Install dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

## Daftar Perintah (Scripts)

- `npm run dev` - Menjalankan server lokal Vite untuk *development*.
- `npm run build` - Melakukan *build* produksi untuk deployment (seperti Vercel).
- `npm run preview` - Melihat *preview* dari hasil build.
- `npm run generate-routes` - *Re-generate* otomatis tipe *routes*.
- **`node scripts/generate_pdf.mjs`** - Script internal untuk men-generate dan meng-overwrite dokumen `CetroFarm-Company-Profile.pdf` secara dinamis.

## Struktur Halaman (Routes)

Routing menggunakan *file-based routing* di `src/routes/`:

- `/` — Beranda Utama
- `/investor` — **Halaman Utama Pitch Investor (TAM/SAM/SOM & Finansial)**
- `/tentang` — Profil Perusahaan & Tim Manajemen (Avatar tersembunyi hingga aset asli siap)
- `/ekosistem` — Alur Model Bisnis & Value Chain Agrikultur
- `/produk` — 5 Pilar Lini Bisnis
- `/kontak` — Form Inkuiri B2B & Lokasi HQ

## Catatan Khusus (Demo Mode)
Pada versi ini, fungsi *Server Actions* untuk formulir (unduh PDF & hubungi kami) dilengkapi dengan fitur *graceful fallback*. Artinya, jika terjadi gangguan koneksi *database* sewaktu-waktu selama sesi *pitching*, UI tidak akan mengalami interupsi (*error message*) dan pengunjung/investor tetap akan menerima respons *sukses* secara mulus untuk kelancaran presentasi.
