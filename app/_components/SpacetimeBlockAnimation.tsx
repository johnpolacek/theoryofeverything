"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function SpacetimeBlockAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = svgRef.current;

    // Get elements
    const bigBangPoint = svg.querySelector("#bigbang-point") as SVGCircleElement;
    const bigBangBoundary = svg.querySelector("#bigbang-boundary") as SVGLineElement;
    const blockFront = svg.querySelector("#block-front") as SVGRectElement;
    const blockTop = svg.querySelector("#block-top") as SVGPolygonElement;
    const blockSide = svg.querySelector("#block-side") as SVGPolygonElement;
    const nowSlice = svg.querySelector("#now-slice") as SVGRectElement;
    const worldlines = svg.querySelectorAll(".worldline") as NodeListOf<SVGPathElement>;
    const caption = svg.querySelector("#caption") as SVGTextElement;
    const simultaneityLabel = svg.querySelector("#simultaneity-label") as SVGTextElement;

    // Block dimensions
    const blockStartX = 80;
    const blockEndX = 480;
    const blockWidth = blockEndX - blockStartX;

    // Initial state - everything hidden except the point
    gsap.set(bigBangPoint, { opacity: 1, scale: 1, transformOrigin: "center center" });
    gsap.set(bigBangBoundary, { opacity: 0 });
    gsap.set([blockFront, blockTop, blockSide], { opacity: 0, scaleX: 0, transformOrigin: "left center" });
    gsap.set(nowSlice, { opacity: 0, x: 0 });
    gsap.set(worldlines, { opacity: 0, strokeDashoffset: 400 });
    gsap.set(caption, { opacity: 0 });
    gsap.set(simultaneityLabel, { opacity: 0 });

    // Main timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    });

    // Phase 1: Big Bang point pulses
    tl.add("start")
      .to(bigBangPoint, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(bigBangPoint, {
        scale: 1,
        duration: 0.2,
      });

    // Phase 2: Extrude the spacetime block
    tl.add("extrude")
      .to(
        [blockFront, blockTop, blockSide],
        {
          opacity: 1,
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          stagger: 0.05,
        },
        "extrude"
      );

    // Phase 3: Worldlines appear and draw themselves
    tl.add("worldlines", "-=1.5");
    worldlines.forEach((line, i) => {
      const length = line.getTotalLength ? line.getTotalLength() : 400;
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

      tl.to(
        line,
        {
          opacity: 0.6,
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power1.out",
        },
        `worldlines+=${i * 0.1}`
      );
    });

    // Phase 4: Now slice appears and moves through the block
    tl.add("nowslice", "-=0.5")
      .to(
        nowSlice,
        {
          opacity: 0.4,
          duration: 0.3,
        },
        "nowslice"
      )
      .to(
        nowSlice,
        {
          x: blockWidth - 20,
          duration: 2.5,
          ease: "linear",
        },
        "nowslice+=0.3"
      );

    // Phase 5: Transform Big Bang point to boundary line
    tl.add("boundary", "-=1")
      .to(
        bigBangPoint,
        {
          opacity: 0,
          duration: 0.4,
        },
        "boundary"
      )
      .to(
        bigBangBoundary,
        {
          opacity: 1,
          duration: 0.4,
        },
        "boundary+=0.2"
      );

    // Phase 6: Show caption
    tl.to(
      caption,
      {
        opacity: 0.7,
        duration: 0.5,
      },
      "-=0.5"
    );

    // Phase 7: Simultaneity - everything becomes static and visible
    tl.add("simultaneity")
      .to(
        nowSlice,
        {
          opacity: 0.15,
          duration: 0.5,
        },
        "simultaneity"
      )
      .to(
        worldlines,
        {
          opacity: 0.8,
          duration: 0.5,
        },
        "simultaneity"
      )
      .to(
        simultaneityLabel,
        {
          opacity: 0.6,
          duration: 0.5,
        },
        "simultaneity+=0.3"
      );

    // Hold the complete state
    tl.to({}, { duration: 3 });

    // Reset
    tl.add("reset")
      .to(
        [blockFront, blockTop, blockSide, worldlines, nowSlice, bigBangBoundary, caption, simultaneityLabel],
        {
          opacity: 0,
          duration: 0.5,
        },
        "reset"
      )
      .set(bigBangPoint, { opacity: 1, scale: 1 })
      .set([blockFront, blockTop, blockSide], { scaleX: 0 })
      .set(nowSlice, { x: 0 })
      .set(worldlines, { strokeDashoffset: 400 });

    return () => {
      tl.kill();
    };
  }, []);

  // Block geometry for 3D perspective effect
  const blockLeft = 80;
  const blockRight = 480;
  const blockTop = 100;
  const blockBottom = 200;
  const depth = 40;

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
          The Spacetime Block: An Eternalist View
        </text>

        {/* 3D Block - Back/Top face */}
        <polygon
          id="block-top"
          points={`${blockLeft},${blockTop} ${blockLeft + depth},${blockTop - depth} ${blockRight + depth},${blockTop - depth} ${blockRight},${blockTop}`}
          fill="none"
          stroke="rgba(100, 100, 100, 0.4)"
          strokeWidth="1"
          opacity="0"
        />

        {/* 3D Block - Side face */}
        <polygon
          id="block-side"
          points={`${blockRight},${blockTop} ${blockRight + depth},${blockTop - depth} ${blockRight + depth},${blockBottom - depth} ${blockRight},${blockBottom}`}
          fill="none"
          stroke="rgba(100, 100, 100, 0.4)"
          strokeWidth="1"
          opacity="0"
        />

        {/* 3D Block - Front face */}
        <rect
          id="block-front"
          x={blockLeft}
          y={blockTop}
          width={blockRight - blockLeft}
          height={blockBottom - blockTop}
          fill="none"
          stroke="rgba(60, 60, 60, 0.6)"
          strokeWidth="1.5"
          opacity="0"
        />

        {/* Worldlines inside the block */}
        <path
          className="worldline"
          d={`M${blockLeft + 5},${blockTop + 20} Q${blockLeft + 150},${blockTop + 40} ${blockRight - 20},${blockTop + 25}`}
          fill="none"
          stroke="rgba(80, 80, 80, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0"
        />
        <path
          className="worldline"
          d={`M${blockLeft + 5},${blockTop + 50} Q${blockLeft + 200},${blockTop + 45} ${blockRight - 30},${blockTop + 55}`}
          fill="none"
          stroke="rgba(80, 80, 80, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0"
        />
        <path
          className="worldline"
          d={`M${blockLeft + 5},${blockTop + 50} Q${blockLeft + 180},${blockTop + 70} ${blockRight - 25},${blockTop + 80}`}
          fill="none"
          stroke="rgba(80, 80, 80, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0"
        />
        <path
          className="worldline"
          d={`M${blockLeft + 5},${blockTop + 50} Q${blockLeft + 120},${blockTop + 60} ${blockRight - 40},${blockBottom - 20}`}
          fill="none"
          stroke="rgba(80, 80, 80, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0"
        />

        {/* "Now" slice - vertical plane moving through the block */}
        <rect
          id="now-slice"
          x={blockLeft + 10}
          y={blockTop - 5}
          width="3"
          height={blockBottom - blockTop + 10}
          fill="rgba(0, 0, 0, 0.3)"
          opacity="0"
        />

        {/* Big Bang point (initial) */}
        <circle
          id="bigbang-point"
          cx={blockLeft}
          cy={(blockTop + blockBottom) / 2}
          r="6"
          fill="rgba(20, 20, 20, 1)"
          opacity="1"
        />

        {/* Big Bang boundary line (replaces point) */}
        <line
          id="bigbang-boundary"
          x1={blockLeft}
          y1={blockTop}
          x2={blockLeft}
          y2={blockBottom}
          stroke="rgba(30, 30, 30, 1)"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0"
        />

        {/* Labels */}
        <text
          x={blockLeft}
          y={blockBottom + 25}
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.5)"
          fontSize="10"
          fontFamily="serif"
          fontStyle="italic"
        >
          t₀
        </text>
        <text
          x={blockRight}
          y={blockBottom + 25}
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.5)"
          fontSize="10"
          fontFamily="serif"
          fontStyle="italic"
        >
          t → ∞
        </text>

        {/* Time arrow */}
        <line
          x1={blockLeft}
          y1={blockBottom + 40}
          x2={blockRight}
          y2={blockBottom + 40}
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="1"
          markerEnd="url(#arrow)"
        />
        <defs>
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0, 0, 0, 0.2)" />
          </marker>
        </defs>
        <text
          x={(blockLeft + blockRight) / 2}
          y={blockBottom + 55}
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.4)"
          fontSize="9"
          fontFamily="monospace"
        >
          4th Dimension (Time)
        </text>

        {/* Caption */}
        <text
          id="caption"
          x="280"
          y="275"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.6)"
          fontSize="12"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0"
        >
          Big Bang: A Boundary, not a Beginning
        </text>

        {/* Simultaneity label */}
        <text
          id="simultaneity-label"
          x="280"
          y="295"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.5)"
          fontSize="10"
          fontFamily="monospace"
          opacity="0"
        >
          All moments exist simultaneously in the Block Universe
        </text>
      </svg>
    </div>
  );
}
