import type { Metadata } from "next"
import { Bitter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import "./globals.css"

const bitter = Bitter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"

export const metadata: Metadata = {
  title: "a Theory of Everything",
  description:
    "a Theory of Everything - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
  icons: {
    icon: "icon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "a Theory of Everything",
    description:
      "a Theory of Everything - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
    url: siteUrl,
    siteName: "a Theory of Everything",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "a theory of everything",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "a Theory of Everything",
    description:
      "a Theory of Everything - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
    images: ["/twitter-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "a Theory of Everything",
  description:
    "a Theory of Everything - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
  author: {
    "@type": "Person",
    name: "John Polacek",
    url: "https://github.com/johnpolacek",
  },
  datePublished: "2024-06-19",
  dateModified: "2024-06-19",
  publisher: {
    "@type": "Person",
    name: "John Polacek",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={bitter.className}>
        <Script
          id="structured-data"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
