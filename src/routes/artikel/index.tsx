import { createFileRoute } from '@tanstack/react-router'
import { getArticles } from '../../server/articles'

export const Route = createFileRoute('/artikel/')({
  component: ArtikelIndexPage,
  loader: async () => {
    return await getArticles()
  },
  head: () => ({
    meta: [
      { title: 'Wawasan Agrikultur | Cetrofarm' },
      { name: 'description', content: 'Artikel terbaru seputar inovasi agrikultur, ketahanan pangan, dan kisah mitra peternak Cetrofarm.' },
      { property: 'og:title', content: 'Wawasan Agrikultur | Cetrofarm' },
    ]
  })
})

function ArtikelIndexPage() {
  const articles = Route.useLoaderData()

  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Wawasan Agrikultur</h1>
        <p className="text-forest/80 text-lg mb-12">Berita dan artikel terbaru dari ekosistem Cetrofarm.</p>
        
        <div className="grid grid-cols-1 gap-6 text-left">
          {articles.map((article: any) => (
            <div key={article.slug} className="bg-white p-6 rounded-sm shadow-sm border border-forest/10">
              <h2 className="text-2xl font-bold text-forest mb-2">{article.title}</h2>
              <p className="text-forest/70 mb-4">{article.excerpt}</p>
              <a href={`/artikel/${article.slug}`} className="text-forest font-bold hover:underline">Baca selengkapnya &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
