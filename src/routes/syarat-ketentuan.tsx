import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/syarat-ketentuan')({
  component: TermsComponent,
  head: () => ({
    meta: [
      { title: 'Syarat & Ketentuan | Cetrofarm' },
      { name: 'description', content: 'Syarat dan Ketentuan penggunaan layanan Cetrofarm.' }
    ]
  })
})

function TermsComponent() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center text-center">
      <ShieldCheck className="w-16 h-16 text-forest mb-6" />
      <h1 className="text-4xl md:text-5xl font-serif text-forest mb-6">Syarat & Ketentuan</h1>
      <p className="text-forest/70 max-w-2xl">
        Halaman ini sedang dalam tahap penyusunan dan akan segera diperbarui. 
        Terima kasih atas pengertian Anda.
      </p>
    </div>
  )
}
