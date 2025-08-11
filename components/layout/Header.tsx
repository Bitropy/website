"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import LanguageSwitcher from "@/components/ui/LanguageSwitcher"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

interface HeaderProps {
  currentPage?: "home" | "about" | "privacy" | "articles" | "contact"
  dict?: {
    header?: {
      services: string
      why_bitropy: string
      case_studies: string
      articles: string
      about: string
      schedule_consultation: string
      services_dropdown: {
        ai_strategy: string
        private_ai: string
        data_sovereignty: string
        ai_apps: string
      }
    }
  }
}

export default function Header({ currentPage = "home", dict }: HeaderProps) {
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1] || 'en'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // Default English values as fallback
  const headerData = dict?.header || {
    services: "Services",
    why_bitropy: "Why Bitropy", 
    case_studies: "Case Studies",
    articles: "Articles",
    about: "About",
    schedule_consultation: "Schedule Consultation",
    services_dropdown: {
      ai_strategy: "AI Strategy & Governance",
      private_ai: "Private AI Implementation",
      data_sovereignty: "Data Sovereignty Solutions",
      ai_apps: "AI Applications & Automation"
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href={`/${currentLang}`} className="flex items-center space-x-3">
          <BitropyLogo className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              className={`flex items-center text-base font-medium transition-colors ${currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
                }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {headerData.services}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isDropdownOpen && (
              <div 
                className="absolute top-full left-0 pt-2 z-50"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl">
                  <div className="p-4 space-y-2">
                    <Link 
                      href={`/${currentLang}/#services`} 
                      className="block text-sm text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {headerData.services_dropdown.ai_strategy}
                    </Link>
                    <Link 
                      href={`/${currentLang}/#services`} 
                      className="block text-sm text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {headerData.services_dropdown.private_ai}
                    </Link>
                    <Link 
                      href={`/${currentLang}/#services`} 
                      className="block text-sm text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {headerData.services_dropdown.data_sovereignty}
                    </Link>
                    <Link 
                      href={`/${currentLang}/#services`} 
                      className="block text-sm text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {headerData.services_dropdown.ai_apps}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            href={`/${currentLang}/#expertise`}
            className={`text-base font-medium transition-colors ${currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            {headerData.why_bitropy}
          </Link>
          <Link
            href={`/${currentLang}/#testimonials`}
            className={`text-base font-medium transition-colors ${currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            {headerData.case_studies}
          </Link>
          <Link
            href={`/${currentLang}/articles`}
            className={`text-base font-medium transition-colors ${currentPage === "articles" ? "text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            {headerData.articles}
          </Link>
          <Link
            href={`/${currentLang}/about`}
            className={`text-base font-medium transition-colors ${currentPage === "about" ? "text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            {headerData.about}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
          >
            {headerData.schedule_consultation}
          </Button>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
                <Menu className="h-6 w-6" aria-label="Open menu" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-6 md:hidden bg-gray-900 text-white border-gray-800">
              <DrawerTitle className="sr-only">Main Menu</DrawerTitle>
              <nav className="flex flex-col space-y-6 mt-4">
                <div>
                  <DrawerClose asChild>
                    <Link href={`/${currentLang}/#services`} className="text-lg font-medium text-white hover:text-primary transition-colors block mb-2">
                      {headerData.services}
                    </Link>
                  </DrawerClose>
                  <div className="ml-4 space-y-2">
                    <DrawerClose asChild>
                      <Link href={`/${currentLang}/#services`} className="text-sm text-gray-300 hover:text-white transition-colors block">{headerData.services_dropdown.ai_strategy}</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href={`/${currentLang}/#services`} className="text-sm text-gray-300 hover:text-white transition-colors block">{headerData.services_dropdown.private_ai}</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href={`/${currentLang}/#services`} className="text-sm text-gray-300 hover:text-white transition-colors block">{headerData.services_dropdown.data_sovereignty}</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href={`/${currentLang}/#services`} className="text-sm text-gray-300 hover:text-white transition-colors block">{headerData.services_dropdown.ai_apps}</Link>
                    </DrawerClose>
                  </div>
                </div>
                <DrawerClose asChild>
                  <Link href={`/${currentLang}/#expertise`} className="text-lg font-medium text-white hover:text-primary transition-colors">
                    {headerData.why_bitropy}
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href={`/${currentLang}/#testimonials`} className="text-lg font-medium text-white hover:text-primary transition-colors">
                    {headerData.case_studies}
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href={`/${currentLang}/articles`} className="text-lg font-medium text-white hover:text-primary transition-colors">
                    {headerData.articles}
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href={`/${currentLang}/about`} className="text-lg font-medium text-white hover:text-primary transition-colors">
                    {headerData.about}
                  </Link>
                </DrawerClose>
                <div className="pt-4 border-t border-gray-700">
                  <div className="mb-4">
                    <LanguageSwitcher />
                  </div>
                  <DrawerClose asChild>
                    <Button
                      variant="default"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
                    >
                      {headerData.schedule_consultation}
                    </Button>
                  </DrawerClose>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
} 