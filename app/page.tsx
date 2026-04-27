import Link from "next/link";
import { Target, BarChart3, ClipboardList, ArrowRight } from "lucide-react";

const LOGIN_URL = "https://app.eliteprep.app/login";
const SIGNUP_URL = "https://app.eliteprep.app/signup";

export default function Page() {
  return (
    <main className="flex-1">
      <TopNav />
      <Hero />
      <Pillars />
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
      style={{ background: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            className="inline-block h-6 w-6 rounded"
            style={{ background: "var(--brand)" }}
            aria-hidden
          />
          <span style={{ fontFamily: "var(--font-zilla), serif" }}>Elite Prep</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href={LOGIN_URL}
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Log in
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{ background: "var(--brand)", color: "var(--brand-text)" }}
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
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="section-label mb-4">For competitive golfers</p>
          <h1
            className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-zilla), serif" }}
          >
            Walk into your event feeling ready,
            <span style={{ color: "var(--brand-light)" }}>
              {" "}with the clarity of someone who actually understands their own game.
            </span>
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Elite Prep turns every round, practice session, and training block into a
            forecast for your next event — and tells you what to do today to move it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold"
              style={{ background: "var(--brand)", color: "var(--brand-text)" }}
            >
              Try it free during beta <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={LOGIN_URL}
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Already have an account? Log in →
            </a>
          </div>
        </div>

        {/* Hero demo placeholder — will be the live ReadinessScoreCard mock */}
        <DemoPlaceholder
          height="h-[420px]"
          label="Readiness Score Card"
          note="Live interactive demo will live here — moves-with-lift menu version, mock data."
        />
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section
      className="border-y"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="section-label mb-3">What it does</p>
          <h2
            className="text-3xl font-medium leading-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-zilla), serif" }}
          >
            Three answers, every time you open the app.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-1">
          <Pillar
            icon={<Target className="h-5 w-5" style={{ color: "var(--brand)" }} />}
            eyebrow="Pillar 1"
            title='Answer "am I ready?"'
            body="Forecast your next event from your real data. Drag the sliders to see how a better putting week — or a worse one — moves your projected score."
            demoLabel="Event Forecast Card with what-if sliders"
          />
          <Pillar
            icon={<BarChart3 className="h-5 w-5" style={{ color: "var(--brand)" }} />}
            eyebrow="Pillar 2"
            title="See yourself in your data"
            body="Patterns hide in spreadsheets. Elite Prep surfaces the ones that matter — strokes-gained shape, practice-to-result lag, and the moves with the highest lift on your event."
            demoLabel="Stats / patterns view"
          />
          <Pillar
            icon={<ClipboardList className="h-5 w-5" style={{ color: "var(--brand)" }} />}
            eyebrow="Pillar 3"
            title="One log, every insight"
            body="Rounds, practice, training — captured in seconds, all feeding the same forecast. No double-entry, no spreadsheet maintenance."
            demoLabel="Round-log Quick Entry hole-stepper"
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  icon,
  eyebrow,
  title,
  body,
  demoLabel,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  demoLabel: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ background: "var(--brand-dim)" }}
          >
            {icon}
          </div>
          <span className="section-label">{eyebrow}</span>
        </div>
        <h3
          className="text-2xl font-medium leading-tight sm:text-3xl"
          style={{ fontFamily: "var(--font-zilla), serif" }}
        >
          {title}
        </h3>
        <p
          className="mt-4 max-w-md text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {body}
        </p>
      </div>
      <DemoPlaceholder height="h-[360px]" label={demoLabel} />
    </div>
  );
}

function DemoPlaceholder({
  height,
  label,
  note,
}: {
  height: string;
  label: string;
  note?: string;
}) {
  return (
    <div
      className={`flex ${height} flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center`}
      style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}
    >
      <p className="section-label mb-3">Interactive demo</p>
      <p className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
        {label}
      </p>
      {note && (
        <p
          className="mt-3 max-w-sm text-sm"
          style={{ color: "var(--text-tertiary)" }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function WhoItsFor() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="section-label mb-3">Who it's for</p>
        <h2
          className="text-3xl font-medium leading-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-zilla), serif" }}
        >
          Built for the player who takes the work seriously.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Audience
          title="Athletes"
          tagline="(this is who we're building for)"
          body="Junior, college, mini-tour, am — anyone with a real schedule of events and the discipline to log the work between them. You'll get sharper at reading your own game and a forecast you actually trust."
          primary
        />
        <Audience
          title="Coaches"
          tagline="(coming later)"
          body="Multi-athlete dashboards and shared logs are on the roadmap. For now, the most useful thing a coach can do is have their players use Elite Prep — the data export will be ready when they need it."
        />
      </div>
    </section>
  );
}

function Audience({
  title,
  tagline,
  body,
  primary,
}: {
  title: string;
  tagline: string;
  body: string;
  primary?: boolean;
}) {
  return (
    <div
      className="rounded-2xl border p-8"
      style={{
        borderColor: primary ? "var(--brand)" : "var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="flex items-baseline gap-3">
        <h3
          className="text-2xl font-medium"
          style={{ fontFamily: "var(--font-zilla), serif" }}
        >
          {title}
        </h3>
        <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>
          {tagline}
        </span>
      </div>
      <p
        className="mt-4 leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
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
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <p className="section-label mb-4">Free during beta</p>
        <h2
          className="text-3xl font-medium leading-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-zilla), serif" }}
        >
          Build a season you can actually plan around.
        </h2>
        <p
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          No card, no commitment — every feature is open while we polish v1.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold"
            style={{ background: "var(--brand)", color: "var(--brand-text)" }}
          >
            Create your account <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={LOGIN_URL}
            className="rounded-full border px-6 py-3 text-base font-medium"
            style={{
              borderColor: "var(--border-strong)",
              color: "var(--text-primary)",
            }}
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
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div
        className="flex flex-col items-start gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"
        style={{ color: "var(--text-tertiary)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-4 w-4 rounded"
            style={{ background: "var(--brand)" }}
            aria-hidden
          />
          <span style={{ fontFamily: "var(--font-zilla), serif" }}>Elite Prep</span>
          <span> © {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <a href={LOGIN_URL}>Log in</a>
          <a href={SIGNUP_URL}>Sign up</a>
        </div>
      </div>
    </footer>
  );
}
