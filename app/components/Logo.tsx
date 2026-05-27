interface LogoProps {
  variant?: "white" | "dark";
  /** Approximate target width in px; the lockup scales from this. */
  width?: number;
  className?: string;
  showBeta?: boolean;
}

// Elite Prep lockup: the "building" bars mark + "ELITE PREP" in Anton (loaded
// site-wide), both monochrome in the variant color, plus a steel-blue BETA
// chip as the single pop of brand color.
export default function Logo({
  variant = "white",
  width = 200,
  className = "",
  showBeta = true,
}: LogoProps) {
  const fontSize = Math.round(width * 0.15);
  const barsHeight = Math.round(fontSize * 1.18);
  const textColor = variant === "white" ? "#EEF2F5" : "#0A0D14";

  return (
    <div
      className={`inline-flex items-center ${className}`}
      style={{ color: textColor, gap: "0.42em" }}
    >
      <svg
        height={barsHeight}
        viewBox="0 0 540 500"
        style={{ display: "block", width: "auto", flexShrink: 0 }}
        aria-hidden="true"
      >
        <rect x="0" y="20" width="300" height="110" rx="55" fill="currentColor" />
        <rect x="0" y="196" width="410" height="110" rx="55" fill="currentColor" />
        <rect x="0" y="372" width="520" height="110" rx="55" fill="currentColor" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-anton), sans-serif",
          fontSize,
          lineHeight: 1,
          letterSpacing: "0.015em",
          whiteSpace: "nowrap",
        }}
      >
        ELITE PREP
      </span>
      {showBeta && (
        <span
          className="font-bold rounded shrink-0"
          style={{
            fontSize: 10,
            letterSpacing: "0.1em",
            padding: "3px 7px",
            border: "1px solid currentColor",
            color: "currentColor",
            opacity: 0.7,
            alignSelf: "flex-start",
            marginTop: -1,
          }}
        >
          BETA
        </span>
      )}
    </div>
  );
}
