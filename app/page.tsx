"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Brain, Code, Database, Shield, ArrowRight, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Hexdot Logo Component
function HexdotLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Hexagon shape */}
        <path d="M16 2 L26 8 L26 24 L16 30 L6 24 L6 8 Z" fill="url(#hexGradient)" stroke="#6d28d9" strokeWidth="1" />
        {/* Inner dot */}
        <circle cx="16" cy="16" r="4" fill="white" />
      </svg>
    </div>
  )
}

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <HexdotLogo />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              hexdot
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#expertise"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
            >
              Schedule Call
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
              onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50"></div>

        {/* Glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100/50 to-violet-100/50 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto bg-purple-100 text-purple-700 border-purple-200">
              🚀 Technology Consulting • Web3 • AI Solutions
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-black">
              Scale Your Technology
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
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
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-gray-300 text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300"
              >
                View Case Studies
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Flexible engagement models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Comprehensive Technology
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              End-to-end technology solutions delivered by specialized teams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-purple-100 to-violet-100 group-hover:from-purple-200 group-hover:to-violet-200 transition-all">
                  <Brain className="h-8 w-8 text-purple-600" />
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

            <Card className="bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-purple-100 to-violet-100 group-hover:from-purple-200 group-hover:to-violet-200 transition-all">
                  <Code className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-black">Web3 & Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Smart contract development, DeFi protocols, NFT platforms, and blockchain integration strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-purple-100 to-violet-100 group-hover:from-purple-200 group-hover:to-violet-200 transition-all">
                  <Database className="h-8 w-8 text-purple-600" />
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
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
                  Proven Team
                  <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    {" "}
                    Expertise
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Our experienced teams have built and scaled technology organizations across startups to Fortune 500
                  companies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                    <Shield className="h-4 w-4 text-purple-600" />
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                    <Zap className="h-4 w-4 text-purple-600" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-violet-100/50 rounded-lg blur-xl"></div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Trusted by
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              See what clients say about working with our teams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-gray-200 p-6 hover:shadow-lg hover:border-purple-200 transition-all">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-purple-600 text-purple-600" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Transformed our entire technology strategy. The fractional CTO model gave us enterprise-level
                  leadership at a fraction of the cost."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Chen"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-black">Sarah Chen</p>
                    <p className="text-sm text-gray-500">CEO, FinTech Startup</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 p-6 hover:shadow-lg hover:border-purple-200 transition-all">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-purple-600 text-purple-600" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Their Web3 expertise helped us launch our DeFi platform ahead of schedule. Incredible depth of
                  knowledge in blockchain technologies."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Marcus Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-black">Marcus Rodriguez</p>
                    <p className="text-sm text-gray-500">CTO, Crypto Exchange</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 p-6 hover:shadow-lg hover:border-purple-200 transition-all">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-purple-600 text-purple-600" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "The AI implementation strategy delivered 40% efficiency gains. Their data architecture
                  recommendations were game-changing."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Jennifer Park"
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-black">Jennifer Park</p>
                    <p className="text-sm text-gray-500">VP Engineering, E-commerce</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Flexible
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Engagement Models
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Choose the engagement model that fits your needs and budget
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-white border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all">
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
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                  onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
                >
                  Get Started
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Monthly strategy sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Technology roadmap</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Architecture reviews</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-300 p-6 relative shadow-lg shadow-purple-100">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
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
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                  onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
                >
                  Get Started
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">20 hours per month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Team leadership</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Technical implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Board meeting participation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all">
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
                  className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 hover:text-purple-700"
                >
                  Contact Sales
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Full-time availability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Custom solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Dedicated team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">24/7 support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-purple-600" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-gray-50 to-violet-50"></div>

        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Ready to Scale Your
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
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
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-purple-300 text-purple-600 hover:bg-purple-50 hover:text-purple-700"
              >
                Download Case Studies
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
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <HexdotLogo />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  hexdot
                </span>
              </div>
              <p className="text-gray-600">
                Strategic technology consulting for the modern enterprise. Fractional CTO, Web3, and AI expertise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-black">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    Fractional CTO
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    Web3 & Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    AI & Data Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    Technology Strategy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-black">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-black">Connect</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendly.com/your-calendly-link"
                    className="hover:text-purple-600 transition-colors"
                    target="_blank"
                  >
                    Schedule Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© {new Date().getFullYear()} hexdot Consulting. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
