import MathDisplay from "./MathDisplay";
import MathInline from "./MathInline";

export default function Definition() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light pb-4">
          Definition: The <a href="https://en.wikipedia.org/wiki/Ontology" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">Ontological</a> Parameter
        </h1>
        <p className="text-black/70 text-sm">
          Φ (Phi) measures the capacity of a system to experience reality. For the formal operational definition *R = C ⊛ O*, see the{" "}
          <a href="/logic" className="text-black/80 hover:text-black underline">
            Logic
          </a>{" "}
          section. For conceptual exploration, see the main{" "}
          <a href="/" className="text-black/80 hover:text-black underline">
            Content
          </a>{" "}
          section.
        </p>
      </div>

      {/* 1. The Purpose of Φ */}
      <section id="1-the-purpose-of" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">1. The Purpose of Φ</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            In the{" "}
            <a href="/" className="text-black/80 hover:text-black underline">
              Holos framework
            </a>
            , <strong>Φ (Phi)</strong> is not merely a descriptive measure of complexity, but a{" "}
            <strong>fundamental <a href="https://en.wikipedia.org/wiki/Ontology" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">ontological</a> parameter</strong>.
          </p>

          <blockquote className="pl-4 border-l-2 border-black/20 text-black/70 italic my-2">
            <strong>Definition:</strong> Φ quantifies the degree to which a system integrates
            information such that it possesses the <a href="https://en.wikipedia.org/wiki/Causality" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">causal power</a> to <em>register</em> (become aware of) a distinct{" "}
            <a href="https://en.wikipedia.org/wiki/Ontology" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">ontological</a> state (a state of existence).
          </blockquote>

          <p className="leading-relaxed">
            It acts as the threshold function for{" "}
            <a href="/logic#axioms" className="text-black/80 hover:text-black underline">
              <strong>Axiom 2 (Manifestation)</strong>
            </a>
            . Without sufficient Φ, a system is physically present as data, but acts only as a
            passive medium rather than an observer-participant. It acts as the filter
            applied to the output of physical <a href="https://en.wikipedia.org/wiki/Quantum_decoherence" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">decoherence</a> (the process where quantum systems interact with their environment).
          </p>
        </div>
      </section>

      {/* 2. Ontological Requirements */}
      <section id="2-ontological-requirements" className="flex flex-col gap-6">
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
            These five parameters are not arbitrary <a href="https://en.wikipedia.org/wiki/Heuristic" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">heuristics</a> (mental shortcuts); they represent the{" "}
            <strong>minimal <a href="https://en.wikipedia.org/wiki/Topology" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">topological</a> constraints</strong> (the required structural shape) required to define an entity that is
            ontologically distinct (existing separately) from its environment.
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
              Without <strong>Recursion</strong>, the system is a <a href="https://en.wikipedia.org/wiki/Philosophical_zombie" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">&quot;zombie&quot; process</a>—an input-output
              machine with no internal subject to experience the data.
            </li>
            <li className="leading-relaxed">
              Without <strong>Temporal Cohesion</strong>, the system is a momentary fluctuation with
              no persistence to witness change.
            </li>
            <li className="leading-relaxed">
              Without <strong>Causal Closure</strong>, the system is an <a href="https://en.wikipedia.org/wiki/Epiphenomenalism" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">epiphenomenal</a> ghost—something that
              observes but cannot affect reality.
            </li>
          </ul>

          <p className="leading-relaxed pt-2">
            <strong>Sufficiency (The Derivative Argument):</strong>
          </p>
          <p className="leading-relaxed">
            These primitives are sufficient to generate all higher-order <a href="https://en.wikipedia.org/wiki/Phenomenology_(philosophy)" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">phenomenology</a> (the structures of experience). Complex
            traits such as &quot;emotion,&quot; &quot;reason,&quot; or &quot;agency&quot; are not fundamental; they are{" "}
            <strong>emergent dynamics</strong> of high Differentiation and Recursion. To add them as
            separate axioms would be a <a href="https://en.wikipedia.org/wiki/Category_error" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">category error</a>.
          </p>
        </div>
      </section>

      {/* 3. Mathematical Formalism */}
      <section id="3-mathematical-formalism" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">3. Mathematical Formalism</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            Let a system <MathInline>{"S"}</MathInline> be described by a state space{" "}
            <MathInline>{"Σ"}</MathInline> and a transition function <MathInline>{"T"}</MathInline>.
            The unified <MathInline>{"Φ"}</MathInline> is defined as the{" "}
            <strong><a href="https://en.wikipedia.org/wiki/Geometric_mean" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">geometric mean</a></strong> of its components. This ensures that the failure of any
            single condition (e.g., a system with high integration but zero recursion) collapses the
            metric to zero.
          </p>

          <MathDisplay>
            {
              "Φ(S) = \\left( Φ_{\\text{int}} \\cdot Φ_{\\text{diff}} \\cdot Φ_{\\text{rec}} \\cdot Φ_{\\text{temp}} \\cdot Φ_{\\text{cause}} \\right)^{1/5}"
            }
          </MathDisplay>

          <h3 className="text-lg font-semibold text-black/90 pt-2">Component Definitions</h3>

          <div className="flex flex-col gap-6">
            <div>
              <p className="leading-relaxed">
                <strong>1. Integration (Φ_int): Information <a href="https://en.wikipedia.org/wiki/Irreducibility_(mathematics)" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">Irreducibility</a></strong>
              </p>
              <p className="leading-relaxed text-black/70 italic">
                <strong>Theoretical Basis:</strong> Derived from{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Integrated_information_theory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black underline"
                >
                  Integrated Information Theory (IIT 3.0)
                </a>{" "}
                axioms regarding minimum information partition.
              </p>
              <p className="leading-relaxed text-black/70 italic">
                <strong>Formalism:</strong> Φ_int quantifies the difference between the whole system
                state and the union of its partitioned parts.
              </p>
              <MathDisplay>
                {"Φ_{\\text{int}}(S) = \\min_{P} \\left[ D_{KL}(Σ; \\bigcup Σ^i) \\right]"}
              </MathDisplay>
              <p className="leading-relaxed text-black/70 italic">
                *(Where <a href="https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">D_KL</a> is the Kullback-Leibler divergence and P is the Minimum Information
                Partition).*
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                <strong>2. Recursion (Φ_rec): Self-Referential Mapping</strong>
              </p>
              <p className="leading-relaxed text-black/70 italic">
                <strong>Theoretical Basis:</strong> Aligned with{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Category_theory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black underline"
                >
                  Category Theory
                </a>{" "}
                (
                <a
                  href="https://en.wikipedia.org/wiki/Endomorphism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black underline"
                >
                  Endomorphisms
                </a>
                ) and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/80 hover:text-black underline"
                >
                  Hofstadter&apos;s Strange Loops
                </a>
                .
              </p>
              <p className="leading-relaxed text-black/70 italic">
                <strong>Formalism:</strong> Recursion is defined as an <strong><a href="https://en.wikipedia.org/wiki/Endomorphism" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">Endomorphism</a></strong>{" "}
                φ, where the system maps its current state space onto a subset of itself (a model).
              </p>
              <MathDisplay>{"Φ_{\\text{rec}}(S) = I(S; φ(S))"}</MathDisplay>
              <p className="leading-relaxed text-black/70 italic">
                *(The degree to which the internal model structurally preserves the external
                relations).*
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                <strong>3. Causal Closure (Φ_cause): Interventional Power</strong>
              </p>
              <p className="leading-relaxed text-black/70 italic">
                <strong>Theoretical Basis:</strong> Derived from{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Causal_inference"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Judea Pearl's Causal Calculus
                </a>{" "}
                (The Do-Operator).
              </p>
              <p className="leading-relaxed text-black/70 italic">
                <strong>Formalism:</strong> The capacity of the system to dictate its future state
                independent of environmental conditioning.
              </p>
              <MathDisplay>{"Φ_{\\text{cause}}(S) = I(Σ_t; \\text{do}(Σ_{t+1}))"}</MathDisplay>
              <p className="leading-relaxed text-black/70 italic">
                *(Where 'do' represents an intervention, ensuring the correlation is causal, not
                merely statistical).*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ontological Thresholds */}
      <section id="4-ontological-thresholds" className="flex flex-col gap-6">
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
            Systems capable of resolving <a href="https://en.wikipedia.org/wiki/Unitarity_(physics)" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">unitary symmetry</a> (the balance of quantum possibilities) into a definite <a href="https://en.wikipedia.org/wiki/Ontology" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">ontological</a> registration
            (making reality definite through conscious experience). This threshold enables the operational definition{" "}
            <a
              href="/logic#phi-operationalization"
              className="text-black/80 hover:text-black underline"
            >
              *R = C ⊛ O*
            </a>
            .
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
      <section
        id="5-relationship-to-physics-the-consistency-filter"
        className="flex flex-col gap-6"
      >
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          5. Relationship to Physics (Conservation of Information)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <h3 className="text-xl font-semibold text-black/90 pt-2">
            Conservation of Information (Unitarity Check)
          </h3>

          <p className="leading-relaxed">
            A key requirement of quantum mechanics is{" "}
            <a
              href="https://en.wikipedia.org/wiki/Unitarity_(physics)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black underline"
            >
              Unitarity
            </a>{" "}
            (the principle that probabilities must always sum to 1). Holos preserves this by defining{" "}
            <a href="/logic#axioms" className="text-black/80 hover:text-black underline">
              Manifestation
            </a>{" "}
            as a <strong>Selection Operator</strong> (choosing one path among many), not a Destruction Operator.
          </p>

          <ul className="flex flex-col gap-3 pl-4">
            <li className="leading-relaxed">
              <strong>In Standard Collapse:</strong> Unobserved branches vanish (Unitarity is broken
              or hidden).
            </li>
            <li className="leading-relaxed">
              <strong>In Holos:</strong> Unobserved branches remain in{" "}
              <MathInline>{"C"}</MathInline> (Creation) as valid but un-manifested structures (potential histories). See
              the{" "}
              <a
                href="/logic#phi-operationalization"
                className="text-black/80 hover:text-black underline"
              >
                operational definition *R = C ⊛ O*
              </a>
              .
            </li>
          </ul>

          <p className="leading-relaxed">
            <strong>The Operator:</strong> <MathInline>{"M"}</MathInline> acts as a weighting
            function <MathInline>{"w_i"}</MathInline> that highlights specific branches for the
            observer without deleting the others from the global{" "}
            <a
              href="https://en.wikipedia.org/wiki/Hilbert_space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black underline"
            >
              Hilbert space
            </a>{" "}
            (the mathematical space representing all possible quantum states).
          </p>

          <MathDisplay>{"\\sum_i w_i = 1"}</MathDisplay>

          <p className="leading-relaxed">
            The &quot;rejected&quot; histories still exist in the Creation substrate (
            <MathInline>{"C"}</MathInline>), ensuring that the global system remains Unitary (conserving all information) even if
            the experienced reality (<MathInline>{"R"}</MathInline>) is singular.
          </p>

          <p className="leading-relaxed">
            <MathInline>{"Φ"}</MathInline> does not replace the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black underline"
            >
              Schrödinger Equation
            </a>
            , nor does it override the probabilistic nature of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Quantum_mechanics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black underline"
            >
              Quantum Mechanics
            </a>
            . Instead, it introduces a <strong>Manifestation Constraint</strong> that preserves
            unitarity while enabling <a href="https://en.wikipedia.org/wiki/Ontology" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline">ontological</a> registration.
          </p>
        </div>
      </section>
    </div>
  );
}
