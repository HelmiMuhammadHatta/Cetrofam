import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-forest/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <p className="text-sm tracking-wide text-soil">
              Bergas, Kabupaten Semarang — sejak 2018
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-forest md:text-6xl">
              Dari 340 hektare ladang binaan, ke meja makan jutaan keluarga.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
              Cetrofarm merawat rantai pasok pangan dari petani sayur, peternak
              domba dan sapi perah, hingga peternak ayam petelur — satu
              ekosistem yang bisa ditelusuri dari kebun sampai keranjang
              belanja.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/investor"
                className="rounded-full bg-forest px-6 py-3 text-sm text-paper transition-colors hover:bg-forest-deep"
              >
                Peluang Kemitraan &amp; Investasi
              </Link>
              <Link
                href="/ekosistem"
                className="rounded-full border border-forest px-6 py-3 text-sm text-forest transition-colors hover:bg-forest hover:text-paper"
              >
                Lihat Ekosistem Kami
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-6 self-center border-t border-forest/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <div>
              <dt className="text-sm text-ink/60">Petani binaan</dt>
              <dd className="font-display text-3xl text-forest">210+</dd>
            </div>
            <div>
              <dt className="text-sm text-ink/60">Lahan produksi</dt>
              <dd className="font-display text-3xl text-forest">340 ha</dd>
            </div>
            <div>
              <dt className="text-sm text-ink/60">Kategori produk</dt>
              <dd className="font-display text-3xl text-forest">3 lini</dd>
            </div>
            <div>
              <dt className="text-sm text-ink/60">Beroperasi sejak</dt>
              <dd className="font-display text-3xl text-forest">2018</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FROM FIELD TO TABLE — sequential process, numbering earned here */}
      <section className="border-b border-forest/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-xl font-display text-3xl text-forest md:text-4xl">
            Satu rantai, dari benih hingga dapur Anda
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {[
              {
                n: "1",
                t: "Pendampingan petani",
                d: "Cetrofarm menyediakan bibit, pupuk, dan pendampingan teknis untuk petani sayur serta peternak domba, sapi, dan ayam di sekitar Bergas.",
              },
              {
                n: "2",
                t: "Panen & standarisasi",
                d: "Hasil panen disortir dan diuji sesuai standar organik sebelum masuk ke gudang distribusi.",
              },
              {
                n: "3",
                t: "Distribusi terjaga",
                d: "Rantai dingin dan armada distribusi menjaga kesegaran sayur, susu segar, dan telur sampai titik jual.",
              },
              {
                n: "4",
                t: "Sampai ke keluarga",
                d: "Produk dijual lewat toko daring dan mitra ritel, dengan jejak asal yang bisa ditelusuri.",
              },
            ].map((step) => (
              <div key={step.n}>
                <span className="font-display text-2xl text-gold">{step.n}</span>
                <h3 className="mt-2 text-lg font-medium text-forest">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.d}</p>
              </div>
            ))}
          </ol>
        </div>
      </section>

      {/* PRODUCT LINES */}
      <section className="border-b border-forest/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-md font-display text-3xl text-forest md:text-4xl">
              Tiga lini produk, satu standar mutu
            </h2>
            <a href="https://shop.cetrofarm.com/" className="text-sm text-soil underline underline-offset-4">
              Kunjungi toko daring
            </a>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-forest/10 md:grid-cols-3">
            {[
              {
                t: "Sayuran Segar",
                d: "Sayuran daun dan buah dari lahan bersertifikat organik di dataran tinggi Bergas.",
              },
              {
                t: "Bahan Pokok",
                d: "Beras Rindjing, minyak, dan gula — dipilih dari mitra petani padi lokal.",
              },
              {
                t: "Protein Hewani",
                d: "Susu segar, telur ayam kampung, dan daging dari peternakan binaan dengan standar kesejahteraan hewan.",
              },
            ].map((p) => (
              <div key={p.t} className="bg-paper p-8">
                <h3 className="text-lg font-medium text-forest">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR / MARKETING CTA BAND */}
      <section className="bg-forest">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl text-paper md:text-4xl">
              Membangun ekosistem pangan butuh mitra yang berpikir jangka panjang.
            </h2>
            <p className="mt-4 max-w-md text-paper/80">
              Kami terbuka untuk kemitraan distribusi, kolaborasi merek, dan
              pendanaan untuk memperluas jaringan petani binaan ke luar Jawa
              Tengah.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href="/investor"
              className="w-fit rounded-full bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition-colors hover:bg-gold-soft"
            >
              Baca Profil untuk Investor
            </Link>
            <Link href="/kontak" className="w-fit text-sm text-paper/80 underline underline-offset-4">
              Ajukan kemitraan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
