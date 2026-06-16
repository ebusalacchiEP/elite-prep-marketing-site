import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Elite Tempo touch icon: gold beat-tick equalizer on near-black.
export default function AppleIcon() {
  const bars = [52, 88, 128, 88, 52];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 11,
          background: "#0B0B0C",
        }}
      >
        {bars.map((h, i) => (
          <div key={i} style={{ width: 18, height: h, borderRadius: 9, background: "#FFB300" }} />
        ))}
      </div>
    ),
    { ...size }
  );
}
