import Link from "next/link";

const REVIEWS = [
  {
    name: "Local client",
    text: "Hanna is meticulous and really listens. Color came out natural and exactly what I wanted.",
  },
  {
    name: "Repeat customer",
    text: "Best haircut I’ve had in years — shape and movement are perfect and it grows out nicely.",
  },
  {
    name: "Highlights client",
    text: "My highlights look dimensional and blended. Super professional and calm experience.",
  },
  {
    name: "New client",
    text: "Great consultation and recommendations. Loved the finish and shine.",
  },
  {
    name: "Color client",
    text: "Root coverage was seamless and the tone is beautiful. Highly recommend.",
  },
  {
    name: "West Newton",
    text: "Clean studio, great vibe, and consistent results every time.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">Reviews</p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold">Client love</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Consistent results, calm experience, and looks that grow out beautifully.
          </p>
        </div>
        <Link href="/contact" className="btn btn-gold">Book</Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <div key={r.name + r.text} className="card p-6">
            <p className="text-sm text-white/80">“{r.text}”</p>
            <p className="mt-4 text-xs text-white/55">— {r.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 card p-10">
        <p className="text-xs uppercase tracking-[0.25em] gold">Book</p>
        <h2 className="mt-3 text-2xl font-semibold">Want this result?</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Request an appointment and we’ll confirm availability.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn btn-gold">Request Appointment</Link>
          <a href="tel:+16179653012" className="btn btn-ghost">Call 617-965-3012</a>
        </div>
      </div>
    </div>
  );
}