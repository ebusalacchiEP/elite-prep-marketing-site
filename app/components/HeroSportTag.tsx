"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SPORT_COPY: string[] = [
  "for golfers.",
  "for tennis players.",
  "for volleyball.",
  "for sprinters.",
  "for soccer.",
];

interface HeroSportTagProps {
  /** Active slide index from the parent-controlled HeroCarousel. */
  active: number;
  className?: string;
}

/**
 * Sport-tagged micro-headline that swaps in sync with the hero carousel.
 * Closes the "carousel with no narrative purpose" finding by tying each
 * slide to product copy that says "we work for THIS sport too." Lowercased
 * italic + period reads as a quiet aside, not a shout.
 *
 * Reduced motion: no swap animation, but the text still updates as the
 * parent rotates slides. (Parent pauses rotation under reduced motion, so
 * in practice this stays on "for golfers." — the first sport.)
 */
export default function HeroSportTag({ active, className = "" }: HeroSportTagProps) {
  const reduceMotion = useReducedMotion();
  const i = ((active % SPORT_COPY.length) + SPORT_COPY.length) % SPORT_COPY.length;
  const copy = SPORT_COPY[i];

  if (reduceMotion) {
    return (
      <p
        className={`text-sm md:text-base ${className}`}
        style={{
          color: "#9ABBC6",
          fontStyle: "italic",
          textShadow: "0 1px 8px rgba(0,0,0,0.55)",
        }}
        aria-live="polite"
      >
        {copy}
      </p>
    );
  }

  return (
    <div
      className={`relative h-[1.25em] text-sm md:text-base ${className}`}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={copy}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: "#9ABBC6",
            fontStyle: "italic",
            textShadow: "0 1px 8px rgba(0,0,0,0.55)",
          }}
        >
          {copy}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
