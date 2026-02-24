import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Hair By Hanna’s salon services in West Newton, MA: haircuts, hair color, highlights, balayage-style dimension, Brazilian blowout smoothing, and treatments. Request an appointment today.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Hair By Hanna",
    description:
      "Haircuts, color, highlights, balayage-style dimension, Brazilian blowout smoothing, and treatments in West Newton, MA.",
    url: "https://hairbyhanna.com/services",
  },
};

function Section({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: { name: string; note?: string }[];
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="card p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-white/70">{subtitle}</p>
        </div>

        <div className="mt-6 grid gap-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex items-start justify-between gap-6 border border-white/10 bg-white/5 rounded-2xl p-4"
            >
              <div>
                <p className="font-semibold">{it.name}</p>
                {it.note ? (
                  <p className="mt-1 text-sm text-white/70">{it.note}</p>
                ) : null}
              </div>
              <span className="text-xs text-white/60 whitespace-nowrap">
                Pricing varies
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Services</p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold">Salon menu</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Pricing depends on hair length/density, timing, and your goals. We’ll confirm the range
            when you request your appointment.
          </p>
        </div>
        <Link href="/contact" className="btn btn-gold">
          Book
        </Link>
      </div>

      {/* Quick Nav */}
      <div className="mt-8 flex flex-wrap gap-2">
        {[
          ["haircuts", "Haircuts"],
          ["color", "Color"],
          ["highlights", "Highlights"],
          ["smoothing", "Smoothing"],
          ["treatments", "Treatments"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="btn btn-ghost px-4 py-2 text-sm">
            {label}
          </a>
        ))}
      </div>

      <div className="mt-10 grid gap-6">
        <Section
          id="haircuts"
          title="Haircuts"
          subtitle="Clean shape, movement, and an elevated finish."
          items={[
            { name: "Women’s haircut", note: "Consultation + precision cut + finish." },
            { name: "Men’s haircut", note: "Classic to modern cuts." },
            { name: "Blowdry / style", note: "Smooth, polished finish." },
          ]}
        />

        <Section
          id="color"
          title="Hair Color"
          subtitle="Natural-looking color that wears beautifully."
          items={[
            { name: "Root touch-up", note: "Coverage + seamless blend." },
            { name: "Single process color", note: "All-over color with shine." },
            { name: "Gloss / toner", note: "Refines tone and adds shine." },
          ]}
        />

        <Section
          id="highlights"
          title="Highlights"
          subtitle="Dimension and brightness — subtle to bold."
          items={[
            { name: "Partial highlights", note: "Face-framing + top sections." },
            { name: "Full highlights", note: "Dimension throughout." },
            { name: "Balayage-style dimension", note: "Soft grow-out, natural finish." },
          ]}
        />

        <Section
          id="smoothing"
          title="Smoothing"
          subtitle="Smoother, more manageable hair with a glossy finish."
          items={[{ name: "Brazilian Blowout", note: "Reduces frizz, improves manageability." }]}
        />

        <Section
          id="treatments"
          title="Treatments"
          subtitle="Support hair health, softness, and shine."
          items={[
            { name: "Deep conditioning", note: "Hydration and softness." },
            { name: "Repair + shine support", note: "Strength and manageability." },
          ]}
        />
      </div>

      <div className="mt-10 card p-10">
        <p className="text-xs uppercase tracking-[0.25em] gold">Book</p>
        <h2 className="mt-3 text-2xl font-semibold">Not sure what you need?</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Tell us your goals (and optionally share a reference photo). We’ll recommend the right service.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn btn-gold">
            Request Appointment
          </Link>
          <a href="tel:+16179653012" className="btn btn-ghost">
            Call 617-965-3012
          </a>
        </div>
      </div>
    </div>
  );
}