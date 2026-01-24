import type { Metadata } from "next";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Logic from "../_components/Logic";
import PageTransition from "@/app/_components/PageTransition";
import Sidebar from "../_components/Sidebar";

export const metadata: Metadata = {
  title:
    "Logic — Holos (⊛) Formal Structure | Interpretive Framework for Reality, Consciousness, and Spacetime",
  description:
    "A formal mathematical and philosophical structure defining Holos (⊛) through primitive definitions, axioms, foundational propositions, and extrapolative propositions.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/logic`,
  },
  openGraph: {
    title: "Logic — Holos (⊛) Formal Structure",
    description:
      "A formal mathematical and philosophical structure defining Holos (⊛) through primitive definitions, axioms, foundational propositions, and extrapolative propositions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/logic`,
    siteName: "Interpretive Framework for Reality, Consciousness, and Spacetime",
    type: "website",
  },
};

export default function LogicPage() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto h-screen">
      <Sidebar />
      <div className="grow flex flex-col h-full min-h-0">
        <div className="flex-1 overflow-auto min-h-0">
          <Header />
          <PageTransition>
            <main className="px-8 pt-12 pb-24 lg:px-16">
              <Logic />
            </main>
          </PageTransition>
        </div>
        <Footer />
      </div>
    </div>
  );
}
