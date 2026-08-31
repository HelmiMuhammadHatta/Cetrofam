import Link from "next/link";

export const metadata = { title: "Untuk Investor — Cetrofarm" };

export default function Investor() {
  return (
    <div>
      <div className="border-b border-forest/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm text-soil">Untuk Investor &amp; Mitra</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl text-forest md:text-5xl">
            Model bisnis yang tumbuh bersama petani, bukan menggantikannya
          </h1>
          <p className="mt-6 max-w-2xl text-ink/80 leading-relaxed">
            Cetrofarm mengoperasikan model agribisnis terintegrasi: kami
            mengelola pendampingan produksi, standarisasi mutu, dan
            distribusi — sementara lahan tetap dikelola oleh petani dan
            peternak binaan setempat. Model ini menjaga biaya modal tetap
            rendah sambil membuka peluang ekspansi yang cepat direplikasi ke
            wilayah baru.
          </p>
        </div>
      </div>

      <div className="border-b border-forest/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl text-forest">Mengapa Cetrofarm</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-display text-3xl text-gold">3 lini produk</p>
              <p className="mt-2 text-sm text-ink/70">
                Sayuran, bahan pokok, dan protein hewani — diversifikasi yang
                mengurangi risiko musiman pada satu komoditas.
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">Model kemitraan</p>
              <p className="mt-2 text-sm text-ink/70">
                Modal kerja lebih ringan karena lahan dan kandang dimiliki
                petani/peternak binaan, bukan aset milik perusahaan.
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">Siap direplikasi</p>
              <p className="mt-2 text-sm text-ink/70">
                Model pendampingan yang sudah berjalan di Bergas dirancang
                untuk direplikasi ke sentra produksi lain di Jawa Tengah dan
                sekitarnya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-forest">Peluang kemitraan yang terbuka</h2>
        <ul className="mt-8 space-y-6">
          <li className="border-l-2 border-forest pl-6">
            <p className="font-medium text-forest">Pendanaan ekspansi lahan &amp; kandang binaan</p>
            <p className="mt-1 text-sm text-ink/70">
              Memperluas jaringan petani dan peternak binaan ke kabupaten
              sekitar Semarang.
            </p>
          </li>
          <li className="border-l-2 border-forest pl-6">
            <p className="font-medium text-forest">Kemitraan distribusi &amp; ritel</p>
            <p className="mt-1 text-sm text-ink/70">
              Kolaborasi dengan jaringan ritel atau platform belanja untuk
              memperluas jangkauan distribusi rantai dingin.
            </p>
          </li>
          <li className="border-l-2 border-forest pl-6">
            <p className="font-medium text-forest">Kolaborasi merek</p>
            <p className="mt-1 text-sm text-ink/70">
              Produk co-branding untuk institusi yang ingin memasok bahan
              pangan bersertifikat organik dengan jejak asal yang jelas.
            </p>
          </li>
        </ul>

        <div className="mt-14 rounded-2xl bg-forest p-8 md:p-10">
          <p className="max-w-xl font-display text-2xl text-paper">
            Kami siap membagikan data operasional dan proyeksi lebih rinci
            dalam pertemuan langsung.
          </p>
          <Link
            href="/kontak"
            className="mt-6 inline-block w-fit rounded-full bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition-colors hover:bg-gold-soft"
          >
            Jadwalkan Diskusi
          </Link>
        </div>
      </div>
    </div>
  );
}
