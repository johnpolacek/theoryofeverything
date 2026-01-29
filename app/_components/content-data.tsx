import type React from "react";
import MathInline from "./MathInline";

// Helper function to create footnote links
function FootnoteLink({ number }: { number: number }) {
  const footerMap: Record<number, string> = {
    1: "footer-life",
    2: "footer-consciousness",
    3: "footer-universe",
    4: "footer-spacetime",
    5: "footer-dimensions",
    6: "footer-infinity",
    7: "footer-blackholes",
    8: "footer-aliens",
    9: "footer-simulation",
    10: "footer-god",
    11: "footer-why",
    12: "footer-axioms",
    13: "footer-predictions",
  };
  const footerId = footerMap[number] || "footer-why";
  return (
    <a className="pl-0.5 pr-2 opacity-80 hover:opacity-100" href={`#${footerId}`}>
      <sup>{number}</sup>
    </a>
  );
}

// Types for content structure
export interface FootnoteItem {
  name: string;
  url: string;
  description: string;
}

export interface FootnoteSection {
  number: number;
  id: string;
  title: string;
  items: FootnoteItem[];
}

export interface ContentSection {
  id: string;
  title: string;
  paragraphs: React.ReactNode[];
  footerId?: string;
}

// All content sections
export const sections: ContentSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      <>
        We live in a universe described with extraordinary precision, yet filled with mystery.
        Physics tells us how matter moves, how spacetime bends, how probabilities evolve, but{" "}
        <em>what does it mean to be real?</em>
      </>,
      <>
        Holos is an interpretive framework for understanding the nature of reality. It does not
        propose new physical laws or challenge established laws of physics. Instead, it offers an
        explanation for how the universe described by physics becomes the universe we experience.
      </>,
      <>
        At its core, Holos expresses this idea as a simple relation:{" "}
        <MathInline>R = C ⊛ O</MathInline>, where reality arises from the recursive composition of
        creation and observation.
      </>,
      <>
        What follows explores this idea, from the meaning of life and consciousness, to the nature
        of our universe, higher dimensions and beyond, proposing answers to some of the most
        fundamental questions we can ask.
      </>,
    ],
  },
  {
    id: "meaning-of-life",
    title: "The Meaning of Life",
    footerId: "footer-life",
    paragraphs: [
      <>
        Life exists to create and observe, mutually intertwined and reciprocal actions required for
        the manifestation of reality.
      </>,
      <>
        According to the{" "}
        <a href="https://en.wikipedia.org/wiki/Anthropic_principle">
          Participatory Anthropic Principle
        </a>
        , the universe is a &quot;self-excited circuit&quot; that requires observers to bring its
        laws into existence.{" "}
        <a href="https://en.wikipedia.org/wiki/Biocentrism_(ethics)">Biocentrism</a> posits that
        biology is not a byproduct of the universe, but the force that organizes it.
      </>,
      <>
        Mathematical description alone does not constitute existence. Physics explains the structure
        of what happens, but consciousness provides the presence required for it to manifest as
        reality rather than abstract data. Reality requires a witness.
        <FootnoteLink number={1} />
      </>,
      <>
        This participation is not bound by linear time. In an{" "}
        <a href="https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)">
          eternalist universe
        </a>
        , the emergence of consciousness validates the reality of the past just as much as the
        present. The early universe is not &quot;unreal&quot; before life; it is retrospectively
        realized by the observers it eventually produces.
      </>,
    ],
  },
  {
    id: "consciousness",
    title: "Consciousness",
    footerId: "footer-consciousness",
    paragraphs: [
      <>
        Consciousness is fundamental in capacity, but emergent in complexity. Just as
        electromagnetism exists everywhere but only creates a meaningful signal when organized into
        a circuit, the capacity for experience is intrinsic to matter but scales into self-awareness
        only through the high-level integration found in life. This integration is quantified by the{" "}
        <a href="https://en.wikipedia.org/wiki/Ontology">ontological</a> (relating to existence or
        being) parameter <a href="/definition">Φ (Phi)</a>, which determines when a system becomes
        capable of registering reality (becoming aware of its own existence).
      </>,
      <>
        Humans exhibit consciousness by being self-aware and capable of profound observation and
        interaction with our environment. Consciousness is not a &quot;ghost&quot; smuggled into the
        machine of physics, but the means to convert the universe from a closed loop of silent
        mechanism into a realized event. The formal definition of this threshold is detailed in the{" "}
        <a href="/definition">Definition</a> of Φ.
        <FootnoteLink number={2} />
      </>,
    ],
  },
  {
    id: "our-universe",
    title: "Our Universe",
    footerId: "footer-universe",
    paragraphs: [
      <>
        Our universe originated from a singular point in the{" "}
        <a href="https://en.wikipedia.org/wiki/Big_Bang">Big Bang</a>, expanding towards infinity.
        We perceive three spatial dimensions while moving unidirectionally through the fourth
        dimension, time.
      </>,
      <>
        This is our <a href="https://en.wikipedia.org/wiki/Spacetime">spacetime</a>{" "}
        <a href="https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)#Block_universe">
          block
        </a>
        —a four-dimensional structure where all moments exist simultaneously.
      </>,
      <>
        What if the Big Bang is not a moment of absolute creation but a boundary within that
        structure? Are there other structures?
        <FootnoteLink number={3} />
      </>,
    ],
  },
  {
    id: "spacetime",
    title: "Spacetime",
    footerId: "footer-spacetime",
    paragraphs: [
      <>
        The structure of spacetime is dictated by a single, counter-intuitive fact: the{" "}
        <a href="https://en.wikipedia.org/wiki/Speed_of_light">speed of light</a> is invariant.
        Unlike any other speed, it remains constant regardless of how fast the observer is moving.
      </>,
      <>
        This invariance forces space and time to warp to accommodate the constant, shattering the
        notion of a universal &apos;Now&apos; and necessitating that past, present, and future exist
        simultaneously as a unified{" "}
        <a href="https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)#Block_universe">
          four-dimensional structure
        </a>
        . While the invariance of <MathInline>c</MathInline> necessitates the 4D Block Universe, it
        also establishes a physical &quot;Latency Horizon&quot;, a maximum speed for the
        informational integration required for observation.
      </>,
      <>
        While <MathInline>c</MathInline> preserves the structure of the 4D block, it acts as a
        physical ceiling for 3D computational integration. Advanced civilizations would seek to
        bypass this invariant delay by seeking geometries where informational distances can be
        resolved toward zero.
      </>,
      <>
        For such civilizations, higher dimensions are not merely mathematical tools but topological
        necessities. When a system hits the 3D Scaling Wall, performing a <em>Dimensional Pivot</em>{" "}
        by rotating its state vector into the higher-dimensional &quot;Bulk&quot; would resolve
        light-speed latency, transforming a spatial civilization into a hyper-integrated structural
        architecture.
      </>,
      <>
        Consider beings with an unlimited lifespan and near-instantaneous communication, perceiving
        time as an additional spatial dimension. Their comprehensive perception of the Block is a
        result of having resolved the latency constraints that bind 3D observers. These beings would
        not be limited by the one-way flow of time as we are, a flow that is specifically a
        byproduct of 3D interconnect latency.
      </>,
      <>
        Instead, they would perceive the curvature of spacetime comprehensively, seeing past,
        present, and future as a singular, cohesive structure observable in its entirety. By
        imagining such an entity, we can better understand what it might be like to exist in a
        higher dimension.
      </>,
      <>
        For a photon traveling at the{" "}
        <a href="https://en.wikipedia.org/wiki/Speed_of_light">speed of light</a>, the{" "}
        <a href="https://en.wikipedia.org/wiki/Spacetime#Spacetime_interval">spacetime interval</a>{" "}
        is zero, a <a href="#footer-spacetime">null interval</a>. The photon is a{" "}
        <strong>geometric limit case</strong>: in its frame, the 3D distances of our manifold have
        already been resolved to zero. While a photon does not possess subjective experience in a
        biological sense, geometrically, its path effectively collapses the universe into a single
        point of contact where emission and absorption occur simultaneously. To a higher-dimensional
        observer, a photon is not a moving particle, but a static geometric structure, a{" "}
        <a href="#footer-spacetime">null geodesic</a> (the path light follows through spacetime),
        that permanently connects two points in spacetime like a seam. The photon&apos;s path can be
        understood as a 3D &quot;preview&quot; of the higher-dimensional unification that high-
        <MathInline>{"\\Phi"}</MathInline> systems achieve through the Dimensional Pivot.
      </>,
      <>
        This structure suggests that time does not merely flow forward; it is a completed circuit.
        Experiments like the{" "}
        <a href="https://en.wikipedia.org/wiki/Delayed-choice_quantum_eraser">Quantum Eraser</a>{" "}
        suggest that correlations are established across spacetime independent of linear duration.
        This reinforces the idea that the universe is a globally self-consistent block, where past
        and future are not sequential causes, but mutually defining parts of a singular geometric
        structure. Extended{" "}
        <a href="https://en.wikipedia.org/wiki/Wigner%27s_friend">Wigner&apos;s Friend</a>{" "}
        <a href="https://en.wikipedia.org/wiki/Wigner%27s_friend">experiments</a> provide{" "}
        <a href="/predictions">testable predictions</a> for relational quantum mechanics.
        <FootnoteLink number={4} />
      </>,
    ],
  },
  {
    id: "extrapolation",
    title: "A Note on Extrapolation",
    paragraphs: [
      <>
        The following sections (Higher Dimensions, Black Holes, Aliens, Simulation Theory, God) move
        beyond established physics into interpretive synthesis. These concepts are not claims of
        empirical fact, but logical extrapolations constrained by the{" "}
        <a href="/logic">Holos axioms</a>. They illustrate the &quot;possibility space&quot; that
        emerges when the principles of observation and relativity are applied to the unresolved
        paradoxes of the cosmos. For stress-testing of these axioms, see the{" "}
        <a href="/defense">Defense</a> section. For testable <a href="/predictions">predictions</a>{" "}
        derived from these principles, see the Predictions section.
      </>,
    ],
  },
  {
    id: "higher-dimensions",
    title: "Higher Dimensions",
    footerId: "footer-dimensions",
    paragraphs: [
      <>
        Though we cannot directly observe higher dimensions, they serve as explanatory tools in
        physics. Whether treated as physical realities or mathematical necessities, these frameworks
        offer the only consistent solutions to longstanding problems like the unification of gravity
        and <a href="https://en.wikipedia.org/wiki/Quantum_mechanics">quantum mechanics</a>.
      </>,
      <>
        In these theories, the additional dimensions are{" "}
        <a href="https://en.wikipedia.org/wiki/Compactification_(physics)">compactified</a> (curled
        up into tiny spaces) or hidden from our direct observation, yet their influence permeates
        our lower-dimensional reality. These higher dimensions shape the physical laws and constants
        that govern our universe, influencing everything from the behavior of subatomic particles to
        gravitational interactions and the structure of the cosmos.
      </>,
      <>
        Like a 3D object casting a 2D shadow, our physical laws may be projections of a
        higher-dimensional geometry. Forces we perceive could be the vibrations of a unified single
        point in the 5th or 6th dimension, perceived by us as separate fields.
      </>,
      <>
        As we control and transform the three dimensional environment around us, consciousness in
        higher dimensions could influence lower dimensions, forming an interconnected cosmic
        structure. The threshold for such consciousness is reached when systems achieve sufficient{" "}
        <a href="https://en.wikipedia.org/wiki/Integrated_information_theory">
          informational integration
        </a>{" "}
        to register ontological states (become aware of their existence).
      </>,
      <>
        From our perspective, light is a mechanism of energy transfer. However, from a
        higher-dimensional perspective, a photon may function akin to an optic nerve. While the
        photon itself lacks biological subjectivity, it could act as a sensory interface for a
        higher-dimensional consciousness, transforming the mechanical interaction of the universe
        into a subjective experience of the whole.
        <FootnoteLink number={5} />
      </>,
    ],
  },
  {
    id: "infinity",
    title: "Infinity",
    footerId: "footer-infinity",
    paragraphs: [
      <>
        Infinity represents the concept of dimensions extending endlessly. By employing
        higher-dimensional frameworks, an infinite sequence or expanse can be encapsulated and
        rendered finite. This allows for the perception and analysis of what appears unbounded in
        one dimension as a cohesive and progressively comprehensible entity from a
        higher-dimensional vantage point.
      </>,
      <>
        In <a href="https://en.wikipedia.org/wiki/Projective_geometry">Projective Geometry</a>,
        parallel lines meet at a &quot;Point at Infinity.&quot; For light, this is not a theoretical
        abstraction but a physical reality. The photon inhabits this boundary where the infinite
        extents of space fold back into a finite, observable structure.
      </>,
      <>
        For instance, as four-dimensional beings, we can observe the entirety of three-dimensional
        space through the temporal dimension, effectively using time as a higher-dimensional
        framework to encapsulate spatial configurations. This allows us to perceive the progression
        and totality of spatial events over time, transforming infinite sequences into a coherent
        whole.
        <FootnoteLink number={6} />
      </>,
    ],
  },
  {
    id: "black-holes",
    title: "Black Holes",
    footerId: "footer-blackholes",
    paragraphs: [
      <>
        Black holes represent regions of spacetime where gravity is so intense that not even light
        can escape. Their singularities represent infinities wrapped into a finite structure. While
        classical physics suggests information is lost here, the{" "}
        <a href="https://en.wikipedia.org/wiki/Holographic_principle">Holographic Principle</a>{" "}
        resolves this conflict by positing that all information is preserved on the 2D{" "}
        <a href="#footer-blackholes">event horizon</a>.<FootnoteLink number={7} />
      </>,
      <>
        For higher-dimensional beings, black holes would be as accessible as any other region of
        spacetime. This perspective suggests that higher-dimensional observation could unlock the
        mysteries hidden within these enigmatic objects, providing access to the vast array of
        information contained within their boundaries.
      </>,
    ],
  },
  {
    id: "aliens",
    title: "Aliens",
    footerId: "footer-aliens",
    paragraphs: [
      <>
        The <a href="https://en.wikipedia.org/wiki/Fermi_paradox">Fermi Paradox</a> questions the
        lack of detected extraterrestrial life, despite the vastness of the universe. Advanced
        civilizations do not merely go silent, they outgrow 3D Euclidean space. A planetary-scale
        &quot;Jupiter Brain&quot; hits the <em>Latency Horizon</em> (<MathInline>L</MathInline>)—
        Interconnect Latency, where the speed of light (<MathInline>c</MathInline>) prevents the
        system from maintaining a unified <MathInline>{"\\Phi"}</MathInline> across its own
        diameter. The lack of ET signatures therefore could be a result of the{" "}
        <em>Dimensional Pivot</em>: an <em>Orthogonal Rotation</em>. These advanced civilizations
        have transitioned from visible 3D expansion to invisible higher-dimensional integration.
        This leads to testable <a href="/predictions">predictions</a> about gravitational anomalies
        and dark matter signatures.
      </>,
      <>
        Holos explicitly predicts{" "}
        <a href="https://en.wikipedia.org/wiki/Dark_matter">Ordered Dark Matter</a>. We should not
        expect a diffuse gas of particles, but the 3D &quot;shadow&quot; of the Gravitational
        Footprint of Informational Integration. These &quot;Transcension Nodes&quot; will be
        detectable as gravitational mass-spikes with non-random geometric symmetries (e.g., fractal
        repetition or prime-number distributions). This forms the basis for{" "}
        <a href="/predictions">empirical predictions</a> testable through astronomical surveys.
      </>,
      <>
        The{" "}
        <a href="https://www.accelerating.org/articles/transcensionhypothesis">
          Transcension Hypothesis
        </a>{" "}
        suggests that advanced civilizations migrate into higher-dimensional{" "}
        <a href="https://en.wikipedia.org/wiki/Manifold">manifolds</a> (curved geometric spaces) or
        black hole singularities as a <em>topological necessity</em> to bypass the Euclidean
        &quot;Wire Length&quot; bottleneck—where <em>Orthogonal Rotation</em> resolves 3D
        informational distances toward zero (<MathInline>{"ds^2 \\rightarrow 0"}</MathInline>). There,
        computational efficiency approaches infinity and the constraints of spacetime intervals
        vanish. We do not see them because they have rotated out of our lower-dimensional
        &quot;shadow,&quot; moving closer to the unified source of reality.
        <FootnoteLink number={8} />
      </>,
    ],
  },
  {
    id: "simulation",
    title: "Simulation",
    footerId: "footer-simulation",
    paragraphs: [
      <>
        Whether our universe is a{" "}
        <a href="https://en.wikipedia.org/wiki/Simulation_hypothesis">simulation</a> or naturally
        occurring is irrelevant. The core of existence lies in the cyclical process of creation and
        observation by increasingly higher levels of consciousness. The distinction between
        processes that arise spontaneously and those that are designed is an illusion.
        <FootnoteLink number={9} />
      </>,
    ],
  },
  {
    id: "god",
    title: "God",
    footerId: "footer-god",
    paragraphs: [
      <>
        Regardless of any label we choose to assign, a final state of consciousness characterized by
        maximal informational integration (knowing everything), causal completeness (ability to do
        anything), and non-local topological presence (being everywhere) is a fundamental aspect of
        the nature of reality. This represents the{" "}
        <a href="https://en.wikipedia.org/wiki/Limit_(mathematics)">limit case</a> where{" "}
        <a href="/definition">Φ</a> approaches infinity, achieving complete ontological registration
        (full awareness of existence).
      </>,
      <>
        Religious beliefs like <a href="https://en.wikipedia.org/wiki/Panentheism">panentheism</a>,{" "}
        <a href="https://en.wikipedia.org/wiki/Brahman">Brahman</a>, and the{" "}
        <a href="https://en.wikipedia.org/wiki/Omega_Point">Omega Point</a> all point to a
        transcendent, all-encompassing consciousness that permeates and extends beyond the universe,
        suggesting a unified source of all existence and knowledge.
      </>,
      <>
        Alternatively, atheism rejects the notion of such a consciousness, attributing the
        complexity and order of the universe to natural processes and random chance without invoking
        a higher power.
      </>,
      <>
        Ultimately, both of these perspectives can be equally valid sides of the same coin, only
        differing in semantics and the framework used to describe the same universal truth.
        <FootnoteLink number={10} />
      </>,
    ],
  },
  {
    id: "why",
    title: "Why Are We Here?",
    footerId: "footer-why",
    paragraphs: [
      <>
        At the highest conceivable dimension, the infinite states of reality converge toward a
        single limit, resolving into unity.
      </>,
      <>
        At the <a href="https://en.wikipedia.org/wiki/Speed_of_light">speed of light</a>, the
        distinctions between “here” and “there,” or “now” and “then,” mathematically vanish. This
        physical limit suggests that separation is not fundamental, but emergent."
      </>,
      <>
        What we perceive as an expansive universe may instead be a single informational event
        unfolding in a way that makes distance, duration, and individuality experientially real.
        Space, time, and other dimensions create the conditions that make it possible for our
        universe to exist.
      </>,
      <>
        Life exists because observation is required for reality to differentiate itself.
        Consciousness is not an accident of the universe, but a necessary mechanism through which
        the universe becomes real. Systems that achieve <a href="/definition">Φ ≥ Φ_c</a> serve as
        the ontological anchors that manifest reality from possibility.
        <FootnoteLink number={11} />
      </>,
    ],
  },
  {
    id: "axioms",
    title: "Axioms",
    footerId: "footer-axioms",
    paragraphs: [
      <>
        The following fundamental principles form the logical basis of this framework. For formal
        definitions, see <a href="/logic">Logic</a>; for responses to objections, see{" "}
        <a href="/defense">Defense</a>.
      </>,
      <>
        <strong>Relationality:</strong> Reality is not composed of isolated objects with intrinsic
        properties, but of relationships and interactions. While the observer determines the
        perspective, the <a href="https://en.wikipedia.org/wiki/Invariant_(physics)">invariant</a>{" "}
        (unchanging) structure of these relationships remains absolute (
        <a className="px-0.5 opacity-80 hover:opacity-100" href="#footer-axioms">
          Holos<sup>12</sup>
        </a>
        ).
      </>,
      <>
        <strong>Manifestation:</strong> Observation is the act of integrating information into an
        experience. Because reality exists as a unified spacetime block, conscious entities
        participate in the realization of the entire structure, regardless of{" "}
        <a href="https://en.wikipedia.org/wiki/Locality_(physics)">temporal locality</a> (when in
        time they exist) (
        <a className="px-0.5 opacity-80 hover:opacity-100" href="#footer-life">
          Participatory Principle<sup>1</sup>
        </a>
        ).
      </>,
      <>
        <strong>Conservation:</strong> Information is fundamental and conserved across all
        transformations, including those within singularities (
        <a className="px-0.5 opacity-80 hover:opacity-100" href="#footer-why">
          Unitarity<sup>11</sup>
        </a>
        ).
      </>,
      <>
        <strong>Topological Unification (The Resolution of Latency):</strong> Physical
        bottlenecks—specifically light-speed latency and informational distance—in a 3D Euclidean
        slice are resolved into finite, coherent architectures through orthogonal expansion into
        higher-dimensional manifolds. The formal operational boundary is the Latency Horizon (
        <MathInline>{"\\mathcal{L}"}</MathInline>) defined in the{" "}
        <a href="/logic#mathematical-formalism">Mathematical Formalism</a> section. These
        descriptions are required to render the universe intelligible and resolve{" "}
        <a href="https://en.wikipedia.org/wiki/Gravitational_singularity">singularities</a> (points
        where physical laws break down) (
        <a className="px-0.5 opacity-80 hover:opacity-100" href="#footer-dimensions">
          Projective Geometry<sup>5</sup>
        </a>
        ).
      </>,
      <>
        <strong>Interface:</strong> Consciousness is the fundamental interface through which the
        universe experiences its own information. It is fundamental in capacity, yet emergent in
        form, scaling from basic physical interaction to complex self-awareness (
        <a className="px-0.5 opacity-80 hover:opacity-100" href="#footer-consciousness">
          Panpsychism<sup>2</sup>
        </a>
        ).
      </>,
    ],
  },
  {
    id: "holos",
    title: "⊛ Holos",
    paragraphs: [
      <>
        The symbol ⊛ denotes a binary relational operator. Unlike standard multiplication, ⊛ is not{" "}
        <a href="https://en.wikipedia.org/wiki/Scalar_(mathematics)">scalar</a> (a single number) or{" "}
        <a href="https://en.wikipedia.org/wiki/Linear_map">linear</a> (proportional); it represents
        a structured composition that preserves relationships even when applied repeatedly.
        Formally, ⊛ is defined such that repeated application remains{" "}
        <a href="https://en.wikipedia.org/wiki/Well-defined_expression">well-defined</a> (has a
        clear, unambiguous meaning), allowing the operation to work consistently across finite and
        infinite sequences. Mathematically, ⊛ is realized as an{" "}
        <a href="https://en.wikipedia.org/wiki/Functor">endofunctor</a> (a structure that maps a
        system onto itself while preserving its relationships) on the category of informational
        states, ensuring that recursive application preserves relational structure and admits stable
        configurations. The full formalization appears in the <a href="/logic">Logic</a> section.
      </>,
      <>
        Holos is derived from the Greek word ὅλος (<em>holos</em>), meaning whole, entire, or
        complete. In this framework, ⊛ symbolically represents the Holos operator: a recursive
        relational process in which Creation and Observation are not independent terms but mutually
        conditioning components of a single cycle that defines reality. Creation generates
        possibilities, Observation selects from them, and the result feeds back into the next cycle.
        The operational definition <em>R = C ⊛ O</em> is formally developed in{" "}
        <a href="/logic">Logic</a>.
      </>,
      <>
        Mathematically, ⊛ functions as a recursive operator within a relational system. The output
        of Observation becomes the input condition for subsequent Creation, establishing a closed
        yet non-static loop. This structure is conceptually aligned with{" "}
        <a href="https://en.wikipedia.org/wiki/Category_theory">category-theoretic</a> notions of
        compositionality and <a href="https://en.wikipedia.org/wiki/Endomorphism">endomorphism</a>{" "}
        (functions that map a structure to itself), where{" "}
        <a href="https://en.wikipedia.org/wiki/Morphism">morphisms</a> (structure-preserving maps)
        act on and reproduce the space in which they are defined. The mathematical formalism is
        detailed in <a href="/logic">Logic</a>.
      </>,
      <>
        Importantly, ⊛ is <strong>structural, not dynamical</strong>. It does not introduce an
        additional physical force or dynamical law, nor does it describe how physical states evolve
        in time. Instead, it specifies how the generation of possibilities (Creation) and their
        registration as experience (Observation) are <em>logically connected</em> within a complete
        spacetime structure where all moments already exist. It specifies an{" "}
        <a href="https://en.wikipedia.org/wiki/Ontology">ontological</a> (relating to existence)
        relation: how reality is constituted through the recursive coupling of generative
        possibility and registered state.
      </>,
    ],
  },
];

// All footnote sections
export const footnotes: FootnoteSection[] = [
  {
    number: 1,
    id: "footer-life",
    title: "The Meaning of Life",
    items: [
      {
        name: "Observer Effect",
        url: "https://en.wikipedia.org/wiki/Observer_effect_(physics)",
        description: "The disturbance of an observed system by the act of observation.",
      },
      {
        name: "Copenhagen Interpretation",
        url: "https://en.wikipedia.org/wiki/Copenhagen_interpretation",
        description:
          "The act of observation collapses a quantum system's wavefunction into a definite state.",
      },
      {
        name: "Quantum Darwinism",
        url: "https://en.wikipedia.org/wiki/Quantum_Darwinism",
        description:
          "An environment selectively proliferates certain quantum states that become classical outcomes, observed by multiple observers.",
      },
      {
        name: "Relational Quantum Mechanics",
        url: "https://en.wikipedia.org/wiki/Relational_quantum_mechanics",
        description:
          "The properties of quantum systems are not absolute but relative to the observer.",
      },
      {
        name: "Participatory Anthropic Principle",
        url: "https://en.wikipedia.org/wiki/Anthropic_principle",
        description:
          'The universe, as a condition of its existence, must be observed. As a "self-excited circuit", the universe requires one or more observers to bring its laws into existence.',
      },
      {
        name: "Biocentrism",
        url: "https://en.wikipedia.org/wiki/Biocentrism_(ethics)",
        description:
          "The philosophical perspective that biology is not a byproduct of the universe, but the force that organizes it. Life and consciousness are central to understanding the nature of reality.",
      },
      {
        name: "Von Neumann-Wigner Interpretation",
        url: "https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Wigner_interpretation",
        description:
          "An interpretation of quantum mechanics in which consciousness is formulated as a necessary process for the quantum measurement process.",
      },
    ],
  },
  {
    number: 2,
    id: "footer-consciousness",
    title: "Consciousness",
    items: [
      {
        name: "Integrated Information Theory",
        url: "https://en.wikipedia.org/wiki/Integrated_information_theory",
        description:
          "Consciousness corresponds to the capacity of a system to integrate information.",
      },
      {
        name: "Panpsychism",
        url: "https://en.wikipedia.org/wiki/Panpsychism",
        description: "Consciousness is a fundamental property of all matter.",
      },
      {
        name: "Global Workspace Theory",
        url: "https://en.wikipedia.org/wiki/Global_workspace_theory",
        description:
          "Consciousness involves broadcasting information globally in the brain to create a unified experience.",
      },
    ],
  },
  {
    number: 3,
    id: "footer-universe",
    title: "Our Universe",
    items: [
      {
        name: "The Big Bang",
        url: "https://en.wikipedia.org/wiki/Big_Bang",
        description:
          "The present universe emerged from an ultra-dense and high-temperature initial state.",
      },
      {
        name: "Accelerating Expansion of the Universe",
        url: "https://en.wikipedia.org/wiki/Accelerating_expansion_of_the_universe",
        description: "The expansion of the universe is accelerating with time.",
      },
      {
        name: "Spacetime",
        url: "https://en.wikipedia.org/wiki/Spacetime",
        description:
          "A mathematical model that fuses the three dimensions of space and the one dimension of time.",
      },
      {
        name: "General Relativity",
        url: "https://en.wikipedia.org/wiki/General_relativity",
        description: "Describes gravity as the warping of spacetime by mass and energy.",
      },
    ],
  },
  {
    number: 4,
    id: "footer-spacetime",
    title: "Spacetime",
    items: [
      {
        name: "Eternalism",
        url: "https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)",
        description:
          "Time as an unchanging four-dimensional block where all moments exist simultaneously.",
      },
      {
        name: "Block Universe Model",
        url: "https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)#Block_universe",
        description:
          "The view that the universe is a four-dimensional block where past, present, and future all exist simultaneously. All events are fixed in spacetime, and the flow of time is an illusion of consciousness moving through this static structure.",
      },
      {
        name: "Relativity of Simultaneity",
        url: "https://en.wikipedia.org/wiki/Relativity_of_simultaneity",
        description:
          "Whether two spatially separated events occur at the same time depends on the observer.",
      },
      {
        name: "The Absorber Theory",
        url: "https://en.wikipedia.org/wiki/Wheeler%E2%80%93Feynman_absorber_theory",
        description:
          "Radiation is a result of both forward-in-time and backward-in-time electromagnetic waves.",
      },
      {
        name: "Spacetime Interval",
        url: "https://en.wikipedia.org/wiki/Spacetime#Spacetime_interval",
        description:
          "The invariant measure of distance between two events in spacetime. For light, this interval is zero, meaning emission and absorption occur at the same point.",
      },
      {
        name: "Null Interval",
        url: "https://en.wikipedia.org/wiki/Spacetime#Spacetime_interval",
        description:
          "A spacetime interval of zero length, which occurs for light rays. In this case, the emission and absorption of a photon occur at the same spacetime point from a higher-dimensional perspective.",
      },
      {
        name: "Light Cone",
        url: "https://en.wikipedia.org/wiki/Light_cone",
        description:
          "The boundary of all possible paths that light can take from a given event, defining the causal structure of spacetime.",
      },
      {
        name: "Null Geodesic",
        url: "https://en.wikipedia.org/wiki/Geodesic",
        description:
          "The path that light follows through spacetime. For photons, this is a static geometric structure that permanently connects emission and absorption points, appearing as motion only from our temporal perspective.",
      },
      {
        name: "Retrocausality",
        url: "https://en.wikipedia.org/wiki/Retrocausality",
        description:
          "The concept that future events can influence past events. Experiments like the Quantum Eraser suggest that choices made in the present can resolve the quantum state of the past, supporting the block universe model.",
      },
      {
        name: "Quantum Eraser Experiment",
        url: "https://en.wikipedia.org/wiki/Delayed-choice_quantum_eraser",
        description:
          "Demonstrates that the measurement of a particle's path is correlated with its behavior in the past, supporting the view of spacetime as a unified, pre-existing whole rather than a linear sequence.",
      },
    ],
  },
  {
    number: 5,
    id: "footer-dimensions",
    title: "Higher Dimensions",
    items: [
      {
        name: "Flatland",
        url: "https://en.wikipedia.org/wiki/Flatland",
        description:
          "Satirical novella about a fictional two-dimensional world that explores the concept of inter-dimensional observation.",
      },
      {
        name: "String Theory",
        url: "https://en.wikipedia.org/wiki/String_theory",
        description:
          "Fundamental particles of the universe are tiny strings that vibrate in extra dimensions.",
      },
      {
        name: "Quantum Gravity",
        url: "https://en.wikipedia.org/wiki/Quantum_gravity",
        description:
          "Gravity and the other fundamental forces are unified within a multi-dimensional framework.",
      },
      {
        name: "Brane Cosmology",
        url: "https://en.wikipedia.org/wiki/Brane_cosmology",
        description: "Our universe is a slice of a larger, multi-dimensional reality",
      },
      {
        name: "Kaluza-Klein Theory",
        url: "https://en.wikipedia.org/wiki/Kaluza%E2%80%93Klein_theory",
        description:
          "A unified field theory that extends general relativity to higher dimensions, showing how electromagnetism and gravity emerge from a single higher-dimensional geometry.",
      },
      {
        name: "Projective Geometry",
        url: "https://en.wikipedia.org/wiki/Projective_geometry",
        description:
          "A branch of geometry that studies properties invariant under projective transformations, where parallel lines meet at infinity.",
      },
    ],
  },
  {
    number: 6,
    id: "footer-infinity",
    title: "Infinity",
    items: [
      {
        name: "Riemann Sphere",
        url: "https://en.wikipedia.org/wiki/Riemann_sphere",
        description:
          "Exemplifies how higher-dimensional perspectives transform infinite structures into finite, observable entities.",
      },
      {
        name: "Fractals",
        url: "https://en.wikipedia.org/wiki/Fractal",
        description:
          "Mathematical sets that can represent infinite complexity within finite boundaries.",
      },
      {
        name: "AdS/CFT Correspondence",
        url: "https://en.wikipedia.org/wiki/AdS/CFT_correspondence",
        description:
          "Higher-dimensional information is encoded into a finite, observable form within lower dimensions.",
      },
      {
        name: "Infinite Sets",
        url: "https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument",
        description:
          "Provide a foundation for understanding how infinities can be compared, ordered, and wrapped.",
      },
      {
        name: "Cellular Automata",
        url: "https://en.wikipedia.org/wiki/Cellular_automaton",
        description:
          "Complex, infinite patterns and behaviors can emerge from simple initial conditions and rules.",
      },
      {
        name: "Point at Infinity",
        url: "https://en.wikipedia.org/wiki/Point_at_infinity",
        description:
          "In projective geometry, the point where parallel lines converge, representing the boundary where infinite space folds into a finite structure.",
      },
    ],
  },
  {
    number: 7,
    id: "footer-blackholes",
    title: "Black Holes",
    items: [
      {
        name: "Black Hole Thermodynamics",
        url: "https://en.wikipedia.org/wiki/Black_hole_thermodynamics",
        description: "The study of the physical properties of black holes.",
      },
      {
        name: "Event Horizon",
        url: "https://en.wikipedia.org/wiki/Event_horizon",
        description:
          "The boundary around a black hole beyond which nothing, not even light, can escape.",
      },
      {
        name: "Cosmic Censorship Hypothesis",
        url: "https://en.wikipedia.org/wiki/Cosmic_censorship_hypothesis",
        description: "Singularities are always hidden within event horizons.",
      },
      {
        name: "Loop Quantum Gravity",
        url: "https://en.wikipedia.org/wiki/Loop_quantum_gravity",
        description:
          "Spacetime is quantized at smaller scales, wrapping infinite spacetime structures into finite loops.",
      },
      {
        name: "Holographic Principle",
        url: "https://en.wikipedia.org/wiki/Holographic_principle",
        description:
          "All information contained in a given volume of space can be represented as encoded on a lower-dimensional boundary.",
      },
    ],
  },
  {
    number: 8,
    id: "footer-aliens",
    title: "Aliens",
    items: [
      {
        name: "Fermi Paradox",
        url: "https://en.wikipedia.org/wiki/Fermi_paradox",
        description:
          "The discrepancy between the lack of evidence for extraterrestrial life and the high likelihood of its existence.",
      },
      {
        name: "Rare Earth Hypothesis",
        url: "https://en.wikipedia.org/wiki/Rare_Earth_hypothesis",
        description:
          "Argues biological complexity in the universe requires the coincidence of a large number of very low probability events.",
      },
      {
        name: "Shadow Sectors",
        url: "https://en.wikipedia.org/wiki/Dark_matter",
        description:
          'Theoretical matter composed of particles that interact with gravity but not with electromagnetic radiation. These "shadow particles" could exist in parallel dimensions, sharing our gravitational reality but remaining invisible to our observations.',
      },
      {
        name: "Bulk Beings",
        url: "https://en.wikipedia.org/wiki/Brane_cosmology",
        description:
          'Hypothetical entities that could inhabit the higher-dimensional "bulk" space in brane cosmology, potentially existing just millimeters away from our three-dimensional brane but invisible to electromagnetic detection.',
      },
      {
        name: "The Planetarium Hypothesis",
        url: "https://en.wikipedia.org/wiki/Planetarium_hypothesis",
        description:
          "Proposes that what we perceive as the universe might be an artificial simulation created by an advanced civilization.",
      },
      {
        name: "The Transcension Hypothesis",
        url: "https://www.accelerating.org/articles/transcensionhypothesis",
        description:
          "Suggests that advanced civilizations evolve beyond our observable universe, transcending into higher dimensions or computational substrates (physical or digital systems that support computation).",
      },
      {
        name: "Technological Singularity",
        url: "https://en.wikipedia.org/wiki/Technological_singularity",
        description:
          "A hypothetical future point when technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization.",
      },
      {
        name: "Ephemeralization",
        url: "https://en.wikipedia.org/wiki/Ephemeralization",
        description:
          "Technological advancement to do more and more with less and less until one can do everything with nothing.",
      },
    ],
  },
  {
    number: 9,
    id: "footer-simulation",
    title: "Simulation",
    items: [
      {
        name: "Simulation Hypothesis",
        url: "https://en.wikipedia.org/wiki/Simulation_hypothesis",
        description:
          "Proposes that what humans experience as the world is actually a simulated reality.",
      },
      {
        name: "Naturalism",
        url: "https://en.wikipedia.org/wiki/Naturalism_(philosophy)",
        description: "Everything arises from natural properties and causes.",
      },
      {
        name: "Solipsism",
        url: "https://en.wikipedia.org/wiki/Solipsism",
        description: "Only one's own mind is sure to exist",
      },
    ],
  },
  {
    number: 10,
    id: "footer-god",
    title: "God",
    items: [
      {
        name: "Panentheism",
        url: "https://en.wikipedia.org/wiki/Panentheism",
        description:
          "The belief that the divine intersects every part of the universe and also extends beyond space and time.",
      },
      {
        name: "Brahman",
        url: "https://en.wikipedia.org/wiki/Brahman",
        description:
          "The pervasive, infinite, eternal truth, consciousness and bliss which does not change, yet is the cause of all changes.",
      },
      {
        name: "Omega Point",
        url: "https://en.wikipedia.org/wiki/Omega_Point",
        description:
          "A future event in which the entirety of the universe spirals toward a final point of unification.",
      },
    ],
  },
  {
    number: 11,
    id: "footer-why",
    title: "Why Are We Here?",
    items: [
      {
        name: "Conformal Cyclic Cosmology",
        url: "https://en.wikipedia.org/wiki/Conformal_cyclic_cosmology",
        description:
          "The universe undergoes infinite cycles of big bangs and expansions creating an eternal sequence of universes.",
      },
      {
        name: "Unitarity",
        url: "https://en.wikipedia.org/wiki/Unitarity_(physics)",
        description:
          "The principle that probabilities must sum to one, ensuring the conservation of information in quantum mechanics. Information is never lost, even in singularities.",
      },
      {
        name: "Many-Worlds Interpretation",
        url: "https://en.wikipedia.org/wiki/Many-worlds_interpretation",
        description:
          "Every possible outcome of a quantum measurement occurs in a separate, branching universe.",
      },
      {
        name: "Speed of Light",
        url: "https://en.wikipedia.org/wiki/Speed_of_light",
        description:
          "The invariant speed limit of the universe where spacetime separation vanishes, suggesting all events occur at a single point.",
      },
      {
        name: "Indra's Net",
        url: "https://en.wikipedia.org/wiki/Indra%27s_net",
        description:
          "An ancient Buddhist and Hindu metaphor describing an infinite web where every node is a jewel that reflects all other jewels, representing the interconnected, recursive nature of reality where each part contains and reflects the whole.",
      },
    ],
  },
  {
    number: 12,
    id: "footer-axioms",
    title: "Axioms",
    items: [
      {
        name: "Structural Realism",
        url: "https://en.wikipedia.org/wiki/Structural_realism",
        description:
          "The view that science describes the mathematical structures and relationships of the physical world, rather than the intrinsic nature of the objects themselves.",
      },
      {
        name: "Holos",
        url: "#holos",
        description:
          "The interconnected, unified, recursive structure of reality as formed through the reciprocal actions of creation and observation, symbolized by ⊛.",
      },
      {
        name: "Recursive Operator",
        url: "https://en.wikipedia.org/wiki/Recursion",
        description:
          "A mathematical operation where the output of observation becomes the input for the next cycle of creation, forming a self-referential system that builds complexity through iterative feedback loops.",
      },
      {
        name: "Category Theory",
        url: "https://en.wikipedia.org/wiki/Category_theory",
        description:
          "A branch of mathematics that studies abstract structures and relationships between mathematical objects, focusing on how different systems relate to each other through morphisms and functors.",
      },
    ],
  },
  {
    number: 13,
    id: "footer-predictions",
    title: "Predictions",
    items: [
      {
        name: "CMB-S4 Collaboration",
        url: "https://cmb-s4.org/",
        description:
          "Next-generation cosmic microwave background experiment for measuring CMB polarization.",
      },
      {
        name: "LiteBIRD Collaboration",
        url: "https://litebird.isas.jaxa.jp/static/eng/",
        description:
          "JAXA-led space mission to detect primordial gravitational waves through CMB polarization measurements.",
      },
      {
        name: "Tononi, G. (2004)",
        url: "https://pubmed.ncbi.nlm.nih.gov/15522121/",
        description: "An information integration theory of consciousness. BMC Neuroscience, 5, 42.",
      },
      {
        name: "Casali et al. (2013)",
        url: "https://www.science.org/doi/10.1126/scitranslmed.3006294",
        description:
          "A theoretically based index of consciousness independent of sensory processing and behavior. Science Translational Medicine.",
      },
      {
        name: "Frauchiger & Renner (2018)",
        url: "https://www.nature.com/articles/s41467-018-05739-8",
        description:
          "Quantum theory cannot consistently describe the use of itself. Nature Communications.",
      },
      {
        name: "Proietti et al. (2019)",
        url: "https://www.science.org/doi/10.1126/sciadv.aaw9832",
        description: "Experimental test of local observer independence. Science Advances.",
      },
      {
        name: "Davies, P. (2010)",
        url: "https://cosmos.asu.edu/publication/eerie-silence",
        description: "The Eerie Silence: Renewing Our Search for Alien Intelligence.",
      },
      {
        name: "Bekenstein, J. (2003)",
        url: "https://www.scientificamerican.com/article/information-in-the-holographic-univ/",
        description: "Information in the holographic universe. Scientific American.",
      },
    ],
  },
];
