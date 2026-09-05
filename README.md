# Cetrofarm

Cetrofarm adalah platform web modern yang dibangun dengan menggunakan arsitektur full-stack terbaru. Proyek ini merupakan *rebuild* menggunakan **TanStack Start** dengan kombinasi berbagai teknologi mutakhir untuk performa dan pengalaman developer yang optimal.

## Teknologi Utama

- **Framework:** [TanStack Start](https://tanstack.com/start/latest) (React Router + SSR/CSR)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database & ORM:** PostgreSQL + [Drizzle ORM](https://orm.drizzle.team/)
- **Form & Validasi:** React Hook Form + Zod
- **Visualisasi Data:** Recharts
- **Markdown (Artikel):** remark, gray-matter

## Memulai Proyek (Lokal)

Pastikan kamu memiliki Node.js (minimal v20+) dan PostgreSQL. Kemudian jalankan perintah berikut:

1. **Install dependensi:**
   ```bash
   npm install
   ```
   *(Atau gunakan pnpm/yarn/bun sesuai preferensi, meski di project ini menggunakan npm/pnpm)*

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara default di `http://localhost:3000`.

## Struktur Halaman (Routes)

Sistem routing menggunakan [TanStack React Router](https://tanstack.com/router) dengan pendekatan *file-based routing* yang berada di dalam folder `src/routes/`:

- `/` — Beranda (Home)
- `/tentang` — Tentang Kami
- `/ekosistem` — Ekosistem Cetrofarm
- `/investor` — Halaman untuk Investor
- `/produk` — Halaman Produk
- `/artikel` — Blog & Artikel
- `/faq` — Tanya Jawab (FAQ)
- `/kontak` — Hubungi Kami
- `/$` — Halaman 404 (Not Found) / Catch-all

## Scripts Tersedia

- `npm run dev` - Menjalankan server lokal (Vite) di port 3000.
- `npm run generate-routes` - Melakukan *generate* otomatis untuk tipe routes (`tsr generate`) dari TanStack Router.
- `npm run build` - Melakukan *build* aplikasi untuk production.
- `npm run preview` - Melakukan *preview* dari hasil build production.

## Yang Perlu Diperhatikan / To-Do
1. **Database:** Pastikan *connection string* ke database PostgreSQL sudah dikonfigurasi dengan benar (biasanya via `.env`) untuk kebutuhan Drizzle ORM.
2. **Aset Visual:** Gunakan foto-foto dan gambar asli dari tim Cetrofarm (saat ini mungkin beberapa masih berbentuk teks/placeholder).
3. **Form Kontak:** Pastikan endpoint API untuk pengiriman form kontak sudah terhubung ke layanan email/CRM.
4. **Konten Testimoni & Artikel:** Isi halaman terkait dengan konten yang sesungguhnya.
