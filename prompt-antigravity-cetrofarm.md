# Master Prompt — Cetrofarm Company Profile (Investor + Marketing Oriented)

> Copy-paste seluruh blok di bawah ini ke Antigravity sebagai satu instruksi eksekusi.

---

## ROLE
Kamu adalah senior full-stack engineer + brand/conversion designer. Bangun ulang website company profile **Cetrofarm** (agri-food ecosystem, Bergas, Kabupaten Semarang, sejak 2018) menjadi website yang **kredibel di mata investor** dan **menjual secara marketing**.

## KONTEKS BISNIS
- Cetrofarm merawat rantai pasok pangan dari petani binaan sampai meja konsumen.
- Angka kunci: 210+ petani binaan, 340 ha lahan produksi, 3 lini produk (Sayuran Segar, Bahan Pokok, Protein Hewani), beroperasi sejak 2018.
- Kontak: Jl. Setro Raya, Desa Gondoriyo, Kec. Bergas, Kab. Semarang · 024 6933 5138 · +62 85 8603 00 111 · customerrelation@cetrofarm.com
- Bahasa utama: Indonesia. Sediakan toggle EN (i18n) untuk audiens investor asing.
- Tagline: "bringing nature inside".

## TARGET (2 audiens, 1 website)
1. **Investor / mitra strategis** — butuh bukti traksi, model bisnis, dampak ESG, tim, dan jalur kontak yang serius.
2. **Konsumen / buyer B2B** — butuh produk, jaminan mutu, dan jalur beli/quote yang cepat.
Navigasi harus memisahkan dua jalur ini tanpa membuat halaman terasa terbelah.

## STACK & ATURAN TEKNIS
- TanStack Start v1 + React 19 + Vite 7 + TypeScript + Tailwind v4 (token di `src/styles.css`, format `oklch`).
- Routing file-based di `src/routes/`. Halaman utama = `src/routes/index.tsx`.
- Dilarang hardcode warna di className (`text-white`, `bg-[#...]`). Semua lewat design token semantik.
- Setiap route punya `head()` sendiri: title < 60 char, description < 160 char, og:title, og:description, og:type, twitter:card. Satu H1 per halaman, HTML semantik, alt text, lazy loading, JSON-LD `Organization` + `LocalBusiness` di homepage.
- Responsif mobile-first, Lighthouse target: Performance ≥ 90, Accessibility ≥ 95, SEO 100.
- Motion halus (fade/slide-up on scroll, stagger), tidak berlebihan, hormati `prefers-reduced-motion`.

## DESIGN DIRECTION (kunci — jangan melenceng)
Pertahankan arah versi rebuild (gambar kedua), bukan versi lama:
- Palet: hijau hutan pekat (`#173D2B` area), krem kertas (`#FAF7F0`), aksen emas gandum (`#C9A227`), teks charcoal.
- Tipografi: serif editorial untuk heading (mis. Instrument Serif / Libre Baskerville) + sans netral untuk body (Work Sans / Inter alternatif). Muat font lewat `<link>` di `src/routes/__root.tsx`, bukan `@import` di CSS.
- Layout: banyak whitespace, grid tenang, garis pemisah tipis, radius kecil, editorial-agrarian. Hindari kesan template SaaS/ungu-gradient.
- Semua placeholder gambar harus digenerate (foto lahan, greenhouse, petani, produk, gudang distribusi) — tidak boleh ada kotak abu-abu kosong seperti di section Artikel sekarang.

## STRUKTUR HALAMAN (bangun semuanya)

### 1. `/` Homepage (urutan wajib)
1. **Nav sticky** — logo, menu (Tentang, Ekosistem, Produk, Investor, Artikel, Kontak), CTA primer "Belanja Produk", CTA sekunder "Untuk Investor", language switch.
2. **Hero** — headline outcome-driven + subheadline + 2 CTA (`Peluang Kemitraan & Investasi`, `Lihat Ekosistem Kami`) + panel metrik (210+ / 340 ha / 3 lini / 2018) + foto lahan asli.
3. **Trust bar** — logo mitra/retail/sertifikasi (buat placeholder logo netral berlabel jelas, jangan mengarang brand nyata).
4. **Value proposition** — 3 kolom: Traceability, Standar Mutu, Dampak Sosial.
5. **Ekosistem rantai pasok** — 4 langkah bernomor (Pendampingan petani → Panen & standarisasi → Distribusi terjaga → Sampai ke keluarga) dengan visual alur.
6. **Tiga lini produk** — kartu produk + link ke `/produk`.
7. **Jaminan mutu** — Bebas Bahan Kimia, Segar & Sehat, 100% Organik dengan penjelasan metode, bukan klaim kosong.
8. **Impact & traction strip** — pertumbuhan petani binaan, volume panen/bulan, jangkauan distribusi (grafik sederhana, data dari file konstanta agar mudah diedit).
9. **Testimoni** — 3 kartu + link `/testimoni`.
10. **Section Investor** — highlight ringkas: model bisnis, unit economics, roadmap ekspansi, CTA `Baca Profil untuk Investor` + `Unduh Company Profile (PDF)`.
11. **Artikel terbaru** — 3 kartu dengan gambar nyata.
12. **Lead magnet band** — form email "Dapatkan Katalog Produk & Ringkasan Investasi".
13. **CTA hijau pekat** + **Footer lengkap** (alamat, kontak, peta, sosial, sitemap link).

### 2. `/tentang` — Sejarah, visi-misi, nilai, tim inti, timeline 2018→sekarang, galeri lahan.
### 3. `/ekosistem` — Deep dive rantai pasok, peta wilayah binaan, standar SOP, sertifikasi.
### 4. `/produk` — Katalog 3 lini + detail kategori, spesifikasi, minimum order, tombol quote/WhatsApp.
### 5. `/investor` — Halaman paling penting untuk target:
   - Ringkasan peluang (1 paragraf tajam)
   - Market size & tren pangan Jawa Tengah
   - Model bisnis & aliran pendapatan
   - Traksi (metrik + grafik pertumbuhan)
   - Roadmap penggunaan dana
   - Skema kemitraan (Offtaker / Investor Lahan / Distribusi)
   - Tim & tata kelola
   - FAQ investor
   - Form "Ajukan Kemitraan" (nama, perusahaan, email, telepon, tipe minat, pesan) + tombol unduh deck
### 6. `/artikel` + `/artikel/$slug` — Blog SEO, konten dari file MDX/data lokal, kategori, related posts, JSON-LD `Article`.
### 7. `/testimoni` — Grid testimoni + studi kasus mitra.
### 8. `/kontak` — Form kontak, peta embed, jam operasional, WhatsApp CTA.

## STRATEGI MARKETING YANG HARUS TERTANAM
- **Conversion path jelas**: setiap section berakhir dengan satu next step. Maksimal 2 CTA per layar.
- **Segmented CTA**: konsumen → belanja/quote; investor → unduh deck/ajukan kemitraan.
- **Social proof berlapis**: metrik, testimoni, logo mitra, sertifikasi, liputan media.
- **Lead capture**: newsletter + gated PDF (email wajib) + WhatsApp floating button.
- **Scarcity/urgensi yang jujur**: kuota kemitraan per musim tanam, bukan countdown palsu.
- **SEO konten**: target kata kunci "sayur organik semarang", "supplier sayur segar jawa tengah", "investasi pertanian indonesia", "beras organik rindjing" — pakai di title, H2, dan artikel.
- **Analytics ready**: bungkus event CTA dengan helper `trackEvent()` sederhana agar mudah disambungkan ke GA4/Meta Pixel nanti.

## DATA & KONTEN
- Semua copy final dalam Bahasa Indonesia yang persuasif, spesifik, dan tidak lebay. Tulis copy asli — jangan lorem ipsum.
- Simpan konten terstruktur (metrik, produk, testimoni, artikel, FAQ, tim) di `src/data/*.ts` agar mudah diedit klien.
- **Jangan mengarang** angka finansial, sertifikasi resmi, nama investor, atau testimoni institusi. Untuk data yang belum ada, gunakan placeholder yang jelas ditandai `TODO_ISI_DATA` dan buat daftar ringkas apa saja yang perlu dilengkapi klien.

## FORM & BACKEND
- Aktifkan backend (database) untuk menyimpan submission form kontak, kemitraan investor, dan newsletter.
- Tabel: `contact_submissions`, `investor_leads`, `newsletter_subscribers`. Insert publik diizinkan, baca hanya untuk admin. Validasi input dengan Zod, honeypot anti-spam.
- Halaman admin sederhana `/admin/leads` yang dilindungi login untuk melihat lead masuk.

## DEFINITION OF DONE
1. Semua route ada, bisa diklik, tanpa link mati, tanpa placeholder abu-abu.
2. `/` bukan lagi halaman template default.
3. Metadata head unik di tiap route + JSON-LD terpasang.
4. Semua warna/tipografi dari token, tidak ada hardcode.
5. Form benar-benar menyimpan data dan menampilkan state sukses/gagal.
6. Cek tampilan mobile 375px, tablet 768px, desktop 1440px.
7. Build lolos tanpa error TypeScript.
8. Akhiri dengan ringkasan: apa yang dibuat, dan daftar data yang masih perlu diisi klien.

## URUTAN EKSEKUSI
1. Design system & token + font + layout shell (nav/footer).
2. Homepage penuh.
3. Halaman `/investor` (prioritas kedua karena ini target utama).
4. Halaman produk, tentang, ekosistem.
5. Artikel + testimoni + kontak.
6. Backend form + admin leads.
7. SEO, aksesibilitas, performa, QA responsif.

Kerjakan sampai selesai semua tahap, jangan berhenti di tahap 1.
