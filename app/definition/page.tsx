import type { Metadata } from "next";
import Definition from "../_components/Definition";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import PageTransition from "../_components/PageTransition";
import Sidebar from "../_components/Sidebar";

export const metadata: Metadata = {
  title:
    "Definition: The Ontological Parameter (Φ) | Interpretive Framework for Reality, Consciousness, and Spacetime",
  description:
    "A formal definition of Φ (Phi), the ontological parameter that quantifies the degree to which a system integrates information such that it possesses the causal power to register a distinct ontological state.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/definition`,
  },
  openGraph: {
    title: "Definition: The Ontological Parameter (Φ)",
    description:
      "A formal definition of Φ (Phi), the ontological parameter that quantifies the degree to which a system integrates information such that it possesses the causal power to register a distinct ontological state.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/definition`,
    siteName: "Interpretive Framework for Reality, Consciousness, and Spacetime",
    type: "website",
  },
};

export default function DefinitionPage() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto h-screen">
      <Sidebar />
      <div className="grow h-full overflow-auto">
        <Header />
        <PageTransition>
          <main className="px-8 pt-12 pb-24 lg:px-16">
            <Definition />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </div>
  );
}
