import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Elite Tempo. Copy the greats. Copy your best.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#FFB300";
const INK = "#F3F5F9";
const MUTED = "#8F929C";

// Gold beat-tick equalizer, the brand motif.
function ticks(heights: number[]) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {heights.map((h, i) => (
        <div key={i} style={{ width: 7, height: h, borderRadius: 4, background: ACCENT }} />
      ))}
    </div>
  );
}

export default async function Image() {
  const root = process.cwd();
  const fontDir = (pkg: string) => join(root, "node_modules", "@fontsource", pkg, "files");

  const [shotPng, anton400, manrope400, manrope700] = await Promise.all([
    readFile(join(root, "public/elite-tempo/library.png")),
    readFile(join(fontDir("anton"), "anton-latin-400-normal.woff")),
    readFile(join(fontDir("manrope"), "manrope-latin-400-normal.woff")),
    readFile(join(fontDir("manrope"), "manrope-latin-700-normal.woff")),
  ]);
  const shotSrc = `data:image/png;base64,${shotPng.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0B0B0C 0%, #121219 55%, #0B0B0C 100%)",
          fontFamily: "Manrope",
        }}
      >
        {/* Left: brand + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 30px 60px 80px",
            width: 760,
          }}
        >
          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 44 }}>
            <div style={{ display: "flex", fontFamily: "Anton", fontSize: 40, letterSpacing: "0.02em" }}>
              <span style={{ color: INK }}>ELITE</span>
            </div>
            {ticks([14, 24, 14, 34, 14, 24, 14])}
            <div style={{ display: "flex", fontFamily: "Anton", fontSize: 40, letterSpacing: "0.02em" }}>
              <span style={{ color: ACCENT }}>TEMPO</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Anton",
              fontSize: 82,
              lineHeight: 1.0,
              color: INK,
              textTransform: "uppercase",
            }}
          >
            <span>Copy the greats.</span>
            <span style={{ color: ACCENT }}>Copy your best.</span>
          </div>

          <div style={{ display: "flex", fontSize: 27, color: MUTED, marginTop: 28, maxWidth: 600, lineHeight: 1.4 }}>
            Golf tempo, timed by hand to 1/100s.
          </div>

          <div
            style={{
              marginTop: 40,
              padding: "12px 22px",
              background: ACCENT,
              borderRadius: 999,
              color: "#0B0B0C",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.04em",
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            $29.99 once · no subscription
          </div>
        </div>

        {/* Right: phone mockup */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, paddingRight: 70 }}>
          <div
            style={{
              width: 300,
              height: 610,
              borderRadius: 46,
              background: "#0A0A0C",
              padding: 10,
              display: "flex",
              border: "1px solid #2C2C33",
              boxShadow: "0 40px 80px -24px rgba(0,0,0,0.8)",
            }}
          >
            <div style={{ width: "100%", height: "100%", borderRadius: 36, background: "#0a0a0a", overflow: "hidden", display: "flex" }}>
              <img src={shotSrc} width={280} height={590} alt="" style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton400, style: "normal", weight: 400 },
        { name: "Manrope", data: manrope400, style: "normal", weight: 400 },
        { name: "Manrope", data: manrope700, style: "normal", weight: 700 },
      ],
    },
  );
}
