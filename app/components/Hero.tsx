"use client";

import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import HeroCarousel, { HERO_SLIDE_COUNT } from "./HeroCarousel";
import HeroSportTag from "./HeroSportTag";
import HeroWordmark from "./HeroWordmark";

const BRAND_GRADIENT = "linear-gradient(86deg, #9ABBC6 4%, #C5D6DB 99%)";
const BRAND = "#9ABBC6";
const TEXT_HEAD = "#f0f0f0";
const SIGNUP_URL = "https://app.eliteprep.app/signup";

/**
 * Hero owns the active-slide state so sibling components (HeroCarousel and
 * HeroSportTag) can stay in sync. The carousel paints the background layer;
 * the sport-tag is a text element between H1 and subhead — they're not DOM
 * siblings, so this parent component is the natural place to lift state.
 *
 * Marked "use client" because the active-slide state needs to live on the
 * client. The rest of page.tsx stays server-rendered.
 */
export default function Hero() {
  const [active, setActive] = useState(0);
  const onAdvance = useCallback(() => {
    setActive((i) => (i + 1) % HERO_SLIDE_COUNT);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <HeroCarousel active={active} onAdvance={onAdvance} />
      {/* Mobile: stronger top+bottom letterbox so copy reads everywhere */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      {/* Desktop: lighter, left-darker so the figure stays bright on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background: [
            "linear-gradient(90deg, rgba(17,17,18,0.65) 0%, rgba(17,17,18,0.35) 40%, rgba(17,17,18,0.10) 75%, rgba(17,17,18,0.05) 100%)",
            "linear-gradient(180deg, rgba(17,17,18,0.20) 0%, rgba(17,17,18,0.40) 50%, rgba(17,17,18,0.92) 100%)",
          ].join(", "),
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-start md:justify-center px-6 pb-24 pt-24 sm:pt-32 min-h-[600px] sm:min-h-[680px] lg:min-h-[760px]">
        <div className="max-w-3xl">
          {/* Brand statement above the H1 — wordmark + brand hairline reads as
              "whose page this is" before the H1 reads "what we promise". Pairs
              with the nav logo (small, persistent) as two distinct treatments
              of the same wordmark. */}
          <HeroWordmark className="mb-5 md:mb-6" />
          <div
            aria-hidden
            className="mb-7 h-[1.5px] w-[60px] md:mb-8"
            style={{
              background: BRAND,
              boxShadow: "0 0 12px rgba(154,187,198,0.4)",
            }}
          />
          <h1
            className="text-5xl leading-[0.95] sm:text-6xl lg:text-[96px]"
            style={{
              color: TEXT_HEAD,
              fontFamily: "var(--font-anton), sans-serif",
              textTransform: "uppercase",
              fontWeight: 400,
              letterSpacing: "0",
              textShadow: "0 2px 30px rgba(0,0,0,0.55)",
            }}
          >
            Walk into your event ready.
          </h1>
          {/* Sport-tag: micro-headline that swaps in sync with each carousel
              rotation. Closes "carousel without narrative purpose" — the
              rotation now proves "built for every sport" instead of being
              decoration. */}
          <HeroSportTag active={active} className="mt-3 md:mt-4" />
          <p
            className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg md:mt-5"
            style={{
              color: "#d8d8da",
              textShadow: "0 1px 12px rgba(0,0,0,0.5)",
            }}
          >
            Elite Prep tracks how you{" "}
            <span style={{ color: TEXT_HEAD }}>prepare</span> and how you{" "}
            <span style={{ color: TEXT_HEAD }}>perform</span> — and shows you the
            formula that puts you at your best.
          </p>
          {/* Hero text budget: H1 + subhead + CTA group (with pricing +
              positioning under it as one block). Trust strip used to be a
              separate visual stop below; consolidated into the CTA group so
              the eye reads one decision area, not three. */}
          <div className="mt-8 md:mt-10">
            <a
              href={SIGNUP_URL}
              className="cta-glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold md:px-7 md:py-3.5 md:text-base"
              style={{ background: BRAND_GRADIENT, color: "#111112" }}
            >
              Try free for 14 days <ArrowRight className="h-4 w-4" />
            </a>
            <p
              className="mt-3 text-xs md:text-sm"
              style={{ color: "#bdbdc0" }}
            >
              Then $24.99/month. Cancel anytime.
            </p>
            <p
              className="mt-1.5 text-xs"
              style={{ color: "#bdbdc0" }}
            >
              Starting with competitive golf — built for every sport.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
