import Link from "next/link";
import { Leaf, ShieldCheck, HeartPulse, Quote, ArrowRight, Sprout, Wheat, Egg, User } from "lucide-react";

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
                icon: Sprout,
                d: "Sayuran daun dan buah dari lahan bersertifikat organik di dataran tinggi Bergas.",
              },
              {
                t: "Bahan Pokok",
                icon: Wheat,
                d: "Beras Rindjing, minyak, dan gula — dipilih dari mitra petani padi lokal.",
              },
              {
                t: "Protein Hewani",
                icon: Egg,
                d: "Susu segar, telur ayam kampung, dan daging dari peternakan binaan dengan standar kesejahteraan hewan.",
              },
            ].map((p) => (
              <div key={p.t} className="group relative bg-paper p-8 transition-colors hover:bg-forest/5">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest group-hover:bg-forest group-hover:text-paper transition-colors">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-forest">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES / VALUE PROPOSITION */}
      <section className="border-b border-forest/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Bebas Bahan Kimia",
                desc: "Tanpa pestisida sintetis, aman untuk dikonsumsi setiap hari.",
              },
              {
                icon: HeartPulse,
                title: "Segar & Sehat",
                desc: "Dipanen pada tingkat kematangan optimal untuk nutrisi maksimal.",
              },
              {
                icon: Leaf,
                title: "100% Organik",
                desc: "Dirawat dengan metode alami dari benih hingga pascapanen.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl text-forest">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-forest/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-medium tracking-widest text-gold uppercase">Testimoni</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-forest md:text-4xl">
              Bagaimana Tanggapan Pelanggan Kami
            </h2>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "Sayurannya sangat segar dan tahan lama di kulkas. Beras organik Rindjing juga pulen banget, anak-anak suka.",
                name: "Ibu Anisa",
                role: "Ibu Rumah Tangga",
              },
              {
                quote: "Sistem ekosistemnya membuat saya yakin dengan kualitas produk. Susu segarnya jadi favorit keluarga kami setiap pagi.",
                name: "Bapak Budi",
                role: "Pelanggan Setia",
              },
              {
                quote: "Kualitas telur ayam kampungnya konsisten bagus. Pengirimannya juga cepat dan selalu dalam kondisi aman.",
                name: "Chef Maya",
                role: "Pemilik Restoran",
              }
            ].map((testi, i) => (
              <div key={i} className="flex flex-col justify-between rounded-3xl border border-forest/10 bg-white/60 p-8 shadow-sm">
                <div>
                  <Quote className="h-8 w-8 text-gold/50 mb-4" />
                  <p className="text-lg leading-relaxed text-ink/80">&quot;{testi.quote}&quot;</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-forest">{testi.name}</p>
                    <p className="text-sm text-ink/60">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link
              href="/testimoni"
              className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 text-sm text-forest transition-colors hover:bg-forest hover:text-paper"
            >
              Lihat Semua Testimoni <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="border-b border-forest/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-medium tracking-widest text-gold uppercase">Jurnal</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-forest md:text-4xl">
              Artikel Terbaru
            </h2>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Produk Sayuran, Sumber Serat Alami",
                date: "12 Okt 2026",
                category: "Edukasi",
                desc: "Manfaat sayuran segar berserat tinggi yang baik untuk pencernaan dan kesehatan jantung.",
              },
              {
                title: "Sumber Protein Hewani dari Peternakan Lokal",
                date: "08 Okt 2026",
                category: "Gizi",
                desc: "Pentingnya memilih protein hewani yang bebas residu antibiotik untuk keluarga.",
              },
              {
                title: "Mengenal Beras Rindjing Lebih Dekat",
                date: "01 Okt 2026",
                category: "Produk",
                desc: "Proses panjang di balik beras pulen organik dari lahan binaan kami di Semarang.",
              }
            ].map((article, i) => (
              <Link key={i} href="/artikel" className="group flex flex-col rounded-3xl border border-forest/10 bg-paper overflow-hidden transition-all hover:shadow-md hover:border-forest/20">
                <div className="aspect-[4/3] bg-forest/5 relative overflow-hidden flex items-center justify-center">
                  <Leaf className="h-16 w-16 text-forest/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-medium text-ink/50">
                      <span className="text-gold uppercase tracking-wider">{article.category}</span>
                      <span>&bull;</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl text-forest group-hover:text-gold transition-colors">{article.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70 line-clamp-2">{article.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-forest">
                    Baca Selengkapnya <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 text-sm text-forest transition-colors hover:bg-forest hover:text-paper"
            >
              Lihat Semua Artikel <ArrowRight className="h-4 w-4" />
            </Link>
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
