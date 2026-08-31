export const metadata = { title: "Kontak — Cetrofarm" };

export default function Kontak() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-soil">Kontak</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-forest md:text-5xl">
        Mari bicarakan kemitraan yang sesuai
      </h1>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <div className="space-y-6 text-ink/80">
          <div>
            <p className="text-sm text-ink/50">Alamat</p>
            <p className="mt-1">Jl. Setro Raya, Desa Gondoriyo, Kecamatan Bergas, Kabupaten Semarang</p>
          </div>
          <div>
            <p className="text-sm text-ink/50">Telepon</p>
            <p className="mt-1">024 69335130 &nbsp;/&nbsp; +62 85 800 500 111</p>
          </div>
          <div>
            <p className="text-sm text-ink/50">Email</p>
            <p className="mt-1">customerrelation@cetrofarm.com</p>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-ink/70" htmlFor="name">Nama</label>
            <input id="name" name="name" className="mt-1 w-full rounded-lg border border-forest/20 bg-white/60 px-4 py-2.5 outline-none focus:border-forest" />
          </div>
          <div>
            <label className="text-sm text-ink/70" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="mt-1 w-full rounded-lg border border-forest/20 bg-white/60 px-4 py-2.5 outline-none focus:border-forest" />
          </div>
          <div>
            <label className="text-sm text-ink/70" htmlFor="topic">Perihal</label>
            <select id="topic" name="topic" className="mt-1 w-full rounded-lg border border-forest/20 bg-white/60 px-4 py-2.5 outline-none focus:border-forest">
              <option>Kemitraan &amp; Investasi</option>
              <option>Distribusi &amp; Ritel</option>
              <option>Pertanyaan Produk</option>
              <option>Lainnya</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-ink/70" htmlFor="message">Pesan</label>
            <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-lg border border-forest/20 bg-white/60 px-4 py-2.5 outline-none focus:border-forest" />
          </div>
          <button type="submit" className="rounded-full bg-forest px-6 py-3 text-sm text-paper transition-colors hover:bg-forest-deep">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}
