"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <div className="relative h-9 w-[140px] sm:w-[160px] md:w-[180px]">
              <Image
                src="/images/brand/logo.png"
                alt="Hair By Hanna"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="hidden lg:block leading-tight">
              <div className="text-[11px] text-[rgba(244,239,230,0.65)]">
                West Newton, MA
              </div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "text-sm transition",
                    active
                      ? "text-[rgba(244,239,230,0.95)]"
                      : "text-[rgba(244,239,230,0.72)] hover:text-[rgba(244,239,230,0.92)]",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              className="btn btn-ghost hidden sm:inline-flex px-4 py-2 text-sm"
              href="tel:+16179653012"
            >
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