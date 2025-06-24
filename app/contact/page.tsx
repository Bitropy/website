"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Clock, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Bitropy Logo Component
function BitropyLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <defs>
          <linearGradient id="bitropyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b0764" />
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-3">
            <BitropyLogo />
            <span className="text-xl font-bold text-purple-400">Bitropy</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/#expertise" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Expertise
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </header>

      {/* Back to Home Link */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Contact Hero Section */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              Get In
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-[600px] mx-auto">
              Ready to scale your technology? Let's discuss how our expert teams can help accelerate your growth.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Profile Card */}
              <Card className="bg-gray-800 border-gray-700 p-6">
                <CardContent className="flex items-center space-x-6">
                  <div className="relative">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Darek Dwornikowski - CEO"
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Darek Dwornikowski</h3>
                    <p className="text-lg text-gray-300">Technology Consultant & Fractional CTO</p>
                    <p className="text-gray-400">Founder, CEO, Bitropy.io</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Address</h3>
                    <p className="text-gray-300">
                      Poznań, Poland, EU
                      <br />
                      Poland, 🇪🇺
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">info@bitropy.io</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Prefer to schedule a call?</h3>
                <Button
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
                >
                  Schedule Free Consultation
                </Button>
                <p className="text-sm text-gray-400 text-center">
                  Free 30-minute consultation • No commitment required
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-green-300 font-medium">Message sent successfully!</p>
                      <p className="text-green-400 text-sm">
                        We'll get back to you within 24 hours. Check your email for confirmation.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-red-300 font-medium">Failed to send message</p>
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, challenges, or how we can help..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BitropyLogo />
                <span className="text-xl font-bold text-purple-400">bitropy.io</span>
              </div>
              <p className="text-gray-300">
                Strategic technology consulting for the modern enterprise. Fractional CTO, Web3, and AI expertise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Fractional CTO
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Product Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Company Scaling
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Web3 & Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    AI & Data Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Connect</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendly.com/darekd/30min"
                    className="hover:text-white transition-colors"
                    target="_blank"
                  >
                    Schedule Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} bitropy.io. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
