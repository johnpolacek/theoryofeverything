import type { Metadata } from "next";
import PageLayout from "../_components/PageLayout";
import Predictions from "../_components/Predictions";

export const metadata: Metadata = {
  title: "Predictions | Interpretive Framework for Reality, Consciousness, and Spacetime",
  description:
    "Empirical predictions derived from the Holos framework through the operationalization of Φ. These predictions constrain where and how ontological registration occurs within lawful dynamics.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/predictions`,
  },
  openGraph: {
    title: "Predictions",
    description:
      "Empirical predictions derived from the Holos framework through the operationalization of Φ. These predictions constrain where and how ontological registration occurs within lawful dynamics.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://whatisholos.vercel.app"}/predictions`,
    siteName: "Interpretive Framework for Reality, Consciousness, and Spacetime",
    type: "website",
  },
};

export default function PredictionsPage() {
  return (
    <PageLayout>
      <Predictions />
    </PageLayout>
  );
}
