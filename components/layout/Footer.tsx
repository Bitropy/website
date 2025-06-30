"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BitropyLogo />
            </div>
            <p className="text-gray-300">
              Strategic technology consulting for the modern enterprise. Fractional CTO, Web3, and AI expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Fractional CTO
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Product Strategy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Company Scaling
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Web3 & Blockchain
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  AI & Data Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/#testimonials" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="https://www.linkedin.com/company/bitropy" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/darek-bitropy/call"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  Schedule Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400">© {new Date().getFullYear()} bitropy.io. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Made in Europe 🇪🇺 with love ❤️</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="https://calendly.com/darek-bitropy/call" className="text-gray-400 hover:text-white transition-colors">
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