"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
  position: string;
};

const SLIDES: Slide[] = [
  {
    src: "/hero/courtney-cook-SsIIw_MET0E-unsplash.jpg",
    alt: "Golfer following through against a mountain backdrop",
    position: "center 45%",
  },
  {
    src: "/hero/renith-r-A9VpotrPr1k-unsplash.jpg",
    alt: "Tennis player at the baseline mid-rally, viewed from above",
    position: "30% 30%",
  },
  {
    src: "/hero/jannes-glas-0NaQQsLWLkA-unsplash.jpg",
    alt: "Beach volleyball players silhouetted against a sunset",
    position: "center 60%",
  },
  {
    src: "/hero/braden-collum-9HI8UJMSdZA-unsplash.jpg",
    alt: "Track sprinter set in the blocks ready to race",
    position: "center 50%",
  },
  {
    src: "/hero/connor-coyne-OgqWLzWRSaI-unsplash.jpg",
    alt: "Soccer cleat resting on a match ball at kickoff",
    position: "center 45%",
  },
];

const ROTATION_MS = 6000;
const FADE_S = 1.0;

export const HERO_SLIDE_COUNT = SLIDES.length;

interface HeroCarouselProps {
  /** Active slide index, controlled by parent so siblings (e.g. HeroSportTag)
   *  can read it. */
  active: number;
  onAdvance: () => void;
}

/**
 * Controlled hero carousel. Parent owns the active index so sibling components
 * can stay in sync with the rotation (sport-tag micro-headline, etc.). Parent
 * passes `active` (index) and `onAdvance` (rotation tick).
 */
export default function HeroCarousel({ active, onAdvance }: HeroCarouselProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(onAdvance, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, onAdvance]);

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
            className="object-cover"
            style={{ objectPosition: slide.position }}
          />
        </motion.div>
      ))}
    </>
  );
}
