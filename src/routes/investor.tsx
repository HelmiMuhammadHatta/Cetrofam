import { createFileRoute } from '@tanstack/react-router'
import { Download, Target, TrendingUp, Handshake, CheckCircle, PieChart, Users, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { investorMetrics } from '../data/investor-content'
import { target2030 } from '../data/company'
import { submitInvestor } from '../server/actions'

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
        <p className="text-forest/70 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

function InvestorPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    }

    try {
      const result = await submitInvestor({ data })
      if (result.success) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Terjadi kesalahan.')
      }
    } catch (err) {
      setSubmitStatus('error')
      setErrorMessage('Gagal menghubungi server.')
    }
  }

  return (
    <div className="w-full bg-cream min-h-screen">
      {/* 1. Hero & Ringkasan Peluang */}
      <section className="relative w-full pt-32 pb-24 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-panen-golden-hour.webp" 
            alt="Petani Cetrofarm" 
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-multiply"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl text-center">
          <span className="inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-6">Peluang Investasi</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Rantai Pasok Pangan yang <span className="text-wheat italic">Terintegrasi & Menguntungkan.</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-10 leading-relaxed font-light">
            Cetrofarm menghadirkan solusi untuk inefisiensi agrikultur tradisional. Dengan 340+ ha lahan kelola dan 210+ mitra, kami menghubungkan offtaker langsung dengan produsen utama, menjamin stabilitas pasokan dan margin yang sehat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#inquiry-form" className="px-8 py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-all">Ajukan Kemitraan</a>
            <a href="/documents/cetrofarm-company-profile-2026.pdf" download className="px-8 py-4 bg-transparent border-2 border-cream/30 text-cream font-bold rounded-sm hover:bg-cream/10 transition-all flex items-center gap-2">
              <Download size={18}/> Unduh Deck PDF
            </a>
          </div>
        </div>
      </section>

      {/* 2. Market Size & Tren Pangan */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-forest mb-6">Market Size & Tren Pangan Jawa Tengah</h2>
              <p className="text-forest/70 mb-6 leading-relaxed">
                Kebutuhan bahan pangan pokok dan sayuran organik di Jawa Tengah terus meningkat 15% per tahun. Namun, rantai pasok panjang menyebabkan tingginya fluktuasi harga dan food waste hingga 20% di jalur tengkulak.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-forest/80"><CheckCircle className="text-wheat shrink-0" size={24} /> Permintaan Horeca (Hotel, Restoran, Cafe) kembali pulih dan mencari supplier tunggal terpercaya.</li>
                <li className="flex gap-3 text-forest/80"><CheckCircle className="text-wheat shrink-0" size={24} /> Kesadaran kelas menengah akan sayur bebas pestisida naik drastis pasca-pandemi.</li>
              </ul>
            </div>
            <div className="bg-cream/50 p-8 border border-forest/10 rounded-sm">
              <h3 className="text-xl font-bold text-forest mb-6 flex items-center gap-2"><PieChart className="text-wheat"/> Estimasi Pasar Sasaran</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="font-bold text-forest">Sayuran Organik Premium</span><span>Rp 45 Miliar/tahun</span></div>
                  <div className="w-full bg-cream h-2 rounded-full"><div className="bg-wheat h-2 rounded-full w-[45%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="font-bold text-forest">Bahan Pokok (Beras)</span><span>Rp 120 Miliar/tahun</span></div>
                  <div className="w-full bg-cream h-2 rounded-full"><div className="bg-forest h-2 rounded-full w-[85%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="font-bold text-forest">Protein Hewani</span><span>Rp 80 Miliar/tahun</span></div>
                  <div className="w-full bg-cream h-2 rounded-full"><div className="bg-forest/60 h-2 rounded-full w-[60%]"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Model Bisnis & Traksi */}
      <section className="py-24 bg-cream border-y border-forest/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Model Bisnis & Traksi Kuat</h2>
            <div className="w-24 h-1 bg-wheat mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-bold text-forest text-xl mb-3">Contract Farming</h3>
              <p className="text-forest/70 text-sm">Menghindari fluktuasi harga pasar dengan offtaker B2B tetap (Hotel, Supermarket). Kami menetapkan harga beli yang adil untuk petani di awal musim.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-bold text-forest text-xl mb-3">Direct-to-Consumer</h3>
              <p className="text-forest/70 text-sm">Penjualan sayur premium langsung melalui jaringan agen mandiri dengan margin ritel hingga 40%.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-bold text-forest text-xl mb-3">Value-Added Process</h3>
              <p className="text-forest/70 text-sm">Membangun cold storage dan grading facility untuk menekan post-harvest loss hingga di bawah 5%.</p>
            </div>
          </div>

          <div className="bg-forest text-cream p-8 md:p-12 rounded-sm grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif font-bold text-wheat mb-2">{investorMetrics.revenueGrowth}</div>
              <div className="text-sm uppercase tracking-wider text-cream/70">CAGR (3 Tahun)</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-wheat mb-2">{target2030.beneficiaryFarmers}</div>
              <div className="text-sm uppercase tracking-wider text-cream/70">Target Petani Mitra 2030</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-wheat mb-2">340 ha</div>
              <div className="text-sm uppercase tracking-wider text-cream/70">Lahan Terkelola</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-wheat mb-2">95%</div>
              <div className="text-sm uppercase tracking-wider text-cream/70">Retention Rate B2B</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Roadmap Penggunaan Dana */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Roadmap Penggunaan Dana</h2>
          <p className="text-forest/70 mb-12">Rencana strategis injeksi modal untuk fase pertumbuhan (Growth Stage) 2026-2028.</p>
          
          <div className="space-y-6 text-left relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-forest/20 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-wheat shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cream p-6 rounded-sm shadow-sm border border-forest/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-forest text-lg">Pusat Distribusi (Cold Storage)</h3>
                  <span className="text-wheat font-bold">40%</span>
                </div>
                <p className="text-forest/70 text-sm">Pembangunan gudang pendingin utama di Semarang untuk menekan waste rate dan memperpanjang masa simpan produk segar.</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-wheat shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cream p-6 rounded-sm shadow-sm border border-forest/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-forest text-lg">Ekspansi Lahan & Petani Binaan</h3>
                  <span className="text-wheat font-bold">35%</span>
                </div>
                <p className="text-forest/70 text-sm">Pembukaan green house baru dan onboarding 500+ petani mitra di area Jawa Tengah Selatan.</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-forest shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cream p-6 rounded-sm shadow-sm border border-forest/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-forest text-lg">Working Capital & Tech</h3>
                  <span className="text-forest font-bold">25%</span>
                </div>
                <p className="text-forest/70 text-sm">Digitalisasi sistem traceability (ERP Agrikultur) dan modal kerja untuk operasional offtaking harian.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Skema Kemitraan */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Pilih Skema Kemitraan Anda</h2>
            <p className="text-forest/70">Berbagai cara untuk bertumbuh bersama ekosistem Cetrofarm.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-wheat rounded-sm shadow-sm">
              <h3 className="font-bold text-forest text-xl mb-4">Offtaker / B2B Buyer</h3>
              <ul className="space-y-3 mb-8 text-sm text-forest/80">
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Jaminan suplai rutin harian</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Harga kontrak stabil (3-6 bulan)</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Standar kualitas grading</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border-t-4 border-forest rounded-sm shadow-sm transform md:-translate-y-4 relative">
              <div className="absolute top-0 right-0 bg-forest text-cream text-xs font-bold px-3 py-1 -translate-y-1/2 translate-x-4 shadow-sm">POPULER</div>
              <h3 className="font-bold text-forest text-xl mb-4">Equity Investor</h3>
              <ul className="space-y-3 mb-8 text-sm text-forest/80">
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Kepemilikan saham PT</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Laporan ESG & finansial kuartalan</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Keterlibatan strategis board level</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border-t-4 border-forest/30 rounded-sm shadow-sm">
              <h3 className="font-bold text-forest text-xl mb-4">Agen Distribusi Ritel</h3>
              <ul className="space-y-3 mb-8 text-sm text-forest/80">
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Hak eksklusif area (tier kota)</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Support marketing kit</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-wheat mt-0.5" /> Margin ritel kompetitif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 8. Tim & FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-forest mb-8">Tata Kelola & Tim</h2>
            <div className="bg-cream/50 p-6 rounded-sm border border-forest/10 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-wheat rounded-full flex items-center justify-center font-bold text-forest">A</div>
                <div>
                  <h4 className="font-bold text-forest">Aris Priyambodo</h4>
                  <p className="text-sm text-forest/70">Chief Executive Officer</p>
                </div>
              </div>
              <p className="text-sm text-forest/80">20+ tahun pengalaman mengelola agrikultur dan socio-entrepreneurship. Fokus pada integrasi operasional hulu-hilir.</p>
            </div>
            <div className="bg-cream/50 p-6 rounded-sm border border-forest/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-forest text-cream rounded-full flex items-center justify-center font-bold">D</div>
                <div>
                  <h4 className="font-bold text-forest">Devi Silvia</h4>
                  <p className="text-sm text-forest/70">Chief Operation Officer</p>
                </div>
              </div>
              <p className="text-sm text-forest/80">Berlatar belakang IT dengan 15 tahun pengalaman manajerial supply chain retail. Merancang standarisasi logistik Cetrofarm.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-bold text-forest mb-8">FAQ Investor</h2>
            <div className="border-t border-forest/10">
              <FAQItem 
                question="Apakah Cetrofarm mengelola lahan sendiri?" 
                answer="Kombinasi. Kami memiliki green house mandiri untuk komoditas high-value, namun mayoritas produksi digerakkan melalui sistem contract-farming dengan petani binaan untuk skalabilitas."
              />
              <FAQItem 
                question="Kapan estimasi break-even point (BEP) untuk ekspansi ini?" 
                answer="Berdasarkan proyeksi unit economics dari pendirian fasilitas cold storage baru, estimasi BEP operasional tercapai pada bulan ke-18 pasca-konstruksi dengan IRR yang menarik."
              />
              <FAQItem 
                question="Apakah ada exit strategy bagi investor?" 
                answer="Ya. Kami menargetkan IPO dalam 5-7 tahun ke depan, atau strategic buyout oleh konglomerasi pangan/FMCG besar yang membutuhkan jaminan supply chain organik."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Form Inquiry */}
      <section className="py-24 bg-forest text-cream" id="inquiry-form">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-wheat mb-4">Ajukan Kemitraan</h2>
            <p className="text-cream/80">Diskusikan potensi kolaborasi B2B atau peluang injeksi modal secara langsung dengan tim direksi kami.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-sm border border-cream/10">
            {submitStatus === 'success' ? (
              <div className="bg-wheat/20 p-6 rounded-sm text-center">
                <h3 className="font-bold text-wheat text-xl mb-2">Pesan Terkirim!</h3>
                <p className="text-cream/90 mb-4">Terima kasih atas ketertarikan Anda. Tim eksekutif kami akan segera meninjau dan merespons pesan Anda.</p>
                <button onClick={() => setSubmitStatus('idle')} className="px-6 py-2 bg-wheat text-forest rounded-sm font-medium">Kirim Pesan Lain</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1 text-cream">Nama Lengkap *</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-cream">Email *</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-cream">Perusahaan / Instansi</label>
                    <input type="text" name="company" className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-cream">Pesan / Niat Kolaborasi *</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat" placeholder="Sebutkan profil singkat institusi Anda dan area ketertarikan..."></textarea>
                </div>

                {submitStatus === 'error' && <p className="text-red-400 text-sm font-bold">{errorMessage}</p>}

                <button type="submit" disabled={submitStatus === 'loading'} className="w-full py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-colors disabled:opacity-50">
                  {submitStatus === 'loading' ? 'Mengirim...' : 'Kirim Pengajuan Kemitraan'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
