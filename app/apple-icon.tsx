import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon: steel-blue tile + white ascending bars.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4A9AC5 0%, #2C6E92 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ width: 59, height: 20, borderRadius: 10, background: "#fff" }} />
          <div style={{ width: 82, height: 20, borderRadius: 10, background: "#fff" }} />
          <div style={{ width: 105, height: 20, borderRadius: 10, background: "#fff" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
