"use client"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, FileText, Users, Globe, Clock, Mail } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage="privacy" />

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
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto bg-purple-900/50 text-purple-300 border-purple-700">
              <Shield className="h-4 w-4 mr-2" />
              Privacy & Data Protection
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              Privacy Policy
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                & GDPR Compliance
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
              Your privacy is our priority. Learn how Bitropy sp zoo protects and manages your personal data in compliance with GDPR and other privacy regulations.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-purple-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-purple-400" />
                <span>Data Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-purple-400" />
                <span>Transparent Practices</span>
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
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 md:py-32 relative bg-gray-800">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
          <div className="space-y-8">
            {/* Last Updated */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-purple-400" />
                  Last Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  <strong>Date:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-400" />
                  1. Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Bitropy sp zoo ("we," "our," or "us") is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-300">
                  By using our website and services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-purple-400" />
                  2. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Information provided through contact forms</li>
                    <li>Communication preferences</li>
                    <li>Professional background and expertise</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-3">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-300 mb-4">
                    When you visit our website, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-purple-400" />
                  3. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We use the collected information for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website and services</li>
                  <li>To send you marketing communications (with your explicit consent)</li>
                  <li>To comply with legal obligations</li>
                  <li>To ensure the security and integrity of our services</li>
                </ul>
              </CardContent>
            </Card>

            {/* GDPR Rights */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-400" />
                  4. Your GDPR Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Right to Access</h4>
                    <p className="text-gray-300 text-sm">Request a copy of your personal data and information about how it's processed.</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Right to Rectification</h4>
                    <p className="text-gray-300 text-sm">Request correction of inaccurate or incomplete personal data.</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Right to Erasure</h4>
                    <p className="text-gray-300 text-sm">Request deletion of your personal data ("right to be forgotten").</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Right to Restrict Processing</h4>
                    <p className="text-gray-300 text-sm">Request limitation of processing under certain circumstances.</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Right to Data Portability</h4>
                    <p className="text-gray-300 text-sm">Receive your personal data in a structured, machine-readable format.</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Right to Object</h4>
                    <p className="text-gray-300 text-sm">Object to processing of your personal data for specific purposes.</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </CardContent>
            </Card>

            {/* Information Sharing and Disclosure */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-purple-400" />
                  5. Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>With service providers who assist us in operating our website and providing services (under strict data processing agreements)</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                  <li>To prevent fraud or security threats</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-400" />
                  6. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-purple-400" />
                  7. Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-gray-300">
                  We only use essential cookies and analytics cookies that help us improve our services. You have the right to withdraw consent for non-essential cookies at any time.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-400" />
                  8. Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We regularly review and delete data that is no longer needed.
                </p>
              </CardContent>
            </Card>

            {/* International Data Transfers */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-purple-400" />
                  9. International Data Transfers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws, including GDPR requirements for international transfers, through appropriate safeguards such as Standard Contractual Clauses (SCCs) or adequacy decisions.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-400" />
                  10. Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Privacy Policy */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-purple-400" />
                  11. Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. For significant changes, we may also notify you via email or through our website.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-purple-400" />
                  12. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, our data practices, or wish to exercise your GDPR rights, please contact us:
                </p>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-white font-medium">Bitropy sp zoo</p>
                    <p className="text-gray-300">Email: <a href="mailto:privacy@bitropy.io" className="text-purple-400 hover:text-purple-300">privacy@bitropy.io</a></p>
                    <p className="text-gray-300">Website: <a href="https://bitropy.io" className="text-purple-400 hover:text-purple-300">https://bitropy.io</a></p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 text-sm">
                      <strong>Data Protection Officer:</strong> For GDPR-related inquiries, please contact our designated data protection officer at the email address above.
                    </p>
                  </div>
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