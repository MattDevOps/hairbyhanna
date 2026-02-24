import type { Metadata } from "next";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Hair treatments in West Newton, MA — conditioning and hair health support for shine and strength."
};

export default function Page() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.22em] uppercase gold">Hair By Hanna</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Treatments</h1>
          <p className="mt-4 text-white/75">Hair treatments in West Newton, MA — conditioning and hair health support for shine and strength.</p>
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
      <li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Deep conditioning and shine support.</span></li>
<li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Recommended alongside color and highlighting services.</span></li>
<li className='flex gap-3'><span className='mt-1 h-2 w-2 rounded-full bg-[color:var(--hair-gold)]'/> <span>Helps improve softness and manageability.</span></li>
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
        <p className="font-semibold">When should I add a treatment?</p>
        <p className="mt-2 text-sm text-white/70">Any time hair feels dry, brittle, or after chemical services.</p>
      </div>


      <div className="rounded-2xl p-5 subtle-border bg-white/5">
        <p className="font-semibold">How long does it add to my appointment?</p>
        <p className="mt-2 text-sm text-white/70">Often 10–20 minutes depending on the treatment.</p>
      </div>


      <div className="rounded-2xl p-5 subtle-border bg-white/5">
        <p className="font-semibold">How often should I do it?</p>
        <p className="mt-2 text-sm text-white/70">Many clients do treatments monthly or as needed for hair health.</p>
      </div>

    </div>
  </div>
</div>

        </div>
      </div>
    </Container>
  );
}
