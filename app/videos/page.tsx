import Link from "next/link";
import videos from "@/public/videos/videos.json";

type VideoItem = {
  title: string;
  type: "youtube" | "mp4";
  url: string;
  description?: string;
};

function youtubeId(input: string) {
  try {
    const u = new URL(input);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "").trim();
    }

    // youtube.com/watch?v=<id>
    if (u.searchParams.get("v")) {
      return u.searchParams.get("v") || "";
    }

    // youtube.com/embed/<id> or /shorts/<id>
    const parts = u.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];

    const shortsIdx = parts.indexOf("shorts");
    if (shortsIdx >= 0 && parts[shortsIdx + 1]) return parts[shortsIdx + 1];

    return "";
  } catch {
    return "";
  }
}

export default function VideosPage() {
  const list = (videos as unknown as VideoItem[]) || [];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Videos</p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold">Watch our work</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Short videos of cuts, color, highlights, and transformations.
          </p>
        </div>

        <Link href="/contact" className="btn btn-cream px-4 py-2 text-sm">
          Book Appointment
        </Link>
      </div>

      {list.length === 0 ? (
        <div className="mt-10 card p-10">
          <h2 className="text-2xl font-semibold">Add your videos</h2>
          <p className="mt-3 text-white/70">
            Paste YouTube links (or local mp4 URLs) into <code className="text-white/90">public/videos/videos.json</code>.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {list.map((v, idx) => {
            const isYoutube = v.type === "youtube";
            const id = isYoutube ? youtubeId(v.url) : "";
            const embed = isYoutube && id ? `https://www.youtube.com/embed/${id}` : "";

            return (
              <div key={`${v.title}-${idx}`} className="card overflow-hidden">
                <div className="relative aspect-video w-full bg-black/40">
                  {v.type === "youtube" ? (
                    embed ? (
                      <iframe
                        className="h-full w-full"
                        src={embed}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-white/70">
                        Invalid YouTube URL. Replace it in public/videos/videos.json
                      </div>
                    )
                  ) : (
                    <video className="h-full w-full" controls preload="metadata">
                      <source src={v.url} />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-lg font-semibold">{v.title}</p>
                  {v.description ? (
                    <p className="mt-2 text-sm text-white/70">{v.description}</p>
                  ) : null}

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn btn-cream px-4 py-2 text-sm">
                      Book This Look
                    </Link>
                    <Link href="/gallery" className="btn btn-ghost px-4 py-2 text-sm">
                      See Photos
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-12 card p-10">
        <p className="text-xs uppercase tracking-[0.25em] gold">Tip</p>
        <h2 className="mt-3 text-2xl font-semibold">Want the fastest setup?</h2>
        <p className="mt-3 text-white/70 max-w-3xl">
          Use YouTube links for every video. It loads fast, looks professional, and you don’t have to host large files.
        </p>
      </div>
    </div>
  );
}