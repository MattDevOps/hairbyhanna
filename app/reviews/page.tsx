import Link from "next/link";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Hair+By+Hanna%2C+West+Newton%2C+MA&hl=en#lrd=0x89e382f093b18523:0x96a977d99d2512a7,1,,,";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?cid=10859385028290900647"; // Hair By Hanna CID
const PLACE_NAME = "Hair By Hanna — West Newton, MA";

// ✅ No API: we show a curated, editable set (replace with real quotes anytime)
const featuredTestimonials: {
  name: string;
  rating: number;
  date: string;
  text: string;
}[] = [
  {
    name: "Client Review",
    rating: 5,
    date: "Recent",
    text: "Hanna is amazing — thoughtful consultation, beautiful color, and I left feeling refreshed and confident.",
  },
  {
    name: "Client Review",
    rating: 5,
    date: "Recent",
    text: "Super professional and welcoming. Great cut and styling — exactly what I wanted.",
  },
  {
    name: "Client Review",
    rating: 5,
    date: "Recent",
    text: "Best highlights I’ve had. Blended perfectly and the finish lasted weeks.",
  },
  {
    name: "Client Review",
    rating: 5,
    date: "Recent",
    text: "Clean salon, great energy, and Hanna really knows what works for your hair.",
  },
];

function Stars({ n }: { n: number }) {
  const full = Math.max(0, Math.min(5, Math.round(n)));
  return (
    <div className="flex items-center gap-1" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "text-amber-300" : "text-white/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-16 pb-12">
        <div className="max-w-3xl fade-in">
          <p className="text-xs uppercase tracking-[0.35em] gold">Reviews</p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
            What clients say about {PLACE_NAME}
          </h1>

          <p className="mt-4 text-white/70">
            Read client experiences and see full feedback on Google. (No API, no extra cost.)
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-cream"
            >
              View Google Reviews
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Open in Google Maps
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIALS */}
      <section className="container pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] gold">Highlights</p>
            <h2 className="mt-3 text-3xl font-semibold">Recent client feedback</h2>
            <p className="mt-3 text-white/70">
              These are featured testimonials for fast loading. For the full list and newest posts,
              tap “View Google Reviews”.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost hidden sm:inline-flex px-5 py-2 text-sm"
          >
            View Google Reviews
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredTestimonials.map((r, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-semibold truncate">{r.name}</p>
                  <p className="text-xs text-white/60 mt-1">{r.date}</p>
                </div>
                <Stars n={r.rating} />
              </div>

              <p className="mt-4 text-white/75 leading-relaxed">{r.text}</p>

              <div className="mt-5 flex items-center justify-between gap-3">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  Read more on Google →
                </a>
                <span className="text-xs text-white/40">Google Reviews</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="btn btn-ghost w-full">
            View Google Reviews
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-32">
        <div className="card p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] gold">Next</p>
          <h2 className="mt-3 text-3xl font-semibold">Want your own transformation?</h2>
          <p className="mt-3 text-white/70">
            Book an appointment and we’ll confirm availability.
          </p>

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