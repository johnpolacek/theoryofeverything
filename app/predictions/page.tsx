import type { Metadata } from "next";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import PageTransition from "../_components/PageTransition";
import Predictions from "../_components/Predictions";
import Sidebar from "../_components/Sidebar";

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
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto h-screen">
      <Sidebar />
      <div className="grow h-full overflow-auto">
        <Header />
        <PageTransition>
          <main className="px-8 pt-12 pb-24 lg:px-16">
            <Predictions />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </div>
  );
}
