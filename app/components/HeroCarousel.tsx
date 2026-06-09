"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const POSTER = "/hero/practice-poster.jpg";
const VIDEO = "/hero/practice-v2.mp4";
const ALT =
  "Golfer practicing bunker shots, hitting from the sand with the course behind";

// Portrait source. Anchor a touch higher on mobile (taller crop), centered on
// desktop (wide crop) so the golfer and the ball pile stay in frame.
const FRAME = "object-cover object-[center_44%] md:object-[center_52%]";

export default function HeroCarousel() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // The video is the enhancement. The poster is the floor: it renders from the
  // server, with JS disabled, while the clip buffers, and whenever the visitor
  // prefers reduced motion. So the hero is never blank and never forces motion.
  const showVideo = mounted && !reduceMotion;

  return (
    <div className="absolute inset-0 -z-20">
      <Image src={POSTER} alt={ALT} fill priority sizes="100vw" className={FRAME} />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
          aria-hidden
          className={`absolute inset-0 h-full w-full ${FRAME}`}
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
