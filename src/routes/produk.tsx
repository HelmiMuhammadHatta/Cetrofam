import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Search, PackageCheck, Truck, ShieldCheck } from 'lucide-react'
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

function ProdukPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeUpVariant} className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Katalog Produk</h1>
        <p className="text-forest/80 text-lg leading-relaxed">
          Menyediakan bahan pangan segar dan sehat untuk memenuhi kebutuhan harian Anda.
        </p>
      </motion.section>

      {/* Product Categories Section */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={product.category} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.2 } }
              }}
              className="bg-white p-8 rounded-sm shadow-md border border-forest/10"
            >
              <h2 className="text-2xl font-serif font-bold text-forest mb-4">{product.category}</h2>
              <p className="text-forest/80 text-lg leading-relaxed">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Traceability Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-forest text-cream py-24 mb-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Transparansi Rantai Pasok (Traceability)</h2>
          <p className="text-cream/80 text-lg mb-16 max-w-2xl mx-auto">
            Setiap produk kami dapat dilacak asal-usulnya untuk memastikan kualitas dan keamanan pangan bagi Anda.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-cream/20 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-forest-deep rounded-full border-4 border-wheat flex items-center justify-center mb-4">
                <Search className="text-wheat" size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">1. Panen Lahan</h4>
              <p className="text-sm text-cream/70">Bibit diseleksi & ditanam di lahan binaan bersertifikasi.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-forest-deep rounded-full border-4 border-wheat flex items-center justify-center mb-4">
                <ShieldCheck className="text-wheat" size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">2. Quality Control</h4>
              <p className="text-sm text-cream/70">Sortasi ketat di fasilitas terpusat bebas kontaminasi.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-forest-deep rounded-full border-4 border-wheat flex items-center justify-center mb-4">
                <PackageCheck className="text-wheat" size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">3. Pengemasan</h4>
              <p className="text-sm text-cream/70">Dikemas higienis dengan sistem barcode *batch tracking*.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-forest-deep rounded-full border-4 border-wheat flex items-center justify-center mb-4">
                <Truck className="text-wheat" size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">4. Distribusi</h4>
              <p className="text-sm text-cream/70">Pengiriman rantai dingin (cold chain) langsung ke mitra.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="container mx-auto px-4 max-w-5xl">
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
                className="h-32 object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-xl font-bold text-forest mb-2">{cert.name}</h3>
              <p className="text-forest/70 font-semibold mb-1">{cert.issuer}</p>
              <p className="text-wheat font-bold text-sm uppercase tracking-wider">{cert.grade}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
