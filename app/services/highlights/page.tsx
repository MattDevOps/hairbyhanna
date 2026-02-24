import type { Metadata } from "next";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Highlights",
  description: "Highlights in West Newton, MA — subtle dimension or brighter contrast with a polished, natural grow-out."
};

export default function Page() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.22em] uppercase gold">Hair By Hanna</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Highlights</h1>
          <p className="mt-4 text-white/75">Highlights in West Newton, MA — subtle dimension or brighter contrast with a polished, natural grow-out.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTA href="/contact" variant="primary">Request Appointment</CTA>
            <CTA href={`tel:${site.phoneTel}`} variant="ghost">Call {site.phoneDisplay}</CTA>
          </div>
        </div>

        <div className="mt-12 rounded-3xl p-8 glass">

<div className="grid gap-10 lg:grid-cols-2">
  <div>
    <p className="text-sm text-white/75">
      We focus on clean lines, natural movement, and a finish that looks elevated — without feeling overdone.
      Bring reference photos if you have them, and we’ll align on a result that fits your hair type and maintenance preference.
    </p>

    <ul className="mt-6 space-y-3 text-sm text-white/80">
      <li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Subtle dimension or brighter contrast — tailored to you.</span></li>
<li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Placement designed for a flattering grow-out.</span></li>
<li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Gloss/toner options for a refined finish.</span></li>
    </ul>

    <div className="mt-8 rounded-2xl p-5 subtle-border bg-white/5">
      <p className="text-xs tracking-[0.22em] uppercase gold">Pricing</p>
      <p className="mt-2 text-sm text-white/75">
        Pricing varies by hair length, density, and timing. We’ll confirm a range when you request your appointment.
      </p>
    </div>
  </div>

  <div>
    <p className="text-xs tracking-[0.22em] uppercase gold">FAQ</p>
    <div className="mt-4 space-y-3">

      <div className="rounded-2xl p-5 subtle-border bg-white/5">
        <p className="font-semibold">How do highlights differ from full color?</p>
        <p className="mt-2 text-sm text-white/70">Highlights add dimension by lightening select sections, rather than changing the entire base.</p>
      </div>


      <div className="rounded-2xl p-5 subtle-border bg-white/5">
        <p className="font-semibold">How long does the appointment take?</p>
        <p className="mt-2 text-sm text-white/70">Typically 2–3 hours depending on placement and desired brightness.</p>
      </div>


      <div className="rounded-2xl p-5 subtle-border bg-white/5">
        <p className="font-semibold">How often do I need maintenance?</p>
        <p className="mt-2 text-sm text-white/70">Many clients refresh every 8–12 weeks, depending on grow-out preference.</p>
      </div>

    </div>
  </div>
</div>

        </div>
      </div>
    </Container>
  );
}
