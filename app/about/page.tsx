import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Hair By Hanna in West Newton, MA — a calm, consultation-first salon specializing in precision cuts, dimensional color, highlights, and styling.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Hair By Hanna",
    description:
      "About Hair By Hanna in West Newton, MA — precision cuts, dimensional color, highlights, and styling.",
    url: "https://hairbyhanna.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="container py-16">
      <p className="text-xs uppercase tracking-[0.35em] gold">About</p>

      <div className="mt-4 grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-6">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Hair By Hanna — West Newton, MA
          </h1>

          <div className="mt-6 space-y-6 text-white/70 leading-relaxed">
            <p>
              Hair By Hanna offers many services at our extensive experience-based salon specializing in colors,
              perms, organic treatments, tanning, waxing, and more! At Hair By Hanna, you can expect to receive the
              same services offered at any upscale salon only at neighborhood prices. Hanna and her welcoming staff
              would love for you to take the opportunity to call now for an appointment or come in to Hair By Hanna
              to receive holiday and weekly specials.
            </p>

            <p>
              Hair By Hanna offers very convenient hours and are open Sundays! We also do house calls for our
              customers that are disabled or can't leave their house, prices vary by location.
            </p>

            <p>Gift certificates are available upon request!</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cream">
              Book Appointment
            </Link>
            <a href="tel:+16179653012" className="btn btn-ghost">
              Call 617-965-3012
            </a>
            <a
              href="https://www.google.com/maps?q=1299%20Washington%20Street,%20West%20Newton,%20MA%2002465"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Directions
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about/hanna.jpg"
                alt="Hanna at Hair By Hanna salon in West Newton, MA"
                fill
                className="object-cover object-[50%_35%]"
                priority
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.25em] gold">Focus</p>
              <p className="mt-2 font-semibold">Cut • Color • Highlights</p>
              <p className="mt-2 text-sm text-white/70">
                Natural, dimensional results that grow out beautifully.
              </p>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.25em] gold">Experience</p>
              <p className="mt-2 font-semibold">Consultation-first</p>
              <p className="mt-2 text-sm text-white/70">
                We listen first, then recommend the right service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}