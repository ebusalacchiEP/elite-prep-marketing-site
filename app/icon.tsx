import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Elite Prep mark: white "building" bars on the steel-blue tile.
export default function Icon() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
          <div style={{ width: 168, height: 58, borderRadius: 29, background: "#fff" }} />
          <div style={{ width: 234, height: 58, borderRadius: 29, background: "#fff" }} />
          <div style={{ width: 300, height: 58, borderRadius: 29, background: "#fff" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
