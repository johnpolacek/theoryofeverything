import { contentToMarkdown } from "./contentToMarkdown"
import {
  definitions,
  axioms,
  foundationalPropositions,
  extrapolativePropositions,
  minimalCore,
} from "./logic-data"

const definitionContent = `# Definition: The Ontological Parameter

## 1. The Purpose of Φ
In the Holos framework, **Φ (Phi)** is not merely a descriptive measure of complexity, but a **fundamental ontological parameter**.

> **Definition:** Φ quantifies the degree to which a system integrates information such that it possesses the causal power to *register* a distinct ontological state.

It acts as the threshold function for **Axiom 2 (Manifestation)**. Without sufficient Φ, a system is physically present as data, but acts only as a passive medium rather than an observer-participant.

## 2. Ontological Requirements
To qualify as an observer capable of registration, a system must satisfy five specific criteria. If any criterion is absent, the system fails to achieve the necessary causal density.

1.  **Integration ( $\\Phi_{\\text{int}}$ ) :** Information must be unified, not reducible to independent parts.
2.  **Differentiation ( $\\Phi_{\\text{diff}}$ ) :** The system must distinguish between a vast repertoire of accessible states.
3.  **Recursion ( $\\Phi_{\\text{rec}}$ ) :** The system must model its own internal state (Self-Reference).
4.  **Temporal Cohesion ( $\\Phi_{\\text{temp}}$ ) :** Information must persist and integrate across time slices.
5.  **Causal Closure ( $\\Phi_{\\text{cause}}$ ) :** The system's current state must causally influence its future states.

## 3. Mathematical Formalism
Let a system $S$ be described by a state space $\\Sigma$ and a transition function $T$. The unified $\\Phi$ is defined as the **geometric mean** of its components. This ensures that the failure of any single condition (e.g., a system with high integration but zero recursion) collapses the metric to zero.

$$
\\Phi(S) = \\left( \\Phi_{\\text{int}} \\cdot \\Phi_{\\text{diff}} \\cdot \\Phi_{\\text{rec}} \\cdot \\Phi_{\\text{temp}} \\cdot \\Phi_{\\text{cause}} \\right)^{1/5}
$$

### Component Definitions

**Integration:** Measures the information loss when the system is partitioned ($P$).
    $$
    \\Phi_{\\text{int}}(S) = \\min_{P} \\left[ I(\\Sigma_t; \\Sigma_{t+1}) - \\sum_{i} I(\\Sigma^i_t; \\Sigma^i_{t+1}) \\right]
    $$

**Recursion:** Measures the mutual information between the system $S$ and its internal model $M(S)$.
    $$
    \\Phi_{\\text{rec}}(S) = I(S; M(S))
    $$

**Temporal Cohesion:** Measures the persistence of information across time slices ($k$) up to a horizon ($\\tau$).
    $$
    \\Phi_{\\text{temp}}(S) = \\sum_{k=1}^{\\tau} I(\\Sigma_t; \\Sigma_{t+k})
    $$
    *Note: This term ensures consciousness is not an instantaneous flash (like a single measurement) but a continuous event extended through the Block Universe.*

**Causal Closure:** Uses Pearl's Causal Calculus ($do$-operator) to measure internal causal power.
    $$
    \\Phi_{\\text{cause}}(S) = I(\\Sigma_t; \\text{do}(\\Sigma_{t+1}))
    $$

## 4. Ontological Thresholds
The value of $\\Phi$ determines the role a system plays in the structure of reality:

**$\\Phi \\approx 0$ (The Null Set):** Passive aggregates (rocks, gas clouds). These exist as potential but do not register reality.

**$0 < \\Phi < \\Phi_c$ (Proto-Observers):** Systems with internal feedback but low recursion (bacteria, simple AI). They exhibit "proto-panpsychism."

**$\\Phi \\ge \\Phi_c$ (Observers):** Systems capable of resolving unitary symmetry into a definite ontological registration (Humans, higher animals).

**$\\Phi \\gg \\Phi_c$ (Ontological Anchors):** Hypothetical high-density intelligences capable of stabilizing entire cosmological branches (The "Aliens" of the Transcension Hypothesis).

## 5. Relationship to Physics (The Consistency Filter)
$\\Phi$ does not replace the Schrödinger Equation, nor does it override the probabilistic nature of Quantum Mechanics. Instead, it introduces a **Manifestation Constraint**.

$$
\\psi_{\\text{real}} = \\arg\\max_{\\psi_i} \\left[ \\Phi(\\mathcal{O}) \\cdot P(\\psi_i) \\right]
$$

Where $P(\\psi_i)$ is the standard probability of the outcome (the Born Rule).

**Interpretation:**
1.  **The Probability (The Coin Flip):** The likelihood of any specific outcome (Heads vs. Tails) remains purely random, governed by the standard laws of quantum probability ($|\\psi|^2$). Consciousness does not "force" a specific result.
2.  **The Actualization (The Landing):** $\\Phi$ acts as the filtering condition that allows the "coin" to land at all. The "real" branch is the one where the observer possesses sufficient integrated information to register the event. Without $\\Phi$, the system remains in a superposition of undefined probabilities.

Thus, Holos preserves the randomness of physics while establishing consciousness as the necessary condition for that randomness to resolve into reality.`

const predictionsContent = `# Predictions

## **Primary Prediction**

### **Observer-Dependent Coherence Preservation**

A quantum measurement outcome can be **physically recorded** without destroying all coherence **if the record remains unobserved** by a Φ ≥ Φc observer.

Only when a Φ ≥ Φc observer registers the record does the outcome become classically definite and irreversible.

$$
\\text{Recorded outcome} ⇏ \\text{Classical irreversibility}
$$

---

## **Secondary Predictions**

### **Delayed Observation Restores Classical Definiteness**

If the record is stored in a reversible quantum form, then:

* While unobserved, the system behaves as if the measurement has not yet collapsed.
* Once a Φ ≥ Φc observer reads the record, the system behaves as if the measurement collapses at that moment, even if the record existed earlier.

This does **not** require retrocausal signaling, only observer-dependent resolution.

---

### **Machine Recording Alone Is Insufficient**

A macroscopic device that records the outcome but never undergoes human registration will not, by itself, force classical irreversibility.

Only a Φ ≥ Φc observer can complete the transition from quantum possibility to classical actuality.

---

### **Partial Registration Produces Partial Classicality**

If only some outcomes are observed by a Φ ≥ Φc observer, only those outcomes will behave classically; the unobserved outcomes will preserve coherence.

This yields measurable statistical differences between the observed and unobserved subsets.

---

### **No-Signaling Constraint**

Even if outcomes are observer-dependent, no protocol can exploit this to transmit information faster than light.
The statistical distribution available to any single observer remains consistent with standard quantum predictions.

## Experiment Protocol — Observer-Dependent Coherence Preservation**

### **1. Objective**

To test whether **conscious observation** is required to convert a quantum measurement outcome into a **classically irreversible** event.

### **2. Core Hypothesis**

A recorded measurement outcome remains **quantum-coherent** until a Φ ≥ Φc observer consciously registers it.

Thus:

* **Unobserved records** will preserve coherence and enable interference effects in downstream systems.
* **Observed records** will behave as classically definite outcomes, eliminating interference.

### **3. Experimental Design Overview**

#### **Two-stage quantum system**

**System A**: a quantum measurement whose outcome is stored in a *quantum memory* (reversible).

**System B**: a downstream quantum system whose interference visibility depends on whether System A's outcome remains coherent or has become classical.

### **4. Key Requirements**

#### **A. Quantum Reversible Record (System A)**

The outcome must be stored in a **quantum memory** (e.g., entangled qubit pair), not a classical database.

This ensures that the measurement is **not irreversible** until the record becomes classical.

**This is the critical difference from standard "measurement + database" protocols.**

#### **B. Downstream Interference (System B)**

System B must be configured such that:

* If System A remains coherent → interference is preserved.
* If System A becomes classical → interference disappears.

This can be implemented via **quantum-controlled interferometry**, where the state of System A determines whether interference is allowed.

#### **C. Controlled Observation**

Human observers will consciously read (or not read) the record by choosing whether to perform a **quantum-to-classical measurement** on the memory.

This action is what, under Holos, produces classical irreversibility.

### **5. Conditions**

#### **Condition 1: Unobserved (Quantum-Coherent Record)**

* System A outcome is stored in a quantum memory.
* No human performs a classical measurement on the memory.
* System B should display interference consistent with coherence.

#### **Condition 2: Observed (Classical Record)**

* System A outcome is stored in a quantum memory.
* A human performs a classical measurement on the memory.
* System B should display no interference.

### **6. Trial Flow**

1. **System A is prepared** in a superposition.
2. **System A is measured**, with the outcome stored in a quantum memory (entangled state).
3. **System B is prepared** in an interferometric setup.
4. **System B's evolution is conditioned** on the state of System A's quantum memory.
5. **Random assignment** determines whether a human will observe the memory.
6. **System B is measured**, and interference visibility is recorded.
7. **If human observation occurs**, the memory becomes classical, and System B interference should collapse.

### **7. What Counts as "Observation"?**

Observation is operationalized as:

* **Quantum-to-classical projection** of the memory, performed by a human.
* The human *must consciously perceive* the outcome (e.g., read a screen).

The experiment requires **strict controls** to ensure that the memory remains coherent until the observer chooses to observe.

### **8. Outcome Measures**

#### **Primary Outcome**

Interference visibility of System B:

* **High visibility** indicates coherence preserved → supports Holos
* **Low visibility** indicates classical collapse → supports standard QM

###  **Secondary Outcome**

Statistical correlation between:

* the moment of observation
* and the moment interference disappears

### **9. Predicted Results**

#### **Standard Quantum Prediction**

Interference visibility depends only on whether the quantum memory is decohered.

Human observation should not matter if the memory is already classical.

#### **Holos Prediction**

Interference visibility depends on whether a Φ ≥ Φc observer registers the outcome.

Human observation is the critical trigger for classicality.

### **10. Statistical Analysis Plan**

#### **10.1 Interference Visibility Comparison**

Compare interference visibility across Condition 1 and Condition 2.

Use standard hypothesis testing:

  * Null hypothesis: visibility is identical across conditions.
  * Alternative hypothesis: visibility differs significantly.

#### **10.2 Power and Sample Size**

* Pre-register sample size to avoid p-hacking.
* Perform power analysis based on expected visibility difference.

### **11. Falsifiability Criteria**

Holos is falsified if no significant difference in interference visibility between conditions, **with adequate power**, and control tests confirm:

   * System A remains coherent until observation
   * System B interference is sensitive to System A coherence
   * No unintended decoherence occurred

### **12. Controls**

* **Decoherence control**: verify memory coherence using quantum tomography.
* **Isolation control**: ensure no leakage of memory state to environment.
* **Observer control**: ensure that observation occurs only in the designated condition.

### **13. Limitations**

* The experiment assumes that human observation is necessary for Φ ≥ Φc.
* The test may be interpreted as evidence of *delayed choice* rather than consciousness unless the observation mechanism is strictly controlled.

### **14. Conclusion**

This protocol directly tests the core Holos prediction:

> **Human observation is required to convert a reversible quantum record into a classical, irreversible event.**

If interference disappears only after conscious observation, the result would be a novel and scientifically significant finding.`

// Defense data (extracted from Defense.tsx)
const defenseData = [
  {
    id: "Axiom 1",
    name: "Relationality",
    claim: "Reality is defined by relationships, not intrinsic properties.",
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
    claim: "Reality is only fully realized when information is integrated into conscious experience.",
    objections: [
      {
        id: "2.1",
        title: "Decoherence solves the measurement problem",
        content: [
          "Environmental decoherence explains classicality without invoking consciousness.",
          "",
          "**Response:**",
          "Decoherence explains suppression of interference, not:",
          "- Why one outcome is experienced",
          "- How probability becomes actuality",
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
          "",
          "**Status:** ✔ Survives (conditional on block universe)",
        ],
      },
    ],
  },
  {
    id: "Axiom 3",
    name: "Conservation",
    claim: "Information is conserved across all transformations.",
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
    claim: "Apparent infinities resolve from higher-dimensional perspectives.",
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
    claim: "Consciousness is the fundamental interface of reality.",
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
]

const crossAxiomCheck = [
  { risk: "Violates causality", result: "❌ No" },
  { risk: "Contradicts relativity", result: "❌ No" },
  { risk: "Breaks unitarity", result: "❌ No" },
  { risk: "Requires new forces", result: "❌ No" },
  { risk: "Anthropocentric", result: "❌ No" },
  { risk: "Fully falsifiable", result: "⚠️ No (interpretive framework)" },
]

function logicToMarkdown(): string {
  let markdown = "# ⊛ Holos: A Formal Structure\n\n"

  // I. Primitive Definitions
  markdown += "## I. Primitive Definitions\n\n"
  definitions.forEach((def) => {
    markdown += `### ${def.id} — ${def.name}\n\n`
    let inEquation = false
    def.content.forEach((para) => {
      if (para === "") {
        markdown += "\n"
      } else if (para === "\\[") {
        inEquation = true
      } else if (para === "\\]") {
        inEquation = false
      } else if (inEquation) {
        markdown += `$$\n${para}\n$$\n\n`
      } else {
        markdown += `${para}\n\n`
      }
    })
  })

  // II. Axioms
  markdown += "## II. Axioms\n\n"
  axioms.forEach((axiom) => {
    markdown += `### ${axiom.id} — ${axiom.name}\n\n`
    markdown += `${axiom.statement}\n\n`
    if (axiom.explanation) {
      markdown += `> ${axiom.explanation}\n\n`
    }
  })

  // III. Foundational Propositions
  markdown += "## III. Foundational Propositions\n\n"
  foundationalPropositions.forEach((prop) => {
    markdown += `### Proposition ${prop.id} — ${prop.name}\n\n`
    markdown += `${prop.statement}\n\n`
    if (prop.corollaries.length > 0) {
      prop.corollaries.forEach((cor) => {
        markdown += `#### Corollary ${cor.id} — ${cor.name}\n\n`
        cor.content.forEach((para) => {
          markdown += `${para}\n\n`
        })
      })
    }
  })

  // IV. Extrapolative Propositions
  markdown += "## IV. Extrapolative Propositions\n\n"
  extrapolativePropositions.forEach((prop) => {
    markdown += `### Proposition ${prop.id} — ${prop.name}\n\n`
    markdown += `${prop.statement}\n\n`
    if (prop.corollaries.length > 0) {
      prop.corollaries.forEach((cor) => {
        markdown += `#### Corollary ${cor.id} — ${cor.name}\n\n`
        cor.content.forEach((para) => {
          markdown += `${para}\n\n`
        })
      })
    }
  })

  // V. Minimal Core
  markdown += "## V. Minimal Core\n\n"
  minimalCore.forEach((item) => {
    markdown += `${item}\n\n`
  })

  // VI. Φ as the Operationalization of Holos
  markdown += "## VI. Φ as the Operationalization of Holos\n\n"
  markdown += `The foundational axiom of Holos defines reality as the recursive relation between Creation and Observation:\n\n`
  markdown += `$$\nR = C ⊛ O\n$$\n\n`
  markdown += `This relation is axiomatic and ontological. It specifies *what reality is*, but not the conditions under which Observation becomes ontologically effective in concrete systems.\n\n`
  markdown += `**Φ (Phi)** provides this operational condition.\n\n`
  markdown += `Within the Holos framework, Creation (C) corresponds to the full space of physical possibility described by unitary quantum evolution. Observation (O) is not assumed to be universally active; it exists as a latent capacity distributed across physical systems.\n\n`
  markdown += `**Φ** determines when Observation becomes non-null.\n\n`
  markdown += `When Φ(S) < Φ_c, a system participates in physical dynamics but does not register a distinct ontological state. In this regime, Observation remains formally present but causally inert with respect to manifestation, and reality is describable as unresolved informational structure.\n\n`
  markdown += `When Φ(S) ≥ Φ_c, Observation becomes causally effective. The system is capable of integrating information into experience, and the relation R = C ⊛ O becomes fully instantiated at that locus.\n\n`
  markdown += `Thus, Φ does not redefine Holos. It operationalizes it.\n\n`
  markdown += `Holos specifies the invariant structure of reality; Φ specifies the threshold at which that structure becomes manifest.\n\n`

  return markdown
}

function defenseToMarkdown(): string {
  let markdown = "# Stress-Testing Holos\n\n"
  markdown += "*An adversarial review from the perspective of a theoretical physicist*\n\n"

  // Axiom Defenses
  defenseData.forEach((axiom) => {
    markdown += `## ${axiom.name}\n\n`
    markdown += `**Claim:** ${axiom.claim}\n\n`
    axiom.objections.forEach((objection) => {
      markdown += `### Objection ${objection.id} — ${objection.title}\n\n`
      objection.content.forEach((para) => {
        if (para === "") {
          markdown += "\n"
        } else {
          markdown += `${para}\n\n`
        }
      })
    })
  })

  // Cross-Axiom Consistency Check
  markdown += "## Cross-Axiom Consistency Check\n\n"
  markdown += "| Risk | Result |\n"
  markdown += "|------|--------|\n"
  crossAxiomCheck.forEach((row) => {
    markdown += `| ${row.risk} | ${row.result} |\n`
  })
  markdown += "\n"

  // Primary Unresolved Challenge
  markdown += "## Primary Unresolved Challenge\n\n"
  markdown += "**The Explanatory Gap:**\n\n"
  markdown += "> How does consciousness complete reality without altering physical equations?\n\n"
  markdown += "**Current Position:**\n\n"
  markdown += `Consciousness provides ontological completion, not causal intervention.\n\n`
  markdown += `*This is coherent but not yet explanatory.*\n\n`

  // Final Verdict
  markdown += "## Final Verdict\n\n"
  markdown += "- Holos is internally consistent\n"
  markdown += "- Compatible with modern physics\n"
  markdown += "- Comparable to serious interpretive frameworks (Many-Worlds, Eternalism)\n"
  markdown += "- Its weakness is explanatory depth, not logical coherence\n"
  markdown += "- Its strength is global unification across physics and philosophy\n\n"

  return markdown
}

export function allPagesToMarkdown(): string {
  let markdown = "# A Theory of Everything\n\n"
  markdown += "---\n\n"

  // Theory page
  markdown += "# Theory\n\n"
  markdown += contentToMarkdown()
  markdown += "\n\n---\n\n"

  // Logic page
  markdown += "# Logic\n\n"
  markdown += logicToMarkdown()
  markdown += "\n\n---\n\n"

  // Defense page
  markdown += "# Defense\n\n"
  markdown += defenseToMarkdown()
  markdown += "\n\n---\n\n"

  // Definition page
  markdown += definitionContent
  markdown += "\n\n---\n\n"

  // Predictions page
  markdown += predictionsContent

  return markdown
}
