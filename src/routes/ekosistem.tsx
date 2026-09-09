import { createFileRoute } from '@tanstack/react-router'
import { businessLines, cultivationProcess } from '../data/company'

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

function EkosistemPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Kami adalah Business Aggregator</h1>
        <p className="text-forest/80 text-xl leading-relaxed">
          Mengonsolidasikan supply chain dari Farmers ke Consumers. Melibatkan Trader, Exporter, Financier, Agri Investor, App Developer, dan Inspector untuk membangun ekosistem yang fair.
        </p>
      </section>

      {/* Business Lines Section */}
      <section className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">5 Lini Bisnis Kami</h2>
          <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLines.map((line) => (
            <div key={line.id} className="bg-white p-6 rounded-sm shadow-md border-t-4 border-wheat">
              <h3 className="text-xl font-bold text-forest mb-2">{line.title}</h3>
              <p className="text-forest/80">{line.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cultivation Process Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Proses Budidaya Terstandarisasi</h2>
          <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultivationProcess.map((step) => (
            <div key={step.step} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-wheat text-forest w-10 h-10 flex items-center justify-center font-bold text-xl rounded-full shadow-md z-10">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">{step.title}</h3>
              <p className="text-forest/80 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
