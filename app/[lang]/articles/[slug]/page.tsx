import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import ShareButtons from "@/components/ShareButtons"
import { ArticleSchema } from "@/components/StructuredData"
import Breadcrumb, { BreadcrumbStructuredData } from "@/components/ui/Breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getArticleById } from "@/lib/mdx"
import { getDictionary } from "@/lib/dictionaries"
import { ArrowLeft, ArrowRight, BookOpen, Calendar, CalendarDays, Clock, Share2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleById(slug)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The article you're looking for could not be found."
    }
  }

  const articleUrl = `https://bitropy.io/articles/${article.id}`
  const imageUrl = article.image.startsWith('http') ? article.image : `https://bitropy.io${article.image}`

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: articleUrl,
      siteName: "Bitropy",
      title: article.title,
      description: article.description,
      publishedTime: article.publishDate,
      authors: [article.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@bitropy",
      creator: "@bitropy",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: articleUrl,
    },
    keywords: article.tags?.join(", ") || "",
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const dict = await getDictionary(lang as 'en' | 'pl')
  const article = getArticleById(slug)

  if (!article) {
    notFound()
  }


  const breadcrumbItems = [
    {
      label: dict.nav?.articles || 'Articles',
      href: `/${lang}/articles`
    },
    {
      label: article.title
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ArticleSchema article={article} />
      <BreadcrumbStructuredData items={breadcrumbItems} lang={lang} />
      <Header currentPage="articles" dict={dict} />

      {/* Article Header */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900/20"></div>

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} lang={lang} className="mb-4" />
            <Link href={`/${lang}/articles`}>
              <Button variant="ghost" className="text-gray-400 hover:text-white mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <Badge className="bg-purple-600/90 text-white border-0">
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              {article.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>By {article.author}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-white font-semibold flex items-center text-sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </div>
                <ShareButtons
                  title={article.title}
                  url={`https://bitropy.io/articles/${article.id}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 relative bg-gray-800">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
          {/* Main Content */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8">
              <div
                className="prose prose-invert max-w-none prose-lg"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="bg-purple-600/20 p-3 rounded-full">
                        <CalendarDays className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Ready to Scale Your Technology?
                      </h3>
                      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can help you implement the strategies from this article with exit-proven leadership. Schedule a strategic assessment with our experts.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Link href={`/${lang}/contact`}>
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                          <CalendarDays className="h-5 w-5 mr-2" />
                          Schedule Assessment
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href={`/${lang}/articles`}>
                        <Button variant="outline" size="lg" className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 px-8 py-3 text-lg transition-colors">
                          Read More Articles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer dict={dict} />
    </div>
  )
} 