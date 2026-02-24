import Link from "next/link";

export const metadata = {
  title: "Reviews | Hair By Hanna — West Newton, MA",
  description:
    "Client reviews for Hair By Hanna in West Newton, MA. Read feedback and write a review on Google.",
};

export default function ReviewsPage() {
  // Free Google Maps embed (no API). Uses a search query for the business.
  const embedSrc =
    "https://www.google.com/maps?q=Hair%20By%20Hanna%201299%20Washington%20St%20West%20Newton%20MA&output=embed";

  const googleReviewLink =
    "https://www.google.com/maps?q=Hair%20By%20Hanna%201299%20Washington%20St%20West%20Newton%20MA";

  return (
    <main>
      <section className="container pt-16 pb-12">
        <div className="max-w-3xl fade-in">
          <p className="text-xs uppercase tracking-[0.35em] gold">Reviews</p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
            Google Reviews for Hair By Hanna
          </h1>

          <p className="mt-4 text-white/70 leading-relaxed">
            Read reviews from real clients and, if you’ve visited, we’d love for you to
            leave feedback on Google.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-cream"
            >
              View on Google
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="card overflow-hidden">
          <div className="aspect-[16/10] w-full">
            <iframe
              title="Hair By Hanna — Google Reviews"
              src={embedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 card p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] gold">Leave a review</p>
          <h2 className="mt-3 text-3xl font-semibold">Loved your experience?</h2>
          <p className="mt-3 text-white/70">
            Reviews help new clients find a salon they can trust.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-cream px-6 py-3"
            >
              Write a Google Review
            </a>
            <Link href="/gallery" className="btn btn-ghost px-6 py-3">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}