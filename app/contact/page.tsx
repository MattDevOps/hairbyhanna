"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const sp = useSearchParams();
  const sent = sp.get("sent") === "1";

  const mapQ = encodeURIComponent("1299 Washington Street, West Newton, MA 02465");
  const mapsUrl = `https://www.google.com/maps?q=${mapQ}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Contact</p>
      <h1 className="mt-3 text-3xl md:text-5xl font-semibold">
        Book an appointment
      </h1>

      <p className="mt-4 text-white/70 max-w-2xl">
        Fastest way is to call. You can also submit a request below and we’ll confirm availability.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a className="btn btn-gold" href="tel:+16179653012">
          Call 617-965-3012
        </a>

        <a
          className="btn btn-ghost"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>

        <Link className="btn btn-ghost" href="/gallery">
          See Work
        </Link>
      </div>

      {sent && (
        <div className="mt-8 card p-6">
          <p className="font-semibold">Request sent.</p>
          <p className="mt-2 text-sm text-white/70">
            We’ll get back to you shortly during business hours.
          </p>
        </div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* CONTACT FORM */}
        <div className="card p-8">
          <h2 className="text-xl font-semibold">
            Appointment request
          </h2>

          <p className="mt-2 text-sm text-white/70">
            Tell us what you’re looking for and your preferred time.
          </p>

          <form
            className="mt-6 space-y-4"
            action="https://formsubmit.co/hairbyhanna@yahoo.com"
            method="POST"
          >
            {/* REQUIRED HIDDEN FIELDS */}
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contact?sent=1"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              className="input"
              name="name"
              required
              placeholder="Name"
            />

            <input
              className="input"
              name="phone"
              required
              placeholder="Phone"
            />

            <input
              className="input"
              name="email"
              type="email"
              required
              placeholder="Email"
            />

            <input
              className="input"
              name="service"
              placeholder="Service (cut, color, highlights, etc.)"
            />

            <input
              className="input"
              name="preferred"
              placeholder="Preferred day/time"
            />

            <textarea
              className="input h-28"
              name="message"
              placeholder="Additional details"
            />

            <button
              type="submit"
              className="btn btn-gold w-full"
            >
              Send request
            </button>

            <p className="text-xs text-white/55">
              By submitting, you agree we may contact you about availability.
            </p>
          </form>
        </div>

        {/* LOCATION + HOURS */}
        <div className="space-y-6">
          <div className="card p-8">
            <h2 className="text-xl font-semibold">
              Location
            </h2>

            <p className="mt-3 text-white/70">
              1299 Washington Street
              <br />
              West Newton, MA 02465
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="map"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
              />
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-semibold">
              Hours
            </h2>

            <div className="mt-4 text-sm text-white/75 space-y-2">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>10–5</span>
              </div>

              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>10–5</span>
              </div>

              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>10–5</span>
              </div>

              <div className="flex justify-between">
                <span>Thursday</span>
                <span>10–5</span>
              </div>

              <div className="flex justify-between">
                <span>Friday</span>
                <span>10–2</span>
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
        </div>
      </div>
    </div>
  );
}