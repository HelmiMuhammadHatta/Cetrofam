import { HeadContent, Scripts, Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: '/assets/og-image.png' },
      { property: 'og:title', content: 'Cetrofarm - Agrikultur Terintegrasi' },
      { property: 'og:description', content: 'Membangun Ketahanan Pangan, Satu Panen Sekaligus.' },
    ],
    links: [
      { rel: 'icon', href: '/assets/favicon.png', type: 'image/png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:ital,wght@0,300..900;1,300..900&display=swap',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cream/20 bg-cream/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-serif text-forest font-bold tracking-tight">
          Cetrofarm<span className="text-wheat">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/tentang" className="hover:text-wheat transition-colors">Tentang</a>
          <a href="/ekosistem" className="hover:text-wheat transition-colors">Ekosistem</a>
          <a href="/produk" className="hover:text-wheat transition-colors">Produk</a>
          <a href="/investor" className="hover:text-wheat transition-colors">Investor</a>
          <a href="/artikel" className="hover:text-wheat transition-colors">Artikel</a>
          <a href="/kontak" className="hover:text-wheat transition-colors">Kontak</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/produk" className="hidden lg:inline-flex px-5 py-2.5 bg-forest text-cream rounded-sm hover:bg-forest/90 transition-all font-medium text-sm">
            Belanja Produk
          </a>
          <a href="/investor" className="hidden lg:inline-flex px-5 py-2.5 border border-forest text-forest rounded-sm hover:bg-forest/5 transition-all font-medium text-sm">
            Untuk Investor
          </a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-forest text-cream py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-serif font-bold mb-6">Cetrofarm<span className="text-wheat">.</span></h2>
          <p className="text-cream/80 text-sm leading-relaxed">
            bringing nature inside.<br/>
            Merawat rantai pasok pangan dari petani binaan sampai meja keluarga Anda, sejak 2018.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-4 text-wheat">Kontak Kami</h3>
          <address className="not-italic text-cream/80 text-sm space-y-3">
            <p>Jl. Setro Raya, Desa Gondoriyo,<br/>Kec. Bergas, Kab. Semarang</p>
            <p>024 6933 5138</p>
            <p>+62 85 8603 00 111</p>
            <p>customerrelation@cetrofarm.com</p>
          </address>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-4 text-wheat">Tautan</h3>
          <ul className="text-cream/80 text-sm space-y-3 flex flex-col">
            <a href="/tentang" className="hover:text-white transition-colors">Tentang Kami</a>
            <a href="/produk" className="hover:text-white transition-colors">Produk</a>
            <a href="/investor" className="hover:text-white transition-colors">Peluang Investasi</a>
            <a href="/artikel" className="hover:text-white transition-colors">Artikel & Berita</a>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-4 text-wheat">Newsletter</h3>
          <p className="text-cream/80 text-sm mb-4">Dapatkan info produk terbaru dan ringkasan peluang investasi.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email Anda" className="px-4 py-2 w-full text-forest rounded-sm bg-cream focus:outline-none focus:ring-2 focus:ring-wheat" />
            <button type="submit" className="px-4 py-2 bg-wheat text-forest font-medium rounded-sm hover:bg-white transition-colors">Kirim</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-cream/10 text-center text-cream/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Cetrofarm. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  )
}
