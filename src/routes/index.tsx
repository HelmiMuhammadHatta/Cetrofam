import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Leaf, ShieldCheck, Users, MoveRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { metrics, products, valueProps, steps, testimonials, articles } from '../data/content'
import { TractionChart } from '../components/TractionChart'
import { NewsletterForm } from '../components/NewsletterForm'
import { CountUp } from '../components/CountUp'
import { trackEvent } from '../utils/analytics'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const Route = createFileRoute('/')({
  component: Homepage,
  head: () => ({
    meta: [
      { title: 'Cetrofarm | Ekosistem Agrikultur Terintegrasi' },
      { name: 'description', content: 'Cetrofarm adalah perusahaan agrikultur yang terintegrasi dari hulu ke hilir. Menyediakan bahan pangan berkualitas untuk konsumen, offtaker B2B, dan investor.' },
      { property: 'og:title', content: 'Cetrofarm | Ekosistem Agrikultur Terintegrasi' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Cetrofarm",
          "image": "https://cetrofarm.vercel.app/assets/hero-panen-golden-hour.webp",
          "telephone": "024 6933 5138",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Setro Raya, Desa Gondoriyo, Kec. Bergas",
            "addressLocality": "Semarang",
            "addressRegion": "Jawa Tengah",
            "postalCode": "50552",
            "addressCountry": "ID"
          }
        })
      }
    ]
  })
})

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

function Homepage() {
  return (
    <div className="w-full">
      {/* 2. Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center pt-10">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-panen-golden-hour.webp"
            alt="Petani memanen saat golden hour"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 to-forest/20 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-transparent to-cream z-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-cream">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }
            }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Membangun Ketahanan Pangan, <span className="text-wheat italic">Satu Panen Sekaligus.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl font-light leading-relaxed">
              Cetrofarm merawat rantai pasok pangan dari petani binaan langsung ke meja Anda. Memberikan kepastian bagi offtaker dan kesejahteraan bagi petani sejak 2018.
            </p>
            <div className="flex flex-wrap gap-4 mb-16 relative z-20">
              <a href="/tentang" onClick={() => trackEvent('cta_click', { button: 'Lihat Profil' })} className="px-6 py-3 bg-wheat text-forest font-bold rounded-sm hover:bg-white hover:shadow-lg transition-all flex items-center gap-2">
                Lihat Profil Perusahaan <ArrowRight size={18} />
              </a>
              <a href="/investor" onClick={() => trackEvent('cta_click', { button: 'Peluang Investasi' })} className="px-6 py-3 bg-transparent border-2 border-cream text-cream font-bold rounded-sm hover:bg-cream/10 transition-all">
                Peluang Investasi
              </a>
            </div>

            {/* Panel Metrik */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-cream/20 relative z-20">
              <div>
                <p className="text-4xl font-serif font-bold text-wheat">
                  <CountUp end={210} suffix="+" />
                </p>
                <p className="text-sm text-cream/90 font-medium uppercase tracking-wider mt-1">Mitra Peternak</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-wheat">
                  <CountUp end={340} suffix=" ha" />
                </p>
                <p className="text-sm text-cream/90 font-medium uppercase tracking-wider mt-1">Lahan Kelola</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-wheat">
                  <CountUp end={5} suffix=" lini" />
                </p>
                <p className="text-sm text-cream/90 font-medium uppercase tracking-wider mt-1">Lini Bisnis</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-wheat">
                  <CountUp end={2018} duration={1.5} />
                </p>
                <p className="text-sm text-cream/90 font-medium uppercase tracking-wider mt-1">Tahun Berdiri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Trust bar (Marquee) */}
      <section className="bg-cream py-10 border-b border-forest/10 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-forest/60 text-sm font-medium uppercase tracking-widest">Dipercaya oleh mitra strategis & sertifikasi mutu</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 opacity-60 grayscale transition-all group-hover:grayscale-0">
            <span className="font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4"><ShieldCheck size={28} /> Sertifikasi Organik</span>
            <span className="font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4"><ShieldCheck size={28} /> Sertifikasi Halal MUI</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Ritel Modern Partner</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Hotel & Restoran</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Distributor Regional</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Mitra Ekspor</span>
          </div>
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 opacity-60 grayscale transition-all group-hover:grayscale-0 absolute top-0" style={{ transform: 'translateX(100%)' }} aria-hidden="true">
            <span className="font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4"><ShieldCheck size={28} /> Sertifikasi Organik</span>
            <span className="font-serif text-2xl font-bold flex items-center gap-2 text-forest mx-4"><ShieldCheck size={28} /> Sertifikasi Halal MUI</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Ritel Modern Partner</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Hotel & Restoran</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Distributor Regional</span>
            <span className="font-serif text-2xl font-bold text-forest mx-4">Mitra Ekspor</span>
          </div>
        </div>
      </section>

      {/* 4. Value proposition */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest mb-4">Membawa Alam Lebih Dekat</h2>
            <p className="text-forest/70">Kami tidak hanya menanam, kami merawat sebuah ekosistem kehidupan yang memberikan nilai tambah di setiap tahapnya.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-forest/5 rounded-full flex items-center justify-center text-forest mb-6">
                  {idx === 0 ? <MoveRight size={28} /> : idx === 1 ? <ShieldCheck size={28} /> : <Users size={28} />}
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest mb-3">{prop.title}</h3>
                <p className="text-forest/70 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Ekosistem rantai pasok */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-24 bg-forest text-cream"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-serif font-bold mb-6">Ekosistem Rantai Pasok Terintegrasi</h2>
              <p className="text-cream/80 text-lg mb-8 leading-relaxed">
                Menghubungkan kerja keras petani langsung ke meja makan keluarga Anda dengan memotong rantai distribusi yang tidak efisien.
              </p>
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-2xl font-serif text-wheat font-bold">{step.num}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                      <p className="text-cream/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/assets/ilustrasi-rantai-pasok.webp" alt="Alur Ekosistem Rantai Pasok" loading="lazy" className="rounded-sm w-full shadow-2xl" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. Tiga lini produk */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-forest mb-4">Kategori Produk</h2>
              <p className="text-forest/70">Kualitas premium untuk kebutuhan keluarga maupun offtaker B2B.</p>
            </div>
            <a href="/produk" className="hidden md:flex items-center gap-2 text-forest font-medium hover:text-wheat transition-colors">
              Lihat Semua Katalog <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map(p => (
              <div key={p.id} className="group block bg-white rounded-sm overflow-hidden border border-forest/10 hover:shadow-xl transition-all h-full flex flex-col cursor-pointer" onClick={() => window.location.href = `/produk#${p.id}`}>
                <div className="h-64 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="text-2xl font-serif font-bold text-forest mb-3">{p.title}</h3>
                  <p className="text-forest/70 mb-8 flex-grow">{p.desc}</p>
                  <div className="flex flex-col gap-3 mt-auto">
                    <span className="text-wheat font-medium flex items-center gap-2 group-hover:gap-4 transition-all">Pelajari Lebih Lanjut <ArrowRight size={16} /></span>
                    <a href={`https://wa.me/6285800500111?text=${encodeURIComponent(`Halo Cetrofarm, saya tertarik meminta penawaran untuk produk ${p.title}.`)}`} target="_blank" rel="noreferrer" onClick={(e) => { e.stopPropagation(); window.dataLayer && window.dataLayer.push({ event: 'click_wa_product', product: p.title }) }} className="w-full text-center py-2 border border-forest/20 text-forest font-bold rounded-sm hover:bg-forest hover:text-cream transition-colors text-sm">
                      Minta Penawaran (B2B)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <a href="/produk" className="inline-flex items-center gap-2 text-forest font-medium border-b border-forest pb-1">
              Lihat Semua Katalog <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* 7 & 8. Jaminan Mutu & Traction */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-20 bg-forest/5 border-y border-forest/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-forest mb-8">Standar & Traksi Kami</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Leaf className="text-wheat shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-forest text-lg">100% Organik & Bebas Kimia</h4>
                    <p className="text-forest/70 mt-1">Praktik pertanian ramah lingkungan bersertifikasi organik untuk sebagian besar lahan.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="text-wheat shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-forest text-lg">Quality Control Ketat</h4>
                    <p className="text-forest/70 mt-1">Setiap hasil panen melewati proses penyortiran di warehouse terpusat.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm border border-forest/10 shadow-sm">
              <h3 className="text-xl font-bold text-forest mb-6">Pertumbuhan Ekosistem (Per Bulan)</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-forest font-medium">Volume Panen</span>
                    <span className="text-forest font-bold">{metrics.harvestVolume}</span>
                  </div>
                  <div className="w-full bg-forest/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-forest w-[80%] h-full rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-forest font-medium">Jangkauan Distribusi</span>
                    <span className="text-forest font-bold">{metrics.distributionReach}</span>
                  </div>
                  <div className="w-full bg-forest/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-wheat w-[65%] h-full rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. Testimoni */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-forest mb-16">Dipercaya oleh Mereka</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 border border-forest/10 rounded-sm">
                <div className="text-wheat mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.9433H11.4571V3H21V14.9433L18.4343 21H14.017ZM3.56 21L5.954 14.9433H1V3H10.5429V14.9433L7.97714 21H3.56Z" />
                  </svg>
                </div>
                <p className="text-forest/80 text-lg mb-6 italic leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-forest">{t.author}</p>
                  <p className="text-sm text-forest/60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 10. Section Investor */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-24 bg-forest text-cream"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-6">Peluang Tumbuh Bersama</h2>
            <p className="text-cream/80 text-lg mb-8 leading-relaxed">
              Model bisnis yang teruji dengan margin offtaker stabil, skalabilitas perluasan lahan, serta dukungan data analitik pertanian. Bergabunglah sebagai mitra strategis untuk memperkuat ketahanan pangan nasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/investor" className="px-6 py-3 bg-wheat text-forest font-medium rounded-sm hover:bg-white transition-colors">
                Baca Profil untuk Investor
              </a>
              <a
                href="/documents/cetrofarm-company-profile-2026.pdf"
                download
                className="px-6 py-3 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors flex items-center gap-2"
              >
                <Download size={18} /> Unduh Company Profile (PDF)
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <TractionChart />
          </div>
        </div>
      </motion.section>

      {/* 11. Artikel Terbaru */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif font-bold text-forest">Kabar Terbaru</h2>
            <a href="/artikel" className="hidden md:flex items-center gap-2 text-forest font-medium hover:text-wheat transition-colors">
              Lihat Semua Artikel <ArrowRight size={18} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <a href={`/artikel/${art.slug}`} key={idx} className="group block">
                <div className="overflow-hidden rounded-sm mb-4 h-56 border border-forest/10">
                  <img src={art.image} alt={art.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-sm text-wheat font-medium mb-2">{art.date}</p>
                <h3 className="text-xl font-bold text-forest mb-2 group-hover:text-forest/80 transition-colors">{art.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 12. Lead Magnet Band */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="relative py-16 text-cream border-y border-forest/10" style={{ backgroundImage: 'url(/assets/bg-newsletter.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-forest/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-4">Tetap Terhubung dengan Inovasi Pangan</h2>
          <p className="mb-8 max-w-xl mx-auto">Dapatkan Katalog Produk, update panen musim ini, dan Ringkasan Investasi langsung ke inbox Anda.</p>
          <NewsletterForm />
        </div>
      </motion.section>
    </div>
  )
}
