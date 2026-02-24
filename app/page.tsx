export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Hair Salon in West Newton, MA</h1>
      <p className="mt-4 text-lg">
        Welcome to Hair By Hanna. Professional haircuts, color, highlights and styling.
      </p>
      <a
        href="/contact"
        className="mt-6 inline-block rounded bg-black px-6 py-3 text-white"
      >
        Request Appointment
      </a>
    </div>
  );
}
