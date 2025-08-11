import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export interface Article {
  id: string
  title: string
  description: string
  image: string
  category: string
  readTime: string
  publishDate: string
  author: string
  excerpt: string
  content: string
  tags?: string[]
}

const articlesDirectory = path.join(process.cwd(), 'content/articles')

// Configure marked to use synchronous parsing
marked.use({
  async: false
})

export function getAllArticles(): Article[] {
  // Get file names under /content/articles
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get id
      const id = fileName.replace(/\.mdx$/, '')

      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Convert markdown content to HTML
      const htmlContent = marked.parse(matterResult.content) as string

      // Combine the data with the id
      return {
        id,
        content: htmlContent,
        ...(matterResult.data as Omit<Article, 'id' | 'content'>),
      }
    })

  // Sort posts by date
  return allArticlesData.sort((a, b) => {
    if (a.publishDate < b.publishDate) {
      return 1
    } else {
      return -1
    }
  })
}

export function getArticleById(id: string): Article | undefined {
  try {
    const fullPath = path.join(articlesDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Convert markdown content to HTML
    const htmlContent = marked.parse(matterResult.content) as string

    return {
      id,
      content: htmlContent,
      ...(matterResult.data as Omit<Article, 'id' | 'content'>),
    }
  } catch {
    return undefined
  }
}

export function getArticlesByCategory(category: string): Article[] {
  const allArticles = getAllArticles()
  return allArticles.filter(article => article.category === category)
}

export function getRecentArticles(limit: number = 6): Article[] {
  const allArticles = getAllArticles()
  return allArticles.slice(0, limit)
}

export function getRelatedArticles(currentArticleId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentArticleId)
  if (!currentArticle) return []
  
  const allArticles = getAllArticles()
  return allArticles
    .filter(article => article.id !== currentArticleId)
    .filter(article => 
      article.category === currentArticle.category ||
      article.tags?.some(tag => currentArticle.tags?.includes(tag))
    )
    .slice(0, limit)
}

export function getAllArticleIds(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
} 