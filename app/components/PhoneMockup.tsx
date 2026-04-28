import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  /** Width of the phone in px at desktop. Mobile scales fluidly. */
  width?: number;
  className?: string;
  /** Which portion of a tall screenshot to anchor to. Defaults to "top". */
  objectPosition?: "top" | "center" | "bottom";
}

/**
 * iPhone-style device frame around an app screenshot.
 * - Outer bezel uses a subtle gradient + ring shadow so the device reads as "depth"
 * - Dynamic island sits over the top edge (most app screenshots have a few px of
 *   empty space at the top so the island doesn't cover meaningful content)
 * - Screenshot is anchored to the top with object-cover so the marketing-relevant
 *   content (header + first card or two) is what shows
 */
export default function PhoneMockup({
  src,
  alt,
  width = 300,
  className = "",
  objectPosition = "top",
}: PhoneMockupProps) {
  const positionClass =
    objectPosition === "bottom"
      ? "object-bottom"
      : objectPosition === "center"
      ? "object-center"
      : "object-top";
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full rounded-[42px] p-[10px] ${className}`}
      style={{
        maxWidth: `min(${width}px, calc(100vw - 8rem))`,
        background:
          "linear-gradient(135deg, #2a2a2c 0%, #18181a 60%, #2a2a2c 100%)",
        boxShadow:
          "0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Side button hints (volume + lock) — purely cosmetic, sells the iPhone read */}
      <div
        className="absolute -left-[2px] top-[110px] h-12 w-[3px] rounded-l"
        style={{ background: "#1a1a1c" }}
        aria-hidden
      />
      <div
        className="absolute -left-[2px] top-[170px] h-16 w-[3px] rounded-l"
        style={{ background: "#1a1a1c" }}
        aria-hidden
      />
      <div
        className="absolute -right-[2px] top-[140px] h-20 w-[3px] rounded-r"
        style={{ background: "#1a1a1c" }}
        aria-hidden
      />

      <div
        className="relative h-full w-full overflow-hidden rounded-[34px]"
        style={{ background: "#0a0a0a" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${positionClass}`}
          sizes="(max-width: 768px) 85vw, 400px"
          quality={90}
          priority={false}
        />
        {/* Bottom fade so abrupt screenshot cuts blend into the frame */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.85) 70%, #0a0a0a 100%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
