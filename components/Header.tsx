"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/ekosistem", label: "Ekosistem" },
  { href: "/investor", label: "Untuk Investor" },
  { href: "/artikel", label: "Artikel" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];
import { Menu } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl font-semibold text-forest">
          Cetrofarm
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-forest hover:text-forest/70 font-medium transition-colors">Beranda</Link>
          <Link to="/tentang" className="text-forest hover:text-forest/70 font-medium transition-colors">Tentang</Link>
          <Link to="/ekosistem" className="text-forest hover:text-forest/70 font-medium transition-colors">Ekosistem</Link>
          <Link to="/produk" className="text-forest hover:text-forest/70 font-medium transition-colors">Katalog Produk</Link>
          <Link to="/keberlanjutan" className="text-forest hover:text-forest/70 font-medium transition-colors">Keberlanjutan</Link>
          <Link to="/artikel" className="text-forest hover:text-forest/70 font-medium transition-colors">Artikel</Link>
          <Link to="/investor" className="text-forest hover:text-forest/70 font-medium transition-colors">Investor</Link>
          <Link to="/kontak" className="px-5 py-2 bg-forest text-cream font-medium rounded-sm hover:bg-forest/90 transition-colors">Hubungi Kami</Link>
        </nav>

        <button className="md:hidden text-forest" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream border-t border-forest/10 px-4 py-6 shadow-xl absolute w-full left-0 z-50">
          <nav className="flex flex-col gap-6 text-center">
            <Link to="/" className="text-forest font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
            <Link to="/tentang" className="text-forest font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
            <Link to="/ekosistem" className="text-forest font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Ekosistem</Link>
            <Link to="/produk" className="text-forest font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Katalog Produk</Link>
            <Link to="/keberlanjutan" className="text-forest font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Keberlanjutan</Link>
            <Link to="/artikel" className="text-forest font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Artikel</Link>
            <Link to="/investor" className="text-forest font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Investor</Link>
            <Link to="/kontak" className="inline-block mt-4 px-6 py-3 bg-forest text-cream font-medium rounded-sm mx-auto" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Kami</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
