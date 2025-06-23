"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Brain, Code, Database, Shield, ArrowRight, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Bitropy Logo Component
function BitropyLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <defs>
          <linearGradient id="bitropyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>
        {/* Background square */}
        <rect width="32" height="32" rx="4" fill="url(#bitropyGradient)" />
        {/* 3x3 grid of rounded squares */}
        <rect x="6" y="6" width="4" height="4" rx="1" fill="white" />
        <rect x="14" y="6" width="4" height="4" rx="1" fill="white" />
        <rect x="22" y="6" width="4" height="4" rx="1" fill="white" />
        <rect x="6" y="14" width="4" height="4" rx="1" fill="white" />
        <rect x="14" y="14" width="4" height="4" rx="1" fill="white" />
        <rect x="22" y="14" width="4" height="4" rx="1" fill="white" />
        <rect x="6" y="22" width="4" height="4" rx="1" fill="white" />
        <rect x="14" y="22" width="4" height="4" rx="1" fill="white" />
        <rect x="22" y="22" width="4" height="4" rx="1" fill="white" />
      </svg>
    </div>
  )
}

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <BitropyLogo />
            <span className="text-xl font-bold text-gray-800">Bitropy</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="#expertise" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Expertise
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-gray-700 hover:text-black hover:bg-gray-50"
              onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gray-100/50 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-gray-200/60 rounded-lg rotate-45 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-gray-300/70 rounded-full animate-ping"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 right-40 w-24 h-24 bg-gray-100/40 rounded-lg animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-gray-100/30 to-gray-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-gray-200/30 to-gray-100/30 rounded-full blur-xl animate-float-delayed"></div>

          {/* Grid pattern elements */}
          <div className="absolute top-10 right-10 opacity-10">
            <svg width="60" height="60" viewBox="0 0 60 60" className="animate-spin-slow">
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
              className="animate-spin-slow"
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-100/40 to-gray-200/40 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto bg-gray-100 text-gray-800 border-gray-200">
              🚀 Technology Consulting • Web3 • AI Solutions
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-black">
              Scale Your Technology
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                {" "}
                With Expert Teams
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
              Expert technology consulting teams specializing in fractional leadership, Web3 & blockchain development,
              and AI/data solutions. Scale your technology with dedicated specialists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-black hover:bg-gray-800 text-white"
                onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-black hover:border-gray-400"
              >
                View Case Studies
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-black" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-black" />
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
      <section id="services" className="py-20 md:py-32 relative bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Comprehensive Technology
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"> Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              End-to-end technology solutions delivered by specialized teams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            <Card className="bg-white border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-all">
                  <Brain className="h-8 w-8 text-gray-800" />
                </div>
                <CardTitle className="text-black">Fractional CTO</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Strategic technology leadership without the full-time commitment. Architecture, team building, and
                  technical roadmaps.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-all">
                  <Code className="h-8 w-8 text-gray-800" />
                </div>
                <CardTitle className="text-black">Web3 & Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Smart contract development, DeFi protocols, NFT platforms, and blockchain integration strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-all">
                  <Database className="h-8 w-8 text-gray-800" />
                </div>
                <CardTitle className="text-black">Data & AI Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Machine learning implementation, data architecture, AI strategy, and intelligent automation systems.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
                  Proven Team
                  <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                    {" "}
                    Expertise
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Our experienced teams have built and scaled technology organizations across startups and growing
                  companies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <TrendingUp className="h-4 w-4 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Strategic Technology Planning</h3>
                    <p className="text-gray-600">
                      Technology roadmaps, architecture decisions, and scalability planning aligned with business
                      objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <Shield className="h-4 w-4 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Security & Compliance</h3>
                    <p className="text-gray-600">
                      Enterprise security frameworks, compliance strategies, and risk management for modern
                      applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <Zap className="h-4 w-4 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Team & Process Optimization</h3>
                    <p className="text-gray-600">
                      Building high-performing engineering teams, implementing DevOps practices, and optimizing
                      development workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-200/50 rounded-lg blur-xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Technology Consulting"
                width={600}
                height={500}
                className="rounded-lg relative z-10 border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Real
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"> Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Case studies from our technology consulting engagements
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            <Card className="bg-white border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  [Please provide details from your LinkedIn about a company you worked with - I'll transform this into
                  a case study narrative about the technology challenges solved and results achieved]
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  [Please provide details from your LinkedIn about another company - I'll create a compelling case study
                  about the technical solutions implemented]
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  [Please provide details from your LinkedIn about a third company - I'll craft a case study
                  highlighting the strategic technology leadership provided]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Flexible
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                {" "}
                Engagement Models
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Choose the engagement model that fits your needs and budget
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto w-full">
            <Card className="bg-white border-gray-200 p-6 hover:border-gray-400 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Strategic Advisory</CardTitle>
                <CardDescription className="text-gray-600">
                  Team-based consultation for early-stage guidance
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-black">$2,500</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
                >
                  Get Started
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Monthly strategy sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Technology roadmap</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Architecture reviews</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-400 p-6 relative shadow-lg shadow-gray-100">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl text-black">Technology Leadership</CardTitle>
                <CardDescription className="text-gray-600">
                  Hands-on technology leadership from expert teams
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-black">$8,500</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
                >
                  Get Started
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">20 hours per month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Team leadership</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Technical implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Board meeting participation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 p-6 hover:border-gray-400 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Full Engagement</CardTitle>
                <CardDescription className="text-gray-600">Complete technology transformation</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-black">Custom</span>
                  <span className="text-gray-500"> pricing</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-gray-400 text-gray-800 hover:bg-gray-50 hover:text-black"
                >
                  Contact Sales
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Full-time availability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Custom solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Dedicated team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">24/7 support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-black" />
                    <span className="text-gray-700">Enterprise SLA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gray-50">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-100"></div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Ready to Scale Your
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                {" "}
                Technology?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how our technology consulting teams can accelerate your growth without the overhead of
              full-time leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-black hover:bg-gray-800 text-white"
                onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Free 30-minute consultation • No commitment required • Immediate insights
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BitropyLogo />
                <span className="text-xl font-bold text-gray-800">bitropy.io</span>
              </div>
              <p className="text-gray-600">
                Strategic technology consulting for the modern enterprise. Fractional CTO, Web3, and AI expertise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-black">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Fractional CTO
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Web3 & Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    AI & Data Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Technology Strategy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-black">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-black">Connect</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendly.com/darekd/30min"
                    className="hover:text-black transition-colors"
                    target="_blank"
                  >
                    Schedule Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© {new Date().getFullYear()} bitropy.io. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-black transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
