import Link from "next/link";
import { Target, ArrowRight, Trophy, User, Users, Gauge, Check, CheckCircle2, BarChart3, X } from "lucide-react";
import Logo from "./components/Logo";
import PhoneMockup from "./components/PhoneMockup";

const LOGIN_URL = "https://app.eliteprep.app/login";
const SIGNUP_URL = "https://app.eliteprep.app/signup";

const BRAND_GRADIENT = "linear-gradient(86deg, #9ABBC6 4%, #C5D6DB 99%)";
const PAGE_BG = "#111112";
const CARD_BG = "#1a1a1c";
const CARD_BORDER = "#2a2a2c";
const TEXT_HEAD = "#f0f0f0";
const TEXT_BODY = "#a9a9a9";
const BRAND = "#9ABBC6";
const BRAND_DIM = "rgba(154,187,198,0.12)";

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
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase"
            style={{ background: BRAND_DIM, color: BRAND }}
          >
            <Trophy size={13} strokeWidth={2} />
            Built for athletes
          </span>
          <h1
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]"
            style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
          >
            Walk into your event feeling ready.
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: TEXT_BODY }}
          >
            Elite Prep is the only platform that tracks both sides of competition —
            how you <span style={{ color: TEXT_HEAD }}>prepare</span> and how you{" "}
            <span style={{ color: TEXT_HEAD }}>perform</span> — and connects them.
            Capture every session, see your{" "}
            <span style={{ color: BRAND }}>Performance Readiness Score</span>, and
            over time, learn the prep formula that puts you at your best.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
              style={{ background: BRAND_GRADIENT, color: "#111112" }}
            >
              Try it free during beta <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={LOGIN_URL}
              className="inline-flex items-center py-2.5 text-sm font-medium underline-offset-4 hover:underline"
              style={{ color: BRAND }}
            >
              Already have an account? Log in →
            </a>
          </div>
          <p
            className="mt-6 text-xs"
            style={{ color: "#7a7a7e" }}
          >
            Starting with competitive golf — built for every sport.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup
            src="/app-screens/hero-dashboard.png"
            alt="Elite Prep dashboard showing the next event countdown, forecast, and readiness score"
            width={360}
          />
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(154,187,198,0.08) 0%, transparent 60%), #0d0d0e",
        borderTop: `1px solid ${CARD_BORDER}`,
        borderBottom: `1px solid ${CARD_BORDER}`,
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: BRAND }}
        >
          What we believe
        </p>
        <h2
          className="text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
        >
          How you prepare —
          <span style={{ color: TEXT_BODY }}> not just how much you play —</span>
          <br className="hidden sm:block" /> determines how you perform when it counts.
        </h2>
        <p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: TEXT_BODY }}
        >
          Most athlete apps live in one lane. Some track shots. Some track runs.
          Some track recovery. None of them connect what you did in practice to
          how you performed in competition. Elite Prep is the first platform that
          does — because preparation is the most important variable in
          competitive sport, and the one nobody&rsquo;s been measuring properly.
        </p>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section
      className="border-y"
      style={{ background: "#0d0d0e", borderColor: CARD_BORDER }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs font-semibold tracking-wider uppercase mb-3"
            style={{ color: BRAND }}
          >
            How it works
          </p>
          <h2
            className="text-3xl font-semibold leading-tight sm:text-4xl"
            style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
          >
            Four answers. Every time you open the app.
          </h2>
        </div>

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
            title="See yourself in your data."
            body="Two layers of analytics, side by side: how you played and how you prepared. Strokes gained, time per practice segment, challenge level, finish-with-win rate. Patterns surfaced, not buried in spreadsheets."
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
        style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
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
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className={flip ? "lg:order-2" : "lg:order-1"}>{text}</div>
      <div className={flip ? "lg:order-1" : "lg:order-2"}>{demo}</div>
    </div>
  );
}

function WhyElitePrep() {
  type CompareValue = true | false;
  const competitors: { name: string; short: string; sub: string; primary?: boolean }[] = [
    { name: "Elite Prep", short: "Elite Prep", sub: "Event-Anchored", primary: true },
    { name: "Stat Trackers", short: "Stat", sub: "Shot & Round Data" },
    { name: "Coaching Apps", short: "Coach", sub: "Video & Comms" },
    { name: "Team Platforms", short: "Team", sub: "Enterprise Suites" },
  ];
  const rows: { feature: string; marks: CompareValue[] }[] = [
    { feature: "Plans your training around your real event calendar", marks: [true, false, false, false] },
    { feature: "Tells you whether you're ready for the next event", marks: [true, false, false, false] },
    { feature: "Forecasts your event score with a probability curve", marks: [true, false, false, false] },
    { feature: 'Lets you simulate "what if I trained more?"', marks: [true, false, false, false] },
    { feature: "Tracks whether you actually did the work you planned", marks: [true, false, false, false] },
    { feature: "Captures how practice felt, not just what happened", marks: [true, false, false, false] },
    { feature: "Connects practice patterns to event results", marks: [true, true, false, true] },
    { feature: "Coach sees your training between lessons", marks: [true, false, true, true] },
    { feature: "Built for individual athletes, not just teams", marks: [true, true, true, false] },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 max-w-3xl">
        <p
          className="text-xs font-semibold tracking-wider uppercase mb-3"
          style={{ color: BRAND }}
        >
          How Elite Prep compares
        </p>
        <h2
          className="text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
          style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
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

      <div
        className="md:hidden rounded-2xl border overflow-hidden"
        style={{ borderColor: CARD_BORDER, background: CARD_BG }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-2.5 py-3 text-left" />
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
                    className={c.primary ? "text-[11px] font-semibold leading-tight" : "text-xs font-semibold"}
                    style={{
                      color: c.primary ? BRAND : TEXT_HEAD,
                      fontFamily: "var(--font-zilla), serif",
                    }}
                  >
                    {c.short}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature}>
                <td
                  className="px-2.5 py-3 text-left text-[11px] leading-snug"
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
                    className="px-1 py-3 text-center"
                    style={{
                      background:
                        ci === 0 ? "rgba(154,187,198,0.06)" : "transparent",
                      borderTop: `1px solid ${CARD_BORDER}`,
                    }}
                  >
                    <CompareMark value={m} size="sm" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="hidden md:block overflow-x-auto rounded-2xl border"
        style={{ borderColor: CARD_BORDER, background: CARD_BG }}
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
                      fontFamily: "var(--font-zilla), serif",
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
                    <CompareMark value={m} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}

function CompareMark({ value, size = "md" }: { value: true | false; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-5 w-5" : "h-7 w-7";
  const icon = size === "sm" ? 10 : 14;
  if (value === true) {
    return (
      <span
        className={`inline-flex ${box} items-center justify-center rounded-md`}
        style={{
          background: BRAND,
          color: "#0a0f14",
          boxShadow: size === "sm" ? "0 0 0 2px rgba(154,187,198,0.18)" : "0 0 0 3px rgba(154,187,198,0.18)",
        }}
        aria-label="Yes"
      >
        <Check size={icon} strokeWidth={3} />
      </span>
    );
  }
  return (
    <span
      className={`inline-flex ${box} items-center justify-center rounded-md`}
      style={{ color: "#5a5a5e", border: `1px solid ${CARD_BORDER}` }}
      aria-label="No"
    >
      <X size={icon} strokeWidth={2.5} />
    </span>
  );
}

function WhoItsFor() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 max-w-2xl">
        <p
          className="text-xs font-semibold tracking-wider uppercase mb-3"
          style={{ color: BRAND }}
        >
          Who it's for
        </p>
        <h2
          className="text-3xl font-semibold leading-tight sm:text-4xl"
          style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
        >
          For athletes who take the work seriously
          <br />and the coaches in their corner.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Audience
          Icon={Trophy}
          title="Individual athletes"
          body="Junior, collegiate, amateur, pro — anyone who cares about the work between events. Walk into every event knowing you put in the right prep."
          primary
        />
        <Audience
          Icon={User}
          title="Individual coaches"
          body="The gap between lessons stops being a black box. Every practice, training block, and competitive rep — logged, scored, and shared with you."
          primary
        />
        <Audience
          Icon={Users}
          title="Team coaches"
          body="See the whole roster at a glance. Spot prep slipping before it shows up in results, and standardize how the team prepares."
          primary
        />
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
        borderColor: primary ? BRAND : CARD_BORDER,
        background: CARD_BG,
        boxShadow: primary ? "0 0 0 1px rgba(154,187,198,0.25)" : "none",
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
        style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
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
      className="border-y"
      style={{ background: "#0d0d0e", borderColor: CARD_BORDER }}
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-5"
          style={{ background: BRAND_DIM, color: BRAND }}
        >
          Free during beta
        </span>
        <h2
          className="text-3xl font-semibold leading-tight sm:text-4xl"
          style={{ color: TEXT_HEAD, fontFamily: "var(--font-zilla), serif" }}
        >
          Build a season you can actually plan around.
        </h2>
        <p
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
          style={{ color: TEXT_BODY }}
        >
          No card, no commitment — every feature is open while we polish v1.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: BRAND_GRADIENT, color: "#111112" }}
          >
            Create your account <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={LOGIN_URL}
            className="rounded-full border px-7 py-3.5 text-base font-medium transition-colors hover:bg-white/5"
            style={{ borderColor: CARD_BORDER, color: TEXT_HEAD }}
          >
            Log in
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="mx-auto max-w-6xl px-6 py-12"
      style={{ borderTop: `1px solid ${CARD_BORDER}` }}
    >
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo width={100} showBeta={false} />
        <div className="flex items-center gap-x-6 text-sm" style={{ color: TEXT_BODY }}>
          <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
          <Link href="/terms" className="hover:opacity-80">Terms</Link>
        </div>
      </div>
      <div className="mt-8 text-xs" style={{ color: "#5a5a5e" }}>
        © {new Date().getFullYear()} Elite Prep Inc.
      </div>
    </footer>
  );
}
