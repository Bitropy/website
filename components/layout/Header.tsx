"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeaderProps {
  currentPage?: "home" | "contact" | "privacy"
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <BitropyLogo className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/#services" 
            className={`text-base font-medium transition-colors ${
              currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Services
          </Link>
          <Link 
            href="/#expertise" 
            className={`text-base font-medium transition-colors ${
              currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Expertise
          </Link>
          <Link 
            href="/#testimonials" 
            className={`text-base font-medium transition-colors ${
              currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Testimonials
          </Link>
          <Link 
            href="/contact" 
            className={`text-base font-medium transition-colors ${
              currentPage === "contact" ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
          >
            Schedule Call
          </Button>
        </div>
      </div>
    </header>
  )
} 