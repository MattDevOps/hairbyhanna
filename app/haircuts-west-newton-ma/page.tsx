import Link from "next/link";

export const metadata = {
  title: "Haircuts in West Newton, MA",
  description:
    "Haircuts in West Newton, MA. Women’s and men’s haircuts with a polished finish. Book Hair By Hanna.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Local service</p>
      <h1 className="mt-3 text-3xl md:text-5xl font-semibold">Haircuts in West Newton, MA</h1>
      <p className="mt-4 text-white/70 max-w-3xl">
        Great cuts should be easy to style and grow out well. Hair By Hanna offers women’s and men’s haircuts tailored to your hair texture,
        face shape, and day-to-day routine.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { t: "Women’s haircut", d: "Consultation + precision cut + finish." },
          { t: "Men’s haircut", d: "Classic to modern cuts." },
          { t: "Blowdry / style", d: "Smooth, polished finish." },
        ].map((x) => (
          <div key={x.t} className="card p-6">
            <p className="font-semibold">{x.t}</p>
            <p className="mt-2 text-sm text-white/70">{x.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 card p-10">
        <h2 className="text-2xl font-semibold">Book a haircut</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Tell us your length, your goal, and when you’d like to come in.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn btn-gold">Request Appointment</Link>
          <Link href="/services#haircuts" className="btn btn-ghost">View Menu</Link>
        </div>
      </div>
    </div>
  );
}