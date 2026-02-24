import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Hair By Hanna — West Newton, MA",
  description:
    "Hair By Hanna offers many services at an experience-based salon specializing in color, perms, organic treatments, waxing, and more — upscale services at neighborhood prices.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="container pt-16 pb-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="fade-in">
            <p className="text-xs uppercase tracking-[0.35em] gold">About</p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Hair By Hanna — West Newton, MA
            </h1>

            <p className="mt-5 text-white/70 leading-relaxed">
              Hair By Hanna offers many services at our extensive experience-based
              salon specializing in colors, perms, organic treatments, tanning, waxing,
              and more! At Hair By Hanna, you can expect to receive the same services
              offered at any upscale salon only at neighborhood prices. Hanna and her
              welcoming staff would love for you to take the opportunity to call now
              for an appointment or come in to Hair By Hanna to receive holiday and
              weekly specials.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed">
              Hair By Hanna offers very convenient hours and are open Sundays! We also
              do house calls for our customers that are disabled or can&apos;t leave
              their house, prices vary by location.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed">
              Gift certificates are available upon request!
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-cream">
                Book Appointment
              </Link>
              <a href="tel:+16179653012" className="btn btn-ghost">
                Call 617-965-3012
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.google.com/maps?q=1299%20Washington%20Street,%20West%20Newton,%20MA%2002465"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-white/10">
            <Image
              src="/images/about/hanna.jpg"
              alt="Hair By Hanna — West Newton, MA"
              fill
              className="object-cover object-[center_20%]"
              priority
            />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-28">
        <div className="card p-10">
          <p className="text-xs uppercase tracking-[0.35em] gold">In the news</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Meet Hanna BenShabbat of Hair by Hanna in West Newton
          </h2>
          <p className="mt-3 text-white/70">
            2017-05-22 — BostonVoyager.com
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://bostonvoyager.com/interview/meet-hanna-benshabbat-hair-hanna-west-newton/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost px-6 py-3"
            >
              Read the article
            </a>
            <Link href="/reviews" className="btn btn-ghost px-6 py-3">
              Read Reviews
            </Link>
          </div>
        </div>

        <div className="mt-10 card p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] gold">Next</p>
          <h3 className="mt-3 text-3xl font-semibold">Want to see recent work?</h3>
          <p className="mt-3 text-white/70">Browse the gallery or watch videos.</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/gallery" className="btn btn-cream px-6 py-3">
              View Gallery
            </Link>
            <Link href="/videos" className="btn btn-ghost px-6 py-3">
              Watch Videos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}