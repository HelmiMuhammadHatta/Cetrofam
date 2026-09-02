import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tentang')({
  component: TentangPage,
  head: () => ({
    meta: [
      { title: 'Tentang Kami | Cetrofarm' },
      { name: 'description', content: 'Kisah perjalanan Cetrofarm membangun ekosistem agrikultur terintegrasi sejak 2018.' },
      { property: 'og:title', content: 'Tentang Kami | Cetrofarm' },
    ]
  })
})

function TentangPage() {
  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Tentang Cetrofarm</h1>
        <p className="text-forest/80 text-lg">Halaman sedang dalam pengembangan.</p>
      </div>
    </div>
  )
}
