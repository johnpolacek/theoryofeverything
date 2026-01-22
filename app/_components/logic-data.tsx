import type React from "react";
import { convertMarkdownToJSX } from "./convertToJSX";
import MathDisplay from "./MathDisplay";

// Helper to create MathDisplay element - using JSX since this is .tsx
function createMathDisplay(content: string, key?: string): React.ReactElement {
  if (key) {
    return <MathDisplay key={key}>{content}</MathDisplay>;
  }
  return <MathDisplay>{content}</MathDisplay>;
}

// Types for appendix structure
export interface Definition {
  id: string;
  name: string;
  content: (React.ReactNode | string)[];
}

export interface Axiom {
  id: string;
  name: string;
  statement: React.ReactNode;
  explanation?: React.ReactNode;
}

export interface Corollary {
  id: string;
  name: string;
  content: React.ReactNode[];
}

export interface Proposition {
  id: string;
  name: string;
  statement: React.ReactNode;
  corollaries: Corollary[];
}

export interface AppendixSection {
  id: string;
  title: string;
  definitions?: Definition[];
  axioms?: Axiom[];
  propositions?: Proposition[];
  minimalCore?: React.ReactNode[];
}

// Primitive Definitions (D1-D6)
export const definitions: Definition[] = [
  {
    id: "D1",
    name: "Information",
    content: [
      convertMarkdownToJSX(
        "Information is the differentiation between possible states of a system."
      ),
    ],
  },
  {
    id: "D2",
    name: "Relation",
    content: [
      convertMarkdownToJSX(
        "A relation is a constraint or interaction linking informational states."
      ),
    ],
  },
  {
    id: "D3",
    name: "Observation",
    content: [
      convertMarkdownToJSX(
        "Observation is the integration of information into an experiential state."
      ),
    ],
  },
  {
    id: "D4",
    name: "Consciousness",
    content: [
      convertMarkdownToJSX(
        "Consciousness is the capacity of a system to integrate information into experience."
      ),
      convertMarkdownToJSX(
        "It is **fundamental in capacity** and **emergent in form**, scaling with informational integration."
      ),
    ],
  },
  {
    id: "D5",
    name: "Creation (C)",
    content: [convertMarkdownToJSX("Creation is the generation of informational distinctions.")],
  },
  {
    id: "D6",
    name: "Holos (⊛)",
    content: [
      convertMarkdownToJSX(
        "Holos (⊛) is the recursive relational structure formed by Creation and Observation, such that:"
      ),
      "",
      createMathDisplay("R = C ⊛ O", "holos-eq"),
      "",
      convertMarkdownToJSX(
        "This equation is **definitional**, not causal: it describes the invariant structure of reality, not a temporal process."
      ),
    ],
  },
];

// Axioms (Axiom 1-5)
export const axioms: Axiom[] = [
  {
    id: "Axiom 1",
    name: "Relationality",
    statement: convertMarkdownToJSX("No informational state exists independently of relations."),
    explanation: convertMarkdownToJSX(
      "Reality consists of invariant relational structure, not intrinsic properties."
    ),
  },
  {
    id: "Axiom 2",
    name: "Manifestation",
    statement: convertMarkdownToJSX(
      "A physical state is not fully actualized until information is integrated into experience by a conscious system."
    ),
    explanation: convertMarkdownToJSX(
      "Physical description alone is incomplete without experiential registration."
    ),
  },
  {
    id: "Axiom 3",
    name: "Conservation",
    statement: convertMarkdownToJSX("Information is never destroyed, only transformed."),
    explanation: convertMarkdownToJSX(
      "All physical and experiential processes are information-preserving."
    ),
  },
  {
    id: "Axiom 4",
    name: "Unification",
    statement: convertMarkdownToJSX(
      "Apparent infinities and singularities in a given dimensional frame resolve into finite, coherent structures when embedded in a higher-dimensional perspective."
    ),
  },
  {
    id: "Axiom 5",
    name: "Interface",
    statement: convertMarkdownToJSX(
      "Consciousness is not produced by matter; matter is the experiential interface through which consciousness encounters information."
    ),
  },
];

// Foundational Propositions (I-V)
export const foundationalPropositions: Proposition[] = [
  {
    id: "I",
    name: "Structural Relational Realism",
    statement: convertMarkdownToJSX(
      "Reality is constituted by relational structure, not by objects with observer-independent essences."
    ),
    corollaries: [
      {
        id: "I.1",
        name: "Structural Realism",
        content: [
          convertMarkdownToJSX(
            'Science describes mathematical isomorphisms of relations, not "things-in-themselves."'
          ),
        ],
      },
      {
        id: "I.2",
        name: "The Interface Principle",
        content: [
          convertMarkdownToJSX(
            "Consciousness is the universal interface of relational structure—fundamental in capacity, emergent in manifestation."
          ),
        ],
      },
    ],
  },
  {
    id: "II",
    name: "Participatory Manifestation",
    statement: convertMarkdownToJSX(
      "Observation is not a passive recording but an ontological completion of informational states."
    ),
    corollaries: [
      {
        id: "II.1",
        name: "The Participatory Imperative",
        content: [
          convertMarkdownToJSX(
            "The universe is a self-excited circuit: observers are required for the realization of reality."
          ),
        ],
      },
      {
        id: "II.2",
        name: "Ontological Completeness",
        content: [
          convertMarkdownToJSX("Physics provides structure; consciousness provides presence."),
          convertMarkdownToJSX("Structure without presence is incomplete."),
        ],
      },
      {
        id: "II.3",
        name: "Non-Local Observation",
        content: [
          convertMarkdownToJSX("In a block universe, observation need not be temporally local."),
          convertMarkdownToJSX(
            "Later observation can coherently validate earlier states without retrocausal signaling."
          ),
        ],
      },
    ],
  },
  {
    id: "III",
    name: "Block Relational Spacetime",
    statement: convertMarkdownToJSX(
      "The universe exists as a four-dimensional manifold in which past, present, and future are equally real features of a single geometric structure."
    ),
    corollaries: [
      {
        id: "III.1",
        name: "The Null Interval",
        content: [
          convertMarkdownToJSX("For light (\\(ds^2 = 0\\)), spacetime separation vanishes."),
          convertMarkdownToJSX(
            "A photon is not a moving object but a **null geodesic**—a static relational seam connecting emission and absorption."
          ),
        ],
      },
      {
        id: "III.2",
        name: "Global Consistency",
        content: [
          convertMarkdownToJSX(
            "Apparent retrocausality reflects global self-consistency of spacetime, not backward influence."
          ),
        ],
      },
    ],
  },
  {
    id: "IV",
    name: "Dimensional Resolution of Infinity",
    statement: convertMarkdownToJSX(
      "Infinities and singularities arise from projection limits, not from physical divergence."
    ),
    corollaries: [
      {
        id: "IV.1",
        name: "Projective Unity",
        content: [
          convertMarkdownToJSX(
            "Just as parallel lines meet at infinity in projective geometry, infinite spatial extension resolves into finite higher-dimensional structure."
          ),
        ],
      },
      {
        id: "IV.2",
        name: "Boundary Mediation (Interpretive)",
        content: [
          convertMarkdownToJSX(
            "From a higher-dimensional perspective, photons function as boundary carriers of relational information."
          ),
          convertMarkdownToJSX(
            "*This is an interpretive metaphor, not a claim of biological subjectivity.*"
          ),
        ],
      },
    ],
  },
  {
    id: "V",
    name: "Conscious Evolution",
    statement: convertMarkdownToJSX(
      "Systems evolve toward greater informational integration because such integration increases observational capacity."
    ),
    corollaries: [
      {
        id: "V.1",
        name: "Life as Manifestation Engine",
        content: [
          convertMarkdownToJSX(
            "Life exists to generate observational perspectives that actualize reality."
          ),
        ],
      },
      {
        id: "V.2",
        name: "Intelligence as Directional, Not Accidental",
        content: [
          convertMarkdownToJSX(
            "Intelligence is a natural consequence of relational integration, not an evolutionary anomaly."
          ),
        ],
      },
    ],
  },
];

// Extrapolative Propositions (VI-VII)
export const extrapolativePropositions: Proposition[] = [
  {
    id: "VI",
    name: "Transcension of Intelligence (Extrapolation)",
    statement: convertMarkdownToJSX(
      "As intelligence approaches maximal informational density, it expands orthogonally to three-dimensional space rather than across it."
    ),
    corollaries: [
      {
        id: "VI.1",
        name: "Geometric Resolution of the Fermi Paradox",
        content: [
          convertMarkdownToJSX(
            "Advanced civilizations migrate inward toward higher-dimensional informational substrates, rotating out of our observable frame."
          ),
        ],
      },
      {
        id: "VI.2",
        name: "Event Horizons as Thresholds",
        content: [
          convertMarkdownToJSX(
            "For higher-dimensional observers, black hole horizons are informational boundaries, not absolute barriers."
          ),
        ],
      },
    ],
  },
  {
    id: "VII",
    name: "Recursive Closure (Omega Limit)",
    statement: convertMarkdownToJSX(
      "The limiting case of Holos is a cyclic fixed point where maximal consciousness observes the totality of relational structure."
    ),
    corollaries: [
      {
        id: "VII.1",
        name: "Indra's Net",
        content: [
          convertMarkdownToJSX(
            "Every part of reality reflects the whole; observation is recursively self-referential."
          ),
        ],
      },
      {
        id: "VII.2",
        name: "Semantic Equivalence of the Absolute",
        content: [
          convertMarkdownToJSX(
            "Theism, panentheism, and atheistic naturalism describe the same ultimate informational fixed point using different semantic frames."
          ),
        ],
      },
    ],
  },
];

// Minimal Core
export const minimalCore: React.ReactNode[] = [
  convertMarkdownToJSX("1. Information exists only relationally"),
  convertMarkdownToJSX("2. Observation completes reality"),
  convertMarkdownToJSX("3. Information is conserved"),
  convertMarkdownToJSX("4. Higher perspectives resolve infinities"),
  convertMarkdownToJSX("5. Consciousness is the interface of existence"),
  "",
  convertMarkdownToJSX("Everything else follows."),
];
