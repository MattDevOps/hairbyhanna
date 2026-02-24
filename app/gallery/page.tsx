"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import gallery from "@/public/images/portfolio/gallery.json";

type Item = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export default function GalleryPage() {
  const items = gallery as Item[];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Item | null>(null);

  function openImg(it: Item) {
    setActive(it);
    setOpen(true);
  }

  return (
    <div className="container py-16">
      <p className="text-xs uppercase tracking-[0.35em] gold">Gallery</p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold">Recent work</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Highlights, color, haircuts, and transformations. Tap any photo to view full size.
          </p>
        </div>
        <Link href="/contact" className="btn btn-cream">
          Book
        </Link>
      </div>

      {/* Masonry grid */}
      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openImg(it)}
            className="mb-4 block w-full overflow-hidden rounded-[22px] border border-white/10 bg-white/5 hover:opacity-95 transition"
          >
            <Image
              src={it.src}
              alt={it.alt}
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto flex h-full max-w-6xl items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-3xl overflow-hidden rounded-[22px] border border-white/10 bg-black">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 p-3">
                <div className="min-w-0">
                  {active.title ? (
                    <p className="text-sm font-semibold truncate">{active.title}</p>
                  ) : null}
                  <p className="text-xs text-white/70 truncate">{active.alt}</p>
                </div>

                <button
                  className="btn btn-ghost px-4 py-2"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}