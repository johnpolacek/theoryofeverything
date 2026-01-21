import Header from "../_components/Header"
import Sidebar from "../_components/Sidebar"
import Definition from "../_components/Definition"
import Footer from "../_components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Definition: The Ontological Parameter (Φ) | a Theory of Everything",
  description:
    "A formal definition of Φ (Phi), the ontological parameter that quantifies the degree to which a system integrates information such that it possesses the causal power to register a distinct ontological state.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/definition`,
  },
  openGraph: {
    title: "Definition: The Ontological Parameter",
    description:
      "A formal definition of Φ (Phi), the ontological parameter that quantifies the degree to which a system integrates information such that it possesses the causal power to register a distinct ontological state.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/definition`,
    siteName: "a Theory of Everything",
    type: "website",
  },
}

export default function DefinitionPage() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto">
      <Sidebar />
      <div className="grow h-screen overflow-auto">
        <Header />
        <main className="px-8 pt-12 pb-24 lg:px-16">
          <Definition />
        </main>
        <Footer />
      </div>
    </div>
  )
}
