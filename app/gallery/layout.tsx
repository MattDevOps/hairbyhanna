import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View recent hair color, highlights, balayage-style dimension, and haircut transformations from Hair By Hanna in West Newton, MA.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Hair By Hanna",
    description:
      "Recent work: highlights, hair color, balayage-style dimension, and haircut transformations in West Newton, MA.",
    url: "https://hairbyhanna.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}