"use client";
import { Download } from "lucide-react";
import Link from "next/link";
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
  { id: "mathematical-formalism", title: "Mathematical Formalism" },
  { id: "extrapolative-propositions", title: "Extrapolative Propositions" },
  { id: "minimal-core", title: "Minimal Core" },
  { id: "phi-operationalization", title: "Operational Definition" },
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
  { id: "tertiary-prediction", title: "Tertiary Prediction" },
  { id: "extrapolative-prediction", title: "Extrapolative Prediction" },
  { id: "testable-implications", title: "Testable Implications" },
  { id: "experiment-1", title: "Experiment 1" },
  { id: "experiment-2", title: "Experiment 2" },
  { id: "experiment-3", title: "Experiment 3" },
  { id: "experiment-4", title: "Experiment 4" },
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
  // Since subsections are only shown when on their respective pages,
  // we can use hash-only links for proper scrolling behavior
  const getSubsectionLink = (id: string) => {
    return `#${id}`;
  };

  const handleDownload = () => {
    try {
      // PDF is generated at build time and served from public directory
      const url = "/holos.pdf";
      const a = document.createElement("a");
      a.href = url;
      a.download = "holos.pdf";
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
            className="hidden xl:flex items-center justify-center border-b border-black/20 border-dashed h-[160px] w-full"
          >
            <div className="flex flex-col items-center justify-center py-8 opacity-60">
              <img
                src="/icon.svg"
                alt="Holos"
                title="Holos"
                className="w-4 h-4 relative -top-1.5"
              />
              <div>Holos</div>
            </div>
          </a>
          <ol className="flex flex-col h-full xl:h-auto gap-2 pt-12 pb-16 justify-center items-center xl:justify-start flex-grow text-sm">
            <li>
              <Link
                className={`text-lg font-medium ${isTheoryPage ? "opacity-100" : "opacity-60"}`}
                href="/"
              >
                Overview
              </Link>
            </li>
            {isTheoryPage && (
              <div className="sidebar-subsections sidebar-subsections-enter flex flex-col items-center">
                {theorySubsections.map((subsection) => (
                  <li key={subsection.id} className="sidebar-subsection-item py-1">
                    {subsection.id === "holos" ? (
                      <a
                        className="flex items-center justify-center gap-1"
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
              </div>
            )}
            <li className="mt-2">
              <Link
                className={`text-lg font-medium ${isLogicPage ? "opacity-100" : "opacity-60"}`}
                href="/logic"
              >
                Logic
              </Link>
            </li>
            {isLogicPage && (
              <div className="sidebar-subsections sidebar-subsections-enter flex flex-col items-center">
                {logicSubsections.map((subsection) => (
                  <li key={subsection.id} className="sidebar-subsection-item text-xs py-1">
                    <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                  </li>
                ))}
              </div>
            )}
            <li className="mt-2">
              <Link
                className={`text-lg font-medium ${isDefensePage ? "opacity-100" : "opacity-60"}`}
                href="/defense"
              >
                Defense
              </Link>
            </li>
            {isDefensePage && (
              <div className="sidebar-subsections sidebar-subsections-enter flex flex-col items-center">
                {defenseSubsections.map((subsection) => (
                  <li key={subsection.id} className="sidebar-subsection-item text-xs py-1">
                    <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                  </li>
                ))}
              </div>
            )}
            <li className="mt-2">
              <Link
                className={`text-lg font-medium ${isDefinitionPage ? "opacity-100" : "opacity-60"}`}
                href="/definition"
              >
                Definition
              </Link>
            </li>
            {isDefinitionPage && (
              <div className="sidebar-subsections sidebar-subsections-enter flex flex-col items-center">
                {definitionSubsections.map((subsection) => (
                  <li key={subsection.id} className="sidebar-subsection-item text-xs py-1">
                    <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                  </li>
                ))}
              </div>
            )}
            <li className="mt-2">
              <Link
                className={`text-lg font-medium ${isPredictionsPage ? "opacity-100" : "opacity-60"}`}
                href="/predictions"
              >
                Predictions
              </Link>
            </li>
            {isPredictionsPage && (
              <div className="sidebar-subsections sidebar-subsections-enter flex flex-col items-center">
                {predictionsSubsections.map((subsection) => (
                  <li key={subsection.id} className="sidebar-subsection-item text-xs py-1">
                    <a href={getSubsectionLink(subsection.id)}>{subsection.title}</a>
                  </li>
                ))}
              </div>
            )}
          </ol>
          <div className="w-full flex justify-center pb-8 px-8 xl:px-4 mb-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
              className="text-xs border border-black/40 px-4 py-2 rounded transition-all flex items-center gap-1.5 opacity-80 hover:opacity-100 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Download size={12} aria-hidden="true" />
              Download
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
