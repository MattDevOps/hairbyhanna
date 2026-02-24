"use client";

import Image from "next/image";
import Link from "next/link";

import videos from "@/public/videos/videos.json";
import gallery from "@/public/images/portfolio/gallery.json";

type VideoItem = {
  title: string;
  type?: "youtube" | "mp4" | string;
  url: string;
  description?: string;
};

type ImgItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

function getYouTubeId(input: string) {
  try {
    const u = new URL(input);

    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "").trim();
    }

    const v = u.searchParams.get("v");
    if (v) return v;

    const parts = u.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];

    const shortsIdx = parts.indexOf("shorts");
    if (shortsIdx >= 0 && parts[shortsIdx + 1]) return parts[shortsIdx + 1];

    return "";
  } catch {
    const m = input.match(/[?&]v=([^&]+)/);
    return m?.[1] ?? "";
  }
}

export default function VideosPage() {
  const list = (videos as unknown as VideoItem[]) || [];
  const previewImages = (gallery as unknown as ImgItem[]).slice(0, 6);

  return (
    <main>
      <section className="container pt-16 pb-12">
        <div className="max-w-3xl fade-in">
          <p className="text-xs uppercase tracking-[0.35em] gold">Videos</p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold">Hair transformations and salon work</h1>

          <p className="mt-4 text-white/70">
            Watch real results — color, highlights, and haircut finishes from Hair By Hanna in West Newton.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cream">
              Book Appointment
            </Link>
            <Link href="/gallery" className="btn btn-ghost">
              View Gallery
            </Link>
            <a className="btn btn-ghost" href="tel:+16179653012">
              Call 617-965-3012
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((video, i) => {
            const id = getYouTubeId(video.url);
            const embed = id ? `https://www.youtube.com/embed/${id}` : "";

            return (
              <div key={i} className="card overflow-hidden">
                <div className="aspect-video relative bg-black/30">
                  {embed ? (
                    <iframe
                      src={embed}
                      title={video.title}
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-white/70">
                      Invalid YouTube URL in{" "}
                      <code className="text-white/90">public/videos/videos.json</code>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                  {video.description ? <p className="mt-2 text-sm text-white/70">{video.description}</p> : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] gold">Recent work</p>
            <h2 className="mt-3 text-3xl font-semibold">Real salon results</h2>
            <p className="mt-3 text-white/70">
              A curated preview from the gallery — highlights, color, and cuts.
            </p>
          </div>

          <Link href="/gallery" className="btn btn-ghost hidden sm:inline-flex px-5 py-2 text-sm">
            View full gallery
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {previewImages.map((img, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/gallery" className="btn btn-ghost w-full">
            View full gallery
          </Link>
        </div>
      </section>

      <section className="container pb-32">
        <div className="card p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] gold">Book</p>
          <h2 className="mt-3 text-3xl font-semibold">Ready for your transformation?</h2>
          <p className="mt-3 text-white/70">Book an appointment at Hair By Hanna in West Newton.</p>

          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-cream px-6 py-3">
              Book Appointment
            </Link>
            <a href="tel:+16179653012" className="btn btn-ghost px-6 py-3">
              Call Salon
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}