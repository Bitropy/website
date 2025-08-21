import { Brain, Code, Database, Shield } from "lucide-react"

export default function FourPillars() {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Private Implementation",
      description: "Deploy enterprise AI with complete data control. We deliver governance frameworks, on-premises LLM deployment, and compliance solutions that keep your data sovereign while maximizing AI capabilities."
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Build production-ready AI solutions tailored to your needs. From LLM fine-tuning and RAG systems to intelligent automation, we create AI that integrates seamlessly with your operations."
    },
    {
      icon: Shield,
      title: "Technical Leadership & Scale",
      description: "Leverage our exit-proven expertise to scale your technology. With experience building teams from 0-1000+ and two 9-figure exits, we provide fractional CTO services and M&A readiness."
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We help you win by providing solutions using best technologies available in the market
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
