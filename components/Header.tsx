"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/ekosistem", label: "Ekosistem" },
  { href: "/investor", label: "Untuk Investor" },
  { href: "/artikel", label: "Artikel" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-2xl font-semibold text-forest">
          Cetrofarm
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://shop.cetrofarm.com/"
            className="rounded-full bg-forest px-5 py-2 text-sm text-paper transition-colors hover:bg-forest-deep"
          >
            Belanja Produk
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 bg-ink mb-1.5" />
          <span className="block h-0.5 w-6 bg-ink mb-1.5" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-forest/10 px-6 pb-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm text-ink/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://shop.cetrofarm.com/" className="py-2 text-sm font-medium text-forest">
            Belanja Produk
          </a>
        </nav>
      )}
    </header>
  );
}
