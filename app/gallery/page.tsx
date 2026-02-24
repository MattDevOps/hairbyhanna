import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Gallery</p>
      <h1 className="mt-3 text-3xl md:text-5xl font-semibold">Recent work</h1>
      <p className="mt-4 text-white/70 max-w-2xl">
        Browse color, highlights, and cuts. See something you like? Book and we’ll match the look to your hair type.
      </p>

      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}