"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import Link from "next/link"
import { } from "react"

interface HeaderProps {
  currentPage?: "home" | "about" | "privacy" | "articles" | "contact"
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="w-full max-w-6xl mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <BitropyLogo className="h-12 w-auto" variant="light" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/#services"
            className={`text-base font-semibold transition-colors text-gray-700 hover:text-purple-600`}
          >
            Services
          </Link>
          <Link
            href="/#expertise"
            className={`text-base font-semibold transition-colors text-gray-700 hover:text-purple-600`}
          >
            Why Bitropy
          </Link>
          <Link
            href="/#testimonials"
            className={`text-base font-semibold transition-colors text-gray-700 hover:text-purple-600`}
          >
            Case Studies
          </Link>
          <Link
            href={`/about`}
            className={`text-base font-semibold transition-colors ${currentPage === "about" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2"
          >
            <Link href={`/contact`}>
              Get in touch
            </Link>
          </Button>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-600 hover:text-gray-900">
                <Menu className="h-6 w-6" aria-label="Open menu" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-6 md:hidden bg-white text-gray-900 border-gray-200">
              <DrawerTitle className="sr-only">Main Menu</DrawerTitle>
              <nav className="flex flex-col space-y-6 mt-4">
                <DrawerClose asChild>
                  <Link href={`/#services`} className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Services
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href={`/#expertise`} className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Why Bitropy
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href={`/#testimonials`} className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Case Studies
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href={`/about`} className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    About
                  </Link>
                </DrawerClose>
                <div className="pt-4 border-t border-gray-200">
                  <DrawerClose asChild>
                    <Button
                      asChild
                      variant="default"
                      className="w-full bg-purple-600 text-white hover:bg-purple-700"
                    >
                      <Link href={`/contact`}>
                        Get in touch
                      </Link>
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