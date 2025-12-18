import Link from "next/link";
import Image from "next/image";
// Using a Menu icon for the mobile state
const MenuIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export default function Header() {
  return (
    // Fixed position, dark background with transparency/blur, strong border-b
    <header className="fixed top-0 left-0 w-full z-50 border-b border-stone-800 bg-stone-900/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <div className="flex flex-row w-fit gap-3 items-center">
          {/* Logo image */}
          <Image src="/logo.png" alt="Brand Logo" width={50} height={50} />
          {/* Logo/Brand Name */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wider text-amber-500 hover:text-amber-400 transition-colors duration-200"
          >
            Brew Lounge
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 sm:flex">
          <a
            href="#menu"
            className="text-lg font-medium text-stone-50 hover:text-amber-500 transition-colors duration-200 relative group"
          >
            Menu
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-stone-50 hover:text-amber-500 transition-colors duration-200 relative group"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a
            href="#visit" // Changed to #visit for consistency with the last component
            className="text-lg font-medium text-stone-50 hover:text-amber-500 transition-colors duration-200 relative group"
          >
            Visit
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="sm:hidden p-2 text-stone-50 hover:text-amber-500 transition-colors duration-200"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
