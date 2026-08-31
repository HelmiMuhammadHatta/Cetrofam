export const metadata = { title: "Testimoni — Cetrofarm" };

// Catatan: isi di bawah ini masih placeholder — ganti dengan kutipan asli
// dari pelanggan/mitra sebelum situs ini live.
const TESTIMONIALS = [
  {
    quote:
      "Kesegaran sayurnya konsisten setiap minggu, dan kami akhirnya bisa menjelaskan ke pelanggan dari mana bahan baku kami berasal.",
    name: "Pemilik resto katering, Semarang",
  },
  {
    quote:
      "Susu segarnya sampai tanpa telat sejak pertama kali kami jadi pelanggan tetap.",
    name: "Pelanggan rumah tangga, Ungaran",
  },
];

export default function Testimoni() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-soil">Testimoni</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-forest md:text-5xl">
        Apa kata mereka yang sudah bekerja sama
      </h1>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <blockquote key={t.name} className="rounded-2xl border border-forest/15 bg-white/50 p-8">
            <p className="font-display text-xl leading-snug text-forest">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-ink/60">{t.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
