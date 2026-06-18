"use client";

import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#FFB300";

/* An AirPod flanking the phone in the hands-free section, with gold sonar
   rings expanding out of it — the beat/audio radiating into your ears.
   offsetY scatters the two buds to different heights so the pair feels alive
   rather than mirror-symmetric. Reduce Motion freezes the rings. */
export default function BudFlank({
  src,
  side,
  offsetY = 0,
}: {
  src: string;
  side: "left" | "right";
  offsetY?: number;
}) {
  const reduce = useReducedMotion();
  const isLeft = side === "left";
  const rings = [0, 1, 2, 3];

  return (
    <div
      className={`pointer-events-none absolute z-10 ${
        isLeft ? "left-0 sm:-left-1" : "right-0 sm:-right-1"
      }`}
      style={{ top: `calc(50% + ${offsetY}px)`, transform: "translateY(-50%)" }}
      aria-hidden
    >
      <div className="relative grid place-items-center">
        {/* Expanding sonar rings — audio leaving the bud */}
        {rings.map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: 58,
              height: 58,
              border: `2px solid ${ACCENT}`,
              boxShadow: `0 0 10px rgba(255,179,0,0.5)`,
            }}
            initial={false}
            animate={
              reduce
                ? { scale: 1.1, opacity: 0.4 }
                : { scale: [0.5, 2.4], opacity: [0.85, 0] }
            }
            transition={
              reduce
                ? undefined
                : { duration: 3.2, repeat: Infinity, ease: "easeOut", delay: i * 0.8 }
            }
          />
        ))}
        {/* Soft static gold core glow under the bud */}
        <span
          className="absolute rounded-full"
          style={{
            width: 92,
            height: 92,
            background: "radial-gradient(circle, rgba(255,179,0,0.28), transparent 68%)",
            filter: "blur(3px)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="relative w-[68px] sm:w-[76px]"
          style={{ filter: "drop-shadow(0 14px 24px rgba(0,0,0,0.6))" }}
        />
      </div>
    </div>
  );
}
