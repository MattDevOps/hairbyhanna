"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5"></div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Hair By Hanna</div>
            <div className="text-xs text-white/60">West Newton, MA</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
          <Link href="/videos" className="hover:text-white transition">Videos</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/reviews" className="hover:text-white transition">Reviews</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+16179653012"
            className="hidden sm:inline-block px-4 py-2 rounded-full border border-white/15 hover:border-white/30 transition text-sm"
          >
            Call
          </a>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-[rgba(244,239,230,0.95)] text-black text-sm font-medium hover:bg-[rgba(244,239,230,0.85)] transition"
          >
            Book Appointment
          </Link>
        </div>

      </div>
    </header>
  );
}