import Image from "next/image";
import Link from "next/link";
import featured from "@/public/images/featured.manual.json";

export default function Home() {
  const hero = featured?.[0]?.src;
  const preview = featured.slice(0, 9);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero}
            alt="Hair By Hanna West Newton MA"
            fill
            className="object-cover opacity-45"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] gold">West Newton, Massachusetts</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Luxury Hair Salon in <span className="gold">West Newton</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/75 text-base md:text-lg">
            Precision cuts, dimensional color, highlights, and smoothing services — with a calm, personal experience and consistent results.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-gold">Book Appointment</Link>
            <Link href="/services" className="btn btn-ghost">View Services</Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.22em] gold">Signature</p>
              <p className="mt-2 font-semibold">Natural, elevated results</p>
              <p className="mt-2 text-sm text-white/70">Looks that grow out beautifully and fit your lifestyle.</p>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.22em] gold">Services</p>
              <p className="mt-2 font-semibold">Cut • Color • Highlights</p>
              <p className="mt-2 text-sm text-white/70">Plus treatments and smoothing for shine and manageability.</p>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.22em] gold">Location</p>
              <p className="mt-2 font-semibold">1299 Washington St</p>
              <p className="mt-2 text-sm text-white/70">West Newton, MA 02465</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] gold">Services</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">The essentials — perfected</h2>
          <p className="mt-3 text-white/70">
            Choose a service to learn more and request an appointment.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Haircuts", desc: "Women’s and men’s cuts tailored to your style.", href: "/services" },
            { title: "Hair Color", desc: "Root touch-ups and single process color.", href: "/services" },
            { title: "Highlights", desc: "Dimension and brightness — subtle to bold.", href: "/services" },
            { title: "Brazilian Blowout", desc: "Smoother, more manageable hair.", href: "/services" },
            { title: "Treatments", desc: "Conditioning and hair health support.", href: "/services" },
            { title: "Special Packages", desc: "Ask about curated packages for your goals.", href: "/contact" }
          ].map((s) => (
            <Link key={s.title} href={s.href} className="card p-6 hover:translate-y-[-1px] transition">
              <p className="text-lg font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <p className="mt-4 text-sm gold">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] gold">Gallery</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Recent work</h2>
            <p className="mt-3 text-white/70">A preview — see the full gallery for more.</p>
          </div>
          <Link href="/gallery" className="btn btn-ghost hidden sm:inline-flex">View all</Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((img, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/gallery" className="btn btn-ghost w-full">View all</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="card p-10">
          <p className="text-xs uppercase tracking-[0.25em] gold">Book</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Ready for a fresh look?</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Request an appointment and we’ll confirm availability. Prefer phone? Call during business hours.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-gold">Book Appointment</Link>
            <Link href="/gallery" className="btn btn-ghost">See Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}