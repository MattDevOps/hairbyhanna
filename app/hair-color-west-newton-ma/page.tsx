import Link from "next/link";

export const metadata = {
  title: "Hair Color in West Newton, MA",
  description:
    "Hair color in West Newton, MA. Root touch-ups, single process color, and gloss/toner. Book Hair By Hanna.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Local service</p>
      <h1 className="mt-3 text-3xl md:text-5xl font-semibold">Hair Color in West Newton, MA</h1>
      <p className="mt-4 text-white/70 max-w-3xl">
        If you want natural-looking color with a smooth grow-out, Hair By Hanna offers consultation-first color services in West Newton.
        We’ll match tone to your skin undertone and maintenance preferences.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { t: "Root touch-up", d: "Coverage + seamless blend." },
          { t: "Single process color", d: "All-over color with shine." },
          { t: "Gloss / toner", d: "Refines tone and boosts shine." },
        ].map((x) => (
          <div key={x.t} className="card p-6">
            <p className="font-semibold">{x.t}</p>
            <p className="mt-2 text-sm text-white/70">{x.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 card p-10">
        <h2 className="text-2xl font-semibold">Book hair color</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Tell us your current color + your goal (and share a reference photo if you have one).
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn btn-gold">Request Appointment</Link>
          <Link href="/services#color" className="btn btn-ghost">View Menu</Link>
        </div>
      </div>
    </div>
  );
}