import { createFileRoute } from '@tanstack/react-router'
import { companyData, teamMembers } from '../data/company'
import { CheckCircle, Target, Leaf, HeartHandshake, Zap, Clock } from 'lucide-react'

export const Route = createFileRoute('/tentang')({
  component: TentangPage,
  head: () => ({
    meta: [
      { title: 'Tentang Kami | Cetrofarm' },
      { name: 'description', content: 'Kisah perjalanan Cetrofarm membangun ekosistem agrikultur terintegrasi di Jawa Tengah sejak 2018.' },
      { property: 'og:title', content: 'Tentang Kami | Cetrofarm' },
    ]
  })
})

const coreValues = [
  { icon: <Leaf />, title: "Sustainability", desc: "Praktik agrikultur regeneratif yang menjaga kesehatan tanah." },
  { icon: <HeartHandshake />, title: "Fair Trade", desc: "Harga beli yang adil bagi petani binaan kami di awal musim." },
  { icon: <CheckCircle />, title: "Quality Control", desc: "Standarisasi ketat mulai dari panen hingga pengiriman." },
  { icon: <Zap />, title: "Agility", desc: "Cepat beradaptasi terhadap perubahan iklim dan permintaan pasar." }
];

const timeline = [
  { year: "2018", title: "Awal Berdiri", desc: "Memulai dengan mengelola lahan seluas 10 ha di wilayah Kabupaten Semarang, fokus pada sayuran daun." },
  { year: "2020", title: "Ekspansi B2B", desc: "Menjalin kemitraan perdana dengan jaringan supermarket besar dan merekrut 50+ petani binaan." },
  { year: "2022", title: "Sertifikasi & Integrasi", desc: "Mendapatkan sertifikasi NKV dan Organik, serta membangun fasilitas warehouse modern." },
  { year: "2026", title: "National Scale", desc: "Mengelola 340 ha lahan, 210+ mitra peternak/petani, dengan distribusi menyebar di seluruh Jawa." }
];

function TentangPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <span className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-sm text-sm font-bold tracking-widest uppercase mb-6">Tentang Kami</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-8 leading-tight">
          Kami Merawat Akar, <span className="text-wheat italic">Agar Anda Memanen Kebaikan.</span>
        </h1>
        <p className="text-forest/80 text-xl leading-relaxed">
          Cetrofarm bukan sekadar perusahaan agrikultur. Kami adalah ekosistem yang menjembatani kesejahteraan petani dengan kepastian pasokan pangan bagi masyarakat.
        </p>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="rounded-sm overflow-hidden shadow-2xl relative">
          <img 
            src="/assets/hero-panen-golden-hour.webp" 
            alt="Tim Cetrofarm di Lapangan" 
            fetchPriority="high"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-forest mb-4 flex items-center gap-3">
              <Target className="text-wheat" size={32}/> Visi Kami
            </h2>
            <p className="text-forest/80 text-lg leading-relaxed border-l-4 border-wheat pl-4 mb-8">
              "Menjadi integrator rantai pasok pangan (Agri-Food) terdepan di Indonesia yang berpusat pada kesejahteraan petani dan kelestarian alam."
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-forest mb-4">Misi</h2>
            <ul className="space-y-3 text-forest/80">
              <li className="flex gap-2"><CheckCircle className="text-forest shrink-0 mt-1" size={18}/> Menerapkan praktik budidaya standar tinggi (GAP).</li>
              <li className="flex gap-2"><CheckCircle className="text-forest shrink-0 mt-1" size={18}/> Mengintegrasikan teknologi paska-panen untuk menekan *food waste*.</li>
              <li className="flex gap-2"><CheckCircle className="text-forest shrink-0 mt-1" size={18}/> Memberikan kepastian harga pasar bagi offtaker dan B2B.</li>
            </ul>
          </div>
          <div className="bg-forest p-8 md:p-12 text-cream rounded-sm shadow-xl">
            <h2 className="text-2xl font-serif font-bold mb-8">Nilai Inti (Core Values)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val, idx) => (
                <div key={idx}>
                  <div className="text-wheat mb-3">{val.icon}</div>
                  <h3 className="font-bold mb-2 text-lg">{val.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Perjalanan */}
      <section className="bg-white py-24 mb-24 border-y border-forest/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Perjalanan Cetrofarm</h2>
            <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-forest/20 before:to-transparent">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-wheat shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow flex-col text-xs font-bold text-forest">
                  <Clock size={16}/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cream p-6 rounded-sm shadow-sm border border-forest/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-forest text-lg">{item.title}</h3>
                    <span className="text-wheat font-bold bg-white px-2 py-1 rounded-sm shadow-sm">{item.year}</span>
                  </div>
                  <p className="text-forest/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Lahan */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Galeri Ekosistem Kami</h2>
          <p className="text-forest/70">Melihat lebih dekat proses di balik kualitas pangan Cetrofarm.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <img src="/assets/galeri_lahan_1.png" alt="Lahan organik Cetrofarm saat matahari terbit" className="w-full h-[300px] object-cover rounded-sm shadow-md" loading="lazy" />
          <img src="/assets/galeri_lahan_2.png" alt="Fasilitas budidaya greenhouse Cetrofarm" className="w-full h-[300px] object-cover rounded-sm shadow-md" loading="lazy" />
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 max-w-5xl mb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">Tim Kami</h2>
          <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {teamMembers.map((member, idx) => (
            <div key={member.name} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
              <div className="w-48 md:w-64 flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-wheat/30"
                />
              </div>
              <div className={`flex-1 text-center ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-2xl font-serif font-bold text-forest mb-1">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-4">{member.role}</span>
                <p className="text-forest/80 leading-relaxed text-lg">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legalitas Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center border-t border-forest/10 pt-16">
        <h2 className="text-2xl font-serif font-bold text-forest mb-8">Informasi Legal Perusahaan</h2>
        <div className="bg-white p-8 rounded-sm shadow-sm border border-forest/5 inline-block text-left mx-auto text-sm">
          <table className="text-forest/80">
            <tbody>
              <tr><td className="pr-8 py-2 font-bold">Nama Badan Hukum</td><td className="py-2">{companyData.legalName}</td></tr>
              <tr><td className="pr-8 py-2 font-bold">Tahun Berdiri</td><td className="py-2">{companyData.established}</td></tr>
              <tr><td className="pr-8 py-2 font-bold">Nomor Induk Berusaha (NIB)</td><td className="py-2">{companyData.nib}</td></tr>
              <tr><td className="pr-8 py-2 font-bold">Model Organisasi</td><td className="py-2">{companyData.description}</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
