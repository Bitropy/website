import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Bitropy for technology consulting services. Contact us to discuss your project, challenges, or how we can help accelerate your growth.",
  openGraph: {
    title: "Contact Us | Bitropy",
    description: "Get in touch with Bitropy for technology consulting services. Contact us to discuss your project, challenges, or how we can help accelerate your growth.",
    url: "https://bitropy.io/contact",
    images: [
      {
        url: "https://bitropy.io/og-image-contact.svg",
        width: 1200,
        height: 630,
        alt: "Contact Bitropy - Technology Consulting Services",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Bitropy",
    description: "Get in touch with Bitropy for technology consulting services. Contact us to discuss your project, challenges, or how we can help accelerate your growth.",
    images: ["https://bitropy.io/og-image-contact.svg"],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 