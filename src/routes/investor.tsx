import { createFileRoute } from '@tanstack/react-router'
import { Download, TrendingUp, Handshake, CheckCircle, PieChart, ShieldAlert, BarChart } from 'lucide-react'
import { useState } from 'react'
import { teamMembers } from '../data/company'

export const Route = createFileRoute('/investor')({
  component: InvestorPage,
  head: () => ({
    meta: [
      { title: 'Investor Relations | Cetrofarm' },
      { name: 'description', content: 'Cetrofarm Investor Relations. Laporan traksi, unit economics, dan peluang investasi di ekosistem pangan terintegrasi.' },
      { property: 'og:title', content: 'Investor Relations | Cetrofarm' },
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
    setErrorMessage('')

    try {
      // @ts-ignore
      const forminit = new window.Forminit()
      const formData = new FormData(e.currentTarget)
      
      const { error } = await forminit.submit(FORM_ID, formData)
      
      if (error) {
        setSubmitStatus('error')
        setErrorMessage(error.message || 'Terjadi kesalahan sistem.')
      } else {
        setSubmitStatus('success')
        e.currentTarget.reset()
      }
    } catch (err) {
      setSubmitStatus('error')
      setErrorMessage('Koneksi terputus. Silakan coba lagi.')
    }
  }

  return (
    <div className="w-full bg-cream min-h-screen">
      {/* 1. Ringkasan Peluang (Masalah, Solusi, Market Size) */}
      <section className="relative w-full pt-32 pb-24 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero_investor.png" 
            alt="Fasilitas indoor farming modern Cetrofarm" 
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-multiply"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 max-w-5xl">
          <span className="inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-6">Pitch Deck 2026</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
            Peluang Investasi Skalabilitas Rantai Pasok Pangan
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold text-wheat mb-4 border-b border-wheat/30 pb-2">Problem & Solusi</h3>
              <p className="text-cream/80 text-sm leading-relaxed mb-4">
                <strong>Masalah:</strong> Rantai pasok agrikultur tradisional memiliki 4-5 layer tengkulak, menyebabkan inflasi harga 40% dan <em>post-harvest loss</em> hingga 20% sebelum produk tiba di pasar B2B.
              </p>
              <p className="text-cream/80 text-sm leading-relaxed">
                <strong>Solusi Cetrofarm:</strong> Model <em>Business Aggregator</em> terintegrasi. Kami melakukan <em>contract-farming</em> langsung dengan 210+ petani, memproses di fasilitas mandiri (grading & cold storage), dan mendistribusikan langsung ke offtaker akhir (Supermarket, Horeca).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-wheat mb-4 border-b border-wheat/30 pb-2">Market Size (Jawa Tengah)</h3>
              <div className="space-y-4 text-sm mt-4">
                <div>
                  <div className="flex justify-between mb-1"><span className="text-cream/80">TAM (Total Kebutuhan Sayuran & Beras)</span><span className="font-bold">Rp 3.2 Triliun</span></div>
                  <div className="w-full bg-black/20 h-2 rounded-full"><div className="bg-white/20 h-2 rounded-full w-full"></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span className="text-cream/80">SAM (Pasar B2B Premium & Organik)</span><span className="font-bold">Rp 450 Miliar</span></div>
                  <div className="w-full bg-black/20 h-2 rounded-full"><div className="bg-wheat h-2 rounded-full w-[15%]"></div></div>
                </div>
                <div className="pt-2 text-xs text-cream/50 italic">*Berdasarkan riset pasar internal & BPS Jateng (2025)</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-4">
            <a href="#inquiry-form" className="px-8 py-3 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-all text-sm">Jadwalkan Pertemuan</a>
            <a href="/docs/CetroFarm-Company-Profile.pdf" download className="px-8 py-3 border border-cream/30 hover:bg-cream/10 text-cream font-bold rounded-sm transition-all text-sm flex items-center gap-2"><Download size={16}/> Unduh Laporan</a>
          </div>
        </div>
      </section>

      {/* 2. Diagram Model Bisnis */}
      <section className="py-24 bg-white border-b border-forest/10">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">Model Bisnis & Aliran Pendapatan</h2>
          <p className="text-forest/70 mb-16 max-w-2xl mx-auto">Kami mengamankan margin melalui efisiensi operasional dan eliminasi pihak perantara (tengkulak).</p>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-cream/50 p-8 rounded-sm border border-forest/10 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-forest/20 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 w-full md:w-1/3 p-4 bg-white rounded-sm shadow-sm border border-forest/5 mb-4 md:mb-0">
              <h4 className="font-bold text-forest mb-2">Hulu (Sourcing)</h4>
              <p className="text-xs text-forest/70 mb-2">Contract Farming (Mitra Binaan) & Lahan Mandiri (Greenhouse)</p>
              <div className="text-xs bg-forest/10 text-forest font-bold px-2 py-1 rounded inline-block">HPP Terkunci (Fix Price)</div>
            </div>
            
            <div className="relative z-10 w-full md:w-1/3 p-4 bg-forest text-cream rounded-sm shadow-md mb-4 md:mb-0 mx-0 md:mx-4 transform scale-105">
              <h4 className="font-bold text-wheat mb-2">Tengah (Processing)</h4>
              <p className="text-xs text-cream/80 mb-2">Centralized Grading, Cold Storage, Packaging</p>
              <div className="text-xs bg-wheat/20 text-wheat font-bold px-2 py-1 rounded inline-block">Post-harvest loss &lt; 5%</div>
            </div>
            
            <div className="relative z-10 w-full md:w-1/3 p-4 bg-white rounded-sm shadow-sm border border-forest/5">
              <h4 className="font-bold text-forest mb-2">Hilir (Revenue)</h4>
              <p className="text-xs text-forest/70 mb-2">B2B Offtaker (70%), Modern Retail (20%), Direct-to-Consumer (10%)</p>
              <div className="text-xs bg-forest/10 text-forest font-bold px-2 py-1 rounded inline-block">Margin Kotor 28-35%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Traksi */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-forest mb-12 text-center">Traksi Bisnis (YTD 2026)</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-forest/5">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="text-wheat" />
                <h3 className="font-bold text-forest">Volume Produksi</h3>
              </div>
              <p className="text-4xl font-serif font-bold text-forest mb-2">120<span className="text-lg"> Ton/Bln</span></p>
              <p className="text-sm text-forest/70">+45% YoY Growth. Stabil menyuplai 3 ritel modern besar.</p>
            </div>
            
            <div className="bg-white p-6 rounded-sm shadow-sm border border-forest/5">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-wheat" />
                <h3 className="font-bold text-forest">Mitra Binaan</h3>
              </div>
              <p className="text-4xl font-serif font-bold text-forest mb-2">210<span className="text-lg"> Petani</span></p>
              <p className="text-sm text-forest/70">Tersebar di 5 kabupaten di Jawa Tengah dengan retensi kontrak 95%.</p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-forest/5">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="text-wheat" />
                <h3 className="font-bold text-forest">Kontrak B2B Aktif</h3>
              </div>
              <p className="text-4xl font-serif font-bold text-forest mb-2">14<span className="text-lg"> Institusi</span></p>
              <p className="text-sm text-forest/70">Menyuplai jaringan hotel, rumah sakit, dan Horeca premium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Unit Economics */}
      <section className="py-24 bg-white border-y border-forest/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-forest mb-12 text-center">Unit Economics (Rata-rata Siklus Panen)</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-forest text-cream text-sm">
                  <th className="p-4 rounded-tl-sm font-bold">Komponen Metrik</th>
                  <th className="p-4 font-bold">Sayuran Organik</th>
                  <th className="p-4 font-bold">Protein Hewani</th>
                  <th className="p-4 rounded-tr-sm font-bold">Keterangan</th>
                </tr>
              </thead>
              <tbody className="text-sm text-forest/80">
                <tr className="border-b border-forest/10">
                  <td className="p-4 font-bold">COGS (HPP Petani)</td>
                  <td className="p-4">60%</td>
                  <td className="p-4">72%</td>
                  <td className="p-4 text-xs">Termasuk sarana produksi dan upah tanam.</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="p-4 font-bold">Processing & Logistik</td>
                  <td className="p-4">12%</td>
                  <td className="p-4">10%</td>
                  <td className="p-4 text-xs">Biaya cold chain, packaging, shrink/waste.</td>
                </tr>
                <tr className="border-b border-forest/10 bg-cream/30">
                  <td className="p-4 font-bold text-forest">Gross Margin (Kotor)</td>
                  <td className="p-4 font-bold text-forest">28%</td>
                  <td className="p-4 font-bold text-forest">18%</td>
                  <td className="p-4 text-xs">Sebelum OPEX (Sales, G&A).</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Siklus Kas (Cash Conversion)</td>
                  <td className="p-4">14-30 Hari</td>
                  <td className="p-4">30-45 Hari</td>
                  <td className="p-4 text-xs">Term payment offtaker (B2B).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Roadmap Dana & 6. Risiko */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-16">
          
          {/* Alokasi Dana */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-forest mb-8">Rencana Penggunaan Dana</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-sm border-l-4 border-wheat shadow-sm">
                <div className="flex justify-between font-bold text-forest mb-1">
                  <span>Capex (Fasilitas Cold Storage)</span>
                  <span>45%</span>
                </div>
                <p className="text-xs text-forest/70">Membangun gudang pendingin kapasitas 200 ton di Semarang untuk buffer stock.</p>
              </div>
              <div className="bg-white p-4 rounded-sm border-l-4 border-forest shadow-sm">
                <div className="flex justify-between font-bold text-forest mb-1">
                  <span>Ekspansi Lahan & Kemitraan</span>
                  <span>30%</span>
                </div>
                <p className="text-xs text-forest/70">Akuisisi sewa lahan baru dan onboarding +300 petani binaan.</p>
              </div>
              <div className="bg-white p-4 rounded-sm border-l-4 border-forest/40 shadow-sm">
                <div className="flex justify-between font-bold text-forest mb-1">
                  <span>Working Capital & Tech</span>
                  <span>25%</span>
                </div>
                <p className="text-xs text-forest/70">Injeksi likuiditas untuk bridging payment B2B dan upgrade ERP traceability.</p>
              </div>
            </div>
          </div>

          {/* Manajemen Risiko */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-forest mb-8 flex items-center gap-2">
              <ShieldAlert size={24} className="text-wheat" /> Manajemen Risiko
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-forest text-sm mb-1">Risiko Iklim & Gagal Panen</h4>
                <p className="text-sm text-forest/70"><strong>Mitigasi:</strong> Diversifikasi geografis lahan binaan di 5 kabupaten berbeda. Peralihan komoditas rentan iklim ke sistem Greenhouse (controlled environment).</p>
              </div>
              <div>
                <h4 className="font-bold text-forest text-sm mb-1">Risiko Fluktuasi Harga Pasar</h4>
                <p className="text-sm text-forest/70"><strong>Mitigasi:</strong> Mengunci harga beli (HPP) dengan petani dan harga jual kontrak (3-6 bulan) dengan offtaker B2B sebelum masa tanam dimulai.</p>
              </div>
              <div>
                <h4 className="font-bold text-forest text-sm mb-1">Risiko Gagal Bayar Offtaker (NPL)</h4>
                <p className="text-sm text-forest/70"><strong>Mitigasi:</strong> Asuransi piutang dagang, due diligence finansial ketat sebelum kontrak, dan limitasi exposure maksimal 15% revenue per klien.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 7. Tim Inti */}
      <section className="py-24 bg-white border-b border-forest/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-forest mb-12 text-center">Tim Manajemen Inti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-cream/30 p-6 rounded-sm border border-forest/5 text-center">
                <h4 className="font-bold text-forest text-lg">{member.name}</h4>
                <p className="text-xs font-bold text-wheat uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-sm text-forest/80 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Tunggal (Form Kemitraan) */}
      <section className="py-32 bg-forest text-cream" id="inquiry-form">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-wheat mb-4">Jadwalkan Pertemuan</h2>
            <p className="text-cream/80 text-sm">Isi formulir di bawah ini untuk mengatur sesi presentasi manajemen (pitching) atau kunjungan site/fasilitas secara langsung.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-sm border border-cream/10">
            {submitStatus === 'success' ? (
              <div className="bg-wheat/20 p-6 rounded-sm text-center">
                <h3 className="font-bold text-wheat text-xl mb-2">Jadwal Diajukan</h3>
                <p className="text-cream/90 mb-4">Terima kasih. Tim Investor Relations kami akan segera menghubungi Anda via email/kalender untuk konfirmasi waktu.</p>
                <button onClick={() => setSubmitStatus('idle')} className="px-6 py-2 bg-wheat text-forest rounded-sm font-medium text-sm">Ajukan Jadwal Lain</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1 text-cream">Nama Lengkap & Jabatan *</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat text-sm" placeholder="Misal: Budi Santoso (Partner)" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-cream">Email Kerja *</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-cream">Nama Institusi / VC</label>
                    <input type="text" name="company" className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-cream">Topik Diskusi / Preferensi Waktu *</label>
                  <textarea name="message" required rows={3} className="w-full px-4 py-3 rounded-sm border border-cream/20 bg-transparent text-cream focus:outline-none focus:border-wheat text-sm" placeholder="Tuliskan jika Anda lebih memilih meeting online (Zoom) atau kunjungan fasilitas..."></textarea>
                </div>

                {submitStatus === 'error' && <p className="text-red-400 text-sm font-bold">{errorMessage}</p>}

                <button type="submit" disabled={submitStatus === 'loading'} className="w-full py-4 mt-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-colors disabled:opacity-50 text-sm tracking-wide">
                  {submitStatus === 'loading' ? 'MENGIRIM...' : 'KIRIM PERMINTAAN MEETING'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
