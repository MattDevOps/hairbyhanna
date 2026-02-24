import Link from "next/link";

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Services</p>
      <h1 className="mt-3 text-3xl md:text-5xl font-semibold">Salon services</h1>
      <p className="mt-4 text-white/70 max-w-2xl">
        For exact pricing, we confirm based on hair length/density and your goals.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          { title: "Haircuts", items: ["Women’s cut", "Men’s cut", "Blowdry finish"] },
          { title: "Color", items: ["Root touch-up", "Single process color", "Gloss / toner"] },
          { title: "Highlights", items: ["Partial highlights", "Full highlights", "Balayage-style dimension"] },
          { title: "Smoothing", items: ["Brazilian Blowout"] },
          { title: "Treatments", items: ["Deep conditioning", "Repair + shine support"] },
          { title: "Special", items: ["Packages available — ask when booking"] }
        ].map((s) => (
          <div key={s.title} className="card p-6">
            <p className="text-lg font-semibold">{s.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {s.items.map((it) => <li key={it}>• {it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-gold">Book Appointment</Link>
      </div>
    </div>
  );
}