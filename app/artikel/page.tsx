export const metadata = { title: "Artikel — Cetrofarm" };

const ARTICLES = [
  {
    t: "Sayuran, Sumber Serat Alami",
    d: "Bagaimana kami memilih dan merawat sayuran segar dari lahan dataran tinggi Bergas sampai siap dikonsumsi.",
    date: "01 Des 2023",
  },
  {
    t: "Sumber Protein Hewani",
    d: "Susu, telur, dan daging melalui proses seleksi sumber yang ketat bersama peternak binaan.",
    date: "01 Des 2023",
  },
  {
    t: "Bahan Pokok yang Selalu Ada di Dapur",
    d: "Beras, minyak, dan gula — kebutuhan dasar yang kami jaga ketersediaan dan mutunya.",
    date: "30 Nov 2023",
  },
];

export default function Artikel() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-soil">Artikel</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-forest md:text-5xl">
        Catatan dari ladang dan gudang kami
      </h1>

      <div className="mt-14 divide-y divide-forest/10 border-t border-forest/10">
        {ARTICLES.map((a) => (
          <article key={a.t} className="grid gap-2 py-8 md:grid-cols-[140px_1fr] md:gap-8">
            <p className="text-sm text-ink/50">{a.date}</p>
            <div>
              <h2 className="font-display text-xl text-forest">{a.t}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">{a.d}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
