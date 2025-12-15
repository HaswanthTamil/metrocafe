import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-semibold"
          style={{ color: "var(--brand)" }}
        >
          Brew Lounge
        </Link>
        <nav className="hidden gap-6 sm:flex">
          <a href="#menu" className="hover:underline">
            Menu
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
        <div className="sm:hidden">☰</div>
      </div>
    </header>
  );
}
