import { createFileRoute } from '@tanstack/react-start'
import { MapPin, Phone, Mail, Building2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { saveLead } from '../server/actions'

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

const contactSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
  email: z.string().email('Format email tidak valid'),
  phone: z.string().optional(),
  category: z.string().min(1, 'Pilih kategori'),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
})

type ContactFormData = z.infer<typeof contactSchema>

function KontakPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    try {
      const result = await saveLead({ data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        leadType: 'contact',
        message: `[Kategori: ${data.category}] ${data.message}`
      }})
      
      if (result.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Terjadi kesalahan.')
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
                  <h3 className="font-bold text-forest">PT Cetrofarm Pangan Nusantara</h3>
                  <p className="text-forest/70 text-sm mt-1">NIB: 9120100870934 (Terverifikasi)</p>
                  <p className="text-forest/70 text-sm">Terdaftar di Kemenkumham RI</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-wheat shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-forest">Kantor & Pusat Distribusi</h3>
                  <p className="text-forest/70 mt-1">Jl. Setro Raya, Desa Gondoriyo,<br/> Kec. Bergas, Kab. Semarang,<br/> Jawa Tengah, 50552</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-wheat shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-forest">Telepon & WhatsApp</h3>
                  <p className="text-forest/70 mt-1">Office: (024) 6933 5138</p>
                  <p className="text-forest/70">WhatsApp: +62 85 8603 00 111</p>
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
                  onClick={() => { setSubmitStatus('idle'); reset(); }}
                  className="px-6 py-2 bg-forest text-cream rounded-sm font-medium hover:bg-forest/90"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1 text-forest">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-forest">Email *</label>
                    <input 
                      type="email" 
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-forest">No. Telepon</label>
                    <input 
                      type="tel" 
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-forest">Kategori Pertanyaan *</label>
                  <select 
                    {...register('category')}
                    className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="B2B">Kerjasama B2B (HORECA / Ritel)</option>
                    <option value="Konsumen">Pembelian Konsumen</option>
                    <option value="Investor">Peluang Investasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message as string}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-forest">Pesan Anda *</label>
                  <textarea 
                    {...register('message')}
                    rows={4} 
                    className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
                </div>
                
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm font-bold">{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-wheat text-forest font-bold rounded-sm hover:bg-wheat/80 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embed Google Maps pindah ke bawah */}
        <div className="mt-16 bg-white p-2 rounded-sm border border-forest/10 shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8572428580663!2d110.413725!3d-7.142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70870000000000%3A0x1234567890abcdef!2sKecamatan%20Bergas%2C%20Kabupaten%20Semarang!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
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

