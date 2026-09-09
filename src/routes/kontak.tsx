import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Phone, Mail, Building2 } from 'lucide-react'

export const Route = createFileRoute('/kontak')({
  component: KontakPage,
  head: () => ({
    meta: [
      { title: 'Hubungi Kami | Cetrofarm' },
      { name: 'description', content: 'Hubungi Cetrofarm untuk pertanyaan, peluang kemitraan, atau informasi pemesanan bahan pangan segar.' },
      { property: 'og:title', content: 'Hubungi Kami | Cetrofarm' },
      { property: 'og:description', content: 'Hubungi Cetrofarm untuk informasi pemesanan bahan pangan.' },
    ],
  }),
})

function KontakPage() {
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
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4 text-center">Hubungi Kami</h1>
        <p className="text-forest/70 text-center max-w-2xl mx-auto mb-16">Mari berdiskusi tentang bagaimana Cetrofarm dapat membantu memenuhi kebutuhan bahan baku pangan Anda atau peluang kolaborasi strategis.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-forest mb-6">Informasi Perusahaan</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Building2 className="text-wheat shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-forest">PT. Cetro Tama Indonesia (Cetrofarm)</h3>
                  <p className="text-forest/70 text-sm mt-1">NIB: 9120212080575 (Terverifikasi)</p>
                  <p className="text-forest/70 text-sm">Terdaftar di Kemenkumham RI</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-wheat shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-forest">Kantor & Pusat Distribusi</h3>
                  <p className="text-forest/70 mt-1">Dusun Setro, Desa Gondoriyo,<br/> Kec. Bergas, Kab. Semarang,<br/> Jawa Tengah, 50187</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-wheat shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-forest">Kantor Perwakilan</h3>
                  <p className="text-forest/70 mt-1">Deruzzi Space, Jl. Sukajadi No. 25, Bandung</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-wheat shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-forest">Telepon & WhatsApp</h3>
                  <p className="text-forest/70 mt-1">Office: +62024-6935130</p>
                  <p className="text-forest/70">WhatsApp: +62 85 800 500 111</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-wheat shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-forest">Email Resmi</h3>
                  <p className="text-forest/70 mt-1">customerrelation@cetrofarm.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white p-8 rounded-sm border border-forest/10 shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-forest mb-6">Tinggalkan Pesan</h2>
            
            {submitStatus === 'success' ? (
              <div className="bg-wheat/20 p-6 rounded-sm text-center">
                <h3 className="font-bold text-forest text-xl mb-2">Pesan Terkirim!</h3>
                <p className="text-forest/70 mb-4">Terima kasih telah menghubungi Cetrofarm. Tim kami akan merespons dalam 1x24 jam.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-2 bg-forest text-cream rounded-sm font-medium hover:bg-forest/90"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="fi-sender-userId" value="kontak" />
                
                <div>
                  <label className="block text-sm font-bold mb-1 text-forest">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    name="fi-sender-fullName"
                    required
                    className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-forest">Email *</label>
                    <input 
                      type="email" 
                      name="fi-sender-email"
                      required
                      className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-forest">No. Telepon</label>
                    <input 
                      type="tel" 
                      name="fi-sender-phone"
                      className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-forest">Kategori Pertanyaan *</label>
                  <select 
                    name="fi-select-category"
                    required
                    className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="B2B">Kerjasama B2B (HORECA / Ritel)</option>
                    <option value="Konsumen">Pembelian Konsumen</option>
                    <option value="Investor">Peluang Investasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-forest">Pesan Anda *</label>
                  <textarea 
                    name="fi-text-message"
                    required
                    rows={4} 
                    className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm font-bold">{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-wheat/80 transition-colors disabled:opacity-50"
                >
                  {submitStatus === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embed Google Maps pindah ke bawah */}
        <div className="mt-16 bg-white p-2 rounded-sm border border-forest/10 shadow-sm">
          <iframe 
            src="https://maps.google.com/maps?q=%20Jl.%20Setro%20Raya%2C%20Desa%20Gondoriyo%2C%20Kecamatan%20Bergas%2C%20Kabupaten%20Semarang&z=15&hl=en&t=m&output=embed&iwloc=near" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-sm"
            title="Google Maps Cetrofarm"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

