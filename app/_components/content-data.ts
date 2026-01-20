// Types for content structure
export interface FootnoteItem {
  name: string
  url: string
  description: string
}

export interface FootnoteSection {
  number: number
  id: string
  title: string
  items: FootnoteItem[]
}

export interface ContentSection {
  id: string
  title: string
  paragraphs: string[]
  footerId?: string
}

// Holos intro paragraphs
export const holosIntro = [
  "The symbol ⊛ is a mathematical notation for a binary operation, representing a special form of multiplication, which ensures the combination of elements remains well-defined and consistent, scaling up to an infinite sequence.",
  "**Holos** is derived from the Greek word ὅλος, meaning whole, entire or complete. It is symbolized here by ⊛, representing the interconnected, unified, recursive structure of reality as formed through the reciprocal actions of creation and observation.",
]

// All content sections
export const sections: ContentSection[] = [
  {
    id: "axioms",
    title: "The Holos Axioms",
    footerId: "footer-axioms",
    paragraphs: [
      "The following fundamental principles form the logical basis of this framework:",
      "**Relationality:** Reality is not absolute; it is defined by the relationships and interactions between entities ([Holos](#footer-axioms)[^1]).",
      "**Manifestation:** Observation is not merely mechanical interaction; it is the act of integrating information into an experience. While physical systems may undergo decoherence, reality is only fully realized when observed by a conscious entity ([Participatory Principle](#footer-life)[^2]).",
      "**Conservation:** Information is fundamental and conserved across all transformations, including those within singularities ([Unitarity](#footer-why)[^12]).",
      "**Unification:** Apparent infinities in lower dimensions are resolved into finite structures when observed from higher-dimensional perspectives ([Projective Geometry](#footer-dimensions)[^6]).",
      "**Interface:** Consciousness is not a byproduct of matter, but the fundamental interface through which the universe experiences its own information ([Panpsychism](#footer-consciousness)[^3]).",
    ],
  },
  {
    id: "meaning-of-life",
    title: "The Meaning of Life",
    footerId: "footer-life",
    paragraphs: [
      "Life exists to create and observe, mutually intertwined and reciprocal actions required for the manifestation of reality.",
      'According to the Participatory Anthropic Principle, the universe is a "self-excited circuit" that requires observers to bring its laws into existence. This aligns with Biocentrism, which posits that biology is not a byproduct of the universe, but the force that organizes it.',
      "Standard physics describes the mechanics of reality, but mechanism is only the surface. Physical interaction is the external view of a conscious experience. A measurement without experience is empty data. Reality requires a witness.[^2]",
    ],
  },
  {
    id: "consciousness",
    title: "Consciousness",
    footerId: "footer-consciousness",
    paragraphs: [
      "Rather than a mere byproduct of biological complexity, consciousness is a fundamental quality manifested through life—the ability to experience and shape the world with awareness.",
      "Humans exhibit consciousness by being self-aware and capable of profound observation and interaction with our environment.[^3]",
    ],
  },
  {
    id: "our-universe",
    title: "Our Universe",
    footerId: "footer-universe",
    paragraphs: [
      "Our universe originated from a singular point in the Big Bang, expanding towards infinity. We perceive three spatial dimensions while moving unidirectionally through the fourth dimension, time.",
      "Spacetime is a continuum where the three dimensions of space and time are curved and warped by the presence of mass and energy.[^4]",
    ],
  },
  {
    id: "spacetime",
    title: "Spacetime",
    footerId: "footer-spacetime",
    paragraphs: [
      "Consider beings with an unlimited lifespan and near-instantaneous communication, perceiving time as an additional spatial dimension. These beings would not be limited by the unidirectional flow of time as we are.",
      "Instead, they would perceive the curvature of spacetime comprehensively, seeing past, present, and future as a singular, cohesive structure observable in its entirety. By imagining such an entity, we can better understand what it might be like to exist in a higher dimension.",
      "For a photon traveling at the speed of light, the spacetime interval is zero, a “Null Interval”. While a photon does not possess subjective experience in a biological sense, geometrically, its path effectively collapses the universe into a single point of contact where emission and absorption occur simultaneously. To a higher-dimensional observer, a photon is not a moving particle, but a static geometric structure—a Null Geodesic—that permanently connects two points in spacetime like a seam.",
      "This structure suggests that time does not merely flow forward; it is a completed circuit. Experiments like the Quantum Eraser suggest that correlations are established across spacetime independent of linear duration. This reinforces the idea that the universe is a globally self-consistent block, where past and future are not sequential causes, but mutually defining parts of a singular geometric structure.[^5]",
    ],
  },
  {
    id: "higher-dimensions",
    title: "Higher Dimensions",
    footerId: "footer-dimensions",
    paragraphs: [
      "Though we can't directly observe higher dimensions, mathematical models suggest their existence, offering solutions to longstanding problems in physics.",
      "In these theories, the additional dimensions are compactified or hidden from our direct observation, yet their influence permeates our lower-dimensional reality. These higher dimensions shape the physical laws and constants that govern our universe, influencing everything from the behavior of subatomic particles to gravitational interactions and the structure of the cosmos.",
      "Just as a 3D object casts a 2D shadow, our physical laws may be projections of a higher-dimensional geometry. Forces we perceive could be the vibrations of a unified single point in the 5th or 6th dimension, perceived by us as separate fields.",
      "Just as we control and transform the three dimensional environment around us, consciousness in higher dimensions can exert influence over lower dimensions, forming an intricate and interconnected cosmic structure.",
      "From our perspective, light is a mechanism of energy transfer. However, from a higher-dimensional perspective, a photon may function akin to an optic nerve. While the photon itself lacks biological subjectivity, it acts as the sensory interface for a higher-dimensional consciousness, transforming the mechanical interaction of the universe into a subjective experience of the whole.[^5]",
    ],
  },
  {
    id: "infinity",
    title: "Infinity",
    footerId: "footer-infinity",
    paragraphs: [
      "Infinity represents the concept of dimensions extending endlessly without any finite boundaries. In the context of a given dimension, it is possible to use a higher-dimensional perspective to transform infinite structures into finite, observable entities.",
      "By employing higher-dimensional frameworks, an infinite sequence or expanse can be encapsulated, allowing for the perception and analysis of the entire structure in its entirety. This concept suggests that what appears infinite and unbounded in one dimension can be rendered finite and progressively comprehensible when viewed from a higher-dimensional vantage point.",
      'In Projective Geometry, parallel lines meet at a "Point at Infinity." For light, this is not a theoretical abstraction but a physical reality. The photon inhabits this boundary where the infinite extents of space fold back into a finite, observable structure.',
      "For instance, as four-dimensional beings, we can observe the entirety of three-dimensional space through the temporal dimension, effectively using time as a higher-dimensional framework to encapsulate spatial configurations. This allows us to perceive the progression and totality of spatial events over time, transforming our understanding of infinite sequences of spatial configurations into a coherent and finite whole.[^7]",
    ],
  },
  {
    id: "black-holes",
    title: "Black Holes",
    footerId: "footer-blackholes",
    paragraphs: [
      "Black holes represent regions of spacetime where gravity is so intense that not even light escape, making their interior opaque to us. Their singularities represent infinities wrapped into a finite structure in our universe.",
      "For higher-dimensional beings, black holes would be as accessible as any other region of spacetime, including the ability to navigate through the singularity and perceive the vast array of information contained within. This perspective aligns with the holographic principle, which posits that all the information contained within a black hole can be described on a lower-dimensional boundary, suggesting that higher-dimensional observation could unlock the mysteries hidden within these enigmatic objects.[^8]",
    ],
  },
  {
    id: "aliens",
    title: "Aliens",
    footerId: "footer-aliens",
    paragraphs: [
      "The Fermi Paradox questions the lack of detected extraterrestrial life, despite the vastness of the universe. Within the context of this framework, this silence is likely a geometric constraint rather than a biological one.",
      'If civilizations evolve to understand the higher-dimensional structure of reality, they may inevitably "transcend" by accessing geometries orthogonal to our observable 3D slice. Rather than expanding outwardly across vast physical distances—which is limited by the speed of light—advanced intelligence likely expands inwardly toward higher densities of information.',
      "This Transcension Hypothesis suggests that advanced civilizations migrate into higher-dimensional manifolds or black hole singularities, where computational efficiency approaches infinity and the constraints of spacetime intervals vanish. We do not see them because they have rotated out of our lower-dimensional \"shadow,\" moving closer to the unified source of reality.[^9]",
    ],
  },
  {
    id: "simulation",
    title: "Simulation",
    footerId: "footer-simulation",
    paragraphs: [
      "Whether our universe is a simulation or naturally occurring is irrelevant. The core of existence lies in the cyclical process of creation and observation by increasingly higher levels of consciousness. The distinction between processes that arise spontaneously and those that are designed is an illusion.[^10]",
    ],
  },
  {
    id: "god",
    title: "God",
    footerId: "footer-god",
    paragraphs: [
      "Regardless of any label we choose to assign, an ultimate consciousness empowered with omniscience, omnipotence, and omnipresence is a fundamental aspect of the nature of reality.",
      "Religious beliefs like panentheism, Brahman, and the Omega Point all point to a transcendent, all-encompassing consciousness that permeates and extends beyond the universe, suggesting a unified source of all existence and knowledge.",
      "Alternatively, atheism rejects the notion of such a consciousness, attributing the complexity and order of the universe to natural processes and random chance without invoking a higher power.",
      "Ultimately, both of these perspectives can be equally valid sides of the same coin, only differing in semantics and the framework used to describe the same universal truth.[^11]",
    ],
  },
  {
    id: "why",
    title: "Why Are We Here?",
    footerId: "footer-why",
    paragraphs: [
      "At the highest dimension, all possible realities condense into a point, revealing the cyclic nature of existence, where infinite complexity reduces to a singularity. The most advanced consciousness ultimately creates itself by observing all lower dimensions, over and over again. This recursive structure mirrors the ancient metaphor of Indra's Net—an infinite web where every node is a jewel that reflects all other jewels.",
      'At the speed of light, the separation between "here" and "there," or "then" and "now," vanishes. This physical limit suggests that the ultimate reality is indeed a singular, unified point. The universe is not an expanse of empty space, but a single event of information unfolding into the illusion of distance to allow for the experience of separation and self-observation.',
      "Life exists to create and observe life, perpetuating infinitely.[^12]",
    ],
  },
]

// All footnote sections
export const footnotes: FootnoteSection[] = [
  {
    number: 1,
    id: "footer-axioms",
    title: "The Holos Axioms",
    items: [
      {
        name: "Holos",
        url: "#holos",
        description: "The interconnected, unified, recursive structure of reality as formed through the reciprocal actions of creation and observation, symbolized by ⊛.",
      },
    ],
  },
  {
    number: 2,
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
        description: "The act of observation collapses a quantum system's wavefunction into a definite state.",
      },
      {
        name: "Quantum Darwinism",
        url: "https://en.wikipedia.org/wiki/Quantum_Darwinism",
        description: "An environment selectively proliferates certain quantum states that become classical outcomes, observed by multiple observers.",
      },
      {
        name: "Relational Quantum Mechanics",
        url: "https://en.wikipedia.org/wiki/Relational_quantum_mechanics",
        description: "The properties of quantum systems are not absolute but relative to the observer.",
      },
      {
        name: "Participatory Anthropic Principle",
        url: "https://en.wikipedia.org/wiki/Anthropic_principle",
        description: 'The universe, as a condition of its existence, must be observed. As a "self-excited circuit", the universe requires one or more observers to bring its laws into existence.',
      },
      {
        name: "Biocentrism",
        url: "https://en.wikipedia.org/wiki/Biocentrism_(ethics)",
        description: "The philosophical perspective that biology is not a byproduct of the universe, but the force that organizes it. Life and consciousness are central to understanding the nature of reality.",
      },
      {
        name: "Von Neumann-Wigner Interpretation",
        url: "https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Wigner_interpretation",
        description: "An interpretation of quantum mechanics in which consciousness is formulated as a necessary process for the quantum measurement process.",
      },
    ],
  },
  {
    number: 3,
    id: "footer-consciousness",
    title: "Consciousness",
    items: [
      {
        name: "Integrated Information Theory",
        url: "https://en.wikipedia.org/wiki/Integrated_information_theory",
        description: "Consciousness corresponds to the capacity of a system to integrate information.",
      },
      {
        name: "Panpsychism",
        url: "https://en.wikipedia.org/wiki/Panpsychism",
        description: "Consciousness is a fundamental property of all matter.",
      },
      {
        name: "Global Workspace Theory",
        url: "https://en.wikipedia.org/wiki/Global_workspace_theory",
        description: "Consciousness involves broadcasting information globally in the brain to create a unified experience.",
      },
    ],
  },
  {
    number: 4,
    id: "footer-universe",
    title: "Our Universe",
    items: [
      {
        name: "The Big Bang",
        url: "https://en.wikipedia.org/wiki/Big_Bang",
        description: "The present universe emerged from an ultra-dense and high-temperature initial state.",
      },
      {
        name: "Accelerating Expansion of the Universe",
        url: "https://en.wikipedia.org/wiki/Accelerating_expansion_of_the_universe",
        description: "The expansion of the universe is accelerating with time.",
      },
      {
        name: "Spacetime",
        url: "https://en.wikipedia.org/wiki/Spacetime",
        description: "A mathematical model that fuses the three dimensions of space and the one dimension of time.",
      },
      {
        name: "General Relativity",
        url: "https://en.wikipedia.org/wiki/General_relativity",
        description: "Describes gravity as the warping of spacetime by mass and energy.",
      },
    ],
  },
  {
    number: 5,
    id: "footer-spacetime",
    title: "Spacetime",
    items: [
      {
        name: "Eternalism",
        url: "https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)",
        description: "Time as an unchanging four-dimensional block where all moments exist simultaneously.",
      },
      {
        name: "Block Universe Model",
        url: "https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)#Block_universe",
        description: "The view that the universe is a four-dimensional block where past, present, and future all exist simultaneously. All events are fixed in spacetime, and the flow of time is an illusion of consciousness moving through this static structure.",
      },
      {
        name: "Relativity of Simultaneity",
        url: "https://en.wikipedia.org/wiki/Relativity_of_simultaneity",
        description: "Whether two spatially separated events occur at the same time depends on the observer.",
      },
      {
        name: "The Absorber Theory",
        url: "https://en.wikipedia.org/wiki/Wheeler%E2%80%93Feynman_absorber_theory",
        description: "Radiation is a result of both forward-in-time and backward-in-time electromagnetic waves.",
      },
      {
        name: "Spacetime Interval",
        url: "https://en.wikipedia.org/wiki/Spacetime#Spacetime_interval",
        description: "The invariant measure of distance between two events in spacetime. For light, this interval is zero, meaning emission and absorption occur at the same point.",
      },
      {
        name: "Light Cone",
        url: "https://en.wikipedia.org/wiki/Light_cone",
        description: "The boundary of all possible paths that light can take from a given event, defining the causal structure of spacetime.",
      },
      {
        name: "Null Geodesic",
        url: "https://en.wikipedia.org/wiki/Geodesic",
        description: "The path that light follows through spacetime. For photons, this is a static geometric structure that permanently connects emission and absorption points, appearing as motion only from our temporal perspective.",
      },
      {
        name: "Retrocausality",
        url: "https://en.wikipedia.org/wiki/Retrocausality",
        description: "The concept that future events can influence past events. Experiments like the Quantum Eraser suggest that choices made in the present can resolve the quantum state of the past, supporting the block universe model.",
      },
      {
        name: "Quantum Eraser Experiment",
        url: "https://en.wikipedia.org/wiki/Delayed-choice_quantum_eraser",
        description: "Demonstrates that the measurement of a particle's path is correlated with its behavior in the past, supporting the view of spacetime as a unified, pre-existing whole rather than a linear sequence.",
      },
    ],
  },
  {
    number: 6,
    id: "footer-dimensions",
    title: "Higher Dimensions",
    items: [
      {
        name: "Flatland",
        url: "https://en.wikipedia.org/wiki/Flatland",
        description: "Satirical novella about a fictional two-dimensional world that explores the concept of inter-dimensional observation.",
      },
      {
        name: "String Theory",
        url: "https://en.wikipedia.org/wiki/String_theory",
        description: "Fundamental particles of the universe are tiny strings that vibrate in extra dimensions.",
      },
      {
        name: "Quantum Gravity",
        url: "https://en.wikipedia.org/wiki/Quantum_gravity",
        description: "Gravity and the other fundamental forces are unified within a multi-dimensional framework.",
      },
      {
        name: "Brane Cosmology",
        url: "https://en.wikipedia.org/wiki/Brane_cosmology",
        description: "Our universe is a slice of a larger, multi-dimensional reality",
      },
      {
        name: "Kaluza-Klein Theory",
        url: "https://en.wikipedia.org/wiki/Kaluza%E2%80%93Klein_theory",
        description: "A unified field theory that extends general relativity to higher dimensions, showing how electromagnetism and gravity emerge from a single higher-dimensional geometry.",
      },
      {
        name: "Projective Geometry",
        url: "https://en.wikipedia.org/wiki/Projective_geometry",
        description: "A branch of geometry that studies properties invariant under projective transformations, where parallel lines meet at infinity.",
      },
    ],
  },
  {
    number: 7,
    id: "footer-infinity",
    title: "Infinity",
    items: [
      {
        name: "Riemann Sphere",
        url: "https://en.wikipedia.org/wiki/Riemann_sphere",
        description: "Exemplifies how higher-dimensional perspectives transform infinite structures into finite, observable entities.",
      },
      {
        name: "Fractals",
        url: "https://en.wikipedia.org/wiki/Fractal",
        description: "Mathematical sets that can represent infinite complexity within finite boundaries.",
      },
      {
        name: "AdS/CFT Correspondence",
        url: "https://en.wikipedia.org/wiki/AdS/CFT_correspondence",
        description: "Higher-dimensional information is encoded into a finite, observable form within lower dimensions.",
      },
      {
        name: "Infinite Sets",
        url: "https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument",
        description: "Provide a foundation for understanding how infinities can be compared, ordered, and wrapped.",
      },
      {
        name: "Cellular Automata",
        url: "https://en.wikipedia.org/wiki/Cellular_automaton",
        description: "Complex, infinite patterns and behaviors can emerge from simple initial conditions and rules.",
      },
      {
        name: "Point at Infinity",
        url: "https://en.wikipedia.org/wiki/Point_at_infinity",
        description: "In projective geometry, the point where parallel lines converge, representing the boundary where infinite space folds into a finite structure.",
      },
      {
        name: "Projective Geometry",
        url: "https://en.wikipedia.org/wiki/Projective_geometry",
        description: "A geometric framework where parallel lines meet at infinity, transforming infinite structures into finite, observable forms.",
      },
    ],
  },
  {
    number: 8,
    id: "footer-blackholes",
    title: "Black Holes",
    items: [
      {
        name: "Black Hole Thermodynamics",
        url: "https://en.wikipedia.org/wiki/Black_hole_thermodynamics",
        description: "The study of the physical properties of black holes.",
      },
      {
        name: "Cosmic Censorship Hypothesis",
        url: "https://en.wikipedia.org/wiki/Cosmic_censorship_hypothesis",
        description: "Singularities are always hidden within event horizons.",
      },
      {
        name: "Loop Quantum Gravity",
        url: "https://en.wikipedia.org/wiki/Loop_quantum_gravity",
        description: "Spacetime is quantized at smaller scales, wrapping infinite spacetime structures into finite loops.",
      },
      {
        name: "Holographic Principle",
        url: "https://en.wikipedia.org/wiki/Holographic_principle",
        description: "All information contained in a given volume of space can be represented as encoded on a lower-dimensional boundary.",
      },
    ],
  },
  {
    number: 9,
    id: "footer-aliens",
    title: "Aliens",
    items: [
      {
        name: "Fermi Paradox",
        url: "https://en.wikipedia.org/wiki/Fermi_paradox",
        description: "The discrepancy between the lack of evidence for extraterrestrial life and the high likelihood of its existence.",
      },
      {
        name: "Rare Earth Hypothesis",
        url: "https://en.wikipedia.org/wiki/Rare_Earth_hypothesis",
        description: "Argues biological complexity in the universe requires the coincidence of a large number of very low probability events.",
      },
      {
        name: "Shadow Sectors",
        url: "https://en.wikipedia.org/wiki/Dark_matter",
        description: 'Theoretical matter composed of particles that interact with gravity but not with electromagnetic radiation. These "shadow particles" could exist in parallel dimensions, sharing our gravitational reality but remaining invisible to our observations.',
      },
      {
        name: "Bulk Beings",
        url: "https://en.wikipedia.org/wiki/Brane_cosmology",
        description: 'Hypothetical entities that could inhabit the higher-dimensional "bulk" space in brane cosmology, potentially existing just millimeters away from our three-dimensional brane but invisible to electromagnetic detection.',
      },
      {
        name: "The Planetarium Hypothesis",
        url: "https://en.wikipedia.org/wiki/Planetarium_hypothesis",
        description: "Proposes that what we perceive as the universe might be an artificial simulation created by an advanced civilization.",
      },
      {
        name: "The Transcension Hypothesis",
        url: "https://www.accelerating.org/articles/transcensionhypothesis",
        description: "Suggests that advanced civilizations evolve beyond our observable universe, transcending into higher dimensions or computational substrates.",
      },
      {
        name: "Technological Singularity",
        url: "https://en.wikipedia.org/wiki/Technological_singularity",
        description: "A hypothetical future point when technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization.",
      },
      {
        name: "Ephemeralization",
        url: "https://en.wikipedia.org/wiki/Ephemeralization",
        description: "Technological advancement to do more and more with less and less until one can do everything with nothing.",
      },
    ],
  },
  {
    number: 10,
    id: "footer-simulation",
    title: "Simulation",
    items: [
      {
        name: "Simulation Hypothesis",
        url: "https://en.wikipedia.org/wiki/Simulation_hypothesis",
        description: "Proposes that what humans experience as the world is actually a simulated reality.",
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
    number: 11,
    id: "footer-god",
    title: "God",
    items: [
      {
        name: "Panentheism",
        url: "https://en.wikipedia.org/wiki/Panentheism",
        description: "The belief that the divine intersects every part of the universe and also extends beyond space and time.",
      },
      {
        name: "Brahman",
        url: "https://en.wikipedia.org/wiki/Brahman",
        description: "The pervasive, infinite, eternal truth, consciousness and bliss which does not change, yet is the cause of all changes.",
      },
      {
        name: "Omega Point",
        url: "https://en.wikipedia.org/wiki/Omega_Point",
        description: "A future event in which the entirety of the universe spirals toward a final point of unification.",
      },
    ],
  },
  {
    number: 12,
    id: "footer-why",
    title: "Why Are We Here?",
    items: [
      {
        name: "Conformal Cyclic Cosmology",
        url: "https://en.wikipedia.org/wiki/Conformal_cyclic_cosmology",
        description: "The universe undergoes infinite cycles of big bangs and expansions creating an eternal sequence of universes.",
      },
      {
        name: "Unitarity",
        url: "https://en.wikipedia.org/wiki/Unitarity_(physics)",
        description: "The principle that probabilities must sum to one, ensuring the conservation of information in quantum mechanics. Information is never lost, even in singularities.",
      },
      {
        name: "Many-Worlds Interpretation",
        url: "https://en.wikipedia.org/wiki/Many-worlds_interpretation",
        description: "Every possible outcome of a quantum measurement occurs in a separate, branching universe.",
      },
      {
        name: "Speed of Light",
        url: "https://en.wikipedia.org/wiki/Speed_of_light",
        description: "The invariant speed limit of the universe where spacetime separation vanishes, suggesting all events occur at a single point.",
      },
      {
        name: "Light Cone",
        url: "https://en.wikipedia.org/wiki/Light_cone",
        description: "The boundary defining all causally connected events, where at light speed, past and future collapse into a single point.",
      },
      {
        name: "Indra's Net",
        url: "https://en.wikipedia.org/wiki/Indra%27s_net",
        description: "An ancient Buddhist and Hindu metaphor describing an infinite web where every node is a jewel that reflects all other jewels, representing the interconnected, recursive nature of reality where each part contains and reflects the whole.",
      },
      {
        name: "Holos",
        url: "https://github.com/johnpolacek/theoryofeverything",
        description: "A theory of everything.",
      },
    ],
  },
]
