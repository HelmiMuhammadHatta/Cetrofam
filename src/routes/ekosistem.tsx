import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ekosistem')({
  component: EkosistemPage,
  head: () => ({
    meta: [
      { title: 'Ekosistem Terintegrasi | Cetrofarm' },
      { name: 'description', content: 'Pelajari bagaimana Cetrofarm memotong rantai pasok panjang untuk menguntungkan petani dan konsumen.' },
      { property: 'og:title', content: 'Ekosistem Terintegrasi | Cetrofarm' },
    ]
  })
})

function EkosistemPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Ekosistem Terintegrasi</h1>
        <p className="text-forest/80 text-lg">Halaman sedang dalam pengembangan.</p>
      </div>
    </div>
  )
}
