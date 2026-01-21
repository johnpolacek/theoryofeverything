import Header from "../_components/Header"
import Sidebar from "../_components/Sidebar"
import AppendixB from "../_components/AppendixB"
import Footer from "../_components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Defense — Stress-Testing the Holos Axioms | a Theory of Everything",
  description:
    "An adversarial review of the Holos axioms from the perspective of a theoretical physicist, examining objections and responses to each axiom.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/defense`,
  },
  openGraph: {
    title: "Defense — Stress-Testing the Holos Axioms",
    description:
      "An adversarial review of the Holos axioms from the perspective of a theoretical physicist, examining objections and responses to each axiom.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/defense`,
    siteName: "a Theory of Everything",
    type: "website",
  },
}

export default function DefensePage() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto">
      <Sidebar />
      <div className="grow h-screen overflow-auto">
        <Header />
        <main className="px-8 pt-12 pb-24 lg:px-16">
          <AppendixB />
        </main>
        <Footer />
      </div>
    </div>
  )
}
