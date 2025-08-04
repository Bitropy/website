import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, FileText, Users, Globe, Clock, Mail } from "lucide-react"
import { getDictionary } from "@/lib/dictionaries"
import { Metadata } from "next"

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'pl')
  const locale = lang === 'pl' ? 'pl_PL' : 'en_US'
  
  const title = lang === 'pl' 
    ? "Polityka prywatności - Bitropy | RODO i ochrona danych"
    : "Privacy Policy - Bitropy | GDPR & Data Protection"
  
  const description = dict.privacy.subtitle
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      alternateLocale: lang === 'pl' ? 'en_US' : 'pl_PL',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  }
}

export default async function PrivacyPolicy({ params }: Props) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'pl')
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage="privacy" dict={dict} />

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
              {dict.privacy.badge}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              {dict.privacy.title}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {dict.privacy.title_highlight}
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
              {dict.privacy.subtitle}
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-purple-400" />
                <span>{dict.privacy.features.gdpr_compliant}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-purple-400" />
                <span>{dict.privacy.features.data_protection}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-purple-400" />
                <span>{dict.privacy.features.transparent_practices}</span>
              </div>
            </div>
          </div>
        </div>

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
                  {dict.privacy.last_updated.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  <strong>{dict.privacy.last_updated.date_label}</strong> {new Date().toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', { 
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
                  {dict.privacy.introduction.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {dict.privacy.introduction.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.information_collect.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">{dict.privacy.information_collect.personal_info.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {dict.privacy.information_collect.personal_info.description}
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    {dict.privacy.information_collect.personal_info.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-3">{dict.privacy.information_collect.auto_collected.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {dict.privacy.information_collect.auto_collected.description}
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    {dict.privacy.information_collect.auto_collected.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.how_we_use.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {dict.privacy.how_we_use.description}
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  {dict.privacy.how_we_use.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* GDPR Rights */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.gdpr_rights.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  {dict.privacy.gdpr_rights.description}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">{dict.privacy.gdpr_rights.rights.access.title}</h4>
                    <p className="text-gray-300 text-sm">{dict.privacy.gdpr_rights.rights.access.description}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">{dict.privacy.gdpr_rights.rights.rectification.title}</h4>
                    <p className="text-gray-300 text-sm">{dict.privacy.gdpr_rights.rights.rectification.description}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">{dict.privacy.gdpr_rights.rights.erasure.title}</h4>
                    <p className="text-gray-300 text-sm">{dict.privacy.gdpr_rights.rights.erasure.description}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">{dict.privacy.gdpr_rights.rights.restrict.title}</h4>
                    <p className="text-gray-300 text-sm">{dict.privacy.gdpr_rights.rights.restrict.description}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">{dict.privacy.gdpr_rights.rights.portability.title}</h4>
                    <p className="text-gray-300 text-sm">{dict.privacy.gdpr_rights.rights.portability.description}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">{dict.privacy.gdpr_rights.rights.object.title}</h4>
                    <p className="text-gray-300 text-sm">{dict.privacy.gdpr_rights.rights.object.description}</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  {dict.privacy.gdpr_rights.contact_note}
                </p>
              </CardContent>
            </Card>

            {/* Information Sharing and Disclosure */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.information_sharing.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {dict.privacy.information_sharing.description}
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  {dict.privacy.information_sharing.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.data_security.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {dict.privacy.data_security.description}
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  {dict.privacy.data_security.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-300 mt-4">
                  {dict.privacy.data_security.disclaimer}
                </p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.cookies.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {dict.privacy.cookies.content.map((paragraph, index) => (
                  <p key={index} className={`text-gray-300 ${index === 0 ? 'mb-4' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.data_retention.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {dict.privacy.data_retention.content}
                </p>
              </CardContent>
            </Card>

            {/* International Data Transfers */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.international_transfers.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {dict.privacy.international_transfers.content}
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.children_privacy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {dict.privacy.children_privacy.content}
                </p>
              </CardContent>
            </Card>

            {/* Changes to Privacy Policy */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.policy_changes.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {dict.privacy.policy_changes.content}
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-purple-400" />
                  {dict.privacy.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {dict.privacy.contact.description}
                </p>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-white font-medium">{dict.privacy.contact.company}</p>
                    <p className="text-gray-300">{dict.privacy.contact.email_label} <a href={`mailto:${dict.privacy.contact.email}`} className="text-purple-400 hover:text-purple-300">{dict.privacy.contact.email}</a></p>
                    <p className="text-gray-300">{dict.privacy.contact.website_label} <a href={dict.privacy.contact.website} className="text-purple-400 hover:text-purple-300">{dict.privacy.contact.website}</a></p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 text-sm">
                      <strong>{dict.privacy.contact.dpo_note}</strong>
                    </p>
                  </div>
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