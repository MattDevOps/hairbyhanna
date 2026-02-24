import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hair By Hanna | Hair Salon in West Newton, MA",
    template: "%s | Hair By Hanna",
  },
  description:
    "Hair salon in West Newton, MA offering haircuts, hair color, highlights, Brazilian Blowout, and treatments. Book an appointment.",
  metadataBase: new URL("https://hairbyhanna.com"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Hair By Hanna",
    url: "https://hairbyhanna.com",
    telephone: "+16179653012",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1299 Washington Street",
      addressLocality: "West Newton",
      addressRegion: "MA",
      postalCode: "02465",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        <style>{`
          h1,h2,h3 { font-family: var(--font-heading), serif; letter-spacing: -0.02em; }
        `}</style>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
