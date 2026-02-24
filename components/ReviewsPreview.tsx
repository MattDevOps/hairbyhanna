const reviews = [
  { name: "Local client", text: "Consistently great results. Hanna really listens and delivers a polished, natural look." },
  { name: "Long-time client", text: "Beautiful color and highlights that grow out nicely. Always a comfortable experience." },
  { name: "New client", text: "Super professional, clean, and efficient—my haircut came out exactly how I wanted." }
];

export default function ReviewsPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {reviews.map((r, idx) => (
        <div key={idx} className="rounded-2xl p-6 glass">
          <p className="text-sm text-white/80">“{r.text}”</p>
          <p className="mt-4 text-sm gold">— {r.name}</p>
        </div>
      ))}
    </div>
  );
}
