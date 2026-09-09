import { createFileRoute } from '@tanstack/react-router'
import { Download, Target, TrendingUp, Handshake, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { investorMetrics, legalities } from '../data/investor-content'
import { target2030, clients } from '../data/company'

export const Route = createFileRoute('/investor')({
  component: InvestorPage,
  head: () => ({
    meta: [
      { title: 'Investor & Kemitraan | Cetrofarm' },
      { name: 'description', content: 'Investasi di ekosistem pangan dan agrikultur Indonesia bersama Cetrofarm.' },
      { property: 'og:title', content: 'Investor & Kemitraan | Cetrofarm' },
    ],
  }),
})

function InvestorPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const FORM_ID = "h1z6x0p2wu6"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('loading')
    try {
      // @ts-ignore
      const forminit = new window.Forminit()
      const formData = new FormData(e.currentTarget)
      const { error } = await forminit.submit(FORM_ID, formData)
      if (error) {
        setSubmitStatus('error')
        setErrorMessage(error.message)
      } else {
        setSubmitStatus('success')
        e.currentTarget.reset()
      }
    } catch (err) {
      setSubmitStatus('error')
      setErrorMessage('Terjadi kesalahan jaringan.')
    }
  }

  return (
    <div className="w-full bg-cream min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full pt-32 pb-24 flex items-center bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-panen-golden-hour.webp" 
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
                href="#inquiry-form" 
                className="px-8 py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white hover:shadow-lg transition-all"
              >
                Mulai Diskusi
              </a>
              <a 
                href="/documents/cetrofarm-company-profile-2026.pdf"
                download
                className="px-8 py-4 bg-transparent border-2 border-cream/30 text-cream font-bold rounded-sm hover:bg-cream/10 transition-all flex items-center gap-2"
              >
                <Download size={18}/> Download Company Profile (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision 2030 */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Target className="w-16 h-16 text-wheat mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold text-forest mb-6">Vision 2030</h2>
          <p className="text-2xl text-forest/80 leading-relaxed font-light">
            Menjadi pemain terbaik agribisnis di Indonesia dengan pertumbuhan minimum <span className="font-bold text-forest">{target2030.growthPerYear} per tahun</span> dan struktur keuangan yang solid pada 2030.
          </p>
        </div>
      </section>

      {/* 3. Target 5 Tahun ke Depan */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Target 5 Tahun ke Depan</h2>
            <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream/30 p-8 rounded-sm text-center border border-forest/10">
              <TrendingUp className="w-12 h-12 text-forest mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-forest mb-2">{target2030.valuationIncrease}</h3>
              <p className="text-forest/70">Proyeksi peningkatan valuasi perusahaan hingga akhir 2030</p>
            </div>
            <div className="bg-cream/30 p-8 rounded-sm text-center border border-forest/10">
              <Target className="w-12 h-12 text-forest mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-forest mb-2">{target2030.marketShareOrganicVeg} & {target2030.marketShareChicken}</h3>
              <p className="text-forest/70">Market share sayuran organik (20%) dan daging ayam (10%) di Jawa</p>
            </div>
            <div className="bg-cream/30 p-8 rounded-sm text-center border border-forest/10">
              <Handshake className="w-12 h-12 text-forest mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-forest mb-2">{target2030.beneficiaryFarmers}</h3>
              <p className="text-forest/70">Petani penerima manfaat di seluruh rantai pasok</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategi */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Strategi Kami</h2>
          <div className="w-24 h-1 bg-wheat mx-auto rounded-full mb-12"></div>
          <div className="grid gap-6 text-left">
            <div className="flex gap-4 items-start bg-white p-6 rounded-sm shadow-sm">
              <CheckCircle className="text-wheat shrink-0 mt-1" size={24} />
              <p className="text-forest/80 text-lg">Ekspansi pasar se-Jawa dan akses pasar ekspor untuk memperluas jangkauan distribusi.</p>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-sm shadow-sm">
              <CheckCircle className="text-wheat shrink-0 mt-1" size={24} />
              <p className="text-forest/80 text-lg">Transformasi organisasi dari fase survival ke sistem manajemen yang matang dan berkelanjutan.</p>
            </div>
            <div className="flex gap-4 items-start bg-white p-6 rounded-sm shadow-sm">
              <CheckCircle className="text-wheat shrink-0 mt-1" size={24} />
              <p className="text-forest/80 text-lg">Penguatan kepercayaan investor melalui transparansi dan akuntabilitas untuk akselerasi pertumbuhan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Klien / Mitra Modern Trade */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-forest mb-8">Dipercaya Oleh Mitra Modern Trade</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            {clients.map((client) => (
              <img key={client.name} src={client.logo} alt={client.name} className="h-16 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Form Investor */}
      <section className="py-24 bg-forest text-cream" id="inquiry-form">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-wheat mb-4">Inquiry Investor</h2>
            <p className="text-cream/80">Silakan tinggalkan pesan untuk pertanyaan lebih lanjut atau peluang investasi.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-sm border border-cream/10">
            {submitStatus === 'success' ? (
              <div className="bg-wheat/20 p-6 rounded-sm text-center">
                <h3 className="font-bold text-wheat text-xl mb-2">Pesan Terkirim!</h3>
                <p className="text-cream/90 mb-4">Terima kasih atas ketertarikan Anda. Tim kami akan segera menghubungi Anda.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-2 bg-wheat text-forest rounded-sm font-medium"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="fi-sender-userId" value="investor-inquiry" />
                
                <div>
                  <label className="block text-sm font-bold mb-1 text-cream">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    name="fi-sender-fullName"
                    required
                    className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-cream">Email *</label>
                    <input 
                      type="email" 
                      name="fi-sender-email"
                      required
                      className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-cream">Perusahaan / Instansi</label>
                    <input 
                      type="text" 
                      name="fi-sender-company"
                      className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-cream">Pesan Anda *</label>
                  <textarea 
                    name="fi-text-message"
                    required
                    rows={4} 
                    className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat"
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm font-bold">{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-colors disabled:opacity-50"
                >
                  {submitStatus === 'loading' ? 'Mengirim...' : 'Kirim Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
