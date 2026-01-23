import type { Metadata } from "next";
import Defense from "../_components/Defense";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Sidebar from "../_components/Sidebar";

export const metadata: Metadata = {
  title:
    "Defense — Stress-Testing the Holos Axioms | Interpretive Framework for Reality, Consciousness, and Spacetime",
  description:
    "An adversarial review of the Holos axioms from the perspective of a theoretical physicist, examining objections and responses to each axiom.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/defense`,
  },
  openGraph: {
    title: "Defense — Stress-Testing the Holos Axioms",
    description:
      "An adversarial review of the Holos axioms from the perspective of a theoretical physicist, examining objections and responses to each axiom.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/defense`,
    siteName: "Interpretive Framework for Reality, Consciousness, and Spacetime",
    type: "website",
  },
};

export default function DefensePage() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto h-screen">
      <Sidebar />
      <div className="grow h-full overflow-auto">
        <Header />
        <main className="px-8 pt-12 pb-24 lg:px-16">
          <Defense />
        </main>
        <Footer />
      </div>
    </div>
  );
}
