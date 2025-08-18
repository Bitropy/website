"use client"

import { useState } from "react"
import { Brain, Code, Database, Shield, ChevronDown } from "lucide-react"

export default function FourPillars() {
  const [activeService, setActiveService] = useState('advisory')

  const services = [
    {
      key: 'advisory',
      icon: Brain,
      title: "AI Strategy & Governance",
      description: "We guide enterprises to implement AI responsibly with comprehensive governance frameworks that ensure data sovereignty and regulatory compliance.",
      whatWeDeliver: "What we deliver:",
      services: [
        "AI strategy and governance frameworks",
        "Data sovereignty implementation roadmaps", 
        "AI compliance and risk assessment",
        "Executive AI advisory and training"
      ],
      perfectFor: "Perfect for: Organizations implementing AI while maintaining data control and compliance"
    },
    {
      key: 'ai_productivity',
      icon: Database,
      title: "Private AI Implementation",
      description: "We implement secure, private AI systems that keep your data on-premises while delivering enterprise-grade AI capabilities.",
      whatWeDeliver: "What we deliver:",
      services: [
        "On-premises AI infrastructure setup",
        "Private LLM deployment and fine-tuning",
        "Secure AI data pipelines", 
        "Air-gapped AI development environments"
      ],
      perfectFor: "Perfect for: Organizations requiring AI capabilities without data leaving their infrastructure"
    },
    {
      key: 'genai_development',
      icon: Code,
      title: "GenAI Development",
      description: "We build custom Generative AI solutions tailored to your business needs, from LLM fine-tuning to AI-powered applications that transform your operations.",
      whatWeDeliver: "What we deliver:",
      services: [
        "Custom LLM fine-tuning and deployment",
        "RAG (Retrieval-Augmented Generation) systems",
        "Multi-modal AI applications",
        "GenAI workflow integration"
      ],
      perfectFor: "Perfect for: Companies wanting cutting-edge AI capabilities integrated into their core business processes"
    },
    {
      key: 'infrastructure',
      icon: Shield,
      title: "AI Applications & Automation",
      description: "We develop custom AI applications and intelligent automation systems that enhance productivity while maintaining complete data control and privacy.",
      whatWeDeliver: "What we deliver:",
      services: [
        "Custom AI application development",
        "Intelligent process automation",
        "AI-powered workflow optimization",
        "Private AI agent deployment"
      ],
      perfectFor: "Perfect for: Organizations wanting to build AI-powered applications and automate processes privately"
    }
  ]

  const activeServiceData = services.find(service => service.key === activeService)

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise AI transformation through strategic advisory, custom development, and intelligent automation
          </p>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-8">
          <div className="relative">
            <select
              value={activeService}
              onChange={(e) => setActiveService(e.target.value)}
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-lg font-medium text-gray-900 appearance-none cursor-pointer focus:border-gray-400 focus:outline-none"
            >
              {services.map((service) => (
                <option key={service.key} value={service.key}>
                  {service.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-16 items-stretch">
          {/* Left side - Service buttons */}
          <div className="col-span-2 flex flex-col space-y-4">
            {services.map((service) => {
              const IconComponent = service.icon
              const isActive = activeService === service.key
              
              return (
                <button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  className={`w-full p-6 rounded-lg border transition-all duration-200 text-left group ${
                    isActive 
                      ? 'bg-white border-purple-200 shadow-md shadow-purple-100' 
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <IconComponent className={`h-6 w-6 transition-colors ${
                      isActive ? 'text-purple-600' : 'text-gray-400'
                    }`} />
                    <h3 className={`text-lg font-semibold transition-colors ${
                      isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right side - Content display */}
          <div className="col-span-3 bg-white border border-gray-200 rounded-lg p-10">
            {activeServiceData && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {activeServiceData.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {activeServiceData.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {activeServiceData.whatWeDeliver}
                  </h4>
                  <ul className="text-lg text-gray-600 space-y-3">
                    {activeServiceData.services.map((service: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-3 text-xl">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-lg text-gray-500 font-medium">
                    {activeServiceData.perfectFor}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Content display */}
        <div className="md:hidden bg-white border border-gray-200 rounded-lg p-8">
          {activeServiceData && (
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeServiceData.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {activeServiceData.description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {activeServiceData.whatWeDeliver}
                </h4>
                <ul className="text-lg text-gray-600 space-y-3">
                  {activeServiceData.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-lg text-gray-500 font-medium">
                  {activeServiceData.perfectFor}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}