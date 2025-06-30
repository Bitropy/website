"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { useIsMobile } from "@/components/ui/use-mobile"
import { Menu } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  currentPage?: "home" | "contact" | "privacy" | "articles"
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const isMobile = useIsMobile();
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
            href="/articles" 
            className={`text-base font-medium transition-colors ${
              currentPage === "articles" ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Articles
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
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
                <Menu className="h-6 w-6" aria-label="Open menu" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-6 md:hidden bg-gray-900 text-white border-gray-800">
              <DrawerTitle className="sr-only">Main Menu</DrawerTitle>
              <nav className="flex flex-col space-y-6 mt-4">
                <DrawerClose asChild>
                  <Link href="/#services" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Services
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/#expertise" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Expertise
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/#testimonials" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Testimonials
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/articles" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Articles
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/contact" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Contact
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button
                    variant="default"
                    className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
                  >
                    Schedule Call
                  </Button>
                </DrawerClose>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
} 