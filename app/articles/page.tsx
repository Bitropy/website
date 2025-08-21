import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Breadcrumb, { BreadcrumbStructuredData } from "@/components/ui/Breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllArticles } from "@/lib/mdx"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Consulting & Data Sovereignty Insights - Expert Articles",
  description: "Expert insights on Private AI implementation, data sovereignty frameworks, and enterprise AI security. Strategic guidance from executives with proven 9-figure exits. Learn how to implement AI governance, ensure regulatory compliance, and build secure AI infrastructure for your organization.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitropy.io/articles",
    siteName: "Bitropy",
    title: "AI Consulting & Data Sovereignty Insights - Expert Articles | Bitropy",
    description: "Expert insights on Private AI implementation, data sovereignty frameworks, and enterprise AI security. Strategic guidance from executives with proven 9-figure exits. Learn how to implement AI governance, ensure regulatory compliance, and build secure AI infrastructure for your organization.",
    images: [
      {
        url: "https://bitropy.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitropy AI & Data Sovereignty Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bitropy",
    creator: "@bitropy",
    title: "AI Consulting & Data Sovereignty Insights - Expert Articles | Bitropy",
    description: "Expert insights on Private AI implementation, data sovereignty frameworks, and enterprise AI security. Strategic guidance from executives with proven 9-figure exits.",
    images: ["https://bitropy.io/og-image.png"],
  },
  alternates: {
    canonical: "https://bitropy.io/articles",
  },
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  const breadcrumbItems = [
    {
      label: 'Articles'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <BreadcrumbStructuredData items={breadcrumbItems} lang="en" />
      <Header currentPage="articles" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50">
        {/* Clean background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} lang="en" />
          </div>
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Articles
            </h1>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 relative bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="bg-white border-gray-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white border-0">
                    {article.category}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-gray-900 text-xl font-bold line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-700 text-base line-clamp-3 mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <Link href={`/articles/${article.id}`}>
                    <Button
                      variant="ghost"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          {/* <div className="mt-20 text-center">
            <Card className="bg-gray-900 border-gray-700 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Stay Updated</CardTitle>
                <CardDescription className="text-gray-300">
                  Get the latest technology insights and articles delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <Button className="bg-purple-600 hover:bg-p qurple-700 text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  )
} 