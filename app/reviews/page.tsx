import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read verified client reviews for Hair By Hanna in West Newton, MA. See our latest feedback and experiences on Google.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews | Hair By Hanna",
    description:
      "Read verified client reviews for Hair By Hanna in West Newton, MA.",
    url: "https://hairbyhanna.com/reviews",
  },
};

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Hair+By+Hanna+West+Newton+MA+reviews";

export default function ReviewsPage() {
  return (
    <main className="container py-16">
      <p className="text-xs uppercase tracking-[0.35em] gold">Reviews</p>

      <div className="mt-4 grid gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7">
          <h1 className="text-4xl md:text-6xl font-semibold">Client reviews</h1>
          <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
            We keep it simple and honest: we link directly to our verified Google reviews so you can read the most
            up-to-date feedback.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="btn btn-cream">
              Read Reviews on Google
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Book Appointment
            </Link>
            <a href="tel:+16179653012" className="btn btn-ghost">
              Call 617-965-3012
            </a>
          </div>

          <div className="mt-10 card p-8">
            <p className="text-xs uppercase tracking-[0.35em] gold">Tip</p>
            <p className="mt-3 text-white/70">
              If you’ve visited us, we’d truly appreciate a review. It helps local clients find the salon.
            </p>
            <div className="mt-5">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="btn btn-gold">
                Leave a Google Review
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="card p-8">
            <p className="text-xs uppercase tracking-[0.35em] gold">Location</p>
            <p className="mt-3 font-semibold">Hair By Hanna</p>
            <p className="mt-2 text-sm text-white/70">
              1299 Washington Street, West Newton, MA 02465
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                className="btn btn-ghost"
                href="https://www.google.com/maps?q=1299%20Washington%20Street,%20West%20Newton,%20MA%2002465"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
              <a className="btn btn-ghost" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                View Rating & Recent Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}