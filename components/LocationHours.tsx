import { site, mapQuery } from "@/lib/site";
import CTA from "@/components/CTA";

export default function LocationHours() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl p-6 glass">
        <p className="text-sm text-white/70">Address</p>
        <p className="mt-2 font-semibold">{site.address.street}</p>
        <p className="text-white/70">{site.address.city}, {site.address.region} {site.address.postalCode}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl p-4 subtle-border bg-white/5">
            <p className="text-xs text-white/60">Phone</p>
            <a className="mt-1 inline-flex text-sm underline underline-offset-4" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </div>
          <div className="rounded-2xl p-4 subtle-border bg-white/5">
            <p className="text-xs text-white/60">Email</p>
            <a className="mt-1 inline-flex text-sm underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-6">
          <CTA href={`https://www.google.com/maps?q=${mapQuery()}`} variant="ghost">Open in Google Maps</CTA>
        </div>
      </div>

      <div className="rounded-2xl p-6 glass">
        <p className="text-sm text-white/70">Hours</p>
        <ul className="mt-4 space-y-2 text-sm">
          {site.hours.map((h) => (
            <li key={h.day} className="flex items-center justify-between gap-6">
              <span className="text-white/75">{h.day}</span>
              <span className="text-white/90">{h.hours}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 overflow-hidden rounded-2xl subtle-border">
          <iframe
            title="map"
            className="h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery()}&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}
