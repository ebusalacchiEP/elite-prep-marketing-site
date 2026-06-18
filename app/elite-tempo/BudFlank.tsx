"use client";

import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#FFB300";

/* An AirPod flanking the phone in the hands-free section, with gold sonar
   rings around it — the beat/audio radiating into your ears.

   topPct positions the bud's vertical center as a % of the phone height (so it
   tracks across breakpoints); the two buds straddle the Live Activity card.

   Rings: when motion is allowed they expand outward and fade (sound leaving the
   bud). With Reduce Motion on, they DON'T collapse to nothing — each freezes at
   a distinct radius, so they read as static concentric rings (Ladder-style) and
   still render on phones with Reduce Motion enabled. */
export default function BudFlank({
  src,
  side,
  topPct = 50,
}: {
  src: string;
  side: "left" | "right";
  topPct?: number;
}) {
  const reduce = useReducedMotion();
  const isLeft = side === "left";
  const rings = [0, 1, 2, 3];

  return (
    <div
      className={`pointer-events-none absolute z-10 -translate-y-1/2 ${
        isLeft ? "left-0 sm:-left-1" : "right-0 sm:-right-1"
      }`}
      style={{ top: `${topPct}%` }}
      aria-hidden
    >
      <div className="relative grid place-items-center">
        {/* Sonar rings — expanding when motion is on, static concentric when off */}
        {rings.map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: 52,
              height: 52,
              border: `2px solid ${ACCENT}`,
              boxShadow: "0 0 10px rgba(255,179,0,0.45)",
            }}
            initial={false}
            animate={
              reduce
                ? { scale: 0.85 + i * 0.5, opacity: 0.55 - i * 0.12 }
                : { scale: [0.5, 2.4], opacity: [0.85, 0] }
            }
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 3.2, repeat: Infinity, ease: "easeOut", delay: i * 0.8 }
            }
          />
        ))}
        {/* Soft static gold core glow under the bud */}
        <span
          className="absolute rounded-full"
          style={{
            width: 84,
            height: 84,
            background: "radial-gradient(circle, rgba(255,179,0,0.30), transparent 68%)",
            filter: "blur(3px)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="relative w-[58px] sm:w-[72px]"
          style={{ filter: "drop-shadow(0 14px 24px rgba(0,0,0,0.6))" }}
        />
      </div>
    </div>
  );
}
