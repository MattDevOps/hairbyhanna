import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading), serif" }}>
              Hair By Hanna
            </p>
            <p className="mt-3 text-sm text-[rgba(244,239,230,0.72)]">
              1299 Washington Street<br />
              West Newton, MA 02465
            </p>
            <p className="mt-3 text-sm">
              <a className="underline underline-offset-4 text-[rgba(244,239,230,0.80)] hover:text-[rgba(244,239,230,0.95)]" href="tel:+16179653012">
                617-965-3012
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold">Hours</p>
            <ul className="mt-3 space-y-1 text-sm text-[rgba(244,239,230,0.70)]">
              <li>Mon: 10–5</li>
              <li>Tue: 10–5</li>
              <li>Wed: 10–5</li>
              <li>Thu: 10–5</li>
              <li>Fri: 10–2</li>
              <li>Sat: Closed</li>
              <li>Sun: By appointment</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Quick links</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-[rgba(244,239,230,0.76)] hover:text-[rgba(244,239,230,0.95)]" href="/services">Services</Link>
              <Link className="text-[rgba(244,239,230,0.76)] hover:text-[rgba(244,239,230,0.95)]" href="/gallery">Gallery</Link>
              <Link className="text-[rgba(244,239,230,0.76)] hover:text-[rgba(244,239,230,0.95)]" href="/videos">Videos</Link>
              <Link className="text-[rgba(244,239,230,0.76)] hover:text-[rgba(244,239,230,0.95)]" href="/about">About</Link>
              <Link className="text-[rgba(244,239,230,0.76)] hover:text-[rgba(244,239,230,0.95)]" href="/contact">Book Appointment</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[rgba(244,239,230,0.55)]">
          © {new Date().getFullYear()} Hair By Hanna. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
