import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/kebijakan-privasi')({
  component: PrivacyComponent,
  head: () => ({
    meta: [
      { title: 'Kebijakan Privasi | Cetrofarm' },
      { name: 'description', content: 'Kebijakan Privasi penggunaan layanan Cetrofarm.' }
    ]
  })
})

function PrivacyComponent() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center text-center">
      <ShieldCheck className="w-16 h-16 text-forest mb-6" />
      <h1 className="text-4xl md:text-5xl font-serif text-forest mb-6">Kebijakan Privasi</h1>
      <p className="text-forest/70 max-w-2xl">
        Halaman ini sedang dalam tahap penyusunan dan akan segera diperbarui. 
        Terima kasih atas pengertian Anda.
      </p>
    </div>
  )
}
