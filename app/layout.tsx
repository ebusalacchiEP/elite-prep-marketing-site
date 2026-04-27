import type { Metadata, Viewport } from "next";
import { Roboto, Zilla_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Elite Prep — Walk into your event feeling ready",
  description:
    "Performance tracking for competitive golfers. Forecast your event, see your readiness, and log every round, practice, and training session in one place.",
  applicationName: "Elite Prep",
};

export const viewport: Viewport = {
  themeColor: "#9ABBC6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${zillaSlab.variable} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
