import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app";

export const metadata: Metadata = {
  title: "Interpretive Framework for Reality, Consciousness, and Spacetime",
  description:
    "Interpretive Framework for Reality, Consciousness, and Spacetime - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
  icons: {
    icon: "icon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Interpretive Framework for Reality, Consciousness, and Spacetime",
    description:
      "Interpretive Framework for Reality, Consciousness, and Spacetime - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
    url: siteUrl,
    siteName: "Interpretive Framework for Reality, Consciousness, and Spacetime",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Interpretive Framework for Reality, Consciousness, and Spacetime",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interpretive Framework for Reality, Consciousness, and Spacetime",
    description:
      "Interpretive Framework for Reality, Consciousness, and Spacetime - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
    images: ["/twitter-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Interpretive Framework for Reality, Consciousness, and Spacetime",
  description:
    "Interpretive Framework for Reality, Consciousness, and Spacetime - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}
