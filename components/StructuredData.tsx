'use client'

interface StructuredDataProps {
  data: Record<string, unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bitropy",
    "url": "https://bitropy.io",
    "logo": "https://bitropy.io/logo.png",
    "description": "Strategic Technology Architecture Consulting specializing in AI implementation, data sovereignty, and private AI solutions for enterprise clients.",
    "founder": [
      {
        "@type": "Person",
        "name": "Darek Dwornikowski",
        "jobTitle": "CEO & Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hanny Malewskiej 24/1",
      "addressLocality": "Poznań",
      "postalCode": "60-461",
      "addressCountry": "PL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business",
      "url": "https://calendly.com/darek-bitropy/call"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bitropy"
    ],
    "serviceType": [
      "Technology Consulting",
      "AI Consulting",
      "Data Sovereignty Solutions",
      "Private AI Implementation",
      "Fractional CTO Services",
      "DevSecOps Consulting"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Global"
      }
    ]
  }

  return <StructuredData data={organizationData} />
}

export function ServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Strategy & Governance Consulting",
    "description": "Comprehensive AI strategy and governance frameworks ensuring data sovereignty and regulatory compliance for enterprise clients.",
    "provider": {
      "@type": "Organization",
      "name": "Bitropy",
      "url": "https://bitropy.io"
    },
    "serviceType": "Technology Consulting",
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI & Technology Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Strategy & Governance",
            "description": "AI strategy frameworks and governance implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private AI Implementation",
            "description": "Private AI infrastructure and application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Sovereignty Solutions",
            "description": "Data residency and sovereignty compliance implementation"
          }
        }
      ]
    }
  }

  return <StructuredData data={serviceData} />
}

import type { Article } from "@/lib/mdx"

export function ArticleSchema({ article }: { article: Article }) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": `https://bitropy.io${article.image}`,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://bitropy.io"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bitropy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bitropy.io/logo.png"
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bitropy.io/articles/${article.id}`
    },
    "articleSection": article.category,
    "keywords": article.tags?.join(", ") || "",
    "wordCount": article.content?.split(' ').length || 0,
    "timeRequired": `PT${article.readTime}`,
    "about": [
      "AI Consulting",
      "Data Sovereignty",
      "Technology Strategy",
      "Private AI Implementation"
    ]
  }

  return <StructuredData data={articleData} />
}