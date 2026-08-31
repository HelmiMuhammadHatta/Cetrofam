import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: 'FAQ & Bantuan | Cetrofarm' },
      { name: 'description', content: 'Pertanyaan umum seputar produk, minimum order, area distribusi, dan sertifikasi Cetrofarm.' },
      { property: 'og:title', content: 'FAQ & Bantuan | Cetrofarm' },
    ],
  }),
})

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-forest/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-5 flex justify-between items-center hover:text-wheat transition-colors font-bold text-forest text-lg"
      >
        <span>{question}</span>
        <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-forest/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

function FAQPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-wheat/20 text-wheat rounded-sm text-sm font-bold tracking-widest uppercase mb-4">Pusat Bantuan</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">Pertanyaan Umum</h1>
          <p className="text-forest/70">Segala hal yang perlu Anda ketahui tentang berbelanja dan bermitra dengan Cetrofarm.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-forest/5 mb-12">
          <FAQItem 
            question="Apakah ada minimum order (MOQ) untuk pembelian produk?" 
            answer="Untuk pelanggan ritel (B2C), minimum order disesuaikan dengan agen terdekat di kota Anda. Untuk pelanggan B2B (Hotel, Restoran, Kafe, dan Supermarket), minimum order bervariasi mulai dari 50kg per pengiriman untuk menjamin efisiensi rantai dingin." 
          />
          <FAQItem 
            question="Ke mana saja area distribusi Cetrofarm saat ini?" 
            answer="Saat ini fasilitas logistik rantai dingin kami mencakup pengiriman reguler ke seluruh area Jawa Tengah, Yogyakarta, dan perluasan ke beberapa titik di Jawa Timur serta Bali." 
          />
          <FAQItem 
            question="Bagaimana cara menjadi agen atau mitra B2B?" 
            answer="Anda dapat mengunjungi halaman Investor & Kemitraan untuk mengajukan diri sebagai Offtaker B2B, atau hubungi tim sales kami melalui WhatsApp di +62 85 8603 00 111 untuk menjadi agen distribusi ritel." 
          />
          <FAQItem 
            question="Apakah sayuran Cetrofarm bersertifikat organik?" 
            answer="Ya, lini Sayuran Segar kami dibudidayakan menggunakan standar organik tanpa pestisida kimia sintetis, dan telah melewati uji sertifikasi organik independen serta standar keamanan pangan BPOM." 
          />
          <FAQItem 
            question="Berapa lama waktu pengiriman (lead time) setelah pemesanan?" 
            answer="Untuk kontrak B2B yang sudah berjalan, kami menerapkan sistem pengiriman harian (H+1 dari panen). Untuk pesanan insidental, lead time standar adalah 1-2 hari kerja." 
          />
        </div>

        <div className="bg-forest text-cream p-10 rounded-sm text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Masih punya pertanyaan?</h3>
          <p className="text-cream/80 mb-8">Tim customer relation kami siap membantu Anda menjawab pertanyaan lebih spesifik.</p>
          <a href="/kontak" className="inline-flex items-center gap-2 px-8 py-3 bg-wheat text-forest font-bold rounded-sm hover:bg-white transition-colors">
            Hubungi Kami Sekarang <ArrowUpRight size={18}/>
          </a>
        </div>
      </div>
    </div>
  )
}
