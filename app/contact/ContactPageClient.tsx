"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPageClient() {
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
    <>
      {/* Back to Home Link */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Contact Hero Section */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Get In
              <span className="text-purple-600">
                {" "}
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to scale your technology? Let&apos;s discuss how our expert teams can help accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold">
              >
                <Link href="https://calendly.com/darek-bitropy/call" target="_blank">
                  Schedule a Call
                </Link>
              </Button>
              <p className="text-sm text-gray-500 self-center">or fill out the form below</p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 border border-purple-100">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-base text-gray-600">
                      Bitropy sp. z o.o.
                      <br /> 
                      Registered in the National Court Register under 0001182638 
                      <br />
                      Hanny Malewskiej 24/1
                      <br />
                      60-461 Poznań, Poland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 border border-purple-100">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-base text-gray-600">
                      <a href="mailto:info@bitropy.io" className="hover:text-purple-600 transition-colors">
                        info@bitropy.io
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white border border-gray-200 shadow-sm p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">Send us a message</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-700">Message sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base text-gray-900 font-semibold">
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
                        className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 font-medium">
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
                        className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-base text-gray-900 font-semibold">
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
                      className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-900 font-medium">
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
                      className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900 font-medium">
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
                      className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}