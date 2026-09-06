import { createServerFn } from '@tanstack/react-start'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type ArticleFrontmatter = {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  author: string
  publishedAt: string
  tags: string[]
  seoDescription: string
}

export type Article = ArticleFrontmatter & {
  contentHtml: string
}

// Use Vite's import.meta.glob to bundle markdown files directly, avoiding fs/cwd issues during SSR/Prerender
const articleFiles = import.meta.glob('../../content/articles/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const articleMdxFiles = import.meta.glob('../../content/articles/*.mdx', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const allFiles = { ...articleFiles, ...articleMdxFiles };

export const getArticles = createServerFn({ method: 'GET' })
  .handler(async () => {
    const allArticles = Object.entries(allFiles).map(([path, fileContents]) => {
      const matterResult = matter(fileContents)
      return matterResult.data as ArticleFrontmatter
    })

    // Sort articles by date
    return allArticles.sort((a, b) => {
      if (a.publishedAt < b.publishedAt) {
        return 1
      } else {
        return -1
      }
    })
  })

export const getArticleBySlug = createServerFn({ method: 'GET' })
  .validator((slug: string) => slug)
  .handler(async (ctx) => {
    const slug = ctx.data
    
    // Find the matching file
    const fileKey = Object.keys(allFiles).find(key => key.endsWith(`/${slug}.md`) || key.endsWith(`/${slug}.mdx`))
    
    if (!fileKey) {
      throw new Error(`Article not found: ${slug}`)
    }

    const fileContents = allFiles[fileKey];
    const matterResult = matter(fileContents)

    // Process markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      ...(matterResult.data as ArticleFrontmatter),
      contentHtml,
    } as Article
  })
