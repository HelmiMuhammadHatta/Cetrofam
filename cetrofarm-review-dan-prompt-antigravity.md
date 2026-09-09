# Cetrofarm — Review Website & Prompt Lengkap untuk Antigravity

Sumber review: https://cetrofarm.vercel.app/ (halaman Beranda, Tentang, Ekosistem, Produk, Artikel) berdasarkan tangkapan layar yang diberikan.

---

## BAGIAN 1 — REVIEW LENGKAP

### 1.1 Kesan pertama
Situs sudah punya arah yang benar: hijau tua khas agrikultur, tipografi serif untuk judul, struktur halaman lengkap (Tentang, Ekosistem, Produk, Investor, Artikel, Kontak, FAQ). Tetapi eksekusinya masih terasa seperti "template company profile", bukan seperti perusahaan agri-supply-chain yang sedang menggalang investor. Pesan investasi tenggelam di antara konten produk.

### 1.2 Masalah yang harus diperbaiki (prioritas tinggi)

**A. Gambar rusak / placeholder di banyak tempat**
- Halaman Ekosistem: 4 kartu "Proses Budidaya" hanya menampilkan ikon gambar gagal muat (Seedling, Planting, Care & Maintenance, Harvesting).
- Halaman Ekosistem: kotak "INTERACTIVE NODE MAP" masih placeholder abu-abu.
- Halaman Produk: 3 kartu sertifikasi menampilkan alt text, bukan gambar sertifikat.
- Halaman Tentang: foto tim (3 orang) berupa lingkaran kosong dengan nama yang terpotong keluar dari lingkaran.
Ini adalah pembunuh kredibilitas nomor satu di mata investor. Semua aset harus nyata atau dihapus.

**B. Teks terpotong dan tumpang tindih**
- Hero: statistik "21+ / 34 ha / 0 lini / 268" dan labelnya terpotong di sisi kiri ("rmer", "Distribusi Regional").
- "0 lini" jelas data salah — halaman Ekosistem menyebut 5 lini bisnis.
- Bubble chat "Butuh bantuan? Chat kami!" menutupi paragraf di halaman Tentang dan Produk.
- Nama di foto tim keluar dari frame.

**C. Halaman Produk terlalu kosong**
Hanya 2 kartu (Sayuran, Daging Ayam Kampung) padahal Beranda menjanjikan 3 kategori dan Ekosistem menyebut 5 lini. Tidak konsisten, dan tidak ada satu pun foto produk asli.

**D. Sudut pandang investor belum ada halaman kuatnya**
Menu "Investor" ada, tapi di Beranda hanya ada satu blok grafik generik "Tren Keuangan & Volume Panen" tanpa angka, tanpa sumbu, tanpa periode. Investor butuh: model bisnis, unit economics, traksi, penggunaan dana, tim, legalitas, dan cara menghubungi. Semua itu belum tersaji rapi.

**E. Data tanpa konteks**
"21+ farmer", "34 ha", "268 mitra ekspor" muncul tanpa keterangan periode atau sumber. Angka kecil yang berdiri sendiri justru terbaca lemah. Lebih baik dibingkai sebagai pertumbuhan (mis. "dari 8 ke 21 petani binaan dalam 18 bulan").

**F. Konsistensi bahasa**
Campuran Indonesia–Inggris tidak konsisten ("Business Aggregator", "Traceability", "cold chain", "offtaker"). Pilih satu: Indonesia sebagai bahasa utama, istilah Inggris hanya jika memang istilah industri, dan sediakan switch EN untuk investor asing.

**G. Konten tipis di beberapa bagian**
Kartu "Line 1–Line 5" hanya satu kalimat masing-masing. Artikel hanya 3 dan belum punya halaman detail. FAQ ada di menu tapi belum terlihat isinya.

**H. Teknis / SEO**
- Judul halaman dan deskripsi perlu unik per halaman.
- Kontras teks kuning di atas hijau pada beberapa label kecil di bawah standar aksesibilitas.
- Gambar hero besar tanpa optimasi memperlambat muat.
- Belum ada data terstruktur Organization, tidak ada sitemap yang jelas, tidak ada gambar preview saat dibagikan ke WhatsApp/LinkedIn.

### 1.3 Yang sudah bagus dan harus dipertahankan
- Palet hijau tua + krem hangat + aksen emas: tepat, dewasa, tidak norak.
- Judul serif kontras dengan isi sans-serif — terlihat premium.
- Footer lengkap dengan alamat, telepon, email, badge sertifikasi.
- Blok legalitas (nama PT, tahun berdiri, NIB, struktur holding) — ini justru nilai jual besar bagi investor, harus dinaikkan posisinya.
- Ilustrasi isometrik rantai pasok di Beranda: unik, jangan dibuang, justru kembangkan.

---

## BAGIAN 2 — SISTEM WARNA (dari logo Cetrofarm)

Logo: oval hijau, tulisan "Cetro" hijau tua, "farm" oranye-emas, daun hijau muda, latar krem.

| Peran | Nama | HEX | Penggunaan |
|---|---|---|---|
| Primary | Cetro Green | `#14532D` | header, footer, blok gelap, judul |
| Primary Deep | Forest Deep | `#0E3B21` | hero overlay, kontras teks |
| Accent | Harvest Gold | `#C9A227` | tombol utama, garis bawah judul, angka statistik |
| Accent Warm | Cetro Orange | `#E08A2B` | aksen kecil dari logo, highlight kata pada judul |
| Leaf | Fresh Leaf | `#7CB342` | ikon, badge organik, indikator naik |
| Base | Cream Canvas | `#FAF7EF` | latar halaman terang |
| Surface | Off White | `#FFFFFF` | kartu |
| Text | Ink | `#1C1C1C` | teks isi |
| Muted | Stone | `#6B7280` | teks sekunder |
| Border | Soft Sand | `#E7E1D3` | garis kartu |

Aturan: hijau mendominasi (60%), krem sebagai ruang napas (30%), emas/oranye hanya aksen (10%). Jangan pernah memakai emas sebagai latar blok besar.

Tipografi: judul serif berkarakter (Fraunces atau Playfair Display), isi sans-serif geometris (Plus Jakarta Sans atau Inter). Angka statistik memakai serif dengan tabular numerals.

---

## BAGIAN 3 — PROMPT LENGKAP UNTUK ANTIGRAVITY

Salin seluruh blok di bawah ini ke Antigravity.

---

**PROMPT MULAI**

Bangun ulang website company profile untuk **PT Cetro Tama Indonesia (brand: Cetrofarm)** — perusahaan agregator rantai pasok pangan di Semarang, Jawa Tengah. Tujuan utama situs: (1) meyakinkan calon investor bahwa ini bisnis agrikultur yang terkelola, terukur, dan legal; (2) menjadi profil B2B yang kredibel untuk ritel modern, HORECA, dan offtaker.

**Stack**: React + Vite + TypeScript, Tailwind CSS, React Router, Framer Motion untuk animasi halus. Semua warna, radius, bayangan, dan font didefinisikan sebagai design token di CSS, jangan hardcode di komponen. Responsif penuh mobile-first. Bahasa utama Indonesia, sediakan toggle EN/ID.

**Design system**
- Warna (tepat, jangan diubah):
  primary `#14532D`, primary-deep `#0E3B21`, accent-gold `#C9A227`, accent-orange `#E08A2B`, leaf `#7CB342`, cream `#FAF7EF`, white `#FFFFFF`, ink `#1C1C1C`, muted `#6B7280`, border `#E7E1D3`.
- Proporsi 60% hijau / 30% krem / 10% emas. Emas tidak boleh jadi latar blok besar.
- Font judul: Fraunces (serif, weight 600–700, sedikit optical size besar). Font isi: Plus Jakarta Sans. Angka statistik: Fraunces tabular.
- Radius kartu 14px, bayangan sangat halus (`0 1px 2px rgba(20,83,45,.06), 0 8px 24px rgba(20,83,45,.06)`), border 1px `#E7E1D3`.
- Section spacing besar dan konsisten: 96px desktop, 56px mobile. Container max 1200px.
- Motion: fade-up 16px, durasi 500ms, easing keluar halus, hanya sekali saat masuk viewport. Hormati `prefers-reduced-motion`. Jangan animasikan setiap elemen.

**Struktur halaman**

1. `/` Beranda
   - Header sticky transparan yang berubah solid hijau saat scroll. Logo kiri, menu tengah, tombol "Hubungi Kami" kanan (outline putih di atas hijau).
   - Hero full-bleed: foto petani di lahan, overlay gradien hijau tua dari kiri, judul serif 2 baris dengan satu frasa disorot warna emas, subjudul 2 kalimat, dua tombol (primer emas "Lihat Peluang Investasi", sekunder outline "Profil Perusahaan").
   - Strip statistik di bawah hero, 4 kolom, di dalam kartu krem yang menumpuk (overlap) ke hero. Setiap angka punya label DAN keterangan konteks satu baris. Angka menghitung naik saat masuk viewport. WAJIB: tidak ada teks terpotong di lebar berapa pun; di mobile jadi 2x2.
   - "Mengapa Cetrofarm" — 3 pilar (Traceability, Standar Mutu, Dampak Sosial) dengan ikon garis tipis emas, bukan ikon generik penuh warna.
   - Blok gelap "Ekosistem Rantai Pasok Terintegrasi": kiri daftar 4 langkah bernomor yang bisa diklik, kanan ilustrasi isometrik rantai pasok (Petani → Gudang → Logistik → Pasar) yang menyorot node sesuai langkah aktif.
   - "Kategori Produk": 3 kartu dengan foto produk asli, deskripsi, dan dua tautan (Detail Produk, Minta Penawaran).
   - "Standar & Traksi Kami": kiri dua poin sertifikasi, kanan kartu metrik pertumbuhan dengan grafik area kecil yang punya sumbu, satuan, dan periode jelas.
   - Testimoni 3 kolom dengan nama, jabatan, dan perusahaan.
   - Blok CTA investor: judul, ringkasan 3 baris, tombol "Jadwalkan Diskusi" + "Unduh Company Profile (PDF)", di sebelahnya grafik tren yang benar-benar berlabel.
   - "Kabar Terbaru": 3 artikel dengan gambar, kategori, tanggal, judul.
   - Newsletter dalam pita hijau, lalu footer 4 kolom.

2. `/tentang`
   - Hero teks tengah dengan eyebrow "TENTANG KAMI".
   - Cerita perusahaan 2–3 paragraf, tidak lebih.
   - Foto tim asli lebar penuh dengan caption.
   - **Legalitas** dijadikan kartu menonjol: Nama Perusahaan PT Cetro Tama Indonesia, Tahun Berdiri 2015, NIB 9120212080575, Struktur holding. Tambah baris untuk NPWP dan izin usaha bila tersedia.
   - Linimasa perjalanan perusahaan (2015 → sekarang) horizontal di desktop, vertikal di mobile.
   - **Tim**: grid 3 kolom kartu potret. Foto berbentuk kotak radius, rasio 4:5, nama DI BAWAH foto (bukan menimpa), jabatan sebagai badge emas, bio 3 baris, tautan LinkedIn. Jika foto belum ada, gunakan avatar inisial monogram bergaya, JANGAN lingkaran kosong.
   - Nilai perusahaan 4 kartu.

3. `/ekosistem`
   - Penjelasan model "Business Aggregator" dengan diagram alur yang jelas: Farmer → Cetrofarm (agregasi, QC, packing, cold chain) → Trader/Exporter/Retail/HORECA, dengan peran pendukung (Financier, Agri Investor, App Developer, Inspector) sebagai lapisan di bawahnya.
   - **Peta jangkauan**: ganti placeholder dengan peta Pulau Jawa SVG asli, titik-titik lokasi bisa di-hover memunculkan tooltip (Semarang HQ, Bandung Rep, dst). Jangan pakai kotak abu-abu bertulisan placeholder.
   - **5 Lini Bisnis**: 5 kartu, masing-masing dengan ikon, judul lini, 2–3 kalimat, dan 2 poin data (kapasitas, cakupan). Kartu ke-5 tidak boleh terlihat "sisa" — gunakan grid yang seimbang.
   - **Proses Budidaya Terstandarisasi**: 4 langkah dengan FOTO ASLI (bibit, penanaman, perawatan, panen). Nomor langkah sebagai badge emas di sudut foto. Wajib ada state fallback jika gambar gagal muat: blok warna hijau muda dengan ikon, bukan ikon broken image.

4. `/produk`
   - Katalog minimal 5 kategori sesuai 5 lini bisnis: Sayuran (60+ jenis), Daging Ayam Kampung, Ubi Madu, Bahan Pokok/Bulk, dan Telur/Susu jika tersedia. Setiap kartu: foto, deskripsi, spesifikasi (kemasan, grade, MOQ), tombol "Minta Penawaran".
   - Filter kategori sederhana di atas grid.
   - Blok gelap **Transparansi Rantai Pasok**: 4 tahap (Panen Lahan → Quality Control → Pengemasan → Distribusi) dengan ikon lingkaran emas dan garis penghubung.
   - **Sertifikasi**: 3 kartu dengan gambar sertifikat asli atau, jika belum ada, lencana vektor rapi bertuliskan nama sertifikasi. Tidak boleh menampilkan alt text.
   - Form permintaan penawaran (nama, perusahaan, email, telepon, produk, volume, pesan).

5. `/investor` — halaman baru, ini yang paling penting
   - Hero: "Peluang Investasi di Rantai Pasok Pangan Jawa Tengah".
   - Ringkasan peluang: masalah pasar, solusi Cetrofarm, mengapa sekarang.
   - Model bisnis dan aliran pendapatan (agregasi margin, kontrak offtake, kemitraan lahan).
   - Traksi: grafik volume panen dan pendapatan per periode dengan sumbu, satuan, dan sumber data. Tabel metrik kunci (jumlah petani binaan, luas lahan, tonase per bulan, jumlah mitra B2B, tingkat retensi mitra).
   - Rencana penggunaan dana dengan donut chart berlabel.
   - Peta jalan 3 tahun.
   - Manajemen risiko dan mitigasi — bagian ini membangun kepercayaan, jangan dihilangkan.
   - Legalitas dan tata kelola.
   - CTA: form permintaan akses data room + tombol jadwalkan panggilan (link kalender) + unduh deck.
   - Disclaimer: informasi bukan penawaran efek.

6. `/artikel` dan `/artikel/:slug`
   - Grid kartu dengan gambar, kategori, tanggal, waktu baca. Halaman detail dengan tipografi nyaman, lebar teks 720px, daftar isi menempel di sisi kanan pada desktop, artikel terkait di bawah.

7. `/kontak`
   - Peta lokasi, alamat lengkap Jl. Setro Raya, Desa Gondoriyo, Kec. Bergas, Kab. Semarang, telepon (024) 6933 5130 dan +62 85 800 500 111, email customerrelation@cetrofarm.com, jam operasional, form kontak dengan pilihan keperluan (Pembelian / Investasi / Kemitraan Petani / Media).

8. `/faq`
   - Accordion 3 kelompok: Produk & Pemesanan, Kemitraan Petani, Investasi.

**Footer** (semua halaman): logo + tagline "bringing nature inside", kolom Kontak, kolom Tautan, kolom Newsletter, baris bawah hak cipta + Syarat & Ketentuan + Kebijakan Privasi + ikon sosial. Badge "Bersertifikat Organik" dan "Terdaftar Kemenkumham & NIB".

**Aturan kualitas — ini wajib dipatuhi**
1. Nol gambar rusak. Setiap `<img>` punya fallback visual bergaya, bukan ikon browser default.
2. Nol teks terpotong atau tumpang tindih pada 360px, 768px, 1024px, 1440px, 1920px. Uji semua breakpoint.
3. Nol placeholder bertuliskan "placeholder", "lorem", atau kotak abu-abu kosong.
4. Widget chat mengambang tidak boleh menutupi teks; beri padding bawah aman dan sembunyikan otomatis saat scroll ke footer.
5. Setiap angka statistik punya label dan konteks periode. Tidak boleh ada angka "0".
6. Konsistensi jumlah: jika Ekosistem menyebut 5 lini, halaman Produk harus punya 5 kategori.
7. Kontras teks minimal WCAG AA (4.5:1 untuk teks isi). Emas di atas hijau tua harus diperiksa; gunakan emas terang `#E3BE4A` bila perlu.
8. SEO: judul unik <60 karakter dan deskripsi <160 karakter per halaman, satu H1 per halaman, HTML semantik, alt text deskriptif, JSON-LD Organization + LocalBusiness, sitemap.xml, robots.txt, og:image 1200x630 per halaman utama.
9. Performa: gambar lazy load, format modern, hero dipreload, target Lighthouse 90+ di semua kategori.
10. Aksesibilitas: navigasi keyboard penuh, focus ring terlihat berwarna emas, label pada semua input form, aria-label pada tombol ikon.

**Nada penulisan**: tenang, faktual, percaya diri. Hindari bahasa hiperbolik dan klaim tanpa bukti. Setiap klaim disertai angka atau sertifikasi. Untuk bagian investor, tulis seperti memo bisnis, bukan brosur pemasaran.

**Yang harus dihindari**: gradien ungu, ikon emoji, tombol ganda di hero lebih dari dua, bagian "Dipercaya oleh" berisi logo palsu, foto stok generik orang berjas, animasi yang berlebihan, dark mode toggle.

**PROMPT SELESAI**

---

## BAGIAN 4 — URUTAN PENGERJAAN YANG DISARANKAN
1. Perbaiki semua gambar rusak dan teks terpotong (1 hari) — dampak kredibilitas terbesar.
2. Perbaiki angka statistik dan konsistensi jumlah lini/produk.
3. Bangun halaman Investor secara penuh.
4. Lengkapi katalog produk dengan foto asli.
5. Terapkan token warna dan tipografi baru secara menyeluruh.
6. SEO, performa, aksesibilitas, lalu versi Inggris.
