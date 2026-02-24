export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] gold">About</p>
      <h1 className="mt-3 text-3xl md:text-5xl font-semibold">Hair By Hanna</h1>
      <p className="mt-4 text-white/70 max-w-2xl">
        A calm, luxury salon experience focused on precision and consistent results.
        Serving West Newton and nearby communities.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <p className="font-semibold">Philosophy</p>
          <p className="mt-2 text-sm text-white/70">
            Natural, elevated looks that suit your routine and grow out beautifully.
          </p>
        </div>
        <div className="card p-6">
          <p className="font-semibold">What to expect</p>
          <p className="mt-2 text-sm text-white/70">
            Consultation-first approach, professional products, and guidance to maintain your look.
          </p>
        </div>
      </div>
    </div>
  );
}