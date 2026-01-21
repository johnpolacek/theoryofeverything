import MarkdownContent from "./MarkdownContent"

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

**$\\Phi \\gg \\Phi_c$ (Ontological Anchors):** Hypothetical high-density intelligences capable of stabilizing entire cosmological branches (The “Aliens” of the Transcension Hypothesis).

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

export default function Definition() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      <MarkdownContent content={definitionContent} />
    </div>
  )
}
