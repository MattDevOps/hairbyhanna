import Container from "@/components/Container";

export default function Section({
  eyebrow,
  title,
  subtitle,
  children
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14 md:py-18">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-xs tracking-[0.22em] uppercase gold">{eyebrow}</p> : null}
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-3 text-[15px] md:text-base text-white/70">{subtitle}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
