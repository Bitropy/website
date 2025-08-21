import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import FourPillars from "@/components/sections/FourPillars"
import ClientButton from "@/components/ui/ClientButton"
import { Code, Shield } from "lucide-react"
import EntropyAnimation from "@/components/ui/EntropyAnimation"
import Image from "next/image"

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Subtle gradient background with dot pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Entropy Animation Background */}
        <div className="absolute inset-0 opacity-30">
          <EntropyAnimation 
            latticeCount={3}
          />
        </div>

        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-gray-900">
              Fast Track Your
              <span className="text-purple-600">
                {" "}
                AI Transformation
              </span>
            </h1>
            <p className="text-2xl font-medium text-gray-700 mt-4">
              Real Results in Weeks, Not Years
            </p>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Skip the endless planning. We deploy production-ready AI solutions that deliver measurable ROI while maintaining complete data control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <ClientButton
                size="lg"
                className="text-lg font-semibold px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                href="https://calendly.com/darek-bitropy/call"
              >
                Start Your AI Fast Track
              </ClientButton>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <FourPillars />

      {/* Clients Strip */}
      <section className="py-16 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center gap-16 md:gap-20 opacity-70 hover:opacity-90 transition-opacity">
            <Image 
              src="/logos/Agro-Contracts-logo.png" 
              alt="Agro Contracts" 
              width={240}
              height={120}
              className="h-32 md:h-40 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image 
              src="/logos/autopay.png" 
              alt="Autopay" 
              width={240}
              height={120}
              className="h-32 md:h-40 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 md:py-32 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
              Why Bitropy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven leadership with real-world results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">2x</div>
              <h3 className="text-xl font-semibold text-gray-900">9-Figure Exits</h3>
              <p className="text-gray-600">
                Led technology at Nordcloud (IBM acquisition) and Worksuite, delivering exceptional returns
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">0→1000+</div>
              <h3 className="text-xl font-semibold text-gray-900">Team Scaling</h3>
              <p className="text-gray-600">
                Built and scaled engineering organizations from startup to enterprise level
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">Full-Stack</div>
              <h3 className="text-xl font-semibold text-gray-900">AI Mastery</h3>
              <p className="text-gray-600">
                From infrastructure to applications, we deliver complete AI solutions
              </p>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivered in weeks, not months
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Private AI for Financial Services</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Deployed complete on-premises AI infrastructure with private LLMs for a major bank. Achieved enterprise AI capabilities while maintaining 100% data sovereignty and regulatory compliance.
                </p>
                <p className="text-purple-600 font-semibold text-sm">Result: Zero data leakage, full compliance</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Private USDC Payment Gateway</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Built secure, self-hosted payment infrastructure for USDC transactions. Enabled private stablecoin payments while maintaining complete transaction privacy and regulatory compliance.
                </p>
                <p className="text-purple-600 font-semibold text-sm">Result: $10M+ processed, zero custody risk</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
