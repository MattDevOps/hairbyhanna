import Image from "next/image";
import Link from "next/link";
import featured from "@/public/images/featured.manual.json";

export default function Home() {
  const hero = featured?.[0]?.src || "/images/imported/hairbyhanna-01.jpg";
  const preview = featured.slice(0, 6);

  const mapQ = encodeURIComponent("1299 Washington Street, West Newton, MA 02465");
  const mapsUrl = `https://www.google.com/maps?q=${mapQ}`;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={hero} alt="Hair By Hanna West Newton MA" fill priority className="object-cover scale-[1.06]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/85" />
        </div>

        <div className="container pt-28 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-3xl fade-in">
            <span className="pill">West Newton, Massachusetts</span>

            <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05]">
              Luxury Hair Salon
              <br />
              <span className="gold">Hair By Hanna</span>
            </h1>

            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
              Precision cuts, dimensional color, highlights, and smoothing services — delivered with calm, personal care and consistently beautiful results.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-cream text-sm px-6 py-3">
                Book Appointment
              </Link>
              <Link href="/services" className="btn btn-ghost text-sm px-6 py-3">
                View Services
              </Link>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-ghost text-sm px-6 py-3">
                Directions
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-6 text-sm text-white/60">
              <div><span className="gold font-semibold">Serving</span> West Newton & Greater Boston</div>
              <div><span className="gold font-semibold">Focus:</span> Cut • Color • Highlights</div>
              <div><span className="gold font-semibold">Experience:</span> Consultation-first approach</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] gold">Services</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">The essentials — perfected</h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Explore the menu and request your appointment. Pricing varies based on hair length, density, and timing.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { title: "Haircuts", desc: "Women’s & men’s cuts tailored to your style.", href: "/services#haircuts" },
            { title: "Hair Color", desc: "Root touch-ups, single process, gloss/toner.", href: "/services#color" },
            { title: "Highlights", desc: "Partial, full, balayage-style dimension.", href: "/services#highlights" },
            { title: "Brazilian Blowout", desc: "Smoother, more manageable hair.", href: "/services#smoothing" },
            { title: "Treatments", desc: "Hydration, repair, and shine support.", href: "/services#treatments" },
            { title: "Not sure what to book?", desc: "Tell us your goals — we’ll recommend.", href: "/contact" },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="card p-6 hover:translate-y-[-3px] transition">
              <p className="text-lg font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <p className="mt-4 text-sm gold">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] gold">Gallery</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Recent work</h2>
            <p className="mt-3 text-white/70">A curated preview — see the full gallery for more.</p>
          </div>
          <Link href="/gallery" className="btn btn-ghost hidden sm:inline-flex px-5 py-2 text-sm">
            View all
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {preview.map((img, i) => (
            <div key={i} className="card overflow-hidden hover:scale-[1.01] transition">
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

      <section className="container pb-24">
        <div className="card p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] gold">Visit</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Location & hours</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Conveniently located in West Newton. Serving Newton, Brookline, Waltham, and Greater Boston.
              </p>

              <div className="mt-6 space-y-2 text-sm text-white/75">
                <div><span className="text-white/60">Address:</span> 1299 Washington Street, West Newton, MA 02465</div>
                <div><span className="text-white/60">Phone:</span> <a className="underline underline-offset-4" href="tel:+16179653012">617-965-3012</a></div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn btn-cream">Book Appointment</Link>
                <a className="btn btn-ghost" href={mapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
              </div>

              <div className="mt-8 text-sm text-white/75 space-y-2 max-w-sm">
                <div className="flex justify-between"><span>Mon</span><span>10–5</span></div>
                <div className="flex justify-between"><span>Tue</span><span>10–5</span></div>
                <div className="flex justify-between"><span>Wed</span><span>10–5</span></div>
                <div className="flex justify-between"><span>Thu</span><span>10–5</span></div>
                <div className="flex justify-between"><span>Fri</span><span>10–2</span></div>
                <div className="flex justify-between"><span>Sat</span><span>Closed</span></div>
                <div className="flex justify-between"><span>Sun</span><span>By appointment</span></div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-white/10">
              <iframe
                title="map"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
