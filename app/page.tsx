import Image from "next/image";
import Link from "next/link";
import featured from "@/public/images/featured.manual.json";

export default function Home() {
  const hero = featured?.[0]?.src || "/images/imported/hairbyhanna-01.jpg";
  const preview = featured.slice(0, 6);

  const mapQ = encodeURIComponent(
    "1299 Washington Street, West Newton, MA 02465"
  );

  const mapsUrl = `https://www.google.com/maps?q=${mapQ}`;

  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <Image
            src={hero}
            alt="Hair By Hanna salon in West Newton Massachusetts"
            fill
            priority
            className="object-cover scale-[1.06]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        <div className="container pt-28 pb-24 md:pt-32 md:pb-28">

          <div className="max-w-3xl">

            <span className="pill">
              West Newton, Massachusetts
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05]">
              Luxury Hair Salon
              <br />
              <span className="gold">Hair By Hanna</span>
            </h1>

            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Precision cuts, dimensional color, highlights, balayage,
              and smoothing services — delivered with calm, personal care
              and consistently beautiful results.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="btn btn-cream px-6 py-3"
              >
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="btn btn-ghost px-6 py-3"
              >
                View Services
              </Link>

              <Link
                href="/reviews"
                className="btn btn-gold px-6 py-3"
              >
                Read Reviews ★
              </Link>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost px-6 py-3"
              >
                Directions
              </a>

            </div>

            <div className="mt-14 flex flex-wrap gap-6 text-sm text-white/60">

              <div>
                <span className="gold font-semibold">Serving:</span>{" "}
                Newton, Brookline, Waltham, Boston
              </div>

              <div>
                <span className="gold font-semibold">Specializing in:</span>{" "}
                Cut • Color • Highlights
              </div>

              <div>
                <span className="gold font-semibold">Location:</span>{" "}
                West Newton, MA
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="container section">

        <div className="max-w-3xl">

          <p className="text-xs uppercase tracking-[0.35em] gold">
            Services
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            Professional salon services
          </h2>

          <p className="mt-4 text-white/70 max-w-xl">
            Haircuts, color, highlights, smoothing, and treatments —
            customized to your goals and hair type.
          </p>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {[
            {
              title: "Haircuts",
              desc: "Precision cuts tailored to your style",
              href: "/services#haircuts",
            },

            {
              title: "Hair Color",
              desc: "Root touch-up, gloss, full color",
              href: "/services#color",
            },

            {
              title: "Highlights",
              desc: "Partial, full, balayage dimension",
              href: "/services#highlights",
            },

            {
              title: "Brazilian Blowout",
              desc: "Smooth, frizz-free results",
              href: "/services#smoothing",
            },

            {
              title: "Treatments",
              desc: "Repair, hydration, shine",
              href: "/services#treatments",
            },

            {
              title: "Consultation",
              desc: "We'll recommend the perfect service",
              href: "/contact",
            },

          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="card p-6 hover:translate-y-[-3px] transition"
            >
              <p className="text-lg font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <p className="mt-4 text-sm gold">Learn more →</p>
            </Link>
          ))}

        </div>

      </section>



      {/* GALLERY PREVIEW */}
      <section className="container pb-24">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] gold">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              Recent work
            </h2>

            <p className="mt-3 text-white/70">
              Real client transformations and salon results
            </p>

          </div>

          <Link
            href="/gallery"
            className="btn btn-ghost hidden sm:inline-flex"
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



      {/* LOCATION SECTION — FIXED */}
      <section className="container pb-28">

        <div className="card p-10">

          <div className="grid gap-10 lg:grid-cols-2 items-start">

            {/* LEFT */}
            <div>

              <p className="text-xs uppercase tracking-[0.35em] gold">
                Visit
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
                Hair Salon in West Newton, MA
              </h2>

              <p className="mt-4 text-white/70 max-w-md">
                Located at 1299 Washington Street in West Newton,
                serving Newton, Brookline, Waltham, and Greater Boston.
              </p>


              <div className="mt-6 space-y-2 text-white/75 text-sm">

                <div>
                  <span className="text-white/50">Address:</span>{" "}
                  1299 Washington Street, West Newton, MA
                </div>

                <div>
                  <span className="text-white/50">Phone:</span>{" "}
                  <a href="tel:+16179653012">
                    617-965-3012
                  </a>
                </div>

              </div>


              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">

                <Link href="/contact" className="btn btn-cream">
                  Book Appointment
                </Link>

                <Link href="/reviews" className="btn btn-gold">
                  Read Reviews ★
                </Link>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Directions
                </a>

              </div>


              {/* HOURS */}
              <div className="mt-10 space-y-2 text-sm text-white/70 max-w-xs">

                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>10am – 5pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>10am – 5pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>10am – 5pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>10am – 5pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>10am – 2pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By appointment</span>
                </div>

              </div>

            </div>



            {/* RIGHT MAP — FIXED SIZE */}
            <div className="rounded-[22px] overflow-hidden border border-white/10">

              <iframe
                title="Hair By Hanna map"
                className="w-full h-[360px]"
                loading="lazy"
                src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
              />

            </div>

          </div>

        </div>

      </section>


    </main>
  );
}