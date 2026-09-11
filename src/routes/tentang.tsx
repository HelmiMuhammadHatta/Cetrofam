import { createFileRoute } from '@tanstack/react-router'
import { companyData, teamMembers } from '../data/company'
import { TeamMemberAvatar } from '../components/TeamMemberAvatar'
import { CheckCircle, Target, Leaf, HeartHandshake, Zap, Clock, Building2 } from 'lucide-react'

export const Route = createFileRoute('/tentang')({
  component: TentangPage,
  head: () => ({
    meta: [
      { title: 'Tentang Kami | Profil & Manajemen Cetrofarm' },
      { name: 'description', content: 'Profil perusahaan, visi-misi, nilai inti, sejarah perjalanan, dan tim manajemen PT. Cetro Tama Indonesia (Cetrofarm).' },
      { property: 'og:title', content: 'Tentang Kami | Profil & Manajemen Cetrofarm' },
      { property: 'og:description', content: 'Cetrofarm merawat akar agrikultur untuk membangun ketahanan pangan terintegrasi di Jawa Tengah.' }
    ]
  })
})

const coreValues = [
  { icon: <Leaf size={24} />, title: "Sustainability", desc: "Praktik agrikultur regeneratif yang menjaga kesehatan tanah & ekosistem." },
  { icon: <HeartHandshake size={24} />, title: "Fair Trade", desc: "Kepastian harga beli yang adil bagi petani binaan kami di awal musim." },
  { icon: <CheckCircle size={24} />, title: "Quality Control", desc: "Standarisasi ketat mulai dari penyemaian hingga pengiriman cold chain." },
  { icon: <Zap size={24} />, title: "Agility", desc: "Adaptif terhadap dinamika iklim dan kebutuhan spesifik pasar B2B." }
];

const timeline = [
  { year: "2018", title: "Awal Berdiri", desc: "Memulai pengelolaan lahan 10 ha di Kab. Semarang untuk komoditas sayuran daun." },
  { year: "2020", title: "Ekspansi Jaringan B2B", desc: "Menjalin kemitraan perdana dengan ritel modern dan merangkul 50+ petani binaan." },
  { year: "2022", title: "Sertifikasi & Warehouse", desc: "Meraih sertifikasi NKV & Organik, serta membangun fasilitas sortir terpusat." },
  { year: "2026", title: "Ekosistem Terintegrasi", desc: "Mengelola 340 ha lahan binaan, 210+ petani, dan 5 lini bisnis utama di Pulau Jawa." }
];

function TentangPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* 1. Intro Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <span className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-sm text-xs font-bold tracking-widest uppercase mb-4">
          Profil Perusahaan
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6 leading-tight">
          Kami Merawat Akar, <span className="text-forest/80 italic">Agar Anda Memanen Kebaikan.</span>
        </h1>
        <p className="text-forest/80 text-lg leading-relaxed max-w-3xl mx-auto">
          PT. Cetro Tama Indonesia (Cetrofarm) adalah business aggregator agrikultur terintegrasi yang menjembatani kesejahteraan petani binaan dengan kepastian pasokan pangan berkualitas bagi pasar B2B.
        </p>
      </section>

      {/* 2. Hero Image Banner */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="rounded-sm overflow-hidden shadow-xl border border-forest/10 relative">
          <img 
            src="/assets/hero-panen-golden-hour.webp" 
            alt="Kegiatan panen bersama tim dan petani binaan Cetrofarm" 
            fetchPriority="high"
            width={1200}
            height={600}
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
      </section>

      {/* 3. Visi & Misi & Nilai Inti */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-forest mb-4 flex items-center gap-3">
              <Target className="text-forest" size={28}/> Visi Kami
            </h2>
            <p className="text-forest/80 text-base leading-relaxed border-l-4 border-forest/40 pl-4 mb-8">
              "Menjadi integrator rantai pasok pangan (Agri-Food) terdepan di Indonesia yang berpusat pada kesejahteraan petani binaan dan kelestarian lingkungan."
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-forest mb-4">Misi Perusahaan</h3>
            <ul className="space-y-3 text-forest/80 text-sm">
              <li className="flex gap-2.5 items-start"><CheckCircle className="text-forest shrink-0 mt-0.5" size={18}/> Menerapkan praktik budidaya ramah lingkungan dan terstandarisasi.</li>
              <li className="flex gap-2.5 items-start"><CheckCircle className="text-forest shrink-0 mt-0.5" size={18}/> Mengintegrasikan teknologi pasca-panen untuk menekan post-harvest loss &lt; 5%.</li>
              <li className="flex gap-2.5 items-start"><CheckCircle className="text-forest shrink-0 mt-0.5" size={18}/> Memberikan kepastian harga beli adil bagi petani & harga jual stabil bagi offtaker.</li>
            </ul>
          </div>

          <div className="bg-forest p-8 text-cream rounded-sm shadow-xl">
            <h2 className="text-2xl font-serif font-bold mb-6 text-wheat">Nilai Inti (Core Values)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded border border-cream/10">
                  <div className="text-wheat mb-2">{val.icon}</div>
                  <h3 className="font-bold mb-1 text-base">{val.title}</h3>
                  <p className="text-cream/70 text-xs leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline Perjalanan */}
      <section className="bg-white py-20 mb-24 border-y border-forest/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-forest mb-3">Milestone Perjalanan</h2>
            <div className="w-20 h-1 bg-forest/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-forest/20">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-forest shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow text-wheat font-bold text-xs">
                  <Clock size={16}/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cream p-5 rounded-sm shadow-sm border border-forest/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-forest text-base">{item.title}</h3>
                    <span className="text-forest font-bold bg-white px-2 py-0.5 rounded text-xs border border-forest/10">{item.year}</span>
                  </div>
                  <p className="text-forest/70 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Unique Gallery Images */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-forest mb-2">Dokumentasi Lapangan</h2>
          <p className="text-forest/70 text-sm">Aktivitas budidaya lahan binaan & pengolahan terpusat Cetrofarm.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-sm overflow-hidden border border-forest/10 shadow-md bg-white">
            <img 
              src="/assets/galeri_lahan_1.jpg" 
              alt="Lahan budidaya organik Cetrofarm di Gondoriyo Semarang" 
              loading="lazy" 
              width={600}
              height={400}
              className="w-full h-[260px] object-cover" 
            />
            <p className="p-3 text-xs text-forest/70 font-medium text-center">Lahan Budidaya Gondoriyo, Kab. Semarang</p>
          </div>
          <div className="rounded-sm overflow-hidden border border-forest/10 shadow-md bg-white">
            <img 
              src="/assets/galeri_lahan_2.jpg" 
              alt="Fasilitas greenhouse modern Cetrofarm" 
              loading="lazy" 
              width={600}
              height={400}
              className="w-full h-[260px] object-cover" 
            />
            <p className="p-3 text-xs text-forest/70 font-medium text-center">Fasilitas Greenhouse & Pembiakan Bibit</p>
          </div>
        </div>
      </section>

      {/* 6. Management Team Section */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-forest uppercase tracking-widest block mb-2">Kepemimpinan</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">Tim Management Inti</h2>
          <div className="w-20 h-1 bg-forest/30 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, idx) => (
            <div key={member.name} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 bg-white p-8 rounded-sm shadow-sm border border-forest/10`}>
              {/* <div className="w-48 md:w-56 shrink-0">
                <TeamMemberAvatar 
                  src={member.image} 
                  alt={`${member.name} — ${member.role}`} 
                  sizeClassName="w-48 h-48 md:w-56 md:h-56"
                />
              </div> */}
              <div className={`flex-1 text-center ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-2xl font-serif font-bold text-forest mb-1">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-sm text-xs font-bold tracking-wider uppercase mb-4">
                  {member.role}
                </span>
                <p className="text-forest/80 leading-relaxed text-sm">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Legal Information */}
      <section className="container mx-auto px-4 max-w-3xl text-center border-t border-forest/10 pt-16">
        <h2 className="text-xl font-serif font-bold text-forest mb-6 flex items-center justify-center gap-2">
          <Building2 size={20} /> Legalitas Resmi Badan Hukum
        </h2>
        <div className="bg-white p-6 rounded-sm shadow-sm border border-forest/10 inline-block text-left w-full text-xs">
          <table className="w-full text-forest/80">
            <tbody>
              <tr className="border-b border-forest/5"><td className="py-2.5 font-bold w-1/3">Nama Badan Hukum</td><td className="py-2.5">{companyData.legalName}</td></tr>
              <tr className="border-b border-forest/5"><td className="py-2.5 font-bold">Tahun Berdiri</td><td className="py-2.5">{companyData.established}</td></tr>
              <tr className="border-b border-forest/5"><td className="py-2.5 font-bold">Nomor Induk Berusaha (NIB)</td><td className="py-2.5 font-mono">{companyData.nib}</td></tr>
              <tr><td className="py-2.5 font-bold">Fokus Bisnis</td><td className="py-2.5">{companyData.description}</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
