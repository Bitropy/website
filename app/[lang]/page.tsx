import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import FourPillars from "@/components/sections/FourPillars"
import { getDictionary } from "@/lib/dictionaries"
import { Badge } from "@/components/ui/badge"
import ClientButton from "@/components/ui/ClientButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedBitropyDots from "@/components/ui/AnimatedBitropyDots"
import { Brain, Code, Database, Shield } from "lucide-react"

export default async function ConsultingLandingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'pl')
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header currentPage="home" dict={dict} />

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

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
              {dict.hero.title_part1}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {dict.hero.title_part2}
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ClientButton
                size="lg"
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white"
                href="https://calendly.com/darek-bitropy/call"
              >
                {dict.hero.cta_button}
              </ClientButton>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <FourPillars dict={dict} />

      {/* Who We Serve Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              {dict.who_serve.title.split(' ').slice(0, -1).join(' ')}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {dict.who_serve.title.split(' ').slice(-1)[0]}
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">{dict.who_serve.saas_companies.title}</h3>
              <p className="text-gray-300">
                {dict.who_serve.saas_companies.description}
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">{dict.who_serve.enterprise_teams.title}</h3>
              <p className="text-gray-300">
                {dict.who_serve.enterprise_teams.description}
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">{dict.who_serve.startups.title}</h3>
              <p className="text-gray-300">
                {dict.who_serve.startups.description}
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
                  {dict.why_bitropy.title.split(' ').slice(0, -1).join(' ')}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    {dict.why_bitropy.title.split(' ').slice(-1)[0]}
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                {dict.why_bitropy.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-purple-400 font-bold text-xl">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        <span className="text-purple-300 font-bold">{point.highlight}</span> - {point.description}
                      </h3>
                    </div>
                  </div>
                ))}
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
              {dict.how_we_engage.title.split(' ').slice(0, -1).join(' ')}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {dict.how_we_engage.title.split(' ').slice(-1)[0]}
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">{dict.how_we_engage.strategic_advisory.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-300 space-y-2">
                  {dict.how_we_engage.strategic_advisory.services.map((service, index) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">{dict.how_we_engage.transformation.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-300 space-y-2">
                  {dict.how_we_engage.transformation.services.map((service, index) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">{dict.how_we_engage.enablement.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-300 space-y-2">
                  {dict.how_we_engage.enablement.services.map((service, index) => (
                    <li key={index}>• {service}</li>
                  ))}
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
              {dict.case_studies.title.split(' ').slice(0, -1).join(' ')}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {dict.case_studies.title.split(' ').slice(-1)[0]}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
              {dict.case_studies.subtitle}
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
                <h3 className="font-semibold text-white mb-2">{dict.case_studies.saas_security.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {dict.case_studies.saas_security.description}
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
                <h3 className="font-semibold text-white mb-2">{dict.case_studies.ai_startup.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {dict.case_studies.ai_startup.description}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">Private AI Infrastructure</Badge>
                </div>
                <h3 className="font-semibold text-white mb-2">{dict.case_studies.private_ai_implementation.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {dict.case_studies.private_ai_implementation.description}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:border-gray-600 transition-all">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">Data Sovereignty & AI</Badge>
                </div>
                <h3 className="font-semibold text-white mb-2">{dict.case_studies.fashion_retail.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {dict.case_studies.fashion_retail.description}
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
              {dict.final_cta.title_part1}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {dict.final_cta.title_part2}
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              {dict.final_cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ClientButton
                size="lg"
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white"
                href="https://calendly.com/darek-bitropy/call"
              >
                {dict.final_cta.cta_button}
              </ClientButton>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} />

      {/* Bottom Tagline */}
      <div className="bg-gray-900 py-8 text-center border-t border-gray-800">
        <p className="text-gray-400 text-sm max-w-4xl mx-auto px-4">
          {dict.bottom_tagline}
        </p>
      </div>
    </div>
  )
}
