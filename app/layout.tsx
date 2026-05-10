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

const SITE_URL = "https://www.eliteprep.app";
const SITE_TITLE = "Elite Prep — Walk into your event ready";
const SITE_DESCRIPTION =
  "Performance tracking for athletes who take prep seriously. Forecast your event, see your readiness, and log every competition, practice, and training session in one place. Starting with golf.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Elite Prep",
  openGraph: {
    type: "website",
    siteName: "Elite Prep",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
