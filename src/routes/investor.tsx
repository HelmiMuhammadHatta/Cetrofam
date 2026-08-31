import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Download, Handshake, BarChart3, Users, Leaf, ArrowUpRight } from 'lucide-react'
import { metrics } from '../data/content'

export const Route = createFileRoute('/investor')({
  component: InvestorPage,
})

function InvestorPage() {
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
              Investasi Berdampak untuk <span className="text-wheat italic">Masa Depan Pangan.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed font-light">
              Kami membangun rantai pasok agrikultur yang efisien, transparan, dan menguntungkan. Cetrofarm menggabungkan kepastian offtaker B2B dengan pemberdayaan petani untuk unit economics yang solid.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#form-kemitraan" className="px-8 py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-all flex items-center gap-2">
                Ajukan Kemitraan
              </a>
              <button className="px-8 py-4 border border-cream/30 text-cream font-bold rounded-sm hover:bg-cream/10 transition-all flex items-center gap-2">
                <Download size={18}/> Unduh Pitch Deck (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Traksi & Market Size */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-sm shadow-xl p-8 md:p-12 border border-forest/5 flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex-1">
              <h3 className="text-forest font-bold mb-2 flex items-center gap-2"><BarChart3 size={20} className="text-wheat"/> Pertumbuhan Tahunan</h3>
              <p className="text-4xl font-serif font-bold text-forest mb-2">32% <span className="text-lg font-sans font-normal text-forest/60">YoY Revenue</span></p>
              <p className="text-forest/60 text-sm">Konsisten tumbuh di atas rata-rata industri sejak 2021 berkat model kontrak offtaker yang kuat.</p>
            </div>
            <div className="w-px bg-forest/10 hidden md:block"></div>
            <div className="flex-1">
              <h3 className="text-forest font-bold mb-2 flex items-center gap-2"><Users size={20} className="text-wheat"/> Efisiensi Rantai Pasok</h3>
              <p className="text-4xl font-serif font-bold text-forest mb-2">15% <span className="text-lg font-sans font-normal text-forest/60">Peningkatan Margin</span></p>
              <p className="text-forest/60 text-sm">Pemangkasan tengkulak memberikan margin tambahan bagi perusahaan dan harga beli wajar bagi petani.</p>
            </div>
            <div className="w-px bg-forest/10 hidden md:block"></div>
            <div className="flex-1">
              <h3 className="text-forest font-bold mb-2 flex items-center gap-2"><Leaf size={20} className="text-wheat"/> Market Size Jateng</h3>
              <p className="text-4xl font-serif font-bold text-forest mb-2">Rp 2.4T <span className="text-lg font-sans font-normal text-forest/60">/Tahun</span></p>
              <p className="text-forest/60 text-sm">Potensi pasar bahan pangan segar untuk sektor HORECA (Hotel, Restoran, Kafe) di Jawa Tengah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Bisnis */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-forest mb-12 text-center">Model Bisnis & Aliran Pendapatan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm border border-forest/10">
              <h3 className="text-xl font-bold text-forest mb-4">1. B2B Offtake Contract (70%)</h3>
              <p className="text-forest/70 mb-4">Kontrak suplai jangka panjang dengan industri pengolahan makanan, hotel, dan supermarket. Model ini memastikan kepastian penyerapan panen dengan margin yang terprediksi (recurring revenue).</p>
            </div>
            <div className="bg-white p-8 rounded-sm border border-forest/10">
              <h3 className="text-xl font-bold text-forest mb-4">2. B2C Direct Retail (30%)</h3>
              <p className="text-forest/70 mb-4">Penjualan langsung ke konsumen akhir melalui e-commerce dan agen distribusi lokal (produk Sayuran Segar & Beras Rindjing). Margin lebih tinggi dengan pertumbuhan demand organik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skema Kemitraan */}
      <section className="py-24 bg-forest/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest mb-4">Pilih Skema Kemitraan Anda</h2>
            <p className="text-forest/70 max-w-2xl mx-auto">Kami membuka peluang kolaborasi bagi individu maupun institusi yang ingin berpartisipasi dalam revolusi agrikultur lokal.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Skema 1 */}
            <div className="bg-white p-8 rounded-sm border-t-4 border-wheat shadow-sm hover:shadow-md transition-shadow">
              <Handshake className="text-forest mb-4" size={32} />
              <h3 className="text-xl font-bold text-forest mb-2">Offtaker / Mitra B2B</h3>
              <p className="text-forest/60 text-sm mb-6 min-h-[80px]">Bagi perusahaan yang membutuhkan pasokan bahan baku pangan stabil dalam skala tonase dengan harga terkunci (fixed rate).</p>
              <ul className="text-sm text-forest/80 space-y-3 mb-8">
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Kepastian suplai harian/mingguan </li>
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Standardisasi Grade A </li>
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Pembayaran termin tempo </li>
              </ul>
              <a href="#form-kemitraan" className="block text-center w-full py-2 border border-forest text-forest rounded-sm font-medium hover:bg-forest hover:text-cream transition-colors">Pilih Skema Ini</a>
            </div>
            
            {/* Skema 2 */}
            <div className="bg-forest text-cream p-8 rounded-sm border-t-4 border-wheat shadow-lg transform md:-translate-y-4">
              <BarChart3 className="text-wheat mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Investor Ekspansi</h3>
              <p className="text-cream/70 text-sm mb-6 min-h-[80px]">Pendanaan ekuitas atau instrumen utang (convertible note) untuk pembukaan lahan baru dan pembangunan sistem cold storage.</p>
              <ul className="text-sm text-cream/90 space-y-3 mb-8">
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Dividen tahunan / imbal hasil </li>
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Laporan keuangan transparan </li>
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Akses langsung ke dashboard metrics </li>
              </ul>
              <a href="#form-kemitraan" className="block text-center w-full py-2 bg-wheat text-forest rounded-sm font-bold hover:bg-white transition-colors">Minta Pitch Deck</a>
            </div>

            {/* Skema 3 */}
            <div className="bg-white p-8 rounded-sm border-t-4 border-wheat shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-forest mb-4" size={32} />
              <h3 className="text-xl font-bold text-forest mb-2">Mitra Lahan / Pemilik Aset</h3>
              <p className="text-forest/60 text-sm mb-6 min-h-[80px]">Pemilik lahan menganggur (idle land) yang ingin disinergikan menjadi area produktif pertanian melalui manajemen Cetrofarm.</p>
              <ul className="text-sm text-forest/80 space-y-3 mb-8">
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Profit sharing per panen </li>
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Lahan dirawat dan terjaga </li>
                <li className="flex gap-2"> <ArrowRight size={16} className="text-wheat shrink-0 mt-0.5"/> Manajemen end-to-end oleh kami </li>
              </ul>
              <a href="#form-kemitraan" className="block text-center w-full py-2 border border-forest text-forest rounded-sm font-medium hover:bg-forest hover:text-cream transition-colors">Konsultasi Lahan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Ajukan Kemitraan */}
      <section id="form-kemitraan" className="py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-sm border border-forest/10 shadow-sm">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-forest mb-2">Ajukan Kemitraan</h2>
              <p className="text-forest/70">Tim representatif kami akan menghubungi Anda dalam waktu 1x24 jam untuk menjadwalkan pertemuan awal.</p>
            </div>
            
            <form className="space-y-6" method="POST" action="/api/investor-leads">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest mb-2">Nama Lengkap *</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-wheat focus:ring-1 focus:ring-wheat bg-cream/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest mb-2">Nama Perusahaan/Institusi</label>
                  <input type="text" name="company" className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-wheat focus:ring-1 focus:ring-wheat bg-cream/30" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest mb-2">Email *</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-wheat focus:ring-1 focus:ring-wheat bg-cream/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest mb-2">Nomor Telepon / WhatsApp *</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-wheat focus:ring-1 focus:ring-wheat bg-cream/30" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-forest mb-2">Tipe Minat *</label>
                <select name="type" required className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-wheat focus:ring-1 focus:ring-wheat bg-cream/30 appearance-none">
                  <option value="">Pilih Skema</option>
                  <option value="offtaker">Offtaker / Mitra B2B</option>
                  <option value="investor">Investor Ekspansi</option>
                  <option value="lahan">Mitra Lahan / Aset</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-forest mb-2">Pesan Singkat (Opsional)</label>
                <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-wheat focus:ring-1 focus:ring-wheat bg-cream/30"></textarea>
              </div>

              {/* Honeypot field (hidden) */}
              <div className="hidden" aria-hidden="true">
                <input type="text" name="a_password" tabIndex={-1} autoComplete="off" />
              </div>

              <button type="submit" className="w-full py-4 bg-forest text-cream font-bold rounded-sm hover:bg-forest/90 transition-colors flex items-center justify-center gap-2">
                Kirim Pengajuan <ArrowUpRight size={18}/>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
