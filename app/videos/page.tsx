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

    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "").trim();
    if (u.searchParams.get("v")) return u.searchParams.get("v") || "";

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

function tagFromTitle(t: string): "Color" | "Highlights" | "Haircuts" | "Styling" {
  const s = t.toLowerCase();
  if (s.includes("highlight") || s.includes("balayage")) return "Highlights";
  if (s.includes("color") || s.includes("brunette") || s.includes("blonde") || s.includes("gloss") || s.includes("tone"))
    return "Color";
  if (s.includes("haircut") || s.includes("cut")) return "Haircuts";
  return "Styling";
}

export default function VideosPage() {
  const list = (videos as unknown as VideoItem[]) || [];
  const mapQ = encodeURIComponent("1299 Washington Street, West Newton, MA 02465");
  const mapsUrl = `https://www.google.com/maps?q=${mapQ}`;

  const withTags = list.map((v) => ({ ...v, tag: tagFromTitle(v.title) }));
  const tags = ["All", "Color", "Highlights", "Haircuts", "Styling"] as const;

  // Simple server-side default (All). If you want interactive filtering later, we’ll make it a client component.
  const active = "All";

  const filtered = active === "All" ? withTags : withTags.filter((v) => v.tag === active);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] gold">Videos</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold">Watch our work</h1>
          <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
            Short clips showing precision cuts, dimensional color, highlights, and finished styling — made in West Newton.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cream px-5 py-3 text-sm">
              Book Appointment
            </Link>
            <Link href="/gallery" className="btn btn-ghost px-5 py-3 text-sm">
              See Photos
            </Link>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-ghost px-5 py-3 text-sm">
              Directions
            </a>
          </div>
        </div>

        {/* Tag row (static for now) */}
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className={
                t === active
                  ? "px-4 py-2 rounded-full text-sm border border-white/15 bg-white/10 text-[rgba(244,239,230,0.95)]"
                  : "px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-[rgba(244,239,230,0.70)]"
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="mt-10 card p-10">
          <h2 className="text-2xl font-semibold">Add your videos</h2>
          <p className="mt-3 text-white/70">
            Paste YouTube links into <code className="text-white/90">public/videos/videos.json</code>.
          </p>
        </div>
      ) : (
        <>
          {/* Featured first video larger */}
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {(() => {
              const first = filtered[0];
              const isYoutube = first.type === "youtube";
              const id = isYoutube ? youtubeId(first.url) : "";
              const embed = isYoutube && id ? `https://www.youtube.com/embed/${id}` : "";

              return (
                <div className="card overflow-hidden lg:col-span-3">
                  <div className="relative aspect-video w-full bg-black/40">
                    {first.type === "youtube" ? (
                      embed ? (
                        <iframe
                          className="h-full w-full"
                          src={embed}
                          title={first.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-white/70">
                          Invalid YouTube URL. Fix it in public/videos/videos.json
                        </div>
                      )
                    ) : (
                      <video className="h-full w-full" controls preload="metadata">
                        <source src={first.url} />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.30em] gold">{first.tag}</p>
                        <p className="mt-2 text-2xl font-semibold">{first.title}</p>
                        {first.description ? (
                          <p className="mt-3 text-sm text-white/70 leading-relaxed">{first.description}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link href="/contact" className="btn btn-cream px-5 py-3 text-sm">
                        Book this look
                      </Link>
                      <Link href="/services" className="btn btn-ghost px-5 py-3 text-sm">
                        View services
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Right column: quick info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-7">
                <p className="text-xs uppercase tracking-[0.30em] gold">What you’ll see</p>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  <li>• Blended highlights & balayage</li>
                  <li>• Dimensional hair color + gloss</li>
                  <li>• Precision haircuts + finishing</li>
                  <li>• Polished styling results</li>
                </ul>
              </div>

              <div className="card p-7">
                <p className="text-xs uppercase tracking-[0.30em] gold">Location</p>
                <p className="mt-3 text-white/80">
                  1299 Washington Street<br />
                  West Newton, MA 02465
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a href="tel:+16179653012" className="btn btn-ghost px-5 py-3 text-sm">
                    Call 617-965-3012
                  </a>
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-ghost px-5 py-3 text-sm">
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining videos grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(1).map((v, idx) => {
              const isYoutube = v.type === "youtube";
              const id = isYoutube ? youtubeId(v.url) : "";
              const embed = isYoutube && id ? `https://www.youtube.com/embed/${id}` : "";

              return (
                <div key={`${v.title}-${idx}`} className="card overflow-hidden hover:translate-y-[-2px] transition">
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
                          Invalid YouTube URL
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
                    <p className="text-xs uppercase tracking-[0.28em] gold">{v.tag}</p>
                    <p className="mt-2 text-lg font-semibold">{v.title}</p>
                    {v.description ? (
                      <p className="mt-2 text-sm text-white/70">{v.description}</p>
                    ) : null}

                    <div className="mt-5 flex gap-3">
                      <Link href="/contact" className="btn btn-cream px-4 py-2 text-sm">
                        Book
                      </Link>
                      <Link href="/gallery" className="btn btn-ghost px-4 py-2 text-sm">
                        Photos
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 card p-10">
            <p className="text-xs uppercase tracking-[0.35em] gold">Ready?</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Ready for a fresh look?</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Request an appointment and we’ll confirm availability.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-cream px-6 py-3 text-sm">
                Book Appointment
              </Link>
              <a href="tel:+16179653012" className="btn btn-ghost px-6 py-3 text-sm">
                Call 617-965-3012
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}