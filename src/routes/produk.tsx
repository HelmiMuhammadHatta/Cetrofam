import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produk')({
  component: ProdukPage,
  head: () => ({
    meta: [
      { title: 'Produk Segar & Bahan Pokok | Cetrofarm' },
      { name: 'description', content: 'Katalog sayuran segar, beras, dan protein hewani dari Cetrofarm untuk offtaker B2B dan ritel.' },
      { property: 'og:title', content: 'Produk Segar & Bahan Pokok | Cetrofarm' },
    ]
  })
})

function ProdukPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Katalog Produk</h1>
        <p className="text-forest/80 text-lg">Halaman sedang dalam pengembangan.</p>
      </div>
    </div>
  )
}
