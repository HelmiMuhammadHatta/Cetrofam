import { createFileRoute } from '@tanstack/react-router'
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

          {/* Embed Google Maps */}
          <div className="bg-white p-2 rounded-sm border border-forest/10 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8572428580663!2d110.413725!3d-7.142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70870000000000%3A0x1234567890abcdef!2sKecamatan%20Bergas%2C%20Kabupaten%20Semarang!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="450" 
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
    </div>
  )
}
