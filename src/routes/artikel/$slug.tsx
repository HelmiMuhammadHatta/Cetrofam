import { createFileRoute } from '@tanstack/react-router'
import { getArticleBySlug } from '../../server/articles'

export const Route = createFileRoute('/artikel/$slug')({
  component: ArtikelDetailPage,
  loader: async ({ params }) => {
    const article = await getArticleBySlug({ data: params.slug })
    if (!article) {
      throw new Error('Artikel tidak ditemukan')
    }
    return article
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: 'Artikel Tidak Ditemukan | Cetrofarm' }]
      }
    }
    return {
      meta: [
        { title: `${loaderData.title} | Cetrofarm` },
        { name: 'description', content: loaderData.excerpt || '' },
        { property: 'og:title', content: `${loaderData.title} | Cetrofarm` },
        { property: 'og:description', content: loaderData.excerpt || '' },
        { property: 'og:image', content: loaderData.coverImage || '/assets/og-image.jpg' }
      ]
    }
  }
})

function ArtikelDetailPage() {
  const article = Route.useLoaderData()

  return (
    <div className="w-full bg-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">{article.title}</h1>
        <div className="flex gap-4 text-forest/70 mb-8 border-b border-forest/10 pb-4">
          <span>Oleh: {article.author}</span>
          <span>•</span>
          <span>{new Date(article.publishedAt).toLocaleDateString('id-ID')}</span>
        </div>
        
        {article.coverImage && (
          <img src={article.coverImage} alt={article.title} className="w-full h-64 object-cover rounded-sm mb-8" />
        )}
        
        <div 
          className="prose prose-lg prose-green max-w-none text-forest"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </div>
    </div>
  )
}
