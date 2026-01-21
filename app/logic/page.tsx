import Header from "../_components/Header"
import Sidebar from "../_components/Sidebar"
import AppendixA from "../_components/AppendixA"
import Footer from "../_components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logic — Holos (⊛) Formal Structure | a Theory of Everything",
  description:
    "A formal mathematical and philosophical structure defining Holos (⊛) through primitive definitions, axioms, foundational propositions, and extrapolative propositions.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/logic`,
  },
  openGraph: {
    title: "Logic — Holos (⊛) Formal Structure",
    description:
      "A formal mathematical and philosophical structure defining Holos (⊛) through primitive definitions, axioms, foundational propositions, and extrapolative propositions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/logic`,
    siteName: "a Theory of Everything",
    type: "website",
  },
}

export default function LogicPage() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto">
      <Sidebar />
      <div className="grow h-screen overflow-auto">
        <Header />
        <main className="px-8 pt-12 pb-24 lg:px-16">
          <AppendixA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
