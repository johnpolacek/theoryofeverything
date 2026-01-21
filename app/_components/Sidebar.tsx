"use client";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Subsection {
  id: string;
  title: string;
}

const theorySubsections: Subsection[] = [
  { id: "introduction", title: "Introduction" },
  { id: "meaning-of-life", title: "Meaning of Life" },
  { id: "consciousness", title: "Consciousness" },
  { id: "our-universe", title: "Our Universe" },
  { id: "spacetime", title: "Spacetime" },
  { id: "higher-dimensions", title: "Higher Dimensions" },
  { id: "infinity", title: "Infinity" },
  { id: "black-holes", title: "Black Holes" },
  { id: "aliens", title: "Aliens" },
  { id: "simulation", title: "Simulation" },
  { id: "god", title: "God" },
  { id: "why", title: "Why?" },
  { id: "axioms", title: "Axioms" },
  { id: "holos", title: "Holos" },
];

const logicSubsections: Subsection[] = [
  { id: "primitive-definitions", title: "Primitive Definitions" },
  { id: "axioms", title: "Axioms" },
  { id: "foundational-propositions", title: "Foundational Propositions" },
  { id: "extrapolative-propositions", title: "Extrapolative Propositions" },
  { id: "minimal-core", title: "Minimal Core" },
  { id: "phi-operationalization", title: "Operationalization" },
];

const defenseSubsections: Subsection[] = [
  { id: "axiom-1", title: "Relationality" },
  { id: "axiom-2", title: "Manifestation" },
  { id: "axiom-3", title: "Conservation" },
  { id: "axiom-4", title: "Unification" },
  { id: "axiom-5", title: "Interface" },
  { id: "cross-axiom-consistency-check", title: "Consistency" },
  { id: "primary-unresolved-challenge", title: "Challenge" },
  { id: "final-verdict", title: "Final Verdict" },
];

const definitionSubsections: Subsection[] = [
  { id: "1-the-purpose-of", title: "The Purpose of Φ" },
  { id: "2-ontological-requirements", title: "Ontological Requirements" },
  { id: "3-mathematical-formalism", title: "Mathematical Formalism" },
  { id: "4-ontological-thresholds", title: "Ontological Thresholds" },
  { id: "5-relationship-to-physics-the-consistency-filter", title: "Relationship to Physics" },
];

const predictionsSubsections: Subsection[] = [
  { id: "primary-prediction", title: "Primary Prediction" },
  { id: "secondary-predictions", title: "Secondary Predictions" },
  {
    id: "experiment-protocol-observer-dependent-coherence-preservation",
    title: "Experiment Protocol",
  },
];

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the theory page (home page)
  const isTheoryPage = pathname === "/" || pathname === "/theory";
  const isLogicPage = pathname === "/logic";
  const isDefensePage = pathname === "/defense";
  const isDefinitionPage = pathname === "/definition";
  const isPredictionsPage = pathname === "/predictions";

  // If we're not on the theory page, prepend "/" to hash links to navigate to theory page first
  const getLink = (hash: string) => {
    return isTheoryPage ? hash : `/${hash}`;
  };

  // Get link for subsections based on current page
  const getSubsectionLink = (id: string) => {
    if (isTheoryPage) return `#${id}`;
    return `/${pathname.slice(1)}#${id}`;
  };

  const handleDownload = () => {
    try {
      // PDF is generated at build time and served from public directory
      const url = "/theory-of-everything.pdf";
      const a = document.createElement("a");
      a.href = url;
      a.download = "theory-of-everything.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Failed to download PDF:", err);
      alert("Failed to download PDF. Please try again.");
    }
  };

  return (
    <>
      <div className="sticky w-full xl:hidden z-20">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsSidebarOpen(!isSidebarOpen);
            }
          }}
          className="absolute top-2 left-2 cursor-pointer"
        >
          <img src="/icon.svg" alt="Holos" title="Holos" className="w-5 h-5 lg:w-8 lg:h-8" />
        </button>
      </div>
      <aside
        onClick={() => setIsSidebarOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsSidebarOpen(false);
          }
        }}
        className={`w-full h-screen overflow-auto transition-transform duration-300 bg-white ${isSidebarOpen ? "transform translate-x-0" : "fixed transform -translate-x-full z-10"} xl:static xl:transform-none`}
      >
        <nav className="w-full h-screen top-0 left-0 border-r border-black/20 border-dashed overflow-auto flex flex-col">
          <a
            href={getLink("#home")}
            className="hidden xl:block border-b border-black/20 border-dashed h-[160px] w-full"
          >
            <div className="flex flex-col items-center justify-center py-8">
              <img
                src="/icon.svg"
                alt="Holos"
                title="Holos"
                className="w-4 h-4 relative -top-1.5"
              />
              <span className="text-xs">a</span>
              <span>theory</span>
              <span className="text-xs">of</span>
              <span>everything</span>
            </div>
          </a>
          <ol className="flex flex-col h-full xl:h-auto gap-2 pt-12 pb-16 justify-center items-center xl:justify-start flex-grow text-sm">
            <li>
              <a className="text-lg font-medium" href="/">
                Overview
              </a>
            </li>
            {isTheoryPage &&
              theorySubsections.map((subsection) => (
                <li key={subsection.id}>
                  {subsection.id === "holos" ? (
                    <a
                      className="flex items-center gap-1 -ml-0.5 pb-2"
                      href={getLink(`#${subsection.id}`)}
                    >
                      <img
                        src="/icon.svg"
                        alt="Asterisk in a Circle"
                        className="w-4 h-4 scale-90"
                      />
                      <span>{subsection.title}</span>
                    </a>
                  ) : (
                    <a href={getLink(`#${subsection.id}`)}>{subsection.title}</a>
                  )}
                </li>
              ))}
            <li className="mt-2">
              <a className="text-lg font-medium" href="/logic">
                Logic
              </a>
            </li>
            {isLogicPage &&
              logicSubsections.map((subsection) => (
                <li key={subsection.id} className="text-xs">
                  <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                </li>
              ))}
            <li className="mt-2">
              <a className="text-lg font-medium" href="/defense">
                Defense
              </a>
            </li>
            {isDefensePage &&
              defenseSubsections.map((subsection) => (
                <li key={subsection.id} className="text-xs">
                  <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                </li>
              ))}
            <li className="mt-2">
              <a className="text-lg font-medium" href="/definition">
                Definition
              </a>
            </li>
            {isDefinitionPage &&
              definitionSubsections.map((subsection) => (
                <li key={subsection.id} className="text-xs">
                  <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                </li>
              ))}
            <li className="mt-2">
              <a className="text-lg font-medium" href="/predictions">
                Predictions
              </a>
            </li>
            {isPredictionsPage &&
              predictionsSubsections.map((subsection) => (
                <li key={subsection.id} className="text-xs">
                  <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                </li>
              ))}
          </ol>
          <div className="w-full flex justify-center pb-8 px-8 xl:px-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
              className="text-xs text-black/60 hover:text-black border border-black/20 hover:border-black/40 px-4 py-2 rounded transition-colors flex items-center gap-1.5"
            >
              <Download size={12} className="opacity-60" aria-hidden="true" />
              Download
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
