import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Elite Prep — Walk into your event feeling ready. Track how you prepare and how you perform.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const root = process.cwd();
  const fontDir = (pkg: string) =>
    join(root, "node_modules", "@fontsource", pkg, "files");

  const [logoSvg, screenshotPng, zillaSemibold, robotoRegular, robotoMedium] =
    await Promise.all([
      readFile(join(root, "public/logo-white.svg"), "utf-8"),
      readFile(join(root, "public/app-screens/hero-dashboard.png")),
      readFile(join(fontDir("zilla-slab"), "zilla-slab-latin-600-normal.woff")),
      readFile(join(fontDir("roboto"), "roboto-latin-400-normal.woff")),
      readFile(join(fontDir("roboto"), "roboto-latin-500-normal.woff")),
    ]);

  const logoSrc = `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`;
  const screenshotSrc = `data:image/png;base64,${screenshotPng.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #0d0d0e 0%, #15151a 50%, #1a1a22 100%)",
          fontFamily: "Roboto",
          position: "relative",
        }}
      >
        {/* Subtle brand wash from the right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, transparent 40%, rgba(154,187,198,0.10) 100%)",
          }}
        />

        {/* Left: text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 40px 60px 80px",
            width: 740,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", marginBottom: 40 }}>
            <img src={logoSrc} width={220} height={29} alt="" />
          </div>

          <div
            style={{
              fontFamily: "Zilla Slab",
              fontSize: 68,
              lineHeight: 1.04,
              color: "#f0f0f0",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              display: "flex",
              maxWidth: 580,
            }}
          >
            Walk into your event feeling ready.
          </div>

          <div
            style={{
              fontSize: 26,
              color: "#a9a9a9",
              marginTop: 28,
              lineHeight: 1.4,
              display: "flex",
              maxWidth: 580,
              fontWeight: 400,
            }}
          >
            Track how you prepare and how you perform — in one place.
          </div>

          <div
            style={{
              marginTop: 36,
              padding: "10px 18px",
              background: "rgba(154,187,198,0.18)",
              borderRadius: 999,
              color: "#9ABBC6",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.18em",
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            FREE DURING BETA
          </div>
        </div>

        {/* Right: phone mockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            paddingRight: 80,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 280,
              height: 580,
              borderRadius: 40,
              background:
                "linear-gradient(135deg, #2a2a2c 0%, #18181a 60%, #2a2a2c 100%)",
              padding: 10,
              display: "flex",
              boxShadow:
                "0 40px 70px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 32,
                background: "#0a0a0a",
                overflow: "hidden",
                display: "flex",
                position: "relative",
              }}
            >
              <img
                src={screenshotSrc}
                width={260}
                height={560}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Zilla Slab",
          data: zillaSemibold,
          style: "normal",
          weight: 600,
        },
        {
          name: "Roboto",
          data: robotoRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: robotoMedium,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
