import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold tracking-tight">Hair By Hanna</p>
            <p className="mt-3 text-sm text-white/70">
              1299 Washington Street<br />
              West Newton, MA 02465
            </p>
            <p className="mt-3 text-sm">
              <a className="underline underline-offset-4 text-white/80 hover:text-white" href="tel:+16179653012">
                617-965-3012
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold">Hours</p>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
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
              <Link className="text-white/80 hover:text-white" href="/services">Services</Link>
              <Link className="text-white/80 hover:text-white" href="/gallery">Gallery</Link>
              <Link className="text-white/80 hover:text-white" href="/about">About</Link>
              <Link className="text-white/80 hover:text-white" href="/contact">Book Appointment</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/55">
          © {new Date().getFullYear()} Hair By Hanna. All rights reserved.
        </div>
      </div>
    </footer>
  );
}