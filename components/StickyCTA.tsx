"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  const hide = pathname === "/contact";

  if (hide) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="card-soft p-2 flex gap-2 items-center justify-between">
          <a className="btn btn-ghost flex-1 py-3 text-sm" href="tel:+16179653012">
            Call
          </a>
          <Link className="btn btn-cream flex-1 py-3 text-sm" href="/contact">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}
