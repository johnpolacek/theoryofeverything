import type { Metadata } from "next"
import { Bitter } from "next/font/google"
import "./globals.css"

const bitter = Bitter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "a Theory of Everything",
  description:
    "⊛ a Theory of Everything - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
  icons: {
    icon: "icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={bitter.className}>{children}</body>
    </html>
  )
}
