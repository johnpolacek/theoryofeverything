"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function BlockUniverseAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = svgRef.current;

    // Get elements
    const phiSymbol = svg.querySelector("#phi-observer") as SVGTextElement;
    const phiRing = svg.querySelector("#phi-ring") as SVGCircleElement;
    const solidificationWave = svg.querySelector("#solidification-wave") as SVGLineElement;
    const ghostLines = svg.querySelectorAll(".ghost-line") as NodeListOf<SVGLineElement>;
    const ghostPoints = svg.querySelectorAll(".ghost-point") as NodeListOf<SVGCircleElement>;
    const solidLines = svg.querySelectorAll(".solid-line") as NodeListOf<SVGLineElement>;
    const solidPoints = svg.querySelectorAll(".solid-point") as NodeListOf<SVGCircleElement>;
    const caption = svg.querySelector("#caption") as SVGTextElement;
    const t0Label = svg.querySelector("#t0-label") as SVGTextElement;
    const tnowLabel = svg.querySelector("#tnow-label") as SVGTextElement;

    // Block dimensions
    const blockLeft = 60;
    const blockRight = 500;

    // Initial state
    gsap.set(solidLines, { opacity: 0 });
    gsap.set(solidPoints, { opacity: 0 });
    gsap.set(ghostLines, { opacity: 0.4 });
    gsap.set(ghostPoints, { opacity: 0.3 });
    gsap.set(solidificationWave, { opacity: 0, attr: { x1: blockRight, x2: blockRight } });
    gsap.set(caption, { opacity: 0 });
    gsap.set(phiSymbol, { opacity: 0.6 });
    gsap.set(phiRing, { opacity: 0 });

    // Main timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
    });

    // Phase 1: Initial state - show ghostly past
    tl.to(ghostLines, {
      opacity: 0.5,
      duration: 0.8,
      stagger: 0.05,
    })
      .to(
        ghostPoints,
        {
          opacity: 0.4,
          duration: 0.6,
          stagger: 0.03,
        },
        "-=0.4"
      )
      .to([t0Label, tnowLabel], {
        opacity: 0.6,
        duration: 0.4,
      });

    // Phase 2: Phi observer pulses
    tl.add("observe")
      .to(
        phiSymbol,
        {
          opacity: 1,
          duration: 0.3,
        },
        "observe"
      )
      .to(
        phiRing,
        {
          opacity: 0.8,
          attr: { r: 20 },
          duration: 0.3,
          ease: "power2.out",
        },
        "observe"
      )
      .to(
        phiRing,
        {
          opacity: 0,
          attr: { r: 30 },
          duration: 0.5,
          ease: "power2.out",
        },
        "observe+=0.3"
      );

    // Phase 3: Solidification wave travels backward
    tl.add("solidify")
      .to(
        solidificationWave,
        {
          opacity: 1,
          duration: 0.1,
        },
        "solidify"
      )
      .to(
        solidificationWave,
        {
          attr: { x1: blockLeft, x2: blockLeft },
          duration: 2,
          ease: "power1.inOut",
        },
        "solidify"
      );

    // As wave passes, transform ghost to solid (staggered from right to left)
    const lineCount = ghostLines.length;
    ghostLines.forEach((line, i) => {
      const reverseIndex = lineCount - 1 - i;
      const delay = (reverseIndex / lineCount) * 1.8;

      tl.to(
        line,
        {
          opacity: 0,
          duration: 0.15,
        },
        `solidify+=${delay}`
      );

      tl.to(
        solidLines[i],
        {
          opacity: 1,
          duration: 0.15,
        },
        `solidify+=${delay}`
      );
    });

    const pointCount = ghostPoints.length;
    ghostPoints.forEach((point, i) => {
      const reverseIndex = pointCount - 1 - i;
      const delay = (reverseIndex / pointCount) * 1.8;

      tl.to(
        point,
        {
          opacity: 0,
          duration: 0.1,
        },
        `solidify+=${delay}`
      );

      tl.to(
        solidPoints[i],
        {
          opacity: 1,
          duration: 0.1,
        },
        `solidify+=${delay}`
      );
    });

    // Show caption
    tl.to(
      caption,
      {
        opacity: 0.7,
        duration: 0.5,
      },
      "solidify+=1.5"
    );

    // Hide wave at end
    tl.to(
      solidificationWave,
      {
        opacity: 0,
        duration: 0.3,
      },
      "solidify+=2"
    );

    // Hold the realized state
    tl.to({}, { duration: 2 });

    // Reset for next cycle
    tl.add("reset")
      .to(
        [solidLines, solidPoints, caption],
        {
          opacity: 0,
          duration: 0.5,
        },
        "reset"
      )
      .to(
        phiSymbol,
        {
          opacity: 0.6,
          duration: 0.3,
        },
        "reset"
      )
      .set(solidificationWave, { attr: { x1: blockRight, x2: blockRight } })
      .set(ghostLines, { opacity: 0 })
      .set(ghostPoints, { opacity: 0 });

    return () => {
      tl.kill();
    };
  }, []);

  // Generate ghost/solid line positions
  const linePositions = [];
  const blockLeft = 60;
  const blockRight = 500;
  const blockTop = 120;
  const blockBottom = 180;
  const lineSpacing = 25;

  for (let x = blockLeft + 20; x < blockRight - 60; x += lineSpacing) {
    const height = 15 + Math.random() * 25;
    const y1 = blockTop + 10 + Math.random() * 10;
    const y2 = y1 + height;
    linePositions.push({ x, y1, y2 });
  }

  // Generate ghost/solid point positions
  const pointPositions = [];
  for (let i = 0; i < 30; i++) {
    const x = blockLeft + 30 + Math.random() * (blockRight - blockLeft - 100);
    const y = blockTop + 15 + Math.random() * (blockBottom - blockTop - 30);
    pointPositions.push({ x, y });
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full mt-8 aspect-video rounded-lg border border-black/10 overflow-hidden bg-white"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 560 315"
        className="w-full h-full"
        style={{ display: "block" }}
        aria-hidden="true"
      >
        {/* Title */}
        <text
          x="280"
          y="35"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.7)"
          fontSize="13"
          fontFamily="serif"
          fontStyle="italic"
        >
          Retrospective Realization in the Block Universe
        </text>

        {/* The Spacetime Block - outline */}
        <rect
          x="60"
          y="120"
          width="440"
          height="60"
          fill="none"
          stroke="rgba(0, 0, 0, 0.3)"
          strokeWidth="1.5"
          rx="2"
        />

        {/* Time arrow */}
        <line
          x1="60"
          y1="200"
          x2="500"
          y2="200"
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="1"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0, 0, 0, 0.2)" />
          </marker>
        </defs>

        {/* Ghost lines (dashed - potential past) */}
        {linePositions.map((pos, i) => (
          <line
            key={`ghost-${i}`}
            className="ghost-line"
            x1={pos.x}
            y1={pos.y1}
            x2={pos.x}
            y2={pos.y2}
            stroke="rgba(150, 150, 150, 0.6)"
            strokeWidth="1"
            strokeDasharray="3 2"
            opacity="0"
          />
        ))}

        {/* Ghost points (faint - potential events) */}
        {pointPositions.map((pos, i) => (
          <circle
            key={`ghost-point-${i}`}
            className="ghost-point"
            cx={pos.x}
            cy={pos.y}
            r="2"
            fill="none"
            stroke="rgba(150, 150, 150, 0.5)"
            strokeWidth="1"
            strokeDasharray="1 1"
            opacity="0"
          />
        ))}

        {/* Solid lines (realized past) */}
        {linePositions.map((pos, i) => (
          <line
            key={`solid-${i}`}
            className="solid-line"
            x1={pos.x}
            y1={pos.y1}
            x2={pos.x}
            y2={pos.y2}
            stroke="rgba(30, 30, 30, 1)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0"
          />
        ))}

        {/* Solid points (realized events) */}
        {pointPositions.map((pos, i) => (
          <circle
            key={`solid-point-${i}`}
            className="solid-point"
            cx={pos.x}
            cy={pos.y}
            r="2.5"
            fill="rgba(30, 30, 30, 1)"
            opacity="0"
          />
        ))}

        {/* Solidification wave (travels right to left) */}
        <line
          id="solidification-wave"
          x1="500"
          y1="115"
          x2="500"
          y2="185"
          stroke="rgba(0, 0, 0, 0.8)"
          strokeWidth="2"
          opacity="0"
        />

        {/* Phi observer ring (pulse effect) */}
        <circle
          id="phi-ring"
          cx="520"
          cy="150"
          r="15"
          fill="none"
          stroke="rgba(0, 0, 0, 0.4)"
          strokeWidth="1"
          opacity="0"
        />

        {/* Phi observer symbol */}
        <text
          id="phi-observer"
          x="520"
          y="157"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.8)"
          fontSize="20"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0.6"
        >
          Φ
        </text>

        {/* Time labels */}
        <text
          id="t0-label"
          x="60"
          y="215"
          textAnchor="start"
          fill="rgba(0, 0, 0, 0.5)"
          fontSize="11"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0"
        >
          t₀ (Big Bang)
        </text>
        <text
          id="tnow-label"
          x="500"
          y="215"
          textAnchor="end"
          fill="rgba(0, 0, 0, 0.5)"
          fontSize="11"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0"
        >
          t_now (Observer)
        </text>

        {/* Caption */}
        <text
          id="caption"
          x="280"
          y="260"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.6)"
          fontSize="12"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0"
        >
          Future observation validates past reality
        </text>

        {/* Participatory principle note */}
        <text
          x="280"
          y="285"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.4)"
          fontSize="10"
          fontFamily="monospace"
        >
          Participatory Anthropic Principle
        </text>
      </svg>
    </div>
  );
}
