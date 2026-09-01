import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-paper/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-gold-soft">Cetrofarm</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">
            Ekosistem pangan yang menghubungkan petani binaan, produksi
            berkelanjutan, dan meja makan keluarga Indonesia — berbasis di
            Bergas, Kabupaten Semarang.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-gold-soft">Perusahaan</p>
          <ul className="space-y-2 text-sm text-paper/70">
            <li><Link to={"/tentang" as any} className="hover:text-paper">Tentang Kami</Link></li>
            <li><Link to={"/ekosistem" as any} className="hover:text-paper">Ekosistem</Link></li>
            <li><Link to="/investor" className="hover:text-paper">Untuk Investor</Link></li>
            <li><Link to={"/artikel" as any} className="hover:text-paper">Artikel</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-gold-soft">Kontak</p>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>Jl. Setro Raya, Desa Gondoriyo, Kec. Bergas, Kab. Semarang</li>
            <li>024 69335130</li>
            <li>+62 85 800 500 111</li>
            <li>customerrelation@cetrofarm.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 px-6 py-6 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} Cetrofarm. Bringing nature inside.
      </div>
    </footer>
  );
}
