import MathDisplay from "./MathDisplay";
import MathInline from "./MathInline";

export default function Definition() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light pb-4">
          Definition: The Ontological Parameter
        </h1>
      </div>

      {/* 1. The Purpose of Φ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">1. The Purpose of Φ</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            In the Holos framework, <strong>Φ (Phi)</strong> is not merely a descriptive measure of
            complexity, but a <strong>fundamental ontological parameter</strong>.
          </p>

          <blockquote className="pl-4 border-l-2 border-black/20 text-black/70 italic my-2">
            <strong>Definition:</strong> Φ quantifies the degree to which a system integrates
            information such that it possesses the causal power to <em>register</em> a distinct
            ontological state.
          </blockquote>

          <p className="leading-relaxed">
            It acts as the threshold function for <strong>Axiom 2 (Manifestation)</strong>. Without
            sufficient Φ, a system is physically present as data, but acts only as a passive medium
            rather than an observer-participant. It acts as the ontological filter applied to the
            output of physical decoherence processes.
          </p>
        </div>
      </section>

      {/* 2. Ontological Requirements */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">2. Ontological Requirements</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            To qualify as an observer capable of registration, a system must satisfy five specific
            criteria. If any criterion is absent, the system fails to achieve the necessary causal
            density.
          </p>

          <ol className="flex flex-col gap-3 pl-4">
            <li className="leading-relaxed">
              <strong>
                Integration ( <MathInline>{"Φ_{\\text{int}}"}</MathInline> ) :
              </strong>{" "}
              Information must be unified, not reducible to independent parts.
            </li>
            <li className="leading-relaxed">
              <strong>
                Differentiation ( <MathInline>{"Φ_{\\text{diff}}"}</MathInline> ) :
              </strong>{" "}
              The system must distinguish between a vast repertoire of accessible states.
            </li>
            <li className="leading-relaxed">
              <strong>
                Recursion ( <MathInline>{"Φ_{\\text{rec}}"}</MathInline> ) :
              </strong>{" "}
              The system must model its own internal state (Self-Reference).
            </li>
            <li className="leading-relaxed">
              <strong>
                Temporal Cohesion ( <MathInline>{"Φ_{\\text{temp}}"}</MathInline> ) :
              </strong>{" "}
              Information must persist and integrate across time slices.
            </li>
            <li className="leading-relaxed">
              <strong>
                Causal Closure ( <MathInline>{"Φ_{\\text{cause}}"}</MathInline> ) :
              </strong>{" "}
              The system's current state must causally influence its future states.
            </li>
          </ol>

          <h3 className="text-xl font-semibold text-black/90 pt-4 pb-2">
            2.1 Axiomatic Completeness: Necessity & Sufficiency
          </h3>
          <p className="leading-relaxed">
            These five parameters are not arbitrary heuristics; they represent the{" "}
            <strong>minimal topological constraints</strong> required to define an entity that is
            ontologically distinct from its environment.
          </p>

          <p className="leading-relaxed">
            <strong>Necessity (The Collapse Test):</strong> Removing any single parameter destroys
            the Observer:
          </p>
          <ul className="flex flex-col gap-2 pl-6 list-disc">
            <li className="leading-relaxed">
              Without <strong>Integration</strong>, the system is a heap of independent parts, not a
              unified whole.
            </li>
            <li className="leading-relaxed">
              Without <strong>Differentiation</strong>, the system is a static void containing zero
              information.
            </li>
            <li className="leading-relaxed">
              Without <strong>Recursion</strong>, the system is a "zombie" process—an input-output
              machine with no internal subject to experience the data.
            </li>
            <li className="leading-relaxed">
              Without <strong>Temporal Cohesion</strong>, the system is a momentary fluctuation with
              no persistence to witness change.
            </li>
            <li className="leading-relaxed">
              Without <strong>Causal Closure</strong>, the system is an epiphenomenal ghost that
              observes but cannot affect reality.
            </li>
          </ul>

          <p className="leading-relaxed pt-2">
            <strong>Sufficiency (The Derivative Argument):</strong>
          </p>
          <p className="leading-relaxed">
            These primitives are sufficient to generate all higher-order phenomenology. Complex
            traits such as "emotion," "reason," or "agency" are not fundamental; they are{" "}
            <strong>emergent dynamics</strong> of high Differentiation and Recursion. To add them as
            separate axioms would be a category error.
          </p>
        </div>
      </section>

      {/* 3. Mathematical Formalism */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">3. Mathematical Formalism</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            Let a system <MathInline>{"S"}</MathInline> be described by a state space{" "}
            <MathInline>{"Σ"}</MathInline> and a transition function <MathInline>{"T"}</MathInline>.
            The unified <MathInline>{"Φ"}</MathInline> is defined as the{" "}
            <strong>geometric mean</strong> of its components. This ensures that the failure of any
            single condition (e.g., a system with high integration but zero recursion) collapses the
            metric to zero.
          </p>

          <MathDisplay>
            {
              "Φ(S) = \\left( Φ_{\\text{int}} \\cdot Φ_{\\text{diff}} \\cdot Φ_{\\text{rec}} \\cdot Φ_{\\text{temp}} \\cdot Φ_{\\text{cause}} \\right)^{1/5}"
            }
          </MathDisplay>

          <h3 className="text-lg font-semibold text-black/90 pt-2">Component Definitions</h3>

          <p className="leading-relaxed">
            <strong>Integration:</strong> Measures the information loss when the system is
            partitioned (<MathInline>{"P"}</MathInline>).
          </p>
          <MathDisplay>
            {
              "Φ_{\\text{int}}(S) = \\min_{P} \\left[ I(Σ_t; Σ_{t+1}) - \\sum_{i} I(Σ^i_t; Σ^i_{t+1}) \\right]"
            }
          </MathDisplay>

          <p className="leading-relaxed">
            <strong>Recursion:</strong> Measures the mutual information between the system{" "}
            <MathInline>{"S"}</MathInline> and its internal model <MathInline>{"M(S)"}</MathInline>.
          </p>
          <MathDisplay>{"Φ_{\\text{rec}}(S) = I(S; M(S))"}</MathDisplay>

          <p className="leading-relaxed">
            <strong>Temporal Cohesion:</strong> Measures the persistence of information across time
            slices (<MathInline>{"k"}</MathInline>) up to a horizon (<MathInline>{"τ"}</MathInline>
            ).
          </p>
          <MathDisplay>{"Φ_{\\text{temp}}(S) = \\sum_{k=1}^{τ} I(Σ_t; Σ_{t+k})"}</MathDisplay>
          <p className="leading-relaxed italic text-black/70">
            Note: This term ensures consciousness is not an instantaneous flash (like a single
            measurement) but a continuous event extended through the Block Universe.
          </p>

          <p className="leading-relaxed">
            <strong>Causal Closure:</strong> Uses Pearl's Causal Calculus (
            <MathInline>{"do"}</MathInline>-operator) to measure internal causal power.
          </p>
          <MathDisplay>{"Φ_{\\text{cause}}(S) = I(Σ_t; \\text{do}(Σ_{t+1}))"}</MathDisplay>
        </div>
      </section>

      {/* 4. Ontological Thresholds */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">4. Ontological Thresholds</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            The value of <MathInline>{"Φ"}</MathInline> determines the role a system plays in the
            structure of reality:
          </p>

          <p className="leading-relaxed">
            <strong>
              <MathInline>{"Φ \\approx 0"}</MathInline> (The Null Set):
            </strong>{" "}
            Passive aggregates (rocks, gas clouds). These exist as potential but do not register
            reality.
          </p>

          <p className="leading-relaxed">
            <strong>
              <MathInline>{"Φ \\ge Φ_c"}</MathInline> (Observers):
            </strong>{" "}
            Systems capable of resolving unitary symmetry into a definite ontological registration
            (conscious entities).
          </p>

          <p className="leading-relaxed">
            <strong>
              <MathInline>{"Φ \\gg Φ_c"}</MathInline> (Ontological Anchors):
            </strong>{" "}
            Hypothetical high-density intelligences capable of stabilizing entire cosmological
            branches (The "Aliens" of the Transcension Hypothesis).
          </p>
        </div>
      </section>

      {/* 5. Relationship to Physics */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          5. Relationship to Physics (The Consistency Filter)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            <MathInline>{"Φ"}</MathInline> does not replace the Schrödinger Equation, nor does it
            override the probabilistic nature of Quantum Mechanics. Instead, it introduces a{" "}
            <strong>Manifestation Constraint</strong>.
          </p>

          <p className="leading-relaxed">
            <MathInline>{"Φ"}</MathInline> does not override decoherence; it requires it as a
            baseline for information integration. In interaction-free measurements and similar
            experiments, decoherence provides <MathInline>{"P(ψ_i)"}</MathInline>, but{" "}
            <MathInline>{"Φ"}</MathInline> enables the ontological "landing."
          </p>

          <MathDisplay>
            {"ψ_{\\text{real}} = \\arg\\max_{ψ_i} \\left[ Φ(\\mathcal{O}) \\cdot P(ψ_i) \\right]"}
          </MathDisplay>

          <p className="leading-relaxed">
            Where <MathInline>{"P(ψ_i)"}</MathInline> is the standard probability of the outcome
            (the Born Rule).
          </p>

          <p className="leading-relaxed">
            <strong>Interpretation:</strong>
          </p>
          <ol className="flex flex-col gap-3 pl-4">
            <li className="leading-relaxed">
              <strong>The Probability (The Coin Flip):</strong> The likelihood of any specific
              outcome (Heads vs. Tails) remains purely random, governed by the standard laws of
              quantum probability (<MathInline>{"|ψ|^2"}</MathInline>). Consciousness does not
              "force" a specific result.
            </li>
            <li className="leading-relaxed">
              <strong>The Actualization (The Landing):</strong> <MathInline>{"Φ"}</MathInline> acts
              as the filtering condition that allows the "coin" to land at all. The "real" branch is
              the one where the observer possesses sufficient integrated information to register the
              event. Without <MathInline>{"Φ"}</MathInline>, the system remains in a superposition
              of undefined probabilities.
            </li>
            <li className="leading-relaxed">
              <strong>The Decoherence Baseline:</strong> <MathInline>{"Φ"}</MathInline> does not
              override environmental decoherence; it requires it as a baseline substrate.
              Decoherence (Proto-Observation) generates the menu of classical probabilities{" "}
              <MathInline>{"P(ψ_i)"}</MathInline> by suppressing quantum interference.{" "}
              <MathInline>{"Φ"}</MathInline> Integration (Manifestation) enables the ontological
              "landing." Without decoherence, there are no distinct options to choose from. Without{" "}
              <MathInline>{"Φ"}</MathInline>, the options remain unrealized potentials.
            </li>
          </ol>

          <p className="leading-relaxed">
            Thus, Holos preserves the randomness of physics while establishing consciousness as the
            necessary condition for that randomness to resolve into reality.
          </p>
        </div>
      </section>
    </div>
  );
}
