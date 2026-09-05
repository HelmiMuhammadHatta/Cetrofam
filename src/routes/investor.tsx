import { createFileRoute } from '@tanstack/react-router'
import { Download, CheckCircle, Target, Sprout, TrendingUp, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { investorMetrics, businessModel, roadmap, legalities } from '../data/investor-content'
import { PdfDownloadModal } from '../components/PdfDownloadModal'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const Route = createFileRoute('/investor')({
  component: InvestorPage,
  head: () => ({
    meta: [
      { title: 'Investor & Kemitraan | Cetrofarm' },
      { name: 'description', content: 'Investasi di ekosistem pangan dan agrikultur Indonesia bersama Cetrofarm.' },
      { property: 'og:title', content: 'Investor & Kemitraan | Cetrofarm' },
      { property: 'og:description', content: 'Investasi di ekosistem pangan dan agrikultur Indonesia.' },
    ],
  }),
})

function InvestorPage() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)

  return (
    <div className="w-full bg-cream min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full pt-32 pb-24 flex items-center bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-panen-golden-hour.png" 
            alt="Petani Cetrofarm" 
            fetchPriority="high"
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/80 to-forest z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-6">Peluang Tumbuh Bersama</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Ketahanan Pangan, <span className="text-wheat italic">Model Bisnis Teruji.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Bergabunglah dengan ekosistem agrikultur terintegrasi yang memberdayakan {investorMetrics.farmers} mitra peternak dan memotong inefisiensi rantai pasok demi margin yang lebih baik.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#hubungi-tim" 
                className="px-8 py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white hover:shadow-lg transition-all"
              >
                Mulai Diskusi
              </a>
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  if (window.dataLayer) window.dataLayer.push({ event: 'click_download_pitch_deck' })
                  setIsPdfModalOpen(true)
                }}
                className="px-8 py-4 bg-transparent border-2 border-cream/30 text-cream font-bold rounded-sm hover:bg-cream/10 transition-all flex items-center gap-2"
              >
                <Download size={18}/> Unduh Company Profile (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ringkasan Model Bisnis (TODO) */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center text-forest/50 border-2 border-dashed border-forest/20 py-12">
          {/* TODO: Implement Ringkasan model bisnis */}
          <p>Section 2: Ringkasan Model Bisnis Placeholder</p>
        </div>
      </section>

      {/* 3. Traksi & Metrik Kunci (TODO) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center text-forest/50 border-2 border-dashed border-forest/20 py-12">
          {/* TODO: Implement Traksi & metrik kunci (Chart) */}
          <p>Section 3: Traksi & Metrik Kunci Placeholder</p>
        </div>
      </section>

      {/* 4. Tim Manajemen (TODO) */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center text-forest/50 border-2 border-dashed border-forest/20 py-12">
          {/* TODO: Implement Tim manajemen / struktur kepemilikan */}
          <p>Section 4: Tim Manajemen Placeholder</p>
        </div>
      </section>

      {/* 5. Roadmap Ekspansi (TODO) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center text-forest/50 border-2 border-dashed border-forest/20 py-12">
          {/* TODO: Implement Roadmap ekspansi */}
          <p>Section 5: Roadmap Ekspansi Placeholder</p>
        </div>
      </section>

      {/* 6. Legalitas & Sertifikasi (TODO) */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center text-forest/50 border-2 border-dashed border-forest/20 py-12">
          {/* TODO: Implement Legalitas & sertifikasi */}
          <p>Section 6: Legalitas & Sertifikasi Placeholder</p>
        </div>
      </section>

      {/* 7. CTA Ganda (TODO) */}
      <section className="py-24 bg-forest text-cream" id="hubungi-tim">
        <div className="container mx-auto px-4 text-center text-cream/50 border-2 border-dashed border-cream/20 py-12">
          {/* TODO: Implement CTA ganda di akhir halaman */}
          <p>Section 7: CTA Ganda Placeholder</p>
        </div>
      </section>

      <PdfDownloadModal 
        isOpen={isPdfModalOpen} 
        onClose={() => setIsPdfModalOpen(false)} 
        pdfUrl="/assets/company-profile.pdf" 
      />
    </div>
  )
}
