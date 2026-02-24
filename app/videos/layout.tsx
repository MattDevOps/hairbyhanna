import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch hair transformations and salon work from Hair By Hanna in West Newton, MA — color, highlights, and haircut finishes.",
  alternates: { canonical: "/videos" },
  openGraph: {
    title: "Videos | Hair By Hanna",
    description:
      "Hair transformations and salon work in West Newton, MA — color, highlights, and haircut finishes.",
    url: "https://hairbyhanna.com/videos",
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}