# Cetrofarm — Rebuild

Next.js (App Router) + Tailwind CSS v4 + TypeScript.

## Menjalankan lokal
```
npm install
npm run dev
```

## Halaman
- `/` — Home
- `/tentang` — Tentang Kami
- `/ekosistem` — Ekosistem (4 pilar: petani sayur, peternak domba/sapi, peternak ayam, distribusi)
- `/investor` — Untuk Investor (model bisnis, peluang kemitraan)
- `/artikel` — Artikel
- `/testimoni` — Testimoni (⚠️ isi masih placeholder, ganti dengan kutipan asli)
- `/kontak` — Kontak (form belum terhubung ke backend/email — perlu diisi endpoint pengiriman)

## Yang masih perlu diisi sebelum live
1. Foto asli (petani, lahan, produk) — saat ini belum ada gambar sama sekali, semua section teks-only.
2. Angka di hero (jumlah petani binaan, luas lahan) — sekarang contoh, ganti dengan data riil perusahaan.
3. Testimoni asli dari pelanggan/mitra.
4. Endpoint pengiriman form kontak (email/CRM).
5. Font Fraunces + Inter — di sandbox build ini di-fallback ke system font karena tidak ada akses ke fonts.googleapis.com. Saat deploy ke Vercel/host normal, ganti balik ke `next/font/google` di `app/layout.tsx` (sudah dikomentari caranya).
6. Domain & deployment (Vercel disarankan untuk Next.js).

## Deploy
```
npm run build
npm run start
```
Atau push ke GitHub lalu import ke Vercel.
