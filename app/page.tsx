"use client"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedBitropyDots from "@/components/ui/AnimatedBitropyDots"
import { ArrowRight, Brain, Code, Database, Shield } from "lucide-react"
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
              Strategic Technology Architecture for Modern Enterprises
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Strategic Technology Architecture
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                for Modern Enterprises
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
              High-Value Technology Advisory • AI & Developer Productivity • Enterprise Blockchain • DevSecOps & AIOps
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
              Our Four
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Pillars
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
              Strategic technology architecture delivered through four specialized service areas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 w-full max-w-7xl mx-auto">
            {/* 1. High-Value Technology Advisory */}
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-xl">High-Value Technology Advisory</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We guide enterprises to optimal technology decisions that balance innovation, security, and speed to market.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">What we deliver:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Fractional CTO/CISO leadership</li>
                    <li>• Technology strategy and architecture roadmaps</li>
                    <li>• M&A technical due diligence</li>
                    <li>• Board-level technology advisory</li>
                  </ul>
                </div>
                <p className="text-purple-300 text-sm font-medium">
                  Perfect for: Companies facing critical technology decisions or preparing for scale
                </p>
              </CardContent>
            </Card>

            {/* 2. AI & Developer Productivity */}
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                    <Database className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-xl">AI & Developer Productivity</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We transform engineering teams with AI-powered workflows and comprehensive enablement programs.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">What we deliver:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• AI-augmented development environments</li>
                    <li>• Developer productivity automation</li>
                    <li>• AI governance frameworks</li>
                    <li>• Custom training and enablement programs</li>
                  </ul>
                </div>
                <p className="text-purple-300 text-sm font-medium">
                  Perfect for: Organizations looking to 10x their development velocity
                </p>
              </CardContent>
            </Card>

            {/* 3. Enterprise Blockchain */}
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                    <Code className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-xl">Enterprise Blockchain</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We architect secure blockchain solutions for real business value, not hype.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">What we deliver:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Smart contract architecture and audits</li>
                    <li>• DeFi infrastructure and protocols</li>
                    <li>• Real World Asset (RWA) tokenization</li>
                    <li>• Web3 compliance and security</li>
                  </ul>
                </div>
                <p className="text-purple-300 text-sm font-medium">
                  Perfect for: Companies exploring blockchain for actual utility
                </p>
              </CardContent>
            </Card>

            {/* 4. DevSecOps, AIOps & Cloud */}
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-xl">DevSecOps, AIOps & Cloud</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We build intelligent, secure, and compliant infrastructure that scales effortlessly.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">What we deliver:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• DevSecOps transformation and automation</li>
                    <li>• AIOps implementation for intelligent operations</li>
                    <li>• Cloud architecture and FinOps optimization</li>
                    <li>• SOC 2 and ISO 27001 implementation</li>
                  </ul>
                </div>
                <p className="text-purple-300 text-sm font-medium">
                  Perfect for: Companies needing rock-solid infrastructure with AI-driven operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Who We
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Serve
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">SaaS Companies (Seed to Series C)</h3>
              <p className="text-gray-300">
                Architecture for multi-tenancy, AI feature integration, SOC 2 compliance, and M&A readiness
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">Enterprise Technology Teams</h3>
              <p className="text-gray-300">
                Modernization initiatives, AI adoption, blockchain pilots, and DevSecOps transformation
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">High-Growth Startups</h3>
              <p className="text-gray-300">
                Technical leadership, scalable architecture, and preparing for enterprise customers
              </p>
            </div>
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
                  Why
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Bitropy?
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 font-bold text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      <span className="text-purple-300 font-bold">Exit-proven leadership</span> - Led by executives from two 9-figure exits (Nordcloud to IBM, Worksuite)
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 font-bold text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      <span className="text-purple-300 font-bold">Scale expertise</span> - Built and scaled engineering teams from 0 to 400+ employees
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 font-bold text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      <span className="text-purple-300 font-bold">M&A ready</span> - Active technical due diligence advisor for VC/PE funds
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 font-bold text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      <span className="text-purple-300 font-bold">Full-stack excellence</span> - From blockchain to AI to enterprise infrastructure
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 font-bold text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      <span className="text-purple-300 font-bold">Builder's mindset</span> - We've built SaaS businesses from scratch and know what works
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg blur-xl"></div>
              <div className="relative z-10 h-96 flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <AnimatedBitropyDots />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage Section */}
      <section className="py-20 md:py-32 bg-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              How We
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Engage
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">Strategic Advisory</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-300 space-y-2">
                  <li>• Ongoing CTO/CISO guidance</li>
                  <li>• Continuous architecture evolution</li>
                  <li>• Strategic technology planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">Transformation Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-300 space-y-2">
                  <li>• Complete implementations</li>
                  <li>• Architecture overhauls</li>
                  <li>• Compliance certifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">Enablement Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-300 space-y-2">
                  <li>• Team training and workshops</li>
                  <li>• AI adoption programs</li>
                  <li>• Technology bootcamps</li>
                </ul>
              </CardContent>
            </Card>
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

          <div className="grid gap-8 md:grid-cols-2 w-full max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">Technology Advisory</Badge>
                  <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">DevSecOps</Badge>
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
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">AI & Developer Productivity</Badge>
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
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">Enterprise Blockchain</Badge>
                </div>
                <h3 className="font-semibold text-white mb-2">Web3 Strategy & Smart Contract Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Led comprehensive technological strategy for a Web3 company and successfully implemented
                  proof-of-concept smart contracts on Ethereum blockchain. Delivered complete Web3 DevSecOps pipeline with
                  automated testing, deployment, and monitoring systems for decentralized applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">AI & Developer Productivity</Badge>
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
                Discuss Your Technology Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Bottom Tagline */}
      <div className="bg-gray-900 py-8 text-center border-t border-gray-800">
        <p className="text-gray-400 text-sm max-w-4xl mx-auto px-4">
          We help ambitious companies make the right technology decisions and implement them flawlessly.
        </p>
      </div>
    </div>
  )
}
