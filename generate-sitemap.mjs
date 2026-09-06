import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const siteUrl = 'https://cetrofarm.com';

// Static routes
const staticRoutes = [
  '',
  '/tentang',
  '/ekosistem',
  '/produk',
  '/investor',
  '/artikel',
  '/kontak',
  '/faq',
  '/syarat-ketentuan',
  '/kebijakan-privasi'
];

async function generateSitemap() {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  let articleRoutes = [];
  
  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir);
    articleRoutes = files
      .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
      .map(f => {
        const fullPath = path.join(articlesDir, f);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        // Fallback to filename if slug isn't in frontmatter
        const slug = matterResult.data.slug || f.replace(/\.mdx?$/, '');
        return `/artikel/${slug}`;
      });
  }

  const allRoutes = [...staticRoutes, ...articleRoutes];
  const date = new Date().toISOString().split('T')[0];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`Sitemap generated successfully at ${sitemapPath} with ${allRoutes.length} routes.`);
}

generateSitemap().catch(console.error);
