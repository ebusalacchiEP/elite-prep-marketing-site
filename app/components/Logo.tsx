import Image from "next/image";

interface LogoProps {
  variant?: "white" | "dark";
  width?: number;
  className?: string;
  showBeta?: boolean;
}

export default function Logo({
  variant = "white",
  width = 200,
  className = "",
  showBeta = true,
}: LogoProps) {
  return (
    <div className={`inline-flex items-start gap-1.5 ${className}`}>
      <Image
        src={variant === "white" ? "/logo-white.svg" : "/logo-dark.svg"}
        alt="Elite Prep"
        width={width}
        height={Math.round(width * 0.13)}
        priority
      />
      {showBeta && (
        <span
          className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded shrink-0 -mt-1"
          style={{ background: "#9ABBC6", color: "#111112" }}
        >
          BETA
        </span>
      )}
    </div>
  );
}
