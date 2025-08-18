import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import FourPillars from "@/components/sections/FourPillars"
import { Badge } from "@/components/ui/badge"
import ClientButton from "@/components/ui/ClientButton"
import { Brain, Code, Database, Shield } from "lucide-react"

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Subtle gradient background with dot pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Bitropy dot pattern background */}
        <div className="absolute inset-0 opacity-20">
          {/* Purple dots scattered pattern */}
          <div className="absolute top-20 left-10 w-12 h-12 bg-purple-400 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-32 right-20 w-8 h-8 bg-purple-500 rounded-full animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-16 right-1/3 w-16 h-16 bg-purple-300 rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
          <div className="absolute top-40 left-1/4 w-12 h-12 bg-purple-400 rounded-full animate-pulse" style={{animationDuration: '7s'}}></div>
          <div className="absolute top-24 left-2/3 w-10 h-10 bg-purple-500 rounded-full animate-pulse" style={{animationDuration: '4.5s'}}></div>
          
          {/* Pink/magenta dots */}
          <div className="absolute top-28 right-1/4 w-14 h-14 bg-pink-400 rounded-full animate-pulse" style={{animationDuration: '5.5s'}}></div>
          <div className="absolute top-44 left-1/3 w-10 h-10 bg-pink-500 rounded-full animate-pulse" style={{animationDuration: '6.5s'}}></div>
          <div className="absolute top-12 left-1/2 w-20 h-20 bg-pink-300 rounded-full animate-pulse" style={{animationDuration: '3.5s'}}></div>
          <div className="absolute top-36 right-1/6 w-12 h-12 bg-pink-400 rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
          
          {/* Bottom area dots */}
          <div className="absolute bottom-32 left-16 w-14 h-14 bg-purple-400 rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
          <div className="absolute bottom-20 right-24 w-8 h-8 bg-pink-500 rounded-full animate-pulse" style={{animationDuration: '7s'}}></div>
          <div className="absolute bottom-40 left-2/5 w-16 h-16 bg-purple-300 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-28 right-1/3 w-12 h-12 bg-pink-400 rounded-full animate-pulse" style={{animationDuration: '6s'}}></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-gray-900">
              Accelerating Companies with
              <span className="text-purple-600">
                {" "}
                Next-Gen Technology
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We help companies move fast and embrace cutting-edge technologies. From AI implementation to cloud transformation - we deliver enterprise-grade solutions that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <ClientButton
                size="lg"
                className="text-lg font-semibold px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                href="https://calendly.com/darek-bitropy/call"
              >
                Accelerate Your Growth
              </ClientButton>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <FourPillars />


      {/* Expertise Section */}
      <section id="expertise" className="py-24 md:py-32 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
                Why Bitropy?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="text-purple-500 mt-1">→</div>
                  <div>
                    <p className="text-gray-900">
                      <span className="font-semibold text-purple-600">Exit-proven leadership</span> - Led by executives from two 9-figure exits (Nordcloud to IBM, Worksuite) and leadership of leading European e-commerce platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-purple-500 mt-1">→</div>
                  <div>
                    <p className="text-gray-900">
                      <span className="font-semibold text-purple-600">Scale expertise</span> - Built and scaled engineering teams from 0 to 1000+ employees
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-purple-500 mt-1">→</div>
                  <div>
                    <p className="text-gray-900">
                      <span className="font-semibold text-purple-600">M&A ready</span> - Active technical due diligence advisor for VC/PE funds
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-purple-500 mt-1">→</div>
                  <div>
                    <p className="text-gray-900">
                      <span className="font-semibold text-purple-600">Full-stack excellence</span> - From blockchain to AI to enterprise infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-purple-500 mt-1">→</div>
                  <div>
                    <p className="text-gray-900">
                      <span className="font-semibold text-purple-600">Builder&apos;s mindset</span> - We&apos;ve built SaaS businesses from scratch and know what works
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-900">Core Competencies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">AI & ML</div>
                      <div className="text-sm text-gray-600">Cloud Architecture</div>
                      <div className="text-sm text-gray-600">DevSecOps</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">Data Engineering</div>
                      <div className="text-sm text-gray-600">Platform Engineering</div>
                      <div className="text-sm text-gray-600">Technical Strategy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Case Studies Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
              Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Case studies from our technology consulting engagements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-50 text-purple-700 border-purple-200">Technology Advisory</Badge>
                    <Badge className="bg-purple-50 text-purple-700 border-purple-200">DevSecOps</Badge>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">SaaS Security & Acquisition Readiness</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Transformed a growing SaaS company&apos;s security posture and operational processes to prepare for acquisition. Implemented comprehensive security frameworks resulting in successful SOC 2 Type II and ISO 27001 certifications, significantly increasing company valuation and acquisition appeal.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-5 w-5 text-gray-400" />
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">AI & Developer Productivity</Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">AI Startup Technical Leadership</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Served as Fractional CTO for an innovative AI startup, designing scalable architecture and overseeing end-to-end technical delivery of advanced software solutions with Large Language Model integrations. Established robust development practices and guided the technical team through rapid product iterations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="h-5 w-5 text-gray-400" />
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">Private AI Infrastructure</Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Private AI Infrastructure Implementation</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Designed and implemented a complete private AI infrastructure for a financial services company, ensuring data never left their premises. Deployed private LLMs with custom fine-tuning capabilities, achieving enterprise-grade AI functionality while maintaining full data sovereignty and regulatory compliance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="h-5 w-5 text-gray-400" />
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">Data Sovereignty & AI</Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Fashion Retail Data & AI Strategy</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Developed comprehensive data and AI strategy for an emerging fashion retail brand, implementing intelligent recommendation systems, inventory optimization algorithms, and customer behavior analytics. Created data-driven insights that improved conversion rates and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

      {/* Bottom Tagline */}
      <div className="bg-gray-50 py-8 text-center">
        <p className="text-gray-500 text-sm max-w-4xl mx-auto px-6">
          We help ambitious companies make the right technology decisions and implement them flawlessly.
        </p>
      </div>
    </div>
  )
}
