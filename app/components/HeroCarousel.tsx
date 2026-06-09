"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
  position: string;
};

// Single full-bleed golf hero. The copy is golf-specific, so the imagery is
// too — a rotating carousel of mixed sports clashed with the headline. Kept as
// an array so we can reintroduce rotation with more golf shots later.
const SLIDES: Slide[] = [
  {
    src: "/hero/tee-shot-c.jpg",
    alt: "Golfer holding a follow-through off an elevated tee overlooking the course",
    position: "center 62%",
  },
];

const ROTATION_MS = 6000;
const FADE_S = 1.0;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <>
      {SLIDES.map((slide, i) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0 -z-20"
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{ opacity: i === active ? 1 : 0 }}
          transition={{ duration: FADE_S, ease: "easeInOut" }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            // Portrait source: anchor higher on mobile (taller crop keeps the
            // golfer centered) and lower on desktop (wide crop, brings the
            // golfer up into the band instead of dead sky).
            className="object-cover object-[center_46%] md:object-[center_62%]"
          />
        </motion.div>
      ))}
    </>
  );
}
