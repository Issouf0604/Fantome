import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["600", "800"], display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", weight: ["400", "500", "600"], display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", weight: ["400", "500"], display: "swap" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fantômes — Débusque les abonnements que tu paies sans t’en servir",
  description: "Dépose ton relevé : en 2 minutes, on trouve les prélèvements oubliés, on les classe par coût annuel et on rédige les lettres de résiliation.",
  openGraph: {
    title: "Débusque les abonnements que tu paies sans t’en servir",
    description: "Ton relevé cache des fantômes. On les fait sortir — en 2 minutes, depuis ton téléphone.",
    locale: "fr_FR",
    type: "website",
    siteName: "Fantômes",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#F6F1E7", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh antialiased">
        {children}
        {umamiId && <Script src="https://cloud.umami.is/script.js" data-website-id={umamiId} strategy="afterInteractive" />}
      </body>
    </html>
  );
}
