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
      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero}
            alt="Hair By Hanna West Newton MA"
            fill
            priority
            className="object-cover scale-[1.05]"
          />

          {/* darker gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">

          <p className="text-xs uppercase tracking-[0.35em] gold">
            West Newton, Massachusetts
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            Luxury Hair Salon
            <br />
            <span className="gold">Hair By Hanna</span>
          </h1>

          <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
            Precision cuts, dimensional color, highlights, and smoothing services —
            delivered with calm, personal care and consistently beautiful results.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="btn btn-cream text-sm px-6 py-3"
            >
              Book Appointment
            </Link>

            <Link
              href="/services"
              className="btn btn-ghost text-sm px-6 py-3"
            >
              View Services
            </Link>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost text-sm px-6 py-3"
            >
              Directions
            </a>

          </div>

          {/* trust bar */}
          <div className="mt-14 flex flex-wrap gap-6 text-sm text-white/60">

            <div>
              <span className="gold font-semibold">15+ Years</span> experience
            </div>

            <div>
              Serving West Newton & Greater Boston
            </div>

            <div>
              Precision cuts • Color • Highlights
            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="text-xs uppercase tracking-[0.35em] gold">
          Services
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
          The essentials — perfected
        </h2>

        <p className="mt-4 text-white/70 max-w-xl">
          Explore the menu and request your appointment.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {[
            ["Haircuts", "Women's and men's cuts tailored to your style."],
            ["Hair Color", "Root touch-ups and single process color."],
            ["Highlights", "Dimension and brightness — subtle to bold."],
            ["Brazilian Blowout", "Smoother, more manageable hair."],
            ["Treatments", "Conditioning and hair health support."],
            ["Special Packages", "Ask about curated packages."]
          ].map(([title, desc]) => (

            <Link
              key={title}
              href="/services"
              className="card p-6 hover:translate-y-[-3px] transition"
            >
              <p className="text-lg font-semibold">{title}</p>

              <p className="mt-2 text-sm text-white/70">
                {desc}
              </p>

              <p className="mt-4 text-sm gold">
                Learn more →
              </p>

            </Link>

          ))}

        </div>

      </section>


      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="flex justify-between items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.35em] gold">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              Recent work
            </h2>
          </div>

          <Link
            href="/gallery"
            className="btn btn-ghost text-sm px-5 py-2"
          >
            View all
          </Link>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {preview.map((img, i) => (

            <div
              key={i}
              className="card overflow-hidden hover:scale-[1.02] transition"
            >

              <div className="relative aspect-[4/5]">

                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          ))}

        </div>

      </section>

    </>
  );
}