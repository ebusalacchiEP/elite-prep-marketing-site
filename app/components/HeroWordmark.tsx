import Image from "next/image";

interface HeroWordmarkProps {
  /** Width of the wordmark in px at desktop. Mobile scales via `mobileWidth`. */
  width?: number;
  mobileWidth?: number;
  className?: string;
}

/**
 * Hero-scale brand wordmark. Distinct from `Logo` (which is the nav site-id at
 * 120/140px). This is the brand STATEMENT above the H1 — it announces whose
 * page this is before the H1 announces what we promise.
 *
 * Pairs with a brand-colored hairline rule rendered below by the parent.
 */
export default function HeroWordmark({
  width = 280,
  mobileWidth = 200,
  className = "",
}: HeroWordmarkProps) {
  const desktopHeight = Math.round(width * 0.13);
  const mobileHeight = Math.round(mobileWidth * 0.13);
  return (
    <div className={`inline-block ${className}`}>
      <span className="block sm:hidden">
        <Image
          src="/logo-white.svg"
          alt="Elite Prep"
          width={mobileWidth}
          height={mobileHeight}
          priority
          style={{
            filter:
              "drop-shadow(0 2px 18px rgba(0,0,0,0.55)) drop-shadow(0 1px 6px rgba(0,0,0,0.4))",
          }}
        />
      </span>
      <span className="hidden sm:block">
        <Image
          src="/logo-white.svg"
          alt="Elite Prep"
          width={width}
          height={desktopHeight}
          priority
          style={{
            filter:
              "drop-shadow(0 2px 22px rgba(0,0,0,0.6)) drop-shadow(0 1px 8px rgba(0,0,0,0.45))",
          }}
        />
      </span>
    </div>
  );
}
