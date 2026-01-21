import React from "react"
import MathDisplay from "./MathDisplay"
import MathInline from "./MathInline"

export default function Definition() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      <div className="prose prose-lg max-w-none">
        <h1>Definition: The Ontological Parameter</h1>

        <h2>1. The Purpose of Φ</h2>
        <p>
          In the Holos framework, <strong>Φ (Phi)</strong> is not merely a descriptive measure of complexity, but a <strong>fundamental ontological parameter</strong>.
        </p>

        <blockquote>
          <strong>Definition:</strong> Φ quantifies the degree to which a system integrates information such that it possesses the causal power to <em>register</em> a distinct ontological state.
        </blockquote>

        <p>
          It acts as the threshold function for <strong>Axiom 2 (Manifestation)</strong>. Without sufficient Φ, a system is physically present as data, but acts only as a passive medium rather than an observer-participant.
        </p>

        <h2>2. Ontological Requirements</h2>
        <p>
          To qualify as an observer capable of registration, a system must satisfy five specific criteria. If any criterion is absent, the system fails to achieve the necessary causal density.
        </p>

        <ol>
          <li>
            <strong>Integration ( <MathInline>{"Φ_{\\text{int}}"}</MathInline> ) :</strong> Information must be unified, not reducible to independent parts.
          </li>
          <li>
            <strong>Differentiation ( <MathInline>{"Φ_{\\text{diff}}"}</MathInline> ) :</strong> The system must distinguish between a vast repertoire of accessible states.
          </li>
          <li>
            <strong>Recursion ( <MathInline>{"Φ_{\\text{rec}}"}</MathInline> ) :</strong> The system must model its own internal state (Self-Reference).
          </li>
          <li>
            <strong>Temporal Cohesion ( <MathInline>{"Φ_{\\text{temp}}"}</MathInline> ) :</strong> Information must persist and integrate across time slices.
          </li>
          <li>
            <strong>Causal Closure ( <MathInline>{"Φ_{\\text{cause}}"}</MathInline> ) :</strong> The system's current state must causally influence its future states.
          </li>
        </ol>

        <h2>3. Mathematical Formalism</h2>
        <p>
          Let a system <MathInline>{"S"}</MathInline> be described by a state space <MathInline>{"Σ"}</MathInline> and a transition function <MathInline>{"T"}</MathInline>. The unified <MathInline>{"Φ"}</MathInline> is defined as the <strong>geometric mean</strong> of its components. This ensures that the failure of any single condition (e.g., a system with high integration but zero recursion) collapses the metric to zero.
        </p>

        <MathDisplay>{"Φ(S) = \\left( Φ_{\\text{int}} \\cdot Φ_{\\text{diff}} \\cdot Φ_{\\text{rec}} \\cdot Φ_{\\text{temp}} \\cdot Φ_{\\text{cause}} \\right)^{1/5}"}</MathDisplay>

        <h3>Component Definitions</h3>

        <p>
          <strong>Integration:</strong> Measures the information loss when the system is partitioned (<MathInline>{"P"}</MathInline>).
        </p>
        <MathDisplay>{"Φ_{\\text{int}}(S) = \\min_{P} \\left[ I(Σ_t; Σ_{t+1}) - \\sum_{i} I(Σ^i_t; Σ^i_{t+1}) \\right]"}</MathDisplay>

        <p>
          <strong>Recursion:</strong> Measures the mutual information between the system <MathInline>{"S"}</MathInline> and its internal model <MathInline>{"M(S)"}</MathInline>.
        </p>
        <MathDisplay>{"Φ_{\\text{rec}}(S) = I(S; M(S))"}</MathDisplay>

        <p>
          <strong>Temporal Cohesion:</strong> Measures the persistence of information across time slices (<MathInline>{"k"}</MathInline>) up to a horizon (<MathInline>{"τ"}</MathInline>).
        </p>
        <MathDisplay>{"Φ_{\\text{temp}}(S) = \\sum_{k=1}^{τ} I(Σ_t; Σ_{t+k})"}</MathDisplay>
        <p>
          <em>Note: This term ensures consciousness is not an instantaneous flash (like a single measurement) but a continuous event extended through the Block Universe.</em>
        </p>

        <p>
          <strong>Causal Closure:</strong> Uses Pearl's Causal Calculus (<MathInline>{"do"}</MathInline>-operator) to measure internal causal power.
        </p>
        <MathDisplay>{"Φ_{\\text{cause}}(S) = I(Σ_t; \\text{do}(Σ_{t+1}))"}</MathDisplay>

        <h2>4. Ontological Thresholds</h2>
        <p>
          The value of <MathInline>{"Φ"}</MathInline> determines the role a system plays in the structure of reality:
        </p>

        <p>
          <strong><MathInline>{"Φ \\approx 0"}</MathInline> (The Null Set):</strong> Passive aggregates (rocks, gas clouds). These exist as potential but do not register reality.
        </p>

        <p>
          <strong><MathInline>{"0 < Φ < Φ_c"}</MathInline> (Proto-Observers):</strong> Systems with internal feedback but low recursion (bacteria, simple AI). They exhibit "proto-panpsychism."
        </p>

        <p>
          <strong><MathInline>{"Φ \\ge Φ_c"}</MathInline> (Observers):</strong> Systems capable of resolving unitary symmetry into a definite ontological registration (Humans, higher animals).
        </p>

        <p>
          <strong><MathInline>{"Φ \\gg Φ_c"}</MathInline> (Ontological Anchors):</strong> Hypothetical high-density intelligences capable of stabilizing entire cosmological branches (The "Aliens" of the Transcension Hypothesis).
        </p>

        <h2>5. Relationship to Physics (The Consistency Filter)</h2>
        <p>
          <MathInline>{"Φ"}</MathInline> does not replace the Schrödinger Equation, nor does it override the probabilistic nature of Quantum Mechanics. Instead, it introduces a <strong>Manifestation Constraint</strong>.
        </p>

        <MathDisplay>{"ψ_{\\text{real}} = \\arg\\max_{ψ_i} \\left[ Φ(\\mathcal{O}) \\cdot P(ψ_i) \\right]"}</MathDisplay>

        <p>
          Where <MathInline>{"P(ψ_i)"}</MathInline> is the standard probability of the outcome (the Born Rule).
        </p>

        <p>
          <strong>Interpretation:</strong>
        </p>
        <ol>
          <li>
            <strong>The Probability (The Coin Flip):</strong> The likelihood of any specific outcome (Heads vs. Tails) remains purely random, governed by the standard laws of quantum probability (<MathInline>{"|ψ|^2"}</MathInline>). Consciousness does not "force" a specific result.
          </li>
          <li>
            <strong>The Actualization (The Landing):</strong> <MathInline>{"Φ"}</MathInline> acts as the filtering condition that allows the "coin" to land at all. The "real" branch is the one where the observer possesses sufficient integrated information to register the event. Without <MathInline>{"Φ"}</MathInline>, the system remains in a superposition of undefined probabilities.
          </li>
        </ol>

        <p>
          Thus, Holos preserves the randomness of physics while establishing consciousness as the necessary condition for that randomness to resolve into reality.
        </p>
      </div>
    </div>
  )
}
