import type { Metadata } from "next";
import Logic from "../_components/Logic";
import PageLayout from "../_components/PageLayout";

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
    <PageLayout>
      <Logic />
    </PageLayout>
  );
}
