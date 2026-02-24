"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" }
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={[
        "text-sm transition",
        active
          ? "text-[rgba(244,239,230,0.95)]"
          : "text-[rgba(244,239,230,0.72)] hover:text-[rgba(244,239,230,0.92)]"
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
            <div className="leading-tight">
              <div
                className="text-[15px] font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Hair By Hanna
              </div>
              <div className="text-[11px] text-[rgba(244,239,230,0.65)]">
                West Newton, MA
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn btn-ghost hidden sm:inline-flex px-4 py-2 text-sm" href="tel:+16179653012">
              Call
            </a>
            <Link className="btn btn-cream px-4 py-2 text-sm" href="/contact">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}