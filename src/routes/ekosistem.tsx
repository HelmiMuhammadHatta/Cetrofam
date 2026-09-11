import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { MapPin, Target, TrendingUp, Sprout, Trees, Droplets, Wheat, Building, CheckCircle2 } from 'lucide-react'
import { businessLines, cultivationProcess } from '../data/company'
import { JavaMap, activeNodes } from '../components/JavaMap'

export const Route = createFileRoute('/ekosistem')({
  component: EkosistemPage,
  head: () => ({
    meta: [
      { title: 'Ekosistem Rantai Pasok Agrikultur | Cetrofarm' },
      { name: 'description', content: 'Model Business Aggregator Cetrofarm menghubungkan kelompok tani binaan dengan jaringan distribusi B2B secara efisien.' },
      { property: 'og:title', content: 'Ekosistem Rantai Pasok Agrikultur | Cetrofarm' },
      { property: 'og:description', content: 'Memotong rantai distribusi panjang untuk memberikan nilai tambah adil bagi petani & offtaker.' }
    ]
  })
})

const fadeUpVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

function EkosistemPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* 1. Intro Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeUpVariant} className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <span className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-sm text-xs font-bold tracking-widest uppercase mb-4">
          Integrator Agrikultur
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6 leading-tight">
          Model Bisnis Aggregator Agrikultur
        </h1>
        <p className="text-forest/80 text-lg leading-relaxed max-w-3xl mx-auto">
          Cetrofarm mengonsolidasikan rantai pasok agrikultur dari Farmers ke B2B Offtakers. Menghubungkan petani, pengolah, logistik rantai dingin, dan mitra pasar dalam satu ekosistem efisien.
        </p>
      </motion.section>

      {/* 2. Coverage Map Visual & Accessible Text List */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="bg-forest rounded-sm p-8 md:p-12 text-cream shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Accessible Location List */}
            <div className="lg:w-1/2">
              <span className="text-xs font-bold text-wheat uppercase tracking-widest block mb-2">Sebaran Operasional</span>
              <h2 className="text-3xl font-serif font-bold mb-6 text-cream">Lokasi Node & Hub Kemitraan</h2>
              <p className="text-cream/80 text-sm mb-8 leading-relaxed">
                Pusat pengolahan dan R&D kami berlokasi di Semarang, didukung oleh jaringan perwakilan komersial di Bandung serta sentra budidaya binaan di 5 kabupaten Jawa Tengah.
              </p>
              
              <div className="space-y-4">
                {activeNodes.map((node, idx) => (
                  <div key={idx} className="bg-white/10 p-4 rounded-sm border border-cream/10 flex gap-3 items-start">
                    <MapPin className="text-wheat shrink-0 mt-1" size={20} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-base text-cream">{node.name}</span>
                        <span className="text-[10px] bg-wheat/20 text-wheat px-2 py-0.5 rounded font-bold uppercase">{node.type}</span>
                      </div>
                      <p className="text-xs text-cream/70 leading-relaxed">{node.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* SVG Java Map */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-sm overflow-hidden shadow-2xl border border-white/10 bg-forest-deep p-4">
                <JavaMap />
                <p className="text-[11px] text-cream/60 text-center mt-3 italic">
                  * Visualisasi lokasi hub aktif & rute logistik utama di Pulau Jawa
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. 5 Business Lines Cards */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-forest uppercase tracking-widest block mb-2">Portofolio Produksi</span>
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">5 Lini Bisnis Ekosistem</h2>
          <div className="w-20 h-1 bg-forest/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLines.map((line, idx) => (
            <motion.div 
              key={line.id} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
              }}
              className="bg-white p-6 rounded-sm shadow-md border-t-4 border-forest hover:shadow-lg transition-all border border-forest/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-cream px-2 py-0.5 rounded text-forest border border-forest/10">
                    {line.status}
                  </span>
                  <span className="text-xs font-bold text-forest">{line.capacity}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-forest mb-3">{line.title}</h3>
                <p className="text-forest/80 text-xs leading-relaxed mb-4">{line.desc}</p>
              </div>
              <div className="pt-3 border-t border-forest/10 text-[10px] text-forest/50">
                {line.source}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Standarized Cultivation Process */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-forest uppercase tracking-widest block mb-2">Standard Operating Procedure</span>
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Proses Budidaya Terstandarisasi</h2>
          <div className="w-20 h-1 bg-forest/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultivationProcess.map((step, idx) => (
            <motion.div 
              key={step.step} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.15 } }
              }}
              className="text-center group bg-white p-6 rounded-sm shadow-sm border border-forest/10"
            >
              <div className="relative mb-6 overflow-hidden rounded-full w-20 h-20 mx-auto shadow-md bg-cream flex items-center justify-center border-2 border-forest group-hover:bg-forest transition-colors">
                <div className="text-forest group-hover:text-cream transition-colors">
                  {idx === 0 && <Sprout size={36} />}
                  {idx === 1 && <Trees size={36} />}
                  {idx === 2 && <Droplets size={36} />}
                  {idx === 3 && <Wheat size={36} />}
                </div>
              </div>
              <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-1">Tahap {step.step}</span>
              <h3 className="text-lg font-serif font-bold text-forest mb-2">{step.title}</h3>
              <p className="text-forest/70 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
