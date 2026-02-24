import Link from "next/link";

export default function CTA({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const cls = variant === "primary" ? "btn btn-primary" : "btn btn-ghost";
  const isExternal =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) return <a className={cls} href={href}>{children}</a>;
  return <Link className={cls} href={href}>{children}</Link>;
}
