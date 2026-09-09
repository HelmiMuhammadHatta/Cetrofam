import { createFileRoute } from '@tanstack/react-router'
import { Leaf, Droplets, Users, ShieldCheck, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { CountUp } from '../components/CountUp'

export const Route = createFileRoute('/keberlanjutan')({
  component: KeberlanjutanPage,
  head: () => ({
    meta: [
      { title: 'Keberlanjutan & ESG | Cetrofarm' },
      { name: 'description', content: 'Komitmen Cetrofarm terhadap lingkungan, sosial, dan tata kelola perusahaan yang baik (ESG).' }
    ]
  })
})

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

function KeberlanjutanPage() {
  return (
    <div className="w-full">
      {/* 1. Header */}
      <section className="bg-forest text-cream pt-32 pb-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <Leaf className="mx-auto mb-6 text-wheat" size={48} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Masa Depan Bumi Ada di Tangan Kita</h1>
            <p className="text-lg text-cream/80 leading-relaxed">
              Cetrofarm berkomitmen mengintegrasikan Environmental, Social, dan Governance (ESG) dalam setiap aspek bisnis agrikultur kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Impact Metrics */}
      <section className="py-24 bg-cream border-b border-forest/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 bg-white rounded-sm shadow-sm border border-forest/5">
              <Users className="mx-auto mb-4 text-forest" size={36} />
              <p className="text-4xl font-serif font-bold text-wheat mb-2">
                <CountUp end={8000} suffix="+" />
              </p>
              <h3 className="font-bold text-forest mb-2">Petani Terdampak</h3>
              <p className="text-sm text-forest/70">Meningkatkan kesejahteraan dan kepastian harga.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 bg-white rounded-sm shadow-sm border border-forest/5">
              <Leaf className="mx-auto mb-4 text-forest" size={36} />
              <p className="text-4xl font-serif font-bold text-wheat mb-2">
                <CountUp end={95} suffix="%" />
              </p>
              <h3 className="font-bold text-forest mb-2">Bebas Pestisida</h3>
              <p className="text-sm text-forest/70">Peralihan masif ke pupuk organik dan alami.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 bg-white rounded-sm shadow-sm border border-forest/5">
              <Droplets className="mx-auto mb-4 text-forest" size={36} />
              <p className="text-4xl font-serif font-bold text-wheat mb-2">
                <CountUp end={1.2} duration={2} suffix="Jt" />
              </p>
              <h3 className="font-bold text-forest mb-2">Liter Air Dihemat</h3>
              <p className="text-sm text-forest/70">Efisiensi sistem irigasi pintar (drip irrigation).</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 bg-white rounded-sm shadow-sm border border-forest/5">
              <Sun className="mx-auto mb-4 text-forest" size={36} />
              <p className="text-4xl font-serif font-bold text-wheat mb-2">
                <CountUp end={45} suffix="%" />
              </p>
              <h3 className="font-bold text-forest mb-2">Energi Terbarukan</h3>
              <p className="text-sm text-forest/70">Penggunaan panel surya di fasilitas pasca-panen.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Program Utama */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Pilar Keberlanjutan Kami</h2>
            <p className="text-forest/70">Tiga fokus utama untuk memastikan dampak positif yang berkesinambungan.</p>
          </div>

          <div className="space-y-16">
            {/* Environmental */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img src="/assets/hero-panen-golden-hour.webp" alt="Lingkungan" className="rounded-sm w-full h-80 object-cover shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="text-wheat" size={28} />
                  <h3 className="text-2xl font-serif font-bold text-forest">Lingkungan (Environmental)</h3>
                </div>
                <p className="text-forest/80 leading-relaxed mb-4">
                  Kami mempromosikan praktik pertanian regeneratif. Ini berarti mengembalikan nutrisi ke dalam tanah, bukan hanya mengambilnya. Kami mengurangi jejak karbon melalui efisiensi logistik rantai pasok pendek dan meminimalkan limbah (food waste) hingga di bawah 5%.
                </p>
                <ul className="list-disc pl-5 text-forest/70 space-y-2">
                  <li>Pengelolaan limbah sayur menjadi kompos (Circular Economy).</li>
                  <li>Sertifikasi Organik untuk memutus ketergantungan pada bahan kimia sintetis.</li>
                </ul>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <div className="bg-forest/5 w-full h-80 rounded-sm flex items-center justify-center border border-forest/10">
                  <span className="text-forest/40">Placeholder Foto Petani</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-wheat" size={28} />
                  <h3 className="text-2xl font-serif font-bold text-forest">Sosial (Social)</h3>
                </div>
                <p className="text-forest/80 leading-relaxed mb-4">
                  Petani adalah mitra setara kami, bukan sekadar pemasok. Melalui model *Socio-entrepreneurship*, kami memberikan kepastian harga beli (contract farming) yang melindungi petani dari fluktuasi harga pasar yang ekstrem.
                </p>
                <ul className="list-disc pl-5 text-forest/70 space-y-2">
                  <li>Pendampingan agronomi gratis secara berkala.</li>
                  <li>Inklusi finansial dan akses modal bagi petani kecil.</li>
                  <li>Penyerapan tenaga kerja lokal di area fasilitas pasca-panen.</li>
                </ul>
              </div>
            </motion.div>

            {/* Governance */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="bg-forest/5 w-full h-80 rounded-sm flex items-center justify-center border border-forest/10">
                  <span className="text-forest/40">Placeholder Foto Kantor/Sertifikat</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-wheat" size={28} />
                  <h3 className="text-2xl font-serif font-bold text-forest">Tata Kelola (Governance)</h3>
                </div>
                <p className="text-forest/80 leading-relaxed mb-4">
                  Transparansi dan integritas adalah kunci kepercayaan. Cetrofarm menerapkan standar tata kelola perusahaan yang ketat, diaudit oleh pihak independen, dan mematuhi regulasi ketahanan pangan nasional.
                </p>
                <ul className="list-disc pl-5 text-forest/70 space-y-2">
                  <li>Sertifikasi Halal dan NKV (Nomor Kontrol Veteriner).</li>
                  <li>Kebijakan anti-penyuapan dan transparansi harga ke petani.</li>
                  <li>Laporan keberlanjutan tahunan bagi para pemangku kepentingan.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
