"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import LanguageSwitcher from "@/components/ui/LanguageSwitcher"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface FooterProps {
  dict?: {
    footer?: {
      tagline: string
      company_info: {
        name: string
        address_line1: string
        address_line2: string
      }
      technology_advisory: {
        title: string
        services: string[]
      }
      ai_solutions: {
        title: string
        services: string[]
      }
      data_sovereignty: {
        title: string
        services: string[]
      }
      ai_apps: {
        title: string
        services: string[]
      }
      connect: {
        title: string
        links: string[]
      }
      copyright: string
      made_with_love: string
      privacy_policy: string
    }
  }
}

export default function Footer({ dict }: FooterProps) {
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1] || 'en'
  
  // Default English values as fallback
  const footerData = dict?.footer || {
    tagline: "Strategic Technology Architecture for Modern Enterprises",
    company_info: {
      name: "Bitropy sp. z o.o.",
      address_line1: "Hanny Malewskiej 24/1",
      address_line2: "60-461 Poznań, Poland"
    },
    technology_advisory: {
      title: "Technology Advisory",
      services: ["Fractional CTO", "M&A Readiness", "Tech Due Diligence"]
    },
    ai_solutions: {
      title: "AI Solutions", 
      services: ["AI Strategy", "Developer Tools", "AI Training"]
    },
    data_sovereignty: {
      title: "Data Sovereignty",
      services: ["Data Residency", "Sovereign Cloud", "Compliance Audits"]
    },
    ai_apps: {
      title: "AI Applications",
      services: ["Custom AI Apps", "Process Automation", "AI Agents"]
    },
    connect: {
      title: "Connect",
      links: ["LinkedIn", "Case Studies", "Schedule Consultation"]
    },
    copyright: "© {year} bitropy.io. All rights reserved.",
    made_with_love: "Made in Europe 🇪🇺 with love ❤️",
    privacy_policy: "Privacy Policy"
  }
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-6">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <BitropyLogo />
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">
                {footerData.tagline}
              </p>
              <div className="text-gray-400 text-sm">
                <p>{footerData.company_info.name}</p>
                <p>{footerData.company_info.address_line1}</p>
                <p>{footerData.company_info.address_line2}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">{footerData.technology_advisory.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {footerData.technology_advisory.services.map((service: string, index: number) => (
                <li key={index}>
                  <Link href={`/${currentLang}/#services`} className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">{footerData.ai_solutions.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {footerData.ai_solutions.services.map((service: string, index: number) => (
                <li key={index}>
                  <Link href={`/${currentLang}/#services`} className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">{footerData.data_sovereignty.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {footerData.data_sovereignty.services.map((service: string, index: number) => (
                <li key={index}>
                  <Link href={`/${currentLang}/#services`} className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">{footerData.ai_apps.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {footerData.ai_apps.services.map((service: string, index: number) => (
                <li key={index}>
                  <Link href={`/${currentLang}/#services`} className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">{footerData.connect.title}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="https://www.linkedin.com/company/bitropy" className="hover:text-white transition-colors">
                  {footerData.connect.links[0]}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/#testimonials`} className="hover:text-white transition-colors">
                  {footerData.connect.links[1]}
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/darek-bitropy/call"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  {footerData.connect.links[2]}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400">{footerData.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
            <p className="text-gray-500 text-sm mt-2">{footerData.made_with_love}</p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <LanguageSwitcher />
            <Link href={`/${currentLang}/privacy`} className="text-gray-400 hover:text-white transition-colors">
              {footerData.privacy_policy}
            </Link>
            <Link href="https://www.linkedin.com/company/bitropy/" className="text-gray-400 hover:text-white transition-colors">
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
  )
} 
