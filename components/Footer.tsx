import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const mapUrl =
    "https://www.google.com/maps?q=1299%20Washington%20Street,%20West%20Newton,%20MA%2002465";

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-semibold text-lg">Hair By Hanna</p>
            <p className="mt-3 text-white/70 leading-relaxed">
              Family oriented, neighborhood hair salon in the heart of West Newton Square —
              offering upscale services at neighborhood prices.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-cream px-5 py-2 text-sm">
                Book
              </Link>
              <a href="tel:+16179653012" className="btn btn-ghost px-5 py-2 text-sm">
                Call
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm">
              <a
                href="https://www.instagram.com/hairbyhannanewton/?igshid=ZWIzMWE5ZmU3Zg%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/HairByHanna5"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UCe_uQXh7L2-xB8M94BKuAdQ"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] gold">Location</p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-white/80 hover:text-white transition"
            >
              1299 Washington Street
              <br />
              West Newton, MA 02465
            </a>

            <p className="mt-5 text-xs uppercase tracking-[0.35em] gold">Contact</p>
            <a
              href="tel:+16179653012"
              className="mt-3 block text-white/80 hover:text-white transition"
            >
              617-965-3012
            </a>
            <a
              href="mailto:hairbyhanna@yahoo.com"
              className="mt-2 block text-white/80 hover:text-white transition"
            >
              hairbyhanna@yahoo.com
            </a>
          </div>

          {/* Hours (matching current site) */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] gold">Hours</p>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>Monday — 10am - 5pm</li>
              <li>Tuesday — 10am - 5pm</li>
              <li>Wednesday — 10am - 5pm</li>
              <li>Thursday — 10am - 5pm</li>
              <li>Friday — 10am - 2pm</li>
              <li>Saturday — Closed</li>
              <li>Sunday — By Appointment</li>
            </ul>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] gold">Navigation</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="text-white/80 hover:text-white transition" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white transition" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white transition" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white transition" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white transition" href="/videos">
                  Videos
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white transition" href="/reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white transition" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <p className="mt-6 text-xs text-white/50">
              West Newton Square • Newton, MA
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Hair By Hanna. All rights reserved.</p>
          <p>
            <a className="hover:text-white transition" href={mapUrl} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}