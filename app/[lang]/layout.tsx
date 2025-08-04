import GoogleAnalytics from "@/components/GoogleAnalytics"
import { getDictionary } from "@/lib/dictionaries"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'pl')
  const locale = lang === 'pl' ? 'pl_PL' : 'en_US'
  const baseUrl = 'https://bitropy.io'
  const currentUrl = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`

  const title = lang === 'pl' 
    ? "Bitropy - Strategiczna Architektura Technologiczna | AI, DevSecOps, Blockchain"
    : "Bitropy - Strategic Technology Architecture Consulting | AI, DevSecOps, Blockchain"
    
  const description = lang === 'pl'
    ? "Doradztwo technologiczne wysokiej wartości prowadzone przez kadry zarządzające z exitów o wartości dziewięciu cyfr. Specjalizujemy się w AI, DevSecOps, AIOps, Blockchain korporacyjny i gotowość do M&A."
    : "High-value technology consulting led by executives from 9-figure exits. Specializing in AI, DevSecOps, AIOps, Enterprise Blockchain, and M&A readiness."

  return {
    title: {
      default: title,
      template: `%s | Bitropy`
    },
    description,
    keywords: lang === 'pl' 
      ? "strategiczne doradztwo technologiczne, ułamkowy CTO, doradztwo AI, DevSecOps, AIOps, blockchain korporacyjny, gotowość do M&A, architektura technologiczna"
      : "strategic technology consulting, fractional CTO, AI consulting, DevSecOps, AIOps, enterprise blockchain, M&A readiness, technology architecture",
    authors: [{ name: "Darek Dwornikowski" }],
    creator: "Bitropy",
    openGraph: {
      type: "website",
      locale,
      url: currentUrl,
      siteName: "Bitropy",
      title,
      description,
      images: [
        {
          url: "https://bitropy.io/og-image.svg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@bitropy",
      creator: "@bitropy",
      title,
      description,
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
      canonical: currentUrl,
      languages: {
        'en': baseUrl + '/en',
        'pl': baseUrl + '/pl',
      }
    },
    category: "Technology Consulting",
    classification: "Business Services",
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <html lang={lang}>
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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }]
}