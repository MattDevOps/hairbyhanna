import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://hairbyhanna.com"),
  title: {
    default: "Hair By Hanna – Hair Salon in West Newton, MA",
    template: "%s | Hair By Hanna",
  },
  description:
    "Hair By Hanna is a professional hair salon in West Newton, MA specializing in haircuts, color, highlights, balayage, and styling. Book your appointment today.",
  keywords: [
    "hair salon west newton ma",
    "hair salon newton ma",
    "hair color west newton",
    "balayage west newton",
    "hair stylist west newton ma",
    "hair highlights newton ma",
    "haircuts west newton",
    "hair salon near me",
  ],
  openGraph: {
    title: "Hair By Hanna – Hair Salon in West Newton, MA",
    description:
      "Professional haircuts, color, highlights, balayage, and styling in West Newton, MA.",
    url: "https://hairbyhanna.com",
    siteName: "Hair By Hanna",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}