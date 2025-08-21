import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Target, Users, MessageCircle, Handshake, Eye, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Bitropy - Exit-Proven AI & Technology Leadership",
  description: "Learn about Bitropy's leadership team with proven track records from 9-figure exits (Nordcloud to IBM, Worksuite) and European e-commerce platforms. Expert AI consulting, data sovereignty, and fractional CTO services for enterprise technology transformation.",
  openGraph: {
    type: "website",
    title: "About Bitropy - Exit-Proven AI & Technology Leadership",
    description: "Leadership team with proven track records from 9-figure exits and European e-commerce platforms. Expert AI consulting and fractional CTO services.",
    url: "https://bitropy.io/about",
    images: [
      {
        url: "https://bitropy.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitropy Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bitropy - Exit-Proven AI & Technology Leadership",
    description: "Leadership team with proven track records from 9-figure exits and European e-commerce platforms. Expert AI consulting and fractional CTO services.",
    images: ["https://bitropy.io/og-image.png"],
  },
  alternates: {
    canonical: "https://bitropy.io/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentPage="about" />

      {/* Back to Home Link */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* About Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              About
              <span className="text-purple-600">
                {" "}
                Bitropy
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission, values, and the visionary behind our success story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Why Bitropy was Created */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                  <h2 className="text-3xl font-medium text-gray-900">Why Bitropy was Created</h2>
                </div>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>As a founder with extensive experience in building and scaling technology organizations, I recognized a critical gap in the market. Many companies struggle to leverage the best available technology to drive their growth and innovation. They often lack the expertise, resources, or strategic guidance needed to make informed technology decisions that can truly transform their business.</p>
                  <p>Bitropy was born from my desire to help companies in the best possible way to harness cutting-edge technology solutions. Having witnessed firsthand the transformative power of well-implemented technology strategies through my work at Nordcloud, Worksuite, and other ventures, I wanted to create a consultancy that could bridge this gap for businesses of all sizes.</p>
                  <p>Our mission is to democratize access to world-class technology expertise, ensuring that every company—regardless of size or industry—can leverage the most effective technologies to achieve their goals and stay competitive in today&apos;s rapidly evolving digital landscape.</p>
                </div>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                  <h2 className="text-3xl font-medium text-gray-900">Our Values</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Target className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Meritocracy</h4>
                        <p className="text-gray-600">We believe that the best ideas and contributions should be recognized and rewarded, regardless of hierarchy. Excellence and results drive our decisions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Feedback Oriented</h4>
                        <p className="text-gray-600">Continuous improvement through honest, constructive feedback. We create an environment where everyone can grow and learn from each other.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Handshake className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Partnership</h4>
                        <p className="text-gray-600">We operate like a modern law firm where employees participate in revenue sharing. Everyone has a stake in our collective success and growth.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Eye className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Customer Focus</h4>
                        <p className="text-gray-600">Our clients&apos; success is our success. We prioritize understanding their needs and delivering solutions that create real, measurable value.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Shield className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Honesty & Trustworthiness</h4>
                        <p className="text-gray-600">We build lasting relationships through transparent communication, ethical practices, and always delivering on our commitments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Section */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                  <h2 className="text-3xl font-medium text-gray-900">Meet Our Founder</h2>
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
                      <h3 className="text-3xl font-medium text-gray-900 mb-2">Darek Dwornikowski</h3>
                      <p className="text-xl text-purple-600 mb-2">Founder & CEO, Bitropy</p>
                      <Link 
                        href="https://linkedin.com/in/darekd" 
                        target="_blank"
                        className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Connect on LinkedIn <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-medium text-gray-900 mb-4">Technology Visionary & Serial Entrepreneur</h4>
                  <div className="text-gray-600 space-y-4 leading-relaxed">
                    <p>Darek Dwornikowski is an experienced Polish entrepreneur and technology visionary who has been part of two successful exits with nine-figure valuations. Currently serving as CEO of Bitropy, he leads the company&apos;s strategic development, leveraging his extensive experience in building and scaling technology organizations.</p>
                    <p>Previously, as VP of Engineering and a member of the global leadership team at Nordcloud, Darek was instrumental in the company&apos;s transformation from a startup to a leading European cloud services provider, ultimately acquired by IBM for over $500M. It was Darek who built Nordcloud&apos;s Polish division from the ground up, scaling the team to over 400 employees and developing the company&apos;s SaaS business from scratch.</p>
                    <p>At Worksuite, serving as CTO, he participated in the company&apos;s sale to growth funds. His experience encompasses not only M&A strategies and preparing companies for exits, but also deep technical expertise in cloud computing, distributed systems, and blockchain, which is supported by his earlier academic career at Poznań University of Technology and his role as co-founder of Tenesys.</p>
                    <p>Today, Darek actively advises on technical due diligence for VC/PE funds and supports founders in scaling and selling their companies, bringing together his unique combination of technical depth and business acumen to drive successful outcomes.</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Two successful nine-figure exits as key leadership team member
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Built and scaled Nordcloud Poland from 0 to 400+ employees
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed SaaS business line that contributed to $500M+ acquisition by IBM
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Deep expertise in cloud computing, distributed systems, and blockchain technology
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Active advisor for VC/PE technical due diligence and founder support
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}