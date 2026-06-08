import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; the optimizer downscales per device.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
