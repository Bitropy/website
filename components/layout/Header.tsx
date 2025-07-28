"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { useIsMobile } from "@/components/ui/use-mobile"
import { Menu } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  currentPage?: "home" | "about" | "privacy" | "articles"
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
          <div className="relative group">
            <Link
              href="/#services"
              className={`text-base font-medium transition-colors ${currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
                }`}
            >
              Services
            </Link>
            <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4 space-y-2">
                <Link href="/#services" className="block text-sm text-gray-300 hover:text-white transition-colors">Technology Advisory</Link>
                <Link href="/#services" className="block text-sm text-gray-300 hover:text-white transition-colors">AI & Developer Productivity</Link>
                <Link href="/#services" className="block text-sm text-gray-300 hover:text-white transition-colors">Enterprise Blockchain</Link>
                <Link href="/#services" className="block text-sm text-gray-300 hover:text-white transition-colors">DevSecOps & AIOps</Link>
              </div>
            </div>
          </div>
          <Link
            href="/#expertise"
            className={`text-base font-medium transition-colors ${currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            Why Bitropy
          </Link>
          <Link
            href="/#testimonials"
            className={`text-base font-medium transition-colors ${currentPage === "home" ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            Case Studies
          </Link>
          <Link
            href="/articles"
            className={`text-base font-medium transition-colors ${currentPage === "articles" ? "text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            Articles
          </Link>
          <Link
            href="/about"
            className={`text-base font-medium transition-colors ${currentPage === "about" ? "text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
          >
            Schedule Consultation
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
                    <Link href="/#services" className="text-lg font-medium text-white hover:text-primary transition-colors block mb-2">
                      Services
                    </Link>
                  </DrawerClose>
                  <div className="ml-4 space-y-2">
                    <DrawerClose asChild>
                      <Link href="/#services" className="text-sm text-gray-300 hover:text-white transition-colors block">Technology Advisory</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="/#services" className="text-sm text-gray-300 hover:text-white transition-colors block">AI & Developer Productivity</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="/#services" className="text-sm text-gray-300 hover:text-white transition-colors block">Enterprise Blockchain</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="/#services" className="text-sm text-gray-300 hover:text-white transition-colors block">DevSecOps & AIOps</Link>
                    </DrawerClose>
                  </div>
                </div>
                <DrawerClose asChild>
                  <Link href="/#expertise" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Why Bitropy
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/#testimonials" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/articles" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    Articles
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/about" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    About
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button
                    variant="default"
                    className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open("https://calendly.com/darek-bitropy/call", "_blank")}
                  >
                    Schedule Consultation
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