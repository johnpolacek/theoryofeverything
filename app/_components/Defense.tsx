import { AlertTriangle, Check, X } from "lucide-react";
import type { ReactNode } from "react";
import { convertMarkdownToJSX } from "./convertToJSX";
import MathInline from "./MathInline";

interface Objection {
  id: string;
  title: string;
  content: string[];
}

// Helper function to render text with icons replacing emojis
function renderWithIcons(text: string, paragraphIndex: number): ReactNode {
  const elements: ReactNode[] = [];
  let keyIndex = 0;

  // Replace ✔ with Check icon
  if (text.includes("✔")) {
    const parts = text.split("✔");
    parts.forEach((part, idx) => {
      if (part) {
        elements.push(convertMarkdownToJSX(part));
      }
      if (idx < parts.length - 1) {
        elements.push(
          <Check
            key={`check-${paragraphIndex}-${keyIndex++}`}
            className="inline-block w-4 h-4 mx-1 align-text-bottom"
          />
        );
      }
    });
    return <>{elements}</>;
  }

  // Replace ❌ with X icon
  if (text.includes("❌")) {
    const parts = text.split("❌");
    parts.forEach((part, idx) => {
      if (part) {
        elements.push(convertMarkdownToJSX(part));
      }
      if (idx < parts.length - 1) {
        elements.push(
          <X
            key={`x-${paragraphIndex}-${keyIndex++}`}
            className="inline-block w-4 h-4 mx-1 align-text-bottom"
          />
        );
      }
    });
    return <>{elements}</>;
  }

  // Replace ⚠️ with AlertTriangle icon
  if (text.includes("⚠️")) {
    const parts = text.split("⚠️");
    parts.forEach((part, idx) => {
      if (part) {
        elements.push(convertMarkdownToJSX(part));
      }
      if (idx < parts.length - 1) {
        elements.push(
          <AlertTriangle
            key={`alert-${paragraphIndex}-${keyIndex++}`}
            className="inline-block w-4 h-4 mx-1 align-text-bottom"
          />
        );
      }
    });
    return <>{elements}</>;
  }

  // No emoji found, use regular convertMarkdownToJSX
  return convertMarkdownToJSX(text);
}

interface AxiomDefense {
  id: string;
  name: string;
  objections: Objection[];
}

const defenseData: AxiomDefense[] = [
  {
    id: "Axiom 1",
    name: "Relationality",
    objections: [
      {
        id: "1.1",
        title: "This is just instrumentalism",
        content: [
          "Physics describes relations because measurements access relations, not because intrinsic properties do not exist.",
          "",
          "**Response:**",
          "Holos does not deny ontic structure; it denies *observer-independent intrinsic essence*.",
          "This aligns with:",
          "- Gauge invariance (only relational quantities are physical)",
          "- General Relativity (no absolute spacetime background)",
          "- Relational Quantum Mechanics (observer-relative states)",
          "",
          "Intrinsic properties that are never physically accessible are epistemically inert.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
      {
        id: "1.2",
        title: "Quantum fields have intrinsic properties",
        content: [
          "Fields possess mass, charge, and spin.",
          "",
          "**Response:**",
          "These are relational invariants defined through symmetry, interaction, and representation—not standalone substances.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
    ],
  },
  {
    id: "Axiom 2",
    name: "Manifestation",
    objections: [
      {
        id: "2.1",
        title: "Decoherence solves the measurement problem",
        content: [
          "Environmental decoherence explains classicality without invoking consciousness.",
          "",
          "**Response:**",
          "Decoherence explains suppression of interference and provides the physical structure for classical outcomes, but not:",
          "- Why one outcome is experienced",
          "- How probability becomes actuality",
          "- The ontological completion that makes reality 'real'",
          "",
          "In Holos, decoherence is part of Creation (generating classical-like states), but Observation 'registers' them experientially. Systems below Φ_c can perform mechanical 'observations' (decoherence), but only Φ ≥ Φ_c manifests experiential reality.",
          "",
          "The measurement problem's ontological remainder remains.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
      {
        id: "2.2",
        title: "Consciousness-based interpretations are fringe",
        content: [
          "Von Neumann–Wigner is historically marginal.",
          "",
          "**Response:**",
          "Holos is compatible with modern frameworks:",
          "- Quantum Darwinism (redundant classical information)",
          "- Relational QM (observer-relative facts)",
          "- Participatory Anthropic Principle (observers as boundary conditions)",
          "",
          "Consciousness here means *experiential integration*, not human cognition.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
      {
        id: "2.3",
        title: "The universe existed before observers",
        content: [
          "Early cosmology predates life.",
          "",
          "**Response:**",
          "Under eternalism (block universe), observation need not be temporally local.",
          "Later observers can consistently instantiate earlier states without causal paradox.",
          "In delayed-choice experiments and quantum erasers, future observations retroactively 'manifest' past states, demonstrating that consciousness doesn't need to act in real-time—it's the global self-consistency of the block universe that matters.",
          "",
          "**Status:** ✔ Survives (conditional on block universe)",
        ],
      },
    ],
  },
  {
    id: "Axiom 3",
    name: "Conservation",
    objections: [
      {
        id: "3.1",
        title: "Black holes destroy information",
        content: [
          "Classic black hole evaporation implies loss.",
          "",
          "**Response:**",
          "Modern consensus (AdS/CFT, Page curve, holography) supports information conservation.",
          "",
          "**Status:** ✔ Strongly survives",
        ],
      },
      {
        id: "3.2",
        title: "Wavefunction collapse is non-unitary",
        content: [
          "Collapse appears to violate unitarity.",
          "",
          "**Response:**",
          "Unitarity holds in:",
          "- Many-Worlds",
          "- Decoherence",
          "- Relational QM",
          "- Holographic frameworks",
          "",
          "Non-unitarity is interpretive, not formal.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
    ],
  },
  {
    id: "Axiom 4",
    name: "Unification",
    objections: [
      {
        id: "4.1",
        title: "Higher dimensions are speculative",
        content: [
          "Extra dimensions lack direct evidence.",
          "",
          "**Response:**",
          "Holos asserts conceptual resolution, not empirical proof.",
          "This mirrors accepted speculative frameworks (inflation, multiverse, string theory).",
          "",
          "**Status:** ✔ Survives as structural heuristic",
        ],
      },
      {
        id: "4.2",
        title: "Some infinities are purely mathematical",
        content: [
          "Not all infinities are physical pathologies.",
          "",
          "**Response:**",
          "Holos targets *physical* infinities (singularities), not mathematical abstraction.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
    ],
  },
  {
    id: "Axiom 5",
    name: "Interface",
    objections: [
      {
        id: "5.1",
        title: "Panpsychism explains nothing",
        content: [
          "It lacks mechanistic detail.",
          "",
          "**Response:**",
          "Panpsychism explains continuity:",
          "- Avoids emergence ex nihilo",
          "- Avoids substance dualism",
          "- Aligns with field-based ontology",
          "",
          "It is ontological, not mechanistic.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
      {
        id: "5.2",
        title: "This smuggles theology into physics",
        content: [
          "Consciousness implies metaphysics.",
          "",
          "**Response:**",
          "Holos does not require:",
          "- Intentional agency",
          "- Will or purpose",
          "- Moral authority",
          "",
          "It requires only irreducible experience, already acknowledged in philosophy of mind.",
          "",
          "**Status:** ✔ Survives",
        ],
      },
    ],
  },
];

const crossAxiomCheck = [
  { risk: "Violates causality", result: "❌ No" },
  { risk: "Contradicts relativity", result: "❌ No" },
  { risk: "Breaks unitarity", result: "❌ No" },
  { risk: "Requires new forces", result: "❌ No" },
  { risk: "Anthropocentric", result: "❌ No" },
  { risk: "Fully falsifiable", result: "⚠️ No (interpretive framework)" },
];

export default function Defense() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light pb-4">Stress-Testing Holos</h1>
        <p className="text-black/70 italic text-sm">
          An adversarial review from the perspective of a theoretical physicist
        </p>
      </div>

      {/* Axiom Defenses */}
      {defenseData.map((axiom) => (
        <section key={axiom.id} className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-light pb-2">{axiom.name}</h2>
          <p className="text-black/80 italic pb-2">
            <strong>Claim:</strong>{" "}
            {axiom.name === "Relationality"
              ? "Reality is defined by relationships, not intrinsic properties."
              : axiom.name === "Manifestation"
                ? "Reality is only fully realized when information is integrated into conscious experience."
                : axiom.name === "Conservation"
                  ? "Information is conserved across all transformations."
                  : axiom.name === "Unification"
                    ? "Apparent infinities resolve from higher-dimensional perspectives."
                    : "Consciousness is the fundamental interface of reality."}
          </p>
          <div className="flex flex-col gap-8">
            {axiom.objections.map((objection) => (
              <div key={objection.id} className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-black/90">
                  Objection {objection.id} — {objection.title}
                </h3>
                <div className="flex flex-col gap-3 text-black/80">
                  {objection.content.map((para, idx) => {
                    if (para === "") return <br key={`${objection.id}-br-${idx}`} />;
                    if (para.startsWith("**Response:**")) {
                      return (
                        <p key={`${objection.id}-p-${idx}`} className="text-black/90 pt-2">
                          {convertMarkdownToJSX(para)}
                        </p>
                      );
                    }
                    if (para.startsWith("**Status:**")) {
                      return (
                        <p key={`${objection.id}-p-${idx}`} className="text-black/90 pt-2">
                          {renderWithIcons(para, idx)}
                        </p>
                      );
                    }
                    if (para.startsWith("- ")) {
                      return (
                        <p key={`${objection.id}-p-${idx}`} className="pl-4 leading-relaxed">
                          {convertMarkdownToJSX(para)}
                        </p>
                      );
                    }
                    return (
                      <p key={`${objection.id}-p-${idx}`} className="leading-relaxed">
                        {convertMarkdownToJSX(para)}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Cross-Axiom Consistency Check */}
      <section id="cross-axiom-consistency-check" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Cross-Axiom Consistency Check</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black/20">
                <th className="text-left py-2 pr-8 font-semibold text-black/90">Risk</th>
                <th className="text-left py-2 font-semibold text-black/90">Result</th>
              </tr>
            </thead>
            <tbody>
              {crossAxiomCheck.map((row) => {
                const hasX = row.result.includes("❌");
                const hasAlert = row.result.includes("⚠️");
                const text = row.result.replace(/❌|⚠️/g, "").trim();
                return (
                  <tr key={row.risk} className="border-b border-black/10">
                    <td className="py-3 pr-8 text-black/80">{row.risk}</td>
                    <td className="py-3 text-black/80">
                      <div className="flex items-center gap-1.5">
                        {hasX && <X className="w-4 h-4 flex-shrink-0" />}
                        {hasAlert && <AlertTriangle className="w-4 h-4 flex-shrink-0" />}
                        <span>{text}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Compatibility with Recent Experiments */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Compatibility with Recent Experiments
        </h2>
        <div className="flex flex-col gap-6 text-black/80">
          <p className="leading-relaxed">
            Recent experiments—interaction-free measurements, debunked psi claims, and partial
            falsifications of objective collapse models—pose challenges to consciousness-centric
            interpretations. They suggest quantum "measurements" can occur through purely physical
            processes without requiring a conscious observer. However, Holos accommodates these
            findings by refining how observation operates, emphasizing its ontological role over a
            causal one.
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">
              Interaction-Free Measurements and Decoherence
            </h3>
            <p className="leading-relaxed">
              Interaction-free measurements show information extraction without direct particle
              interaction or consciousness. Decoherence (environmental interactions suppressing
              interference) provides the physical mechanism that prepares information for
              experiential registration, but not the full "discovery."
            </p>
            <p className="leading-relaxed">
              <strong>Holos Response:</strong> Decoherence is part of Creation (generating
              classical-like states), but Observation "registers" them experientially in the
              recursive loop. Mechanical interactions handle physical "collapse" or decoherence, but
              true manifestation requires integration into a broader experiential network—ultimately
              culminating in higher consciousness. Systems below <MathInline>{"Φ_c"}</MathInline>{" "}
              can perform mechanical "observations" (decoherence), but only{" "}
              <MathInline>{"Φ ≥ Φ_c"}</MathInline> manifests experiential reality.
            </p>
          </div>
      </section>

      {/* Primary Unresolved Challenge */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Primary Unresolved Challenge</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="font-semibold text-black/90">The Explanatory Gap:</p>
          <blockquote className="pl-4 border-l-2 border-black/20 italic text-black/70">
            How does consciousness complete reality without altering physical equations?
          </blockquote>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-black/90">Current Position:</p>
            <p className="leading-relaxed">
              Consciousness provides ontological completion, not causal intervention.
            </p>
            <p className="leading-relaxed italic text-black/70 pt-2">
              This is coherent but not yet explanatory.
            </p>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section id="final-verdict" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Final Verdict</h2>
        <div className="flex flex-col gap-3 text-black/80">
          <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
            <li>Holos is internally consistent</li>
            <li>Compatible with modern physics</li>
            <li>Comparable to serious interpretive frameworks (Many-Worlds, Eternalism)</li>
            <li>Its weakness is explanatory depth, not logical coherence</li>
            <li>Its strength is global unification across physics and philosophy</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
