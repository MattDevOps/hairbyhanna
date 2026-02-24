import type { Metadata } from "next";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brazilian Blowout",
  description: "Brazilian Blowout in West Newton, MA — smoother, more manageable hair with a glossy finish."
};

export default function Page() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.22em] uppercase gold">Hair By Hanna</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Brazilian Blowout</h1>
          <p className="mt-4 text-white/75">Brazilian Blowout in West Newton, MA — smoother, more manageable hair with a glossy finish.</p>
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
      <li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Reduces frizz and improves manageability.</span></li>
<li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Leaves hair smooth with natural movement.</span></li>
<li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Great for humidity and daily styling speed.</span></li>
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
        <p className="font-semibold">How long does it last?</p>
        <p className="mt-2 text-sm text-white/70">Results vary, often around 8–12 weeks with proper care.</p>
      </div>


      <div className="rounded-2xl p-5 subtle-border bg-white/5">
        <p className="font-semibold">Will my hair look flat?</p>
        <p className="mt-2 text-sm text-white/70">No — the goal is smoother hair with movement, not a limp finish.</p>
      </div>


      <div className="rounded-2xl p-5 subtle-border bg-white/5">
        <p className="font-semibold">Can I still wear my hair curly?</p>
        <p className="mt-2 text-sm text-white/70">Yes — it can make curls more defined and less frizzy.</p>
      </div>

    </div>
  </div>
</div>

        </div>
      </div>
    </Container>
  );
}
