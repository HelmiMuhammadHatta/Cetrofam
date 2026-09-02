import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/$')({
  beforeLoad: ({ location }) => {
    const path = location.pathname.toLowerCase()
    
    // Redirects dari struktur URL WordPress lama ke struktur baru
    if (path.startsWith('/home')) {
      throw redirect({ to: '/', replace: true })
    }
    if (path.startsWith('/about')) {
      throw redirect({ to: '/tentang', replace: true })
    }
    if (path.startsWith('/article')) {
      throw redirect({ to: '/artikel', replace: true })
    }
    
    // Placeholder untuk mapping spesifik slug artikel lama -> baru
    // const articleMapping: Record<string, string> = {
    //   '/article/old-slug-1': '/artikel/new-slug-1',
    //   '/article/old-slug-2': '/artikel/new-slug-2',
    // }
    // if (articleMapping[path]) {
    //   throw redirect({ to: articleMapping[path], replace: true })
    // }
  },
  component: CatchAllComponent,
})

function CatchAllComponent() {
  return (
    <div className="w-full bg-cream min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-serif font-bold text-forest mb-4">404</h1>
      <h2 className="text-2xl font-bold text-forest mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-forest/70 mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak dapat ditemukan.
      </p>
      <a href="/" className="px-8 py-3 bg-forest text-cream font-bold rounded-sm hover:bg-forest/90 transition-colors">
        Kembali ke Beranda
      </a>
    </div>
  )
}
