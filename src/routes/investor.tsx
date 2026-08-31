import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, Download, Handshake, BarChart3, Users, Leaf, ArrowUpRight, ChevronDown } from 'lucide-react'
import { TractionChart } from '../components/TractionChart'
import { saveLead } from '../server/actions'

export const Route = createFileRoute('/investor')({
  component: InvestorPage,
  head: () => ({
    meta: [
      { title: 'Investor & Kemitraan | Cetrofarm' },
      { name: 'description', content: 'Investasi di ekosistem pangan dan agrikultur Indonesia. Peluang kemitraan strategis dengan Cetrofarm.' },
      { property: 'og:title', content: 'Investor & Kemitraan | Cetrofarm' },
      { property: 'og:description', content: 'Investasi di ekosistem pangan dan agrikultur Indonesia.' },
    ],
  }),
})

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-forest/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center hover:text-wheat transition-colors font-bold text-forest"
      >
        <span>{question}</span>
        <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-forest/70">{answer}</p>
      </div>
    </div>
  )
}

function InvestorPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    const formData = new FormData(e.currentTarget)
    
    // Tracking
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'submit_investor_form' })
    }

    try {
      const result = await saveLead({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        leadType: 'investor',
        message: `Nominal: ${formData.get('nominal')} - ${formData.get('message')}`,
      })
      
      if (result.success) {
        setFormStatus('success')
        e.currentTarget.reset()
      } else {
        setFormStatus('error')
      }
    } catch (err) {
      setFormStatus('error')
    }
  }

  return (
    <div className="w-full bg-cream min-h-screen">
      {/* Hero Investor */}
      <section className="bg-forest text-cream pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="0" r="80" fill="currentColor"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-6">Peluang Investasi</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Investasi di Masa Depan <span className="text-wheat italic">Pangan Indonesia.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed font-light">
              Membangun rantai pasok agrikultur yang efisien, transparan, dan menguntungkan sejak 2018. Tumbuh bersama ekosistem yang terintegrasi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/assets/company-profile.pdf" 
                target="_blank"
                onClick={() => window.dataLayer && window.dataLayer.push({ event: 'download_pitch_deck' })}
                className="px-8 py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Download size={18}/> Unduh Company Profile (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Cetrofarm */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform">
              <h3 className="text-forest font-bold mb-3 flex items-center gap-2"><BarChart3 size={20} className="text-wheat"/> Pasar Tumbuh</h3>
              <p className="text-forest/70 text-sm">Permintaan stabil pada sektor ritel dan HORECA untuk bahan pangan segar berkualitas.</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform">
              <h3 className="text-forest font-bold mb-3 flex items-center gap-2"><Users size={20} className="text-wheat"/> Terintegrasi</h3>
              <p className="text-forest/70 text-sm">Kendali penuh dari hulu (petani) hingga hilir (distribusi) untuk efisiensi margin maksimal.</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform">
              <h3 className="text-forest font-bold mb-3 flex items-center gap-2"><Handshake size={20} className="text-wheat"/> Berpengalaman</h3>
              <p className="text-forest/70 text-sm">Tim pendiri dan praktisi agrikultur yang telah mengeksekusi model ini sejak 2018.</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-xl border border-forest/5 hover:-translate-y-1 transition-transform">
              <h3 className="text-forest font-bold mb-3 flex items-center gap-2"><Leaf size={20} className="text-wheat"/> Dampak Sosial</h3>
              <p className="text-forest/70 text-sm">Setiap Rupiah investasi Anda meningkatkan taraf hidup 210+ mitra peternak lokal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traksi & Market Size (Chart) */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Traksi & Pertumbuhan</h2>
            <p className="text-forest/70">Pertumbuhan yang konsisten diukur dari volume tonase dan pendapatan.</p>
          </div>
          <TractionChart />
        </div>
      </section>

      {/* Model Bisnis */}
      <section className="py-16 bg-white border-y border-forest/5">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-serif font-bold text-forest mb-12">Model Bisnis Rantai Pasok</h2>
          <img src="/assets/ilustrasi-rantai-pasok.png" alt="Diagram Alur Rantai Pasok" className="w-full max-w-4xl mx-auto rounded-sm shadow-lg" />
        </div>
      </section>

      {/* FAQ Investor */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-forest mb-8 text-center">Pertanyaan Seputar Investasi</h2>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-forest/10">
            <FAQItem question="Apa struktur investasi yang ditawarkan?" answer="Saat ini kami menawarkan instrumen ekuitas (saham) dan skema utang konversi (convertible note) bergantung pada putaran pendanaan." />
            <FAQItem question="Berapa minimum nominal indikatif investasi?" answer="Minimum ukuran tiket bervariasi. Untuk putaran pra-seri A kami biasanya mulai dari ekuivalen Rp 500 Juta." />
            <FAQItem question="Bagaimana pelaporan berkala dilakukan?" answer="Investor mendapatkan laporan metrik keuangan dan operasional setiap kuartal, serta laporan tahunan teraudit." />
            <FAQItem question="Kapan timeline putaran pendanaan ini ditutup?" answer="Target penutupan putaran (closing) akan dilakukan pada Q3 2026." />
            <FAQItem question="Apa opsi exit strategy bagi investor?" answer="Opsi exit meliputi M&A dengan pemain logistik yang lebih besar, secondary market sale pada putaran berikutnya, atau buyback dari perusahaan (syarat dan ketentuan berlaku)." />
          </div>
        </div>
      </section>

      {/* Form Jadwalkan Diskusi */}
      <section id="form-diskusi" className="py-24 bg-forest text-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Jadwalkan Diskusi</h2>
              <p className="text-cream/80 mb-8 leading-relaxed">
                Tinggalkan detail Anda. Tim representatif kami akan menghubungi Anda secara privat dalam 1x24 jam untuk membahas peluang kemitraan strategis.
              </p>
              
              <a href="https://wa.me/6285860300111?text=Halo%20Cetrofarm,%20saya%20tertarik%20membahas%20peluang%20investasi." target="_blank" rel="noreferrer" 
                 onClick={() => window.dataLayer && window.dataLayer.push({ event: 'click_wa_investor' })}
                 className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-sm hover:opacity-90 transition-opacity">
                Hubungi via WhatsApp
              </a>
            </div>

            <div className="bg-white text-forest p-8 rounded-sm">
              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-wheat/20 rounded-full flex items-center justify-center mx-auto mb-4 text-forest">
                    <Handshake size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Terima Kasih!</h3>
                  <p className="text-forest/70">Pengajuan Anda telah kami terima. Kami akan segera menghubungi Anda kembali.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">Nama Lengkap *</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Email *</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">No. HP / WhatsApp *</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Nominal Indikatif *</label>
                    <select name="nominal" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30">
                      <option value="">Pilih Rentang</option>
                      <option value="< 100 Juta">&lt; Rp 100 Juta</option>
                      <option value="100 - 500 Juta">Rp 100 Juta - Rp 500 Juta</option>
                      <option value="500 Juta - 1 Miliar">Rp 500 Juta - Rp 1 Miliar</option>
                      <option value="> 1 Miliar">&gt; Rp 1 Miliar</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Pesan (Opsional)</label>
                    <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"></textarea>
                  </div>
                  
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-sm font-bold">Terjadi kesalahan. Silakan coba lagi.</p>
                  )}

                  <button type="submit" disabled={formStatus === 'loading'} className="w-full py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-wheat/80 transition-colors flex items-center justify-center gap-2">
                    {formStatus === 'loading' ? 'Mengirim...' : 'Kirim Pengajuan'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
