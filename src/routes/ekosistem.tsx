import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { MapPin, TrendingUp, Users, Target } from 'lucide-react'
import { businessLines, cultivationProcess } from '../data/company'
import { JavaMap } from '../components/JavaMap'

export const Route = createFileRoute('/ekosistem')({
  component: EkosistemPage,
  head: () => ({
    meta: [
      { title: 'Ekosistem Terintegrasi | Cetrofarm' },
      { name: 'description', content: 'Cetrofarm memotong rantai pasok panjang untuk menguntungkan petani dan konsumen.' },
      { property: 'og:title', content: 'Ekosistem Terintegrasi | Cetrofarm' },
    ]
  })
})

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

function EkosistemPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeUpVariant} className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Kami adalah Business Aggregator</h1>
        <p className="text-forest/80 text-xl leading-relaxed">
          Mengonsolidasikan supply chain dari Farmers ke Consumers. Melibatkan Trader, Exporter, Financier, Agri Investor, App Developer, dan Inspector untuk membangun ekosistem yang fair.
        </p>
      </motion.section>

      {/* Coverage Map Visual */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="bg-forest rounded-sm p-8 md:p-12 text-cream shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4">Jangkauan Ekosistem Kami</h2>
              <p className="text-cream/80 mb-8 leading-relaxed">
                Dimulai dari pusat budidaya di Jawa Tengah, kini kami mendistribusikan hasil bumi berkualitas ke ritel modern dan offtaker di berbagai kota besar di Pulau Jawa, serta mempersiapkan lini ekspor berkelanjutan.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-wheat mb-2">
                    <MapPin size={20} />
                    <span className="font-bold">Semarang (HQ)</span>
                  </div>
                  <p className="text-sm text-cream/70">Pusat R&D dan Warehouse utama untuk 100+ kelompok tani.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-wheat mb-2">
                    <MapPin size={20} />
                    <span className="font-bold">Bandung (Rep)</span>
                  </div>
                  <p className="text-sm text-cream/70">Perwakilan komersial untuk penetrasi pasar Jawa Barat.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-wheat mb-2">
                    <Target size={20} />
                    <span className="font-bold">Distribusi Nasional</span>
                  </div>
                  <p className="text-sm text-cream/70">B2B, Ritel Modern, Hotel, & Restoran.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-wheat mb-2">
                    <TrendingUp size={20} />
                    <span className="font-bold">Target Ekspor</span>
                  </div>
                  <p className="text-sm text-cream/70">Persiapan standar global untuk pasar Asia Tenggara.</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="rounded-sm overflow-hidden shadow-2xl relative border border-white/10 bg-forest-deep flex items-center justify-center p-4">
                <JavaMap />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Business Lines Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">5 Lini Bisnis Kami</h2>
          <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLines.map((line, idx) => (
            <motion.div 
              key={line.id} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }
              }}
              className="bg-white p-6 rounded-sm shadow-md border-t-4 border-wheat hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-forest mb-2">{line.title}</h3>
              <p className="text-forest/80">{line.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Cultivation Process Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Proses Budidaya Terstandarisasi</h2>
          <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultivationProcess.map((step, idx) => (
            <motion.div 
              key={step.step} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.15 } }
              }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg">
                <img 
                  src={step.image} 
                  alt={step.title}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-wheat text-forest w-10 h-10 flex items-center justify-center font-bold text-xl rounded-full shadow-md z-10">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">{step.title}</h3>
              <p className="text-forest/80 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
