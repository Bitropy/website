import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Bitropy – Technology Consulting, Web3 & AI Services",
    template: "%s | Bitropy"
  },
  description: "Expert technology consulting teams specializing in fractional leadership, Web3 & blockchain development, and AI/data solutions. Scale your technology with dedicated specialists.",
  keywords: "technology consulting, fractional CTO, Web3, blockchain, AI, data solutions, technology leadership",
  authors: [{ name: "Darek Dwornikowski" }],
  creator: "Bitropy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitropy.io",
    siteName: "Bitropy",
    title: "Bitropy – Technology Consulting, Web3 & AI Services",
    description: "Expert technology consulting teams specializing in fractional leadership, Web3 & blockchain development, and AI/data solutions. Scale your technology with dedicated specialists.",
    images: [
      {
        url: "https://bitropy.io/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Bitropy - Technology Consulting, Web3 & AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bitropy",
    creator: "@bitropy",
    title: "Bitropy – Technology Consulting, Web3 & AI Services",
    description: "Expert technology consulting teams specializing in fractional leadership, Web3 & blockchain development, and AI/data solutions.",
    images: ["https://bitropy.io/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bitropy.io",
  },
  category: "Technology Consulting",
  classification: "Business Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
