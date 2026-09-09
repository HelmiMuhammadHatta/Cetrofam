import { createFileRoute } from '@tanstack/react-router'
import { products, certifications } from '../data/company'

export const Route = createFileRoute('/produk')({
  component: ProdukPage,
  head: () => ({
    meta: [
      { title: 'Produk Segar & Bahan Pokok | Cetrofarm' },
      { name: 'description', content: 'Katalog sayuran segar, beras, dan protein hewani dari Cetrofarm.' },
      { property: 'og:title', content: 'Produk Segar & Bahan Pokok | Cetrofarm' },
    ]
  })
})

function ProdukPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Katalog Produk</h1>
        <p className="text-forest/80 text-lg leading-relaxed">
          Menyediakan bahan pangan segar dan sehat untuk memenuhi kebutuhan harian Anda.
        </p>
      </section>

      {/* Product Categories Section */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.category} className="bg-white p-8 rounded-sm shadow-md border border-forest/10">
              <h2 className="text-2xl font-serif font-bold text-forest mb-4">{product.category}</h2>
              <p className="text-forest/80 text-lg leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Sertifikasi & Jaminan Kualitas</h2>
          <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white p-6 rounded-sm shadow-md flex flex-col items-center text-center">
              <img 
                src={cert.image} 
                alt={cert.name} 
                className="h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-forest mb-2">{cert.name}</h3>
              <p className="text-forest/70 font-semibold mb-1">{cert.issuer}</p>
              <p className="text-wheat font-bold text-sm uppercase tracking-wider">{cert.grade}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
