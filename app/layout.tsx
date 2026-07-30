import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { site } from "@/lib/site";
import { TopBand } from "@/components/TopBand";
import { Logo } from "@/components/Logo";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — L'actu Google Ads passée au crible`,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — L'actu Google Ads passée au crible`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — L'actu Google Ads passée au crible`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "fr-FR",
  author: {
    "@type": "Person",
    name: site.author,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <TopBand />
        <header className="mx-auto max-w-content px-5 pt-6">
          <Logo />
        </header>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
