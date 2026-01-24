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
        "Information is the differentiation between possible states of a system (the difference that makes a [difference](https://en.wikipedia.org/wiki/Information))."
      ),
    ],
  },
  {
    id: "D2",
    name: "Relation",
    content: [
      convertMarkdownToJSX(
        "A relation is a constraint or interaction linking informational states (the way things [relate](https://en.wikipedia.org/wiki/Relation_(philosophy)) to one another)."
      ),
    ],
  },
  {
    id: "D3",
    name: "Observation (O)",
    content: [
      convertMarkdownToJSX(
        "Observation is the integration of information into an experiential state."
      ),
      convertMarkdownToJSX(
        "* **Note:** This capacity scales from proto-observation (relational state-selection in physical systems) to manifestation (full [ontological](https://en.wikipedia.org/wiki/Ontology) actualization, or the becoming of real existence, in systems where [Φ ≥ Φ_c](/definition))."
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
        "It is **fundamental in capacity** and **emergent in form**, scaling with informational integration. This capacity is quantified by the [ontological](https://en.wikipedia.org/wiki/Ontology) parameter [Φ (Phi)](/definition), which measures when a system achieves sufficient integration to register reality (become aware of its own existence)."
      ),
    ],
  },
  {
    id: "D5",
    name: "Creation (C)",
    content: [
      convertMarkdownToJSX("Creation is the generation of distinguishable physical states."),
    ],
  },
  {
    id: "D6",
    name: "Holos (⊛)",
    content: [
      convertMarkdownToJSX(
        "Holos (⊛) is the [recursive](https://en.wikipedia.org/wiki/Recursion) (self-referential, repeating) relational structure formed by Creation and Observation, such that:"
      ),
      "",
      createMathDisplay("R = C ⊛ O", "holos-eq"),
      "",
      convertMarkdownToJSX(
        "This equation is **definitional**, not causal: it describes the [invariant](https://en.wikipedia.org/wiki/Invariant_(physics)) structure of reality, not a temporal process."
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
      "Reality consists of [invariant](https://en.wikipedia.org/wiki/Invariant_(physics)) (unchanging) relational structure, not intrinsic properties."
    ),
  },
  {
    id: "Axiom 2",
    name: "Manifestation",
    statement: convertMarkdownToJSX(
      "A physical state is not fully actualized until information is integrated into experience by a conscious system."
    ),
    explanation: convertMarkdownToJSX(
      "Physical description alone is incomplete without experiential registration. This requires systems where [Φ ≥ Φ_c](/definition)."
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
      "Reality is constituted by relational structure, not by objects with observer-independent [essences](https://en.wikipedia.org/wiki/Essence) (intrinsic, fixed natures)."
    ),
    corollaries: [
      {
        id: "I.1",
        name: "Structural Realism",
        content: [
          convertMarkdownToJSX(
            'Science describes [mathematical isomorphisms](https://en.wikipedia.org/wiki/Isomorphism) of relations, not "things-in-themselves."'
          ),
        ],
      },
      {
        id: "I.2",
        name: "The Interface Principle",
        content: [
          convertMarkdownToJSX(
            "Consciousness is the universal interface of relational structure—fundamental in capacity, emergent in manifestation (becoming real through experience)."
          ),
        ],
      },
    ],
  },
  {
    id: "II",
    name: "Participatory Manifestation",
    statement: convertMarkdownToJSX(
      "Observation is not a passive recording but an [ontological](https://en.wikipedia.org/wiki/Ontology) completion (a completion of existence) of informational states."
    ),
    corollaries: [
      {
        id: "II.1",
        name: "The Participatory Imperative",
        content: [
          convertMarkdownToJSX(
            "The universe is a [self-excited circuit](https://en.wikipedia.org/wiki/John_Archibald_Wheeler#Participatory_Anthropic_Principle): observers are required for the realization of reality."
          ),
        ],
      },
      {
        id: "II.2",
        name: "Ontological Completeness",
        content: [
          convertMarkdownToJSX(
            "Physics (including decoherence) provides structure; consciousness provides presence."
          ),
          convertMarkdownToJSX(
            "* **[Decoherence](https://en.wikipedia.org/wiki/Quantum_decoherence)** resolves quantum probabilities into classical-like mixtures (structural preparation)."
          ),
          convertMarkdownToJSX(
            "* **Manifestation** requires experiential integration to convert that mixture into a realized history (a fixed [worldline](https://en.wikipedia.org/wiki/Worldline) and [ontological irreversibility](https://en.wikipedia.org/wiki/Arrow_of_time), meaning the past cannot be changed once observed)."
          ),
        ],
      },
      {
        id: "II.3",
        name: "Non-Local Observation (Global Boundary Condition)",
        content: [
          convertMarkdownToJSX(
            "In a [block universe](https://en.wikipedia.org/wiki/Block_universe), observation acts as a **final boundary condition** rather than a real-time force."
          ),
          convertMarkdownToJSX(
            "Just as the last number placed in a [Sudoku](https://en.wikipedia.org/wiki/Sudoku) puzzle logically necessitates the value of the first square, a future observation ([Φ ≥ Φ_c](/definition)) retroactively defines the [ontological](https://en.wikipedia.org/wiki/Ontology) status (the status of being real) of a past event."
          ),
          convertMarkdownToJSX(
            "* This ensures global self-consistency without requiring retrocausal signaling or magical influence."
          ),
        ],
      },
    ],
  },
  {
    id: "III",
    name: "Block Relational Spacetime",
    statement: convertMarkdownToJSX(
      "The universe exists as a [four-dimensional manifold](https://en.wikipedia.org/wiki/Four-manifold) (a mathematical space representing the four dimensions of spacetime) in which past, present, and future are equally real features of a single geometric structure."
    ),
    corollaries: [
      {
        id: "III.1",
        name: "The Null Interval",
        content: [
          convertMarkdownToJSX("For light (\\(ds^2 = 0\\)), spacetime separation vanishes."),
          convertMarkdownToJSX(
            "A photon is not a moving object but a **[null geodesic](https://en.wikipedia.org/wiki/Geodesic)**—a static relational seam connecting emission and absorption (the path light takes through spacetime)."
          ),
        ],
      },
      {
        id: "III.2",
        name: "Global Consistency",
        content: [
          convertMarkdownToJSX(
            "Apparent [retrocausality](https://en.wikipedia.org/wiki/Retrocausality) (future influencing the past) reflects global self-consistency of spacetime, not backward influence."
          ),
        ],
      },
    ],
  },
  {
    id: "IV",
    name: "Dimensional Resolution of Infinity",
    statement: convertMarkdownToJSX(
      "Infinities and singularities arise from [projection limits](https://en.wikipedia.org/wiki/Projection_(mathematics)), not from physical divergence."
    ),
    corollaries: [
      {
        id: "IV.1",
        name: "Projective Unity",
        content: [
          convertMarkdownToJSX(
            "Just as parallel lines meet at infinity in [projective geometry](https://en.wikipedia.org/wiki/Projective_geometry), infinite spatial extension resolves into finite higher-dimensional structure."
          ),
        ],
      },
      {
        id: "IV.2",
        name: "Boundary Mediation (Interpretive)",
        content: [
          convertMarkdownToJSX(
            "From a higher-dimensional perspective, photons function as boundary carriers of [relational](https://en.wikipedia.org/wiki/Relational_quantum_mechanics) information."
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
      "Systems evolve toward greater informational [integration](https://en.wikipedia.org/wiki/Integrated_information_theory) because such integration increases observational capacity."
    ),
    corollaries: [
      {
        id: "V.1",
        name: "Life as Manifestation Engine",
        content: [
          convertMarkdownToJSX(
            "Life exists to generate observational [perspectives](https://en.wikipedia.org/wiki/Relational_quantum_mechanics) that actualize reality."
          ),
        ],
      },
      {
        id: "V.2",
        name: "Intelligence as Directional, Not Accidental",
        content: [
          convertMarkdownToJSX(
            "Intelligence is a natural consequence of [relational integration](https://en.wikipedia.org/wiki/Integrated_information_theory), not an evolutionary anomaly."
          ),
        ],
      },
    ],
  },
];

// Mathematical Formalism Section
export interface MathematicalFormalism {
  title: string;
  content: React.ReactNode[];
}

export const mathematicalFormalism: MathematicalFormalism = {
  title: "Mathematical Formalism: The Holos Functor",
  content: [
    convertMarkdownToJSX(
      "To formalize the recursive nature of the ⊛ relation, we model the universe as a Category **C**, where objects are informational states and morphisms are the transformations between them."
    ),
    "",
    convertMarkdownToJSX("**Definition 1 (The Holos Endofunctor):**"),
    convertMarkdownToJSX(
      "Let **H: C → C** be an endofunctor representing the Holos operator. This functor maps the category of reality onto itself through the composite action of Creation (**C**) and Observation (**O**)."
    ),
    "",
    createMathDisplay("H = O \\circ C", "holos-functor"),
    "",
    convertMarkdownToJSX("Where:"),
    convertMarkdownToJSX(
      "* **C** (Creation) maps a state **s** to a manifold of possible histories (Quantum Evolution)."
    ),
    convertMarkdownToJSX(
      "* **O** (Observation) maps that manifold back to a single actualized state **s'** (State Reduction / Manifestation)."
    ),
    "",
    convertMarkdownToJSX(
      "The recursive evolution of reality is the iterative application of this functor:"
    ),
    "",
    createMathDisplay("s_{n+1} = H(s_n) = O(C(s_n))", "holos-recursion"),
    "",
    convertMarkdownToJSX("**Visualizing the Loop**"),
    convertMarkdownToJSX(
      "The Holos framework can be visualized as a commutative diagram where reality (**R**) is preserved across the transformation:"
    ),
    "",
    createMathDisplay(
      "\\begin{array}{ccc} s_0 & \\xrightarrow{C} & P \\\\ & & \\downarrow O \\\\ s_1 & \\xleftarrow{H} & R \\end{array}",
      "commutative-diagram"
    ),
    "",
    convertMarkdownToJSX("Where:"),
    convertMarkdownToJSX("* **s₀**: Initial State"),
    convertMarkdownToJSX("* **C**: Creation (generates set of Possibilities **P**)"),
    convertMarkdownToJSX("* **O**: Observation (selects Reality **R**)"),
    convertMarkdownToJSX(
      "* **H**: The realized reality becomes the initial state for the next cycle."
    ),
  ],
};

// Extrapolative Propositions (VI-VII)
export const extrapolativePropositions: Proposition[] = [
  {
    id: "VI",
    name: "Transcension of Intelligence (Extrapolation)",
    statement: convertMarkdownToJSX(
      "As intelligence approaches maximal informational density, it expands [orthogonally](https://en.wikipedia.org/wiki/Orthogonality) (at right angles, into new dimensions) to three-dimensional space rather than across it."
    ),
    corollaries: [
      {
        id: "VI.1",
        name: "Geometric Resolution of the Fermi Paradox",
        content: [
          convertMarkdownToJSX(
            "Advanced civilizations migrate inward toward higher-dimensional [informational substrates](https://en.wikipedia.org/wiki/Computational_substrate) (physical or digital systems that support information processing), rotating out of our observable frame (moving beyond our 3D perspective). This leads to testable [predictions](/predictions) about gravitational anomalies and dark matter signatures."
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
    name: "Recursive Closure (Terminal Coalgebra)",
    statement: convertMarkdownToJSX(
      'The "Omega Limit" described in the content section is formally defined as the **Terminal Coalgebra** of the Holos functor.'
    ),
    corollaries: [
      {
        id: "VII.1",
        name: "Terminal Coalgebra Definition",
        content: [
          convertMarkdownToJSX(
            'If reality is the trajectory of the functor **H**, then the "final" state of maximal integration is the fixed point where the system becomes isomorphic to its own transformation:'
          ),
          "",
          createMathDisplay("\\Omega \\cong H(\\Omega)", "terminal-coalgebra"),
          "",
          convertMarkdownToJSX(
            'This equation implies that at the limit **Ω**, the distinction between the observer and the observed collapses. The state **Ω** contains all the information required to generate itself. This provides a rigorous mathematical basis for the concept of "Unitary Presence" or "God" without invoking theology—it is simply the structural limit of the recursive system.'
          ),
        ],
      },
      {
        id: "VII.2",
        name: "[Indra's Net](https://en.wikipedia.org/wiki/Indra%27s_net)",
        content: [
          convertMarkdownToJSX(
            "Every part of reality reflects the whole; observation is [recursively](https://en.wikipedia.org/wiki/Recursion) self-referential."
          ),
        ],
      },
      {
        id: "VII.3",
        name: "Semantic Equivalence of the Absolute",
        content: [
          convertMarkdownToJSX(
            "[Theism](https://en.wikipedia.org/wiki/Theism), [panentheism](https://en.wikipedia.org/wiki/Panentheism), and atheistic naturalism describe the same ultimate informational fixed point using different [semantic frames](https://en.wikipedia.org/wiki/Frame_(linguistics)) (different ways of labeling and understanding the same concept)."
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
