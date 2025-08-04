import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Shield } from "lucide-react"

interface FourPillarsProps {
  dict: any
}

export default function FourPillars({ dict }: FourPillarsProps) {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            {dict.services.section_title.split(' ').slice(0, -1).join(' ')}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {" "}
              {dict.services.section_title.split(' ').slice(-1)[0]}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
            {dict.services.section_subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 w-full max-w-7xl mx-auto">
          {/* 1. High-Value Technology Advisory */}
          <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">{dict.services.advisory.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {dict.services.advisory.description}
              </p>
              <div>
                <h4 className="font-semibold text-white mb-2">{dict.services.advisory.what_we_deliver}</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {dict.services.advisory.services.map((service: string, index: number) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
              <p className="text-purple-300 text-sm font-medium">
                {dict.services.advisory.perfect_for}
              </p>
            </CardContent>
          </Card>

          {/* 2. AI & Developer Productivity */}
          <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">{dict.services.ai_productivity.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {dict.services.ai_productivity.description}
              </p>
              <div>
                <h4 className="font-semibold text-white mb-2">{dict.services.advisory.what_we_deliver}</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {dict.services.ai_productivity.services.map((service: string, index: number) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
              <p className="text-purple-300 text-sm font-medium">
                {dict.services.ai_productivity.perfect_for}
              </p>
            </CardContent>
          </Card>

          {/* 3. Enterprise Blockchain */}
          <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">{dict.services.blockchain.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {dict.services.blockchain.description}
              </p>
              <div>
                <h4 className="font-semibold text-white mb-2">{dict.services.advisory.what_we_deliver}</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {dict.services.blockchain.services.map((service: string, index: number) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
              <p className="text-purple-300 text-sm font-medium">
                {dict.services.blockchain.perfect_for}
              </p>
            </CardContent>
          </Card>

          {/* 4. DevSecOps, AIOps & Cloud */}
          <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 group-hover:bg-purple-800/50 transition-all">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">{dict.services.infrastructure.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                {dict.services.infrastructure.description}
              </p>
              <div>
                <h4 className="font-semibold text-white mb-2">{dict.services.advisory.what_we_deliver}</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {dict.services.infrastructure.services.map((service: string, index: number) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
              <p className="text-purple-300 text-sm font-medium">
                {dict.services.infrastructure.perfect_for}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}