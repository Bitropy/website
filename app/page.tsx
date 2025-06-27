"use client"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FlexibleEngagementModels from "@/components/ui/FlexibleEngagementModels"
import { ArrowRight, Brain, Check, Code, Database, Shield, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900/20">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-lg rotate-45 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-purple-300/30 rounded-full animate-ping"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 right-40 w-24 h-24 bg-purple-500/10 rounded-lg animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>

          {/* Grid pattern elements */}
          <div className="absolute top-10 right-10 opacity-10">
            <svg width="60" height="60" viewBox="0 0 60 60" className="animate-spin-slow text-purple-400">
              <rect x="10" y="10" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="26" y="10" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="42" y="10" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="10" y="26" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="26" y="26" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="42" y="26" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="10" y="42" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="26" y="42" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="42" y="42" width="8" height="8" rx="2" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="animate-spin-slow text-purple-400"
              style={{ animationDirection: "reverse" }}
            >
              <rect x="6" y="6" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="17" y="6" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="28" y="6" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="6" y="17" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="17" y="17" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="28" y="17" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="6" y="28" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="17" y="28" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="28" y="28" width="6" height="6" rx="1" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Main glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto bg-purple-900/50 text-purple-300 border-purple-700">
              🚀 Technology Consulting • Web3 • AI Solutions
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Scale Your Technology
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                With T-shaped Services
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
            We architect secure, scalable systems—with no full-time hire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-purple-400" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-purple-400" />
                <span>Flexible engagement models</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-180deg); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative bg-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Comprehensive Technology
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
              End-to-end technology solutions delivered by specialized individuals and teams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full max-w-7xl mx-auto">
            {/* 1. Fractional CTO */}
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                  <Brain className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-white">Fractional CTO</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Product strategy, roadmap governance, team scaling, architecture reviews
                </CardDescription>
              </CardContent>
            </Card>

            {/* 2. Web3 & Blockchain */}
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                  <Code className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-white">Web3 & Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Smart contracts, DeFi, secure infrastructure
                </CardDescription>
              </CardContent>
            </Card>

            {/* 3. AI & Data */}
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                  <Database className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-white">AI & Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  AI pipelines, analytics, automation, agentic workflows
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 md:py-32 bg-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Proven Team
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Expertise
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Our experienced teams have built and scaled technology organizations across startups and growing
                  companies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <TrendingUp className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Strategic Technology Planning</h3>
                    <p className="text-gray-300">
                      Technology roadmaps, architecture decisions, and scalability planning aligned with business
                      objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <Shield className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Security & Compliance</h3>
                    <p className="text-gray-300">
                      Enterprise security frameworks, compliance strategies, and risk management for modern
                      applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <Zap className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Team & Process Optimization</h3>
                    <p className="text-gray-300">
                      Building high-performing engineering teams, implementing DevOps practices, and optimizing
                      development workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg blur-xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Technology Consulting"
                width={600}
                height={500}
                className="rounded-lg relative z-10 border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Real
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
              Case studies from our technology consulting engagements
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">SaaS Security & Acquisition Readiness</h3>
                <p className="text-gray-300 leading-relaxed">
                  Transformed a growing SaaS company's security posture and operational processes to prepare for
                  acquisition. Implemented comprehensive security frameworks resulting in successful SOC 2 Type II and
                  ISO 27001 certifications, significantly increasing company valuation and acquisition appeal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">AI Startup Technical Leadership</h3>
                <p className="text-gray-300 leading-relaxed">
                  Served as Fractional CTO for an innovative AI startup, designing scalable architecture and overseeing
                  end-to-end technical delivery of advanced software solutions with Large Language Model integrations.
                  Established robust development practices and guided the technical team through rapid product
                  iterations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Web3 Strategy & Smart Contract Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Led comprehensive technological strategy for a Web3 company and successfully implemented
                  proof-of-concept smart contracts on Ethereum blockchain. Delivered complete Web3 DevOps pipeline with
                  automated testing, deployment, and monitoring systems for decentralized applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Fashion Retail Data & AI Strategy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Developed comprehensive data and AI strategy for an emerging fashion retail brand, implementing
                  intelligent recommendation systems, inventory optimization algorithms, and customer behavior
                  analytics. Created data-driven insights that improved conversion rates and operational efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <FlexibleEngagementModels />

      {/* Final CTA Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gray-800">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"></div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to Scale Your
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Technology?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how our technology consulting teams can accelerate your growth without the overhead of
              full-time leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Free 30-minute consultation • No commitment required • Immediate insights
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
