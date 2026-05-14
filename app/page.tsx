import Link from "next/link";
import { Target, ArrowRight, Trophy, User, Users, Gauge, Check, CheckCircle2, BarChart3, X } from "lucide-react";
import HeroCarousel from "./components/HeroCarousel";
import Logo from "./components/Logo";
import PhoneMockup from "./components/PhoneMockup";
import Reveal from "./components/Reveal";

const LOGIN_URL = "https://app.eliteprep.app/login";
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
        <nav className="flex items-center gap-3 sm:gap-5">
          <a
            href={LOGIN_URL}
            className="text-sm font-medium hidden sm:block"
            style={{ color: TEXT_BODY }}
          >
            Log in
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: BRAND_GRADIENT, color: "#111112" }}
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
          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
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
          </div>
          <p
            className="mt-5 md:mt-6 text-xs"
            style={{ color: "#bdbdc0" }}
          >
            Starting with competitive golf — built for every sport.
          </p>
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
            Real preparation isn&rsquo;t just measured
            <br />
            <span style={{ fontStyle: "italic" }}>in hours of sleep.</span>
          </h2>
          <p
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: TEXT_BODY }}
          >
            Some platforms track sleep and recovery. Others track shots and
            scores. None of them measure the thing that actually moves the
            needle: the work you do in practice, the focus you bring to it, and
            whether it&rsquo;s preparing you for what&rsquo;s next.
          </p>
          <p
            className="mx-auto mt-10 max-w-2xl text-lg sm:text-xl"
            style={{
              color: TEXT_HEAD,
              fontFamily: "var(--font-manrope), sans-serif",
              fontStyle: "italic",
            }}
          >
            That&rsquo;s what Elite Prep measures.
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
              Four answers. Every time you open the app.
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16">
          <Pillar
            Icon={Gauge}
            eyebrow="The score"
            title="Your Performance Readiness Score"
            body="A 0–100 number built from competitive form, practice quality and volume, mental readiness, and competitive reps. The answer to “am I ready?” — grounded in real data, not a feeling."
            demoSrc="/app-screens/readiness.png"
            demoAlt="Performance Readiness Score showing 76 out of 100 with a breakdown of inputs"
            flip={false}
          />
          <Pillar
            Icon={Target}
            eyebrow="The forecast"
            title="Project your next event."
            body="Add an upcoming competition and Elite Prep projects a score from your real data. Tag it Peak, Developmental, or Baseline — the lead-up adjusts to match. Every input rolls into the math, so the number is one you trust."
            demoSrc="/app-screens/forecast.png"
            demoAlt="Event Forecast card showing the projected score and the math behind it"
            flip={true}
          />
          <Pillar
            Icon={CheckCircle2}
            eyebrow="The follow-through"
            title="Plan the week. Sync it. Follow through."
            body="Commit to a weekly plan — practice sessions, training blocks, and competitive reps. Sync it to Google or Apple Calendar so every commitment lands where you already work. The work that gets done is the work that gets seen."
            demoSrc="/app-screens/accountability.png"
            demoAlt="Accountability card showing weekly commitment rate, day-by-day commitments, and Practice/Training follow-through"
            flip={false}
          />
          <Pillar
            Icon={BarChart3}
            eyebrow="The patterns"
            title="Practice. Performance. Connected."
            body="Two layers of analytics, side by side. How you prepared. How you performed. The patterns that emerge when you can see both at once — patterns that stay invisible when you only track one half."
            demoSrc="/app-screens/stats.png"
            demoAlt="Stats & Insights view with weekly volume bar chart, activity mix donut, and scoring trend over time"
            flip={true}
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
  flip,
}: {
  Icon: typeof Target;
  eyebrow: string;
  title: string;
  body: string;
  demoSrc: string;
  demoAlt: string;
  demoPosition?: "top" | "center" | "bottom";
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
  const demo = (
    <div className="flex justify-center">
      <PhoneMockup
        src={demoSrc}
        alt={demoAlt}
        width={330}
        objectPosition={demoPosition}
      />
    </div>
  );

  return (
    <Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className={flip ? "lg:order-2" : "lg:order-1"}>{text}</div>
        <div className={flip ? "lg:order-1" : "lg:order-2"}>{demo}</div>
      </div>
    </Reveal>
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
    { feature: "Plans around your event calendar", marks: [true, false, false, false] },
    { feature: "Predicts tomorrow, not just yesterday", marks: [true, false, false, false] },
    { feature: "Tells you if you're event-ready", marks: [true, false, false, false] },
    { feature: "Forecasts your event score", marks: [true, false, false, false] },
    { feature: 'Simulates "what if I trained more?"', marks: [true, false, false, false] },
    { feature: "Tracks plan vs. follow-through", marks: [true, false, false, false] },
    { feature: "Captures how practice felt", marks: [true, false, false, false] },
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
            Built for the{" "}
            <span style={{ color: BRAND, fontStyle: "italic" }}>next event.</span>
          </h2>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: TEXT_BODY }}
          >
            Other tools tell you to get better someday. Elite Prep tells you
            whether you&rsquo;re ready in seventeen days — and exactly what
            to do about it.
          </p>
        </div>
      </Reveal>

      <Reveal>
      <div
        className="md:hidden rounded-2xl border overflow-hidden"
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
          <thead>
            <tr>
              <th className="px-2 py-3 text-left" />
              {competitors.map((c) => (
                <th
                  key={c.name}
                  className="px-1 py-3 text-center align-bottom"
                  style={{
                    background: c.primary
                      ? "rgba(154,187,198,0.12)"
                      : "transparent",
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
            style={{ color: TEXT_HEAD, fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Build a season you can actually plan around.
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: TEXT_BODY }}
          >
            Try every feature free for 14 days. Card required to start; cancel anytime within the trial for no charge.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
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
          <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
          <Link href="/terms" className="hover:opacity-80">Terms</Link>
          <span style={{ color: TEXT_BODY }}>
            © {new Date().getFullYear()} Elite Prep Inc.
          </span>
        </div>
      </div>
    </footer>
  );
}
