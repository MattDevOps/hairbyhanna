import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Hair By Hanna — West Newton, MA",
  description:
    "Hair By Hanna is a neighborhood luxury salon in West Newton, MA specializing in color, highlights, cuts, organic treatments, waxing, and more.",
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO / EDITORIAL */}
      <section className="container pt-16 pb-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Copy */}
          <div className="lg:col-span-6 fade-in">
            <p className="text-xs uppercase tracking-[0.35em] gold">About</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">
              Hair By Hanna — West Newton, MA
            </h1>

            <p className="mt-6 text-white/70 leading-relaxed text-[15px] md:text-[16px]">
              Hair By Hanna offers many services at our extensive experience-based salon
              specializing in colors, perms, organic treatments, tanning, waxing, and more!
              At Hair By Hanna, you can expect to receive the same services offered at any
              upscale salon only at neighborhood prices. Hanna and her welcoming staff would
              love for you to take the opportunity to call now for an appointment or come in
              to Hair By Hanna to receive holiday and weekly specials.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-[15px] md:text-[16px]">
              Hair By Hanna offers very convenient hours and are open Sundays! We also do house
              calls for our customers that are disabled or can&apos;t leave their house, prices
              vary by location.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-[15px] md:text-[16px]">
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

            {/* Trust chips */}
            <div className="mt-9 flex flex-wrap gap-2">
              <span className="chip">West Newton Square</span>
              <span className="chip">Color • Highlights • Cuts</span>
              <span className="chip">Organic treatments</span>
              <span className="chip">Sunday by appointment</span>
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* subtle glow */}
              <div className="absolute -inset-6 rounded-[28px] bg-white/5 blur-2xl" />
              <div className="card overflow-hidden rounded-[26px]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/about/hanna.jpg"
                    alt="Hair By Hanna — West Newton, MA"
                    fill
                    priority
                    className="object-cover object-[center_28%] scale-[1.02]"
                  />
                </div>

                <div className="p-6 border-t border-white/10">
                  <p className="text-sm font-semibold">Hair By Hanna</p>
                  <p className="mt-1 text-sm text-white/65">
                    West Newton, Massachusetts • 1299 Washington Street
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREAM FEATURE STRIP */}
      <section className="container pb-24">
        <div className="rounded-[26px] border border-black/10 bg-[#f6f0e6] text-black overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="p-10 lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.35em] opacity-70">
                What to expect
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-[1.1]">
                Upscale services, neighborhood warmth
              </h2>

              <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed opacity-80">
                A relaxed, personal experience with polished results — from dimensional color
                and blended highlights to clean, wearable cuts.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[18px] border border-black/10 bg-white/60 p-5">
                  <p className="font-semibold">Color & Gloss</p>
                  <p className="mt-2 text-sm opacity-80">
                    Dimensional color, root touch-ups, and shine-enhancing gloss finishes.
                  </p>
                </div>

                <div className="rounded-[18px] border border-black/10 bg-white/60 p-5">
                  <p className="font-semibold">Highlights</p>
                  <p className="mt-2 text-sm opacity-80">
                    Blended, natural-looking highlights designed to grow out beautifully.
                  </p>
                </div>

                <div className="rounded-[18px] border border-black/10 bg-white/60 p-5">
                  <p className="font-semibold">Cuts & Styling</p>
                  <p className="mt-2 text-sm opacity-80">
                    Wearable, flattering cuts with finishes that look great beyond the salon.
                  </p>
                </div>

                <div className="rounded-[18px] border border-black/10 bg-white/60 p-5">
                  <p className="font-semibold">Treatments</p>
                  <p className="mt-2 text-sm opacity-80">
                    Organic treatments and care options to support hair health and shine.
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/services" className="btn btn-dark">
                  View Services
                </Link>
                <Link href="/gallery" className="btn btn-outline-dark">
                  See Gallery
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-10 border-t lg:border-t-0 lg:border-l border-black/10">
              <p className="text-xs uppercase tracking-[0.35em] opacity-70">
                In the news
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Meet Hanna BenShabbat
              </h3>

              <p className="mt-3 text-sm opacity-80">
                Featured interview — BostonVoyager.com (2017-05-22)
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://bostonvoyager.com/interview/meet-hanna-benshabbat-hair-hanna-west-newton/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  Read the article
                </a>
                <Link href="/reviews" className="btn btn-dark">
                  Reviews
                </Link>
              </div>

              <div className="mt-10 rounded-[18px] border border-black/10 bg-white/60 p-6">
                <p className="font-semibold">House calls available</p>
                <p className="mt-2 text-sm opacity-80">
                  Available for customers who are disabled or can’t leave their house.
                  Pricing varies by location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}