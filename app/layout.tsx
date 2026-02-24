import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hairbyhanna.com"),
  title: {
    default: "Hair By Hanna – Hair Salon in West Newton, MA",
    template: "%s | Hair By Hanna",
  },
  description:
    "Hair By Hanna is a professional hair salon in West Newton, MA specializing in haircuts, hair color, highlights, balayage, Brazilian blowout, and styling. Book an appointment today.",
  keywords: [
    "hair salon west newton ma",
    "hair salon newton ma",
    "hair stylist west newton ma",
    "hair color west newton",
    "balayage west newton",
    "highlights west newton",
    "brazilian blowout west newton",
    "haircut west newton",
    "hair salon near me",
    "newton ma hair salon",
    "west newton hair salon",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Hair By Hanna – Hair Salon in West Newton, MA",
    description:
      "Professional haircuts, hair color, highlights, balayage, and styling in West Newton, MA. Book an appointment today.",
    url: "https://hairbyhanna.com",
    siteName: "Hair By Hanna",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/imported/hairbyhanna-01.jpg",
        width: 1200,
        height: 630,
        alt: "Hair By Hanna – Hair Salon in West Newton, MA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hair By Hanna – Hair Salon in West Newton, MA",
    description:
      "Haircuts, color, highlights, balayage, and styling in West Newton, MA.",
    images: ["/images/imported/hairbyhanna-01.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <LocalBusinessSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}