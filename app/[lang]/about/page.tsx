import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Target, Users, MessageCircle, Handshake, Eye, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { getDictionary } from "@/lib/dictionaries"

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'pl')
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage="about" dict={dict} />

      {/* Back to Home Link */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <Link href={`/${lang}`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {dict.about.back_to_home}
        </Link>
      </div>

      {/* About Hero Section */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              {dict.about.title.split(' ').slice(0, -1).join(' ')}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {dict.about.title.split(' ').slice(-1)[0]}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-[600px] mx-auto">
              {dict.about.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Why Bitropy was Created */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">{dict.about.why_created.title}</h2>
                </div>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  {dict.about.why_created.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">{dict.about.values.title}</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Target className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{dict.about.values.meritocracy.title}</h4>
                        <p className="text-gray-300">{dict.about.values.meritocracy.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{dict.about.values.feedback.title}</h4>
                        <p className="text-gray-300">{dict.about.values.feedback.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Handshake className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{dict.about.values.partnership.title}</h4>
                        <p className="text-gray-300">{dict.about.values.partnership.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Eye className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{dict.about.values.customer_focus.title}</h4>
                        <p className="text-gray-300">{dict.about.values.customer_focus.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Shield className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{dict.about.values.honesty.title}</h4>
                        <p className="text-gray-300">{dict.about.values.honesty.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Section */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">{dict.about.founder.title}</h2>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
                  <div className="relative flex-shrink-0">
                    <Image
                      src="/darek.jpg"
                      alt="Darek Dwornikowski - CEO & Founder"
                      width={200}
                      height={200}
                      className="rounded-full border-4 border-purple-600"
                    />
                  </div>
                  <div className="space-y-4 text-center lg:text-left">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{dict.about.founder.name}</h3>
                      <p className="text-xl text-purple-400 mb-2">{dict.about.founder.position}</p>
                      <Link 
                        href="https://linkedin.com/in/darekd" 
                        target="_blank"
                        className="inline-flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {dict.about.founder.connect_linkedin} <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">{dict.about.founder.subtitle}</h4>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    {dict.about.founder.bio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{dict.about.founder.achievements_title}</h4>
                  <ul className="space-y-2 text-gray-300">
                    {dict.about.founder.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </div>
  )
}