import type { Metadata } from "next";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: "A few client impressions. We can paste the best quotes from your current site and add Google reviews later."
};

export default function Page() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.22em] uppercase gold">Hair By Hanna</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Reviews</h1>
          <p className="mt-4 text-white/75">A few client impressions. We can paste the best quotes from your current site and add Google reviews later.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTA href="/contact" variant="primary">Request Appointment</CTA>
            <CTA href={`tel:${site.phoneTel}`} variant="ghost">Call {site.phoneDisplay}</CTA>
          </div>
        </div>

        <div className="mt-12 rounded-3xl p-8 glass">

<div className="space-y-4">
  {["Consistently great results — Hanna listens and delivers a polished look.",
    "Beautiful color that grows out naturally. Always professional.",
    "Best haircut I’ve had in years — clean, modern, and easy to maintain.",
    "Warm experience and great attention to detail."].map((t, i) => (
      <div key={i} className="rounded-2xl p-6 glass">
        <p className="text-sm text-white/80">“{t}”</p>
        <p className="mt-4 text-sm gold">— Client</p>
      </div>
  ))}
</div>

        </div>
      </div>
    </Container>
  );
}
