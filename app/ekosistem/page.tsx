export const metadata = { title: "Ekosistem — Cetrofarm" };

const PILLARS = [
  {
    t: "Petani Sayur",
    d: "Lebih dari 120 petani sayur dataran tinggi di sekitar Bergas dan Ambarawa, didampingi mulai dari pemilihan bibit hingga panen.",
  },
  {
    t: "Peternak Domba & Sapi Perah",
    d: "Peternak binaan yang memasok susu segar harian, dengan standar kebersihan kandang dan pakan yang dipantau berkala.",
  },
  {
    t: "Peternak Ayam",
    d: "Jaringan peternak ayam petelur dan ayam kampung yang menyuplai telur dan daging untuk lini protein hewani Cetrofarm.",
  },
  {
    t: "Distribusi & Ritel",
    d: "Armada rantai dingin dan toko daring yang menjaga kesegaran produk dari gudang sampai ke tangan pelanggan.",
  },
];

export default function Ekosistem() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-soil">Ekosistem</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-forest md:text-5xl">
        Empat pilar yang saling menopang
      </h1>
      <p className="mt-6 max-w-xl text-ink/80 leading-relaxed">
        Ekosistem Cetrofarm bukan sekadar rantai pasok — setiap pilar dirawat
        agar yang satu tidak bisa berjalan sehat tanpa yang lain.
      </p>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-forest/10 sm:grid-cols-2">
        {PILLARS.map((p) => (
          <div key={p.t} className="bg-paper p-8">
            <h2 className="font-display text-xl text-forest">{p.t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-forest/15 bg-white/50 p-8 md:p-10">
        <h2 className="font-display text-2xl text-forest">Sertifikasi & standar</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          Lini sayuran Cetrofarm dikelola sesuai standar pertanian organik
          bersertifikat, dengan audit lahan berkala dan larangan penggunaan
          bahan kimia sintetis pada tahap produksi.
        </p>
      </div>
    </div>
  );
}
