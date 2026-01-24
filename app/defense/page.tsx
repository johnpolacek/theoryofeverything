import type { Metadata } from "next";
import Defense from "../_components/Defense";
import PageLayout from "../_components/PageLayout";

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
    <PageLayout>
      <Defense />
    </PageLayout>
  );
}
