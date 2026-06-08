import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; the optimizer downscales per device.
    formats: ["image/avif", "image/webp"],
    // PhoneMockup requests quality 90; Next 16 requires it declared.
    qualities: [75, 90],
  },
};

export default nextConfig;
