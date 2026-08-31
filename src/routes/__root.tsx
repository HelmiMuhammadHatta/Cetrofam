import { HeadContent, Scripts, Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'
import { ShieldCheck, Mail } from 'lucide-react'
import { saveLead } from '../server/actions'

import '../styles.css'

function NotFound() {
  return (
    <div className="w-full bg-cream min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-serif font-bold text-forest mb-4">404</h1>
      <h2 className="text-2xl font-bold text-forest mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-forest/70 mb-8 max-w-md">
        Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak lagi tersedia.
      </p>
      <a href="/" className="px-8 py-3 bg-forest text-cream font-bold rounded-sm hover:bg-forest/90 transition-colors">
        Kembali ke Beranda
      </a>
    </div>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: '/assets/og-image.png' },
      { property: 'og:title', content: 'Cetrofarm - Agrikultur Terintegrasi Indonesia' },
      { property: 'og:description', content: 'Cetrofarm merawat rantai pasok pangan dari petani binaan sampai meja konsumen. Memberikan kepastian bagi offtaker dan kesejahteraan bagi petani.' },
      { name: 'description', content: 'Perusahaan agrikultur terintegrasi yang menghubungkan petani lokal dengan offtaker ritel, hotel, dan restoran. Sertifikasi organik dan standar mutu tinggi.' },
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
      { rel: 'canonical', href: 'https://cetrofarm.com' }
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PT Cetrofarm Pangan Nusantara",
          "url": "https://cetrofarm.com",
          "logo": "https://cetrofarm.com/assets/favicon.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-85-8603-00-111",
            "contactType": "customer service"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Setro Raya, Desa Gondoriyo, Kec. Bergas",
            "addressLocality": "Semarang",
            "addressRegion": "Jawa Tengah",
            "postalCode": "50552",
            "addressCountry": "ID"
          }
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
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
          <a href="/faq" className="hover:text-wheat transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/investor" className="hidden lg:inline-flex px-5 py-2.5 bg-forest text-cream rounded-sm hover:bg-forest/90 transition-all font-bold text-sm">
            Kemitraan B2B
          </a>
        </div>
      </div>
    </header>
  )
}

function NewsletterForm() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)
    
    try {
      const result = await saveLead({
        name: 'Newsletter Subscriber',
        email: formData.get('email') as string,
        leadType: 'newsletter',
      })
      
      if (result.success) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 relative">
      <input 
        type="email" 
        name="email"
        required
        placeholder="Email Anda" 
        className="px-4 py-2 w-full text-forest rounded-sm bg-cream focus:outline-none focus:ring-2 focus:ring-wheat" 
      />
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="px-4 py-2 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-colors disabled:opacity-70"
      >
        {status === 'loading' ? '...' : 'Kirim'}
      </button>
      {status === 'success' && (
        <p className="absolute -bottom-6 text-xs text-wheat font-bold">Terima kasih telah berlangganan!</p>
      )}
      {status === 'error' && (
        <p className="absolute -bottom-6 text-xs text-red-400 font-bold">Terjadi kesalahan. Coba lagi.</p>
      )}
    </form>
  )
}

function Footer() {
  return (
    <footer className="bg-forest text-cream py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-serif font-bold mb-4">Cetrofarm<span className="text-wheat">.</span></h2>
          <p className="text-cream/80 text-sm leading-relaxed mb-6">
            bringing nature inside.<br/>
            Merawat rantai pasok pangan dari petani binaan sampai meja keluarga Anda, sejak 2018.
          </p>
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 text-sm text-cream/90 font-bold">
              <ShieldCheck size={18} className="text-wheat"/> Bersertifikat Organik
            </span>
            <span className="flex items-center gap-2 text-sm text-cream/90 font-bold">
              <ShieldCheck size={18} className="text-wheat"/> Terdaftar Kemenkumham & NIB
            </span>
          </div>
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
            <a href="/produk" className="hover:text-white transition-colors">Katalog Produk</a>
            <a href="/investor" className="hover:text-white transition-colors">Peluang Investasi</a>
            <a href="/faq" className="hover:text-white transition-colors">Pusat Bantuan (FAQ)</a>
            <a href="/kontak" className="hover:text-white transition-colors">Hubungi Kami</a>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-4 text-wheat">Newsletter</h3>
          <p className="text-cream/80 text-sm mb-4">Dapatkan info produk terbaru dan ringkasan peluang investasi bulanan.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/50 text-sm">
        <p>&copy; {new Date().getFullYear()} PT Cetrofarm Pangan Nusantara. Hak Cipta Dilindungi.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-cream transition-colors">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-cream transition-colors">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  )
}
