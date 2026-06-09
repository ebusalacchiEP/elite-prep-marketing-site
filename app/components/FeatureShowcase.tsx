"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const BRAND = "#9ABBC6";
const TEXT_HEAD = "#f0f0f0";
const TEXT_BODY = "#b3b3b3";
const BRAND_DIM = "rgba(154,187,198,0.12)";
const SIGNUP_URL = "https://app.eliteprep.app/signup";

type Feature = {
  src: string;
  alt: string;
  chip: string;
  pre: string;
  accent: string;
  post: string;
  body: string;
};

// The climb, end to end. One phone scrolls through the whole ecosystem.
const FEATURES: Feature[] = [
  {
    src: "/app-screens/s-countdown.png",
    alt: "Event screen with a large countdown until tee off and course details",
    chip: "18 days out",
    pre: "Every event, a ",
    accent: "countdown",
    post: ".",
    body: "Put your season in. Every event gets a countdown, a course, and a plan to point the week at.",
  },
  {
    src: "/app-screens/s-prep.png",
    alt: "Prep tab generating a practice session with Elite Prep AI",
    chip: "AI or yours",
    pre: "Train ",
    accent: "your way",
    post: ".",
    body: "Tell it your time and facilities and it builds the session from a real drill library, or build your own.",
  },
  {
    src: "/app-screens/s-timer.png",
    alt: "Live practice timer counting down a putting block",
    chip: "Live timer",
    pre: "The clock is ",
    accent: "ticking",
    post: ".",
    body: "Run practice live, drill by drill. Lock your screen and the timer keeps going.",
  },
  {
    src: "/app-screens/s-round.png",
    alt: "Round stats with strokes gained and scoring breakdown",
    chip: "Every round",
    pre: "Track the whole ",
    accent: "game",
    post: ".",
    body: "Game-day rounds, practice rounds, and practice, shot by shot, with Strokes Gained vs Tour, scratch, or your handicap.",
  },
  {
    src: "/app-screens/s-reflect.png",
    alt: "Mental check-in and reflection screen",
    chip: "Every rep",
    pre: "Reflect and ",
    accent: "learn",
    post: ".",
    body: "Journal your rounds and sessions and rate where your head’s at, so every rep turns into progress.",
  },
  {
    src: "/app-screens/s-connect.png",
    alt: "Practice-to-play screen comparing time spent against strokes gained",
    chip: "Prep → Play",
    pre: "See it ",
    accent: "connect",
    post: ".",
    body: "Your practice next to your performance. Proof the work off the course is moving your scores.",
  },
  {
    src: "/app-screens/s-community.png",
    alt: "Community feed and leaderboards",
    chip: "Your people",
    pre: "Walked ",
    accent: "together",
    post: ".",
    body: "Follow the players who push you, see what they’re putting in, and climb the boards.",
  },
];

const STEP_MS = 3400;

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((i: number) => {
    setActive(((i % FEATURES.length) + FEATURES.length) % FEATURES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % FEATURES.length);
    }, STEP_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const f = FEATURES[active];

  return (
    <div
      className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Text + climb rail */}
      <div className="order-2 lg:order-1">
        <div className="relative min-h-[210px] sm:min-h-[190px]">
          <AnimatePresence>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ background: BRAND_DIM, color: BRAND }}
              >
                <span aria-hidden style={{ fontSize: "0.6rem" }}>
                  ●
                </span>
                {f.chip}
              </span>
              <h3
                className="mt-4 text-3xl leading-[1.05] sm:text-4xl lg:text-5xl"
                style={{
                  color: TEXT_HEAD,
                  fontFamily: "var(--font-anton), sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {f.pre}
                <span style={{ color: BRAND }}>{f.accent}</span>
                {f.post}
              </h3>
              <p
                className="mt-4 max-w-md text-base leading-relaxed"
                style={{ color: TEXT_BODY }}
              >
                {f.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Climb rail: one node per feature, active glows, a tracer connects them */}
        <div className="mt-8 flex items-center gap-2">
          {FEATURES.map((feat, i) => (
            <button
              key={feat.src}
              onClick={() => go(i)}
              aria-label={`Show ${feat.accent}`}
              aria-current={i === active}
              className="group relative h-11 flex-1"
            >
              <span
                className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full transition-colors duration-300"
                style={{
                  background:
                    i <= active ? BRAND : "rgba(255,255,255,0.10)",
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300"
                style={
                  i === active
                    ? {
                        width: 12,
                        height: 12,
                        background: BRAND,
                        boxShadow: `0 0 0 4px ${BRAND_DIM}`,
                      }
                    : {
                        width: 8,
                        height: 8,
                        background:
                          i < active ? BRAND : "rgba(255,255,255,0.25)",
                      }
                }
              />
            </button>
          ))}
        </div>

        <a
          href={SIGNUP_URL}
          className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ background: "#ffffff", color: "#111112" }}
        >
          Start free
          <span aria-hidden>&rarr;</span>
        </a>
      </div>

      {/* Phone, cycling screens */}
      <div className="order-1 flex justify-center lg:order-2">
        <div
          className="relative w-full rounded-[40px] p-[9px]"
          style={{
            // Frame aspect matches the 9:16.2 screenshots so the full screen
            // shows edge-to-edge with no side-crop. p-[9px] is the bezel.
            aspectRatio: "640 / 1130",
            maxWidth: "min(320px, calc(100vw - 6rem))",
            background:
              "linear-gradient(135deg, #2a2a2c 0%, #18181a 60%, #2a2a2c 100%)",
            boxShadow:
              "0 40px 80px -28px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-[32px]"
            style={{ background: "#0a0a0a" }}
          >
            <AnimatePresence>
              <motion.div
                key={active}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: "6%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-6%" }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80vw, 320px"
                  quality={90}
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
