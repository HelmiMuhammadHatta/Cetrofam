import { createFileRoute } from '@tanstack/react-router'
import { companyData, teamMembers } from '../data/company'

export const Route = createFileRoute('/tentang')({
  component: TentangPage,
  head: () => ({
    meta: [
      { title: 'Tentang Kami | Cetrofarm' },
      { name: 'description', content: 'Kisah perjalanan Cetrofarm membangun ekosistem agrikultur terintegrasi sejak 2015.' },
      { property: 'og:title', content: 'Tentang Kami | Cetrofarm' },
    ]
  })
})

function TentangPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <span className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-sm text-sm font-bold tracking-widest uppercase mb-6">Tentang Kami</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-8 leading-tight">
          Seperti sayuran yang kita produksi, domba yang kami pelihara, sapi yang menghasilkan susu dan telor dari ayam; <span className="text-wheat italic">kami sangatlah beragam.</span>
        </h1>
        <p className="text-forest/80 text-xl leading-relaxed">
          Dan yang paling penting kami pribadi yang siap berkotor-kotor bersama petani dampingan kami untuk menyiapkan bahan makanan untuk anda.
        </p>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="rounded-sm overflow-hidden shadow-2xl relative">
          <img 
            src="https://cetrofarm.com/home/wp-content/uploads/2023/11/profil-1024x682.jpeg" 
            alt="Tim Cetrofarm di Lapangan" 
            fetchPriority="high"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Legalitas Section */}
      <section className="container mx-auto px-4 max-w-4xl mb-24 text-center">
        <h2 className="text-3xl font-serif font-bold text-forest mb-4">Legalitas</h2>
        <div className="w-24 h-1 bg-wheat mx-auto rounded-full mb-8"></div>
        <div className="bg-white p-8 rounded-sm shadow-md border border-forest/10 inline-block text-left mx-auto">
          <ul className="space-y-4 text-forest/80 text-lg">
            <li><strong>Nama Perusahaan:</strong> {companyData.legalName}</li>
            <li><strong>Tahun Berdiri:</strong> {companyData.established}</li>
            <li><strong>NIB:</strong> {companyData.nib}</li>
            <li><strong>Struktur:</strong> {companyData.description}</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 max-w-5xl">
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
    </div>
  )
}
