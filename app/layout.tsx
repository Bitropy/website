import GoogleAnalytics from "@/components/GoogleAnalytics"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Bitropy - Strategic Technology Architecture Consulting | AI, DevSecOps, Blockchain",
    template: "%s | Bitropy"
  },
  description: "High-value technology consulting led by executives from 9-figure exits. Specializing in AI, DevSecOps, AIOps, Enterprise Blockchain, and M&A readiness.",
  keywords: "strategic technology consulting, fractional CTO, AI consulting, DevSecOps, AIOps, enterprise blockchain, M&A readiness, technology architecture",
  authors: [{ name: "Darek Dwornikowski" }],
  creator: "Bitropy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitropy.io",
    siteName: "Bitropy",
    title: "Bitropy - Strategic Technology Architecture Consulting | AI, DevSecOps, Blockchain",
    description: "High-value technology consulting led by executives from 9-figure exits. Specializing in AI, DevSecOps, AIOps, Enterprise Blockchain, and M&A readiness.",
    images: [
      {
        url: "https://bitropy.io/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Bitropy - Strategic Technology Architecture Consulting | AI, DevSecOps, Blockchain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bitropy",
    creator: "@bitropy",
    title: "Bitropy - Strategic Technology Architecture Consulting | AI, DevSecOps, Blockchain",
    description: "High-value technology consulting led by executives from 9-figure exits. Specializing in AI, DevSecOps, AIOps, Enterprise Blockchain, and M&A readiness.",
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
