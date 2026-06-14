import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import EmailCapture from "./EmailCapture";
import CountUp from "./CountUp";
import BeatTicks from "./BeatTicks";

/* Elite Tempo brand palette — black + amber-gold, mirroring the app's
   DESIGN.md tokens. Scoped to this page; the rest of the site is Elite
   Prep blue. */
const BG = "#0B0B0C";
const ACCENT = "#FFB300";
const ON_ACCENT = "#0B0B0C";
const INK = "#F3F5F9";
const MUTED = "#8F929C";
const CARD = "#151720";
const HAIRLINE = "#242732";

// TODO: replace with the real App Store URL once the app is live.
const APP_STORE_URL = "#";

export const metadata: Metadata = {
  title: "Elite Tempo. Copy the best, at their best.",
  description:
    "Real tournament swings from golf's greats, timed by hand to 1/100s. See the best at their best — then capture and groove your own best swing. The exact duration and backswing to downswing ratio no other app captures. Pay once, $29.99, no subscription.",
  openGraph: {
    title: "Elite Tempo. Copy the best, at their best.",
    description:
      "See the greats at their best, timed by hand to 1/100s. Then capture and groove your own best swing. Exact duration plus tempo ratio. $29.99 once.",
    images: ["/elite-tempo/01-copy-the-greats.png"],
  },
};

// Real, hand-timed shots — the "see the best at their best" proof row.
const GREATS = [
  { who: "Tiger Woods", meta: "2000 U.S. Open · Driver", ratio: 3.17 },
  { who: "Rory McIlroy", meta: "2014 PGA · Driver", ratio: 3.0 },
  { who: "Fred Couples", meta: "1992 Masters · Fairway wood", ratio: 2.75 },
  { who: "Adam Scott", meta: "2013 Masters · Fairway wood", ratio: 2.84 },
];

// The "copy your best, at your best" sequence — capture and groove your OWN swing.
const STEPS = [
  { n: "1", t: "Film", d: "Record or import your swing. Slow-motion gives the finest timing." },
  { n: "2", t: "Mark", d: "Tap takeaway, top, and impact on the frame-accurate scrubber." },
  { n: "3", t: "Measure", d: "Get your exact duration and tempo ratio. Your best swing, captured." },
];

export default function EliteTempoLanding() {
  return (
    <main style={{ background: BG, color: INK }} className="min-h-screen">
      {/* Nav */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Wordmark />
        <a
          href={APP_STORE_URL}
          className="rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 hover:scale-[1.04] hover:shadow-[0_8px_26px_-8px_rgba(255,179,0,0.55)] active:scale-[0.98]"
          style={{ background: ACCENT, color: ON_ACCENT }}
        >
          Download
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-10 sm:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: ACCENT }}
              >
                Golf tempo and timing trainer
              </p>
              <h1
                className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl"
                style={{ color: INK }}
              >
                Copy the best,
                <br />
                at their best.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: MUTED }}>
                Real tournament swings, timed by hand to 1/100s. See the best at
                their best, then capture and groove your own best swing.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AppStoreButton />
                <span className="text-sm" style={{ color: MUTED }}>
                  Free to download · <strong style={{ color: INK }}>$29.99</strong> one-time unlock
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <PhoneShot src="/elite-tempo/01-copy-the-greats.png" priority />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band — the two numbers */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <Reveal>
          <div
            className="grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2"
            style={{ background: HAIRLINE, border: `1px solid ${HAIRLINE}` }}
          >
            <StatCell
              big={<CountUp value={0.96} decimals={2} suffix="s" />}
              label="Start to impact"
              sub="Exact swing duration, timed by hand to 1/100s."
            />
            <StatCell
              big={<CountUp value={3.17} decimals={2} suffix=":1" />}
              label="Tempo ratio"
              sub="Backswing to downswing. The rhythm of the swing."
            />
          </div>
          <p className="mt-5 text-center text-sm" style={{ color: MUTED }}>
            The two numbers no other app captures.
          </p>
        </Reveal>
      </section>

      <Divider />

      {/* See the best at their best */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                See the best at their best
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl" style={{ color: INK }}>
                The greats, timed by hand.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: MUTED }}>
                Famous shots from players at their peak, timed from tournament
                footage to the hundredth of a second. Hear each one as warm tones
                or a spoken &ldquo;start, and, hit.&rdquo;
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {GREATS.map((g) => (
                  <div
                    key={g.who}
                    className="rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: CARD, border: `1px solid ${HAIRLINE}` }}
                  >
                    <p className="text-2xl font-extrabold tabular-nums" style={{ color: ACCENT, fontVariantNumeric: "tabular-nums" }}>
                      <CountUp value={g.ratio} decimals={2} suffix=":1" />
                    </p>
                    <p className="mt-1.5 text-sm font-bold" style={{ color: INK }}>{g.who}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{g.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <PhoneShot src="/elite-tempo/03-duration-ratio.png" />
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Copy your best, at your best */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="order-2 flex justify-center md:order-1">
              <PhoneShot src="/elite-tempo/02-time-your-own.png" />
            </div>
          </Reveal>
          <Reveal>
            <div className="order-1 md:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                Then copy your best
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl" style={{ color: INK }}>
                Copy your best,
                <br />
                at your best.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: MUTED }}>
                Your best swing is a number too. Capture its exact duration and
                ratio, groove it on repeat, and bring it back when it counts.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                {STEPS.map((s) => (
                  <div
                    key={s.n}
                    className="flex items-start gap-4 rounded-2xl p-4"
                    style={{ background: CARD, border: `1px solid ${HAIRLINE}` }}
                  >
                    <span className="text-2xl font-extrabold leading-none" style={{ color: ACCENT, fontFamily: "var(--font-anton), sans-serif" }}>
                      {s.n}
                    </span>
                    <div>
                      <p className="font-extrabold" style={{ color: INK }}>{s.t}</p>
                      <p className="mt-0.5 text-sm leading-relaxed" style={{ color: MUTED }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Pricing */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div
            className="mx-auto max-w-xl rounded-3xl p-8 text-center sm:p-12"
            style={{ background: CARD, border: `1px solid ${HAIRLINE}` }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ACCENT }}
            >
              Free to download
            </p>
            <p className="mt-4 text-5xl font-extrabold" style={{ color: INK }}>
              $29.99
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: MUTED }}>
              one-time unlock · no subscription
            </p>
            <p className="mt-4 text-base" style={{ color: MUTED }}>
              Play a free shot in every area. One in-app purchase unlocks the
              full library and Time Your Swing, forever.
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreButton />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Cheat sheet email capture */}
      <section className="mx-auto max-w-2xl px-6 pb-24">
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: INK }}>
              Get the Elite Tempo cheat sheet
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base" style={{ color: MUTED }}>
              The duration and ratio of golf&apos;s most famous swings, free,
              straight to your inbox.
            </p>
          </div>
          <div className="mt-7">
            <EmailCapture />
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${HAIRLINE}` }}>
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Wordmark />
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: MUTED }}>
              <Link href="/elite-tempo/privacy" className="hover:opacity-80">
                Privacy
              </Link>
              <Link href="/elite-tempo/terms" className="hover:opacity-80">
                Terms
              </Link>
              <a href="mailto:ebusalacchi@eliteprep.app" className="hover:opacity-80">
                Contact
              </a>
              <Link href="/" className="hover:opacity-80">
                Elite Prep
              </Link>
            </nav>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed" style={{ color: "#5A5D66" }}>
            Part of the Elite Prep family. Elite Tempo references real golfers,
            tournaments, and shots for descriptive and educational purposes
            only, and is not affiliated with, sponsored by, or endorsed by any
            player, tournament, tour, or organization named in the app. All
            names and trademarks belong to their respective owners.
          </p>
          <p className="mt-4 text-xs" style={{ color: "#5A5D66" }}>
            © {new Date().getFullYear()} Elite Prep LLC.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ── Pieces ─────────────────────────────────────────────────────────────── */

// Animated beat-tick equalizer between sections — the brand's "this is running"
// signal, doubling as connective tissue that breaks up the vertical rhythm.
function Divider() {
  return (
    <div className="flex justify-center py-4 sm:py-6" aria-hidden>
      <BeatTicks heights={[10, 18, 10, 28, 10, 18, 10]} barWidth={4} gap={5} />
    </div>
  );
}

function Wordmark() {
  return (
    <div
      className="flex items-center gap-2"
      style={{ fontFamily: "var(--font-anton), sans-serif" }}
      aria-label="Elite Tempo"
    >
      <span className="text-xl tracking-wide" style={{ color: INK }}>
        ELITE
      </span>
      <BeatTicks heights={[7, 12, 7, 17, 7, 12, 7]} barWidth={2.5} gap={2.5} />
      <span className="text-xl tracking-wide" style={{ color: ACCENT }}>
        TEMPO
      </span>
    </div>
  );
}

// The official "Download on the App Store" lockup: black badge, white Apple
// glyph + text. Apple's guidelines forbid recoloring their badge or building a
// custom one with their logo, so the primary CTA uses the standard black badge
// (a thin border lifts it off the near-black canvas). Drop in Apple's exact SVG
// asset later if you want it pixel-identical.
function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      className="inline-flex items-center gap-2.5 rounded-xl px-5 py-3 transition duration-200 hover:scale-[1.03] active:scale-[0.98]"
      style={{ background: "#000000", border: "1px solid #34343A", color: "#FFFFFF" }}
      aria-label="Download Elite Tempo on the App Store"
    >
      <svg width="22" height="26" viewBox="0 0 384 512" fill="currentColor" aria-hidden>
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[11px] leading-tight opacity-90">Download on the</span>
        <span className="block text-[19px] font-semibold leading-tight tracking-tight">
          App Store
        </span>
      </span>
    </a>
  );
}

function PhoneShot({ src, priority }: { src: string; priority?: boolean }) {
  return (
    <div
      className="overflow-hidden rounded-[28px] transition-all duration-300 will-change-transform hover:scale-[1.02] hover:shadow-[0_24px_70px_-20px_rgba(255,179,0,0.28)]"
      style={{ border: `1px solid ${HAIRLINE}`, maxWidth: 300, width: "100%" }}
    >
      <Image
        src={src}
        alt=""
        width={1320}
        height={2868}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

function StatCell({ big, label, sub }: { big: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="px-8 py-10 text-center" style={{ background: BG }}>
      <p
        className="text-5xl font-extrabold tabular-nums"
        style={{ color: ACCENT, fontVariantNumeric: "tabular-nums" }}
      >
        {big}
      </p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: INK }}>
        {label}
      </p>
      <p className="mx-auto mt-2 max-w-xs text-sm" style={{ color: MUTED }}>
        {sub}
      </p>
    </div>
  );
}
