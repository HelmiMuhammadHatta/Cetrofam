import { createServerFn } from '@tanstack/react-start'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'content', 'articles')

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

// TODO: Upgrade to External Headless CMS (Sanity/Contentful)
// When article volume grows or visual editor is needed, replace this logic
// to fetch from Sanity/Contentful API instead of local markdown files.

export const getArticles = createServerFn({ method: 'GET' })
  .handler(async () => {
    // Check if directory exists
    if (!fs.existsSync(articlesDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(articlesDirectory)
    const allArticles = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

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
    
    // Check possible extensions
    let fullPath = path.join(articlesDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    }
    
    if (!fs.existsSync(fullPath)) {
      throw new Error('Article not found')
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
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
