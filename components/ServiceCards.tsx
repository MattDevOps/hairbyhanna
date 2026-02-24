import Link from "next/link";

const services = [
  { href: "/services/haircuts", title: "Haircuts", desc: "Women’s and men’s cuts tailored to your style and lifestyle." },
  { href: "/services/hair-color", title: "Hair Color", desc: "Root touch-ups and single-process color with natural results." },
  { href: "/services/highlights", title: "Highlights", desc: "Dimension and brightness—subtle to bold." },
  { href: "/services/brazilian-blowout", title: "Brazilian Blowout", desc: "Smoother, more manageable hair with long-lasting polish." },
  { href: "/services/treatments", title: "Treatments", desc: "Conditioning and hair health support for shine and strength." }
];

export default function ServiceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link key={s.href} href={s.href} className="rounded-2xl p-6 glass hover:translate-y-[-1px] transition">
          <p className="text-lg font-semibold tracking-tight">{s.title}</p>
          <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          <p className="mt-4 text-sm gold">Learn more →</p>
        </Link>
      ))}
    </div>
  );
}
