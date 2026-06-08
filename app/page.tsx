import Link from "next/link";
import { ArrowRight, Trophy, User, Users, Check, BarChart3, X, CalendarDays, Sparkles, Flag, NotebookPen } from "lucide-react";
import HeroCarousel from "./components/HeroCarousel";
import Logo from "./components/Logo";
import PhoneMockup from "./components/PhoneMockup";
import Reveal from "./components/Reveal";

const LOGIN_URL = "https://app.eliteprep.app/login";
// Conversion CTAs ("Try free for 14 days", "Start free trial", "Sign up")
// land on /signup — the auth-method chooser (email / Google / Apple).
//
// 2026-05-15: changed from /billing back to /signup. The app shipped the
// magic-moment onboarding reorder — a new visitor now goes
// signup → role → tier → handicap → readiness-preview → paywall, so the
// paywall comes AFTER the user has seen their personalized readiness
// score. Pointing the marketing CTA at /billing sent cold visitors
// straight to the paywall, skipping signup and the whole onboarding /
// preview flow. /signup is the correct entry point for the new funnel.
const SIGNUP_URL = "https://app.eliteprep.app/signup";

const BRAND_GRADIENT = "linear-gradient(86deg, #9ABBC6 4%, #C5D6DB 99%)";
const PAGE_BG = "#111112";
const CARD_BORDER = "#2a2a2c";
const TEXT_HEAD = "#f0f0f0";
const TEXT_BODY = "#b3b3b3";
const BRAND = "#9ABBC6";
const BRAND_DIM = "rgba(154,187,198,0.12)";

// Soft section transitions — these replace hard 1px borders so adjacent
// sections bleed into each other with a brand-tinted glow instead of a
// hard seam. Used as background layers (stack on top of the section bg).
const SECTION_TOP_HALO =
  "radial-gradient(ellipse 90% 30% at 50% 0%, rgba(154,187,198,0.07) 0%, transparent 70%)";
const SECTION_BOTTOM_HALO =
  "radial-gradient(ellipse 90% 30% at 50% 100%, rgba(154,187,198,0.05) 0%, transparent 70%)";

// Premium card chrome — gradient fill + top edge highlight + bottom inner
// shadow + soft drop shadow. Makes feature cards feel like physical objects
// catching light, not flat bordered rectangles.
const PREMIUM_CARD_BG =
  "linear-gradient(180deg, #1d1d20 0%, #161618 100%)";
const PREMIUM_CARD_SHADOW = [
  "inset 0 1px 0 rgba(255,255,255,0.06)",
  "inset 0 -1px 1px rgba(0,0,0,0.35)",
  "0 14px 32px -10px rgba(0,0,0,0.5)",
].join(", ");
const PREMIUM_CARD_SHADOW_BRAND = [
  "inset 0 1px 0 rgba(154,187,198,0.15)",
  "inset 0 -1px 1px rgba(0,0,0,0.35)",
  "0 14px 32px -10px rgba(0,0,0,0.5)",
  "0 0 0 1px rgba(154,187,198,0.25)",
].join(", ");

export default function Page() {
  return (
    <main className="flex-1" style={{ background: PAGE_BG }}>
      <TopNav />
      <Hero />
      <Thesis />
      <Pillars />
      <WhyElitePrep />
      <WhoItsFor />
      <CtaBand />
      <Footer />
    </main>
  );
}

function TopNav() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(17, 17, 18, 0.85)",
        borderBottom: `1px solid ${CARD_BORDER}`,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Elite Prep home" className="shrink-0">
          <span className="sm:hidden"><Logo width={120} /></span>
          <span className="hidden sm:inline-flex"><Logo width={140} /></span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href={LOGIN_URL}
            className="inline-flex min-h-[44px] items-center px-3 text-sm font-medium"
            style={{ color: TEXT_BODY }}
          >
            Log in
          </a>
          {/* Nav Sign up is the SECONDARY brand surface. Filled brand-gradient
              is reserved for in-content primary CTAs (hero, CtaBand) so the
              top-right button doesn't compete for the same eye-stop. Brand
              border keeps the wordmark in dialogue without shouting. */}
          <a
            href={SIGNUP_URL}
            className="inline-flex min-h-[44px] items-center rounded-full border px-4 sm:px-5 text-sm font-semibold transition-colors hover:bg-white/5"
            style={{ borderColor: BRAND, color: TEXT_HEAD }}
          >
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroCarousel />
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
          <h1
            className="text-5xl leading-[0.95] sm:text-6xl lg:text-[72px]"
            style={{
              color: TEXT_HEAD,
              fontFamily: "var(--font-anton), sans-serif",
              textTransform: "uppercase",
              fontWeight: 400,
              letterSpacing: "0",
              textShadow: "0 2px 30px rgba(0,0,0,0.55)",
            }}
          >
            Every rep. Every round. Every event. One system.
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{
              color: "#d8d8da",
              textShadow: "0 1px 12px rgba(0,0,0,0.5)",
            }}
          >
            The whole climb — your{" "}
            <span style={{ color: TEXT_HEAD }}>practice</span>, your{" "}
            <span style={{ color: TEXT_HEAD }}>rounds</span>, your technique, your
            coach — in one place, built around your schedule. So you always know
            what to work on, and know it&rsquo;s working.
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

function Thesis() {
  return (
    <section
      style={{
        background: `
          ${SECTION_TOP_HALO},
          ${SECTION_BOTTOM_HALO},
          radial-gradient(ellipse at top, rgba(154,187,198,0.08) 0%, transparent 60%),
          #0d0d0e
        `,
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: BRAND }}
          >
            What we believe
          </p>
          <h2
            className="text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ color: TEXT_HEAD, fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Golf is played on the course.
            <br />
            <span style={{ fontStyle: "italic" }}>It&rsquo;s won off it.</span>
          </h2>
          <p
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: TEXT_BODY }}
          >
            Most of your game gets built in the hours nobody tracks — the range
            sessions, the short-game grind, the practice rounds, the work with
            your coach. That&rsquo;s where the real work is. And until now it
            lived in five different places, or nowhere at all.
          </p>
          <p
            className="mx-auto mt-10 max-w-2xl text-lg sm:text-xl"
            style={{
              color: TEXT_HEAD,
              fontFamily: "var(--font-manrope), sans-serif",
              fontStyle: "italic",
            }}
          >
            Elite Prep is one system for all of it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section
      style={{
        background: `
          ${SECTION_TOP_HALO},
          ${SECTION_BOTTOM_HALO},
          #0d0d0e
        `,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p
              className="text-xs font-semibold tracking-wider uppercase mb-3"
              style={{ color: BRAND }}
            >
              How it works
            </p>
            <h2
              className="text-3xl font-semibold leading-tight sm:text-4xl"
              style={{ color: TEXT_HEAD, fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Your season, end to end.
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16">
          <Pillar
            Icon={CalendarDays}
            eyebrow="Plan"
            title="Plan around your events."
            body="Put your whole schedule in, build your own practice sessions, and save your own drills — so every week points at your next event."
            demoSrc="/app-screens/hero-dashboard.png"
            demoAlt="Home screen with your next event countdown and weekly schedule"
            flip={false}
          />
          <Pillar
            Icon={Sparkles}
            eyebrow="Train"
            title="Train your way."
            body="Tell Elite Prep what you’ve got — “45 minutes, range and putting green” — and it builds a session from a real drill library. Run it on a live timer with drill-by-drill guidance."
            demoSrc="/app-screens/log-menu.png"
            demoAlt="Log menu: plan a session, start a live timer, or log what you already did"
            demoPosition="center"
            flip={true}
          />
          <Pillar
            Icon={Flag}
            eyebrow="Play"
            title="Every round, in full."
            body="Game-day rounds, practice rounds, and practice — logged shot-by-shot with Strokes Gained against PGA Tour, scratch, or your handicap."
            demoSrc="/app-screens/round-map.png"
            demoAlt="Live GPS round map tracking shot positions hole by hole"
            flip={false}
          />
          <Pillar
            Icon={NotebookPen}
            eyebrow="Reflect"
            title="Reflect and learn."
            body="Journal your sessions and rounds and rate where your head’s at, so every rep turns into something you actually learn from."
            demoSrc="/app-screens/journal.png"
            demoAlt="Journal screen prompting what's on your mind, with a place to write or dictate"
            flip={true}
          />
          <Pillar
            Icon={BarChart3}
            eyebrow="Prove"
            title="See it connect."
            body="Your practice and your performance, side by side — the work that’s actually showing up in your scores. The end of guessing."
            demoSrc="/app-screens/stats-v2.png"
            demoAlt="Stats screen with practice segment breakdown — driving, approach, short game, and putting — and top skill per segment"
            flip={false}
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  Icon,
  eyebrow,
  title,
  body,
  demoSrc,
  demoAlt,
  demoPosition = "top",
  highlights,
  flip,
}: {
  Icon: typeof BarChart3;
  eyebrow: string;
  title: string;
  body: string;
  demoSrc?: string;
  demoAlt?: string;
  demoPosition?: "top" | "center" | "bottom";
  highlights?: string[];
  flip: boolean;
}) {
  const text = (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl"
          style={{ background: BRAND_DIM }}
        >
          <Icon size={20} color={BRAND} strokeWidth={1.75} />
        </div>
        <span
          className="text-xs font-semibold tracking-wider uppercase"
          style={{ color: TEXT_BODY }}
        >
          {eyebrow}
        </span>
      </div>
      <h3
        className="text-2xl font-semibold leading-tight sm:text-3xl"
        style={{ color: TEXT_HEAD, fontFamily: "var(--font-manrope), sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="mt-4 max-w-md text-base leading-relaxed"
        style={{ color: TEXT_BODY }}
      >
        {body}
      </p>
    </div>
  );
  // Each beat shows either a real product screenshot (when we have a clean
  // one) or a branded "what's inside" panel — never a placeholder/fake screen.
  const visual = demoSrc ? (
    <div className="flex justify-center">
      <PhoneMockup
        src={demoSrc}
        alt={demoAlt ?? title}
        width={330}
        objectPosition={demoPosition}
      />
    </div>
  ) : (
    <FeaturePanel Icon={Icon} highlights={highlights ?? []} />
  );

  return (
    <Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className={flip ? "lg:order-2" : "lg:order-1"}>{text}</div>
        <div className={flip ? "lg:order-1" : "lg:order-2"}>{visual}</div>
      </div>
    </Reveal>
  );
}

function FeaturePanel({
  Icon,
  highlights,
}: {
  Icon: typeof BarChart3;
  highlights: string[];
}) {
  return (
    <div
      className="rounded-3xl border p-8 sm:p-10"
      style={{
        borderColor: CARD_BORDER,
        background: PREMIUM_CARD_BG,
        boxShadow: PREMIUM_CARD_SHADOW,
      }}
    >
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ background: BRAND_DIM }}
      >
        <Icon size={24} color={BRAND} strokeWidth={1.75} />
      </div>
      <ul className="flex flex-col gap-3.5">
        {highlights.map((h) => (
          <li
            key={h}
            className="flex items-center gap-3 text-sm sm:text-base"
            style={{ color: TEXT_HEAD }}
          >
            <Check size={16} color={BRAND} strokeWidth={2.5} />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyElitePrep() {
  type CompareValue = true | false;
  const competitors: { name: string; sub: string; primary?: boolean }[] = [
    { name: "Elite Prep", sub: "Event-Anchored", primary: true },
    { name: "Stat Trackers", sub: "Shot & Round Data" },
    { name: "Coaching Apps", sub: "Video & Comms" },
    { name: "Team Platforms", sub: "Enterprise Suites" },
  ];
  const rows: { feature: string; marks: CompareValue[] }[] = [
    { feature: "Organizes around your event calendar", marks: [true, false, false, false] },
    { feature: "Builds your practice sessions for you", marks: [true, false, false, false] },
    { feature: "Build your own drills & sessions", marks: [true, false, true, false] },
    { feature: "Shot-by-shot rounds with Strokes Gained", marks: [true, true, false, false] },
    { feature: "Game-day, practice rounds & practice in one place", marks: [true, true, false, true] },
    { feature: "Captures how practice felt (journal + mental)", marks: [true, false, false, false] },
    { feature: "Connects practice to event results", marks: [true, true, false, true] },
    { feature: "Coach sees training between lessons", marks: [true, false, true, true] },
    { feature: "For individual athletes, not just teams", marks: [true, true, true, false] },
  ];
  return (
    <section
      style={{
        background: `
          ${SECTION_TOP_HALO},
          ${SECTION_BOTTOM_HALO},
          ${PAGE_BG}
        `,
      }}
    >
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 max-w-3xl">
          <p
            className="text-xs font-semibold tracking-wider uppercase mb-3"
            style={{ color: BRAND }}
          >
            How Elite Prep compares
          </p>
          <h2
            className="text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: TEXT_HEAD, fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Built for the work{" "}
            <span style={{ color: BRAND, fontStyle: "italic" }}>between events.</span>
          </h2>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: TEXT_BODY }}
          >
            Recovery trackers grade your sleep. Stat trackers grade the round
            you already played. Elite Prep owns the part that decides the
            outcome — the work between events, and the proof it&rsquo;s working.
          </p>
        </div>
      </Reveal>

      <Reveal>
      <div
        className="md:hidden rounded-2xl border overflow-x-clip"
        style={{
          borderColor: CARD_BORDER,
          background: PREMIUM_CARD_BG,
          boxShadow: PREMIUM_CARD_SHADOW,
        }}
      >
        <table className="w-full border-collapse table-fixed">
          <colgroup>
            <col style={{ width: "32%" }} />
            <col style={{ width: "17%" }} />
            <col style={{ width: "17%" }} />
            <col style={{ width: "17%" }} />
            <col style={{ width: "17%" }} />
          </colgroup>
          {/* Sticky thead so column identity stays anchored while scrolling
              the 10-row table. Site header is ~73px, so we offset under it.
              Each <th> needs an opaque background or rows scroll through. */}
          <thead>
            <tr>
              <th
                className="sticky top-[73px] z-10 px-2 py-3 text-left"
                style={{ background: "#161618" }}
              />
              {competitors.map((c) => (
                <th
                  key={c.name}
                  className="sticky top-[73px] z-10 px-1 py-3 text-center align-bottom"
                  style={{
                    background: c.primary
                      ? // Primary column: tinted brand bg layered over opaque card bg
                        "linear-gradient(rgba(154,187,198,0.12), rgba(154,187,198,0.12)), #161618"
                      : "#161618",
                    borderBottom: `2px solid ${c.primary ? BRAND : CARD_BORDER}`,
                  }}
                >
                  <div
                    className="text-[10px] font-semibold leading-[1.15] break-words"
                    style={{
                      color: c.primary ? BRAND : TEXT_HEAD,
                      fontFamily: "var(--font-manrope), sans-serif",
                    }}
                  >
                    {c.name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature}>
                <td
                  className="px-2 py-3 text-left text-[11px] leading-snug"
                  style={{
                    color: TEXT_HEAD,
                    borderTop: `1px solid ${CARD_BORDER}`,
                  }}
                >
                  {r.feature}
                </td>
                {r.marks.map((m, ci) => (
                  <td
                    key={ci}
                    className="px-0 py-3 text-center"
                    style={{
                      background:
                        ci === 0 ? "rgba(154,187,198,0.06)" : "transparent",
                      borderTop: `1px solid ${CARD_BORDER}`,
                    }}
                  >
                    <CompareMark value={m} size="sm" isPrimary={ci === 0} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Reveal>

      <Reveal>
      <div
        className="hidden md:block overflow-x-auto rounded-2xl border"
        style={{
          borderColor: CARD_BORDER,
          background: PREMIUM_CARD_BG,
          boxShadow: PREMIUM_CARD_SHADOW,
        }}
      >
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr>
              <th className="w-[34%] px-6 py-5 text-left" />
              {competitors.map((c) => (
                <th
                  key={c.name}
                  className="px-3 py-5 text-center align-bottom"
                  style={{
                    background: c.primary
                      ? "rgba(154,187,198,0.12)"
                      : "transparent",
                    borderBottom: `2px solid ${c.primary ? BRAND : CARD_BORDER}`,
                  }}
                >
                  <div
                    className="text-sm font-semibold sm:text-base"
                    style={{
                      color: c.primary ? BRAND : TEXT_HEAD,
                      fontFamily: "var(--font-manrope), sans-serif",
                    }}
                  >
                    {c.name}
                  </div>
                  <div
                    className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em]"
                    style={{ color: TEXT_BODY }}
                  >
                    {c.sub}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature}>
                <td
                  className="px-6 py-4 text-left text-sm sm:text-base"
                  style={{
                    color: TEXT_HEAD,
                    borderTop: `1px solid ${CARD_BORDER}`,
                  }}
                >
                  {r.feature}
                </td>
                {r.marks.map((m, ci) => (
                  <td
                    key={ci}
                    className="px-3 py-4 text-center"
                    style={{
                      background:
                        ci === 0 ? "rgba(154,187,198,0.06)" : "transparent",
                      borderTop: `1px solid ${CARD_BORDER}`,
                    }}
                  >
                    <CompareMark value={m} isPrimary={ci === 0} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Reveal>

    </div>
    </section>
  );
}

function CompareMark({
  value,
  size = "md",
  isPrimary = false,
}: {
  value: true | false;
  size?: "sm" | "md";
  isPrimary?: boolean;
}) {
  const box = size === "sm" ? "h-5 w-5" : "h-7 w-7";
  const icon = size === "sm" ? 10 : 14;
  const glowRadius = size === "sm" ? 10 : 16;

  if (value === true && isPrimary) {
    // Elite Prep column — lit, high-contrast glow. The mark is the
    // visual anchor of the table: eye lands on the glow before reading.
    return (
      <span
        className={`inline-flex ${box} items-center justify-center rounded-md`}
        style={{
          background: BRAND,
          color: "#0a0f14",
          boxShadow: [
            `0 0 0 ${size === "sm" ? 2 : 3}px rgba(154,187,198,0.22)`,
            `0 0 ${glowRadius}px 1px rgba(154,187,198,0.55)`,
            "inset 0 1px 0 rgba(255,255,255,0.35)",
          ].join(", "),
        }}
        aria-label="Yes"
      >
        <Check size={icon} strokeWidth={3} />
      </span>
    );
  }

  if (value === true) {
    // Competitor column — yes but not lit. Readable, intentionally
    // outshone by the Elite Prep column on the same row.
    return (
      <span
        className={`inline-flex ${box} items-center justify-center rounded-md`}
        style={{
          background: "rgba(255,255,255,0.05)",
          color: TEXT_BODY,
          border: `1px solid ${CARD_BORDER}`,
        }}
        aria-label="Yes"
      >
        <Check size={icon} strokeWidth={2.25} />
      </span>
    );
  }

  // No — dim grey X. Pulled darker than before so the row's eye-line
  // is unambiguously on the lit Elite Prep mark.
  return (
    <span
      className={`inline-flex ${box} items-center justify-center rounded-md`}
      style={{ color: "#48484c", border: "1px solid rgba(58,58,62,0.6)" }}
      aria-label="No"
    >
      <X size={icon} strokeWidth={2.25} />
    </span>
  );
}

function WhoItsFor() {
  return (
    <section
      style={{
        background: `
          ${SECTION_TOP_HALO},
          ${SECTION_BOTTOM_HALO},
          ${PAGE_BG}
        `,
      }}
    >
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p
            className="text-xs font-semibold tracking-wider uppercase mb-3"
            style={{ color: BRAND }}
          >
            Who it's for
          </p>
          <h2
            className="text-3xl font-semibold leading-tight sm:text-4xl"
            style={{ color: TEXT_HEAD, fontFamily: "var(--font-manrope), sans-serif" }}
          >
            For athletes who take the work seriously
            <br />and the coaches in their corner.
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal delay={0}>
          <Audience
            Icon={Trophy}
            title="Individual athletes"
            body="Junior, collegiate, amateur, pro — anyone who cares about the work between events. Walk into every event knowing you put in the right prep."
            primary
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Audience
            Icon={User}
            title="Individual coaches"
            body="The gap between lessons stops being a black box. Every practice, training block, and competitive rep — logged, scored, and shared with you."
            primary
          />
        </Reveal>
        <Reveal delay={0.2}>
          <Audience
            Icon={Users}
            title="Team coaches"
            body="See the whole roster at a glance. Spot prep slipping before it shows up in results, and standardize how the team prepares."
            primary
          />
        </Reveal>
      </div>
    </div>
    </section>
  );
}

function Audience({
  Icon,
  title,
  body,
  primary,
}: {
  Icon: typeof Trophy;
  title: string;
  body: string;
  primary?: boolean;
}) {
  return (
    <div
      className="rounded-3xl border p-8"
      style={{
        borderColor: primary ? "rgba(154,187,198,0.35)" : CARD_BORDER,
        background: PREMIUM_CARD_BG,
        boxShadow: primary ? PREMIUM_CARD_SHADOW_BRAND : PREMIUM_CARD_SHADOW,
      }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-2xl mb-5"
        style={{ background: BRAND_DIM }}
      >
        <Icon size={20} color={BRAND} strokeWidth={1.75} />
      </div>
      <h3
        className="text-xl font-semibold sm:text-2xl"
        style={{ color: TEXT_HEAD, fontFamily: "var(--font-manrope), sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="mt-3 text-sm leading-relaxed sm:text-base"
        style={{ color: TEXT_BODY }}
      >
        {body}
      </p>
    </div>
  );
}

function CtaBand() {
  return (
    <section
      style={{
        background: `
          ${SECTION_TOP_HALO},
          ${SECTION_BOTTOM_HALO},
          #0d0d0e
        `,
      }}
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <Reveal>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-5"
            style={{ background: BRAND_DIM, color: BRAND }}
          >
            14 days free, then $24.99/mo
          </span>
          <h2
            className="text-3xl font-semibold leading-tight sm:text-4xl"
            style={{
              color: TEXT_HEAD,
              fontFamily: "var(--font-manrope), sans-serif",
              textWrap: "balance",
            }}
          >
            Know what to work on. Know it&rsquo;s working.
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: TEXT_BODY, textWrap: "pretty" }}
          >
            Try every feature free for 14 days. Card required; cancel anytime
            within the trial for no charge.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SIGNUP_URL}
              className="cta-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold"
              style={{ background: BRAND_GRADIENT, color: "#111112" }}
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={LOGIN_URL}
              className="rounded-full border px-7 py-3.5 text-base font-medium transition-colors hover:bg-white/5"
              style={{ borderColor: CARD_BORDER, color: TEXT_HEAD }}
            >
              Log in
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="mx-auto max-w-6xl px-6 py-10"
      style={{ borderTop: `1px solid ${CARD_BORDER}` }}
    >
      <div className="flex flex-row items-center justify-between gap-4">
        <Logo width={90} showBeta={false} />
        <div
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs sm:text-sm"
          style={{ color: TEXT_BODY }}
        >
          <Link
            href="/privacy"
            className="inline-flex min-h-[44px] items-center px-1 hover:opacity-80"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="inline-flex min-h-[44px] items-center px-1 hover:opacity-80"
          >
            Terms
          </Link>
          <span style={{ color: TEXT_BODY }}>
            © {new Date().getFullYear()} Elite Prep Inc.
          </span>
        </div>
      </div>
    </footer>
  );
}
