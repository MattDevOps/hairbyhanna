import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b p-4">
      <div className="mx-auto flex max-w-5xl justify-between">
        <Link href="/" className="font-bold">
          Hair By Hanna
        </Link>
        <nav className="space-x-4">
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
