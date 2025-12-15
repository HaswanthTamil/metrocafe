// Using a simple icon placeholder to represent the signature items
const CoffeeIcon = ({ className }: { className: string | null }) => (
  <svg
    className={className ? className : ""}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 8H5v10h12a4 4 0 0 0 0-8z" />
    <path d="M10 12h2" />
    <path d="M12 2a4 4 0 0 0 4 4h4a2 2 0 0 1 0 4h-1" />
  </svg>
);

export default function Signatures() {
  const items = [
    {
      title: "Signature Coffee",
      desc: "House blend pour-overs and espresso creations—meticulously sourced and expertly prepared.",
      icon: CoffeeIcon,
    },
    {
      title: "Fresh Pastries",
      desc: "Baked daily—flaky, buttery, and irresistible croissants, scones, and danishes.",
      icon: CoffeeIcon,
    },
    {
      title: "All-Day Brunch",
      desc: "Comfort plates served from morning till evening, featuring our famous avocado toast.",
      icon: CoffeeIcon,
    },
    {
      title: "Chef's Specials",
      desc: "Seasonal small plates crafted by our chef, highlighting the freshest local ingredients.",
      icon: CoffeeIcon,
    },
    // Adding two more for a cleaner grid on desktop (4 or 6 items look best)
    {
      title: "Artisan Teas",
      desc: "A curated selection of loose-leaf black, green, and herbal teas from around the globe.",
      icon: CoffeeIcon,
    },
    {
      title: "Retail Roasts",
      desc: "Take the experience home with our selection of freshly roasted, whole-bean coffee.",
      icon: CoffeeIcon,
    },
  ];

  return (
    // Applied dark background and padding consistent with Hero section
    <section id="signatures" className="py-20 bg-stone-900 text-stone-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Heading - Increased size and applied amber accent */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-amber-400">
          Our Signature Offerings
        </h2>

        {/* Grid Layout - Adjusted for 4 columns on large screens for visual balance */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {items.map((it) => (
            // Individual Card Styling - Added border, rounded corners, and padding
            <article
              key={it.title}
              className="p-8 border border-stone-800 rounded-xl transition duration-300 hover:border-amber-500 hover:shadow-2xl hover:shadow-stone-900/50"
            >
              {/* Icon Placeholder - Used a simple component with accent color */}
              <div className="signature-icon mb-4">
                <CoffeeIcon className="w-8 h-8 text-amber-500" />
              </div>

              {/* Item Title - Increased size and contrast */}
              <h3 className="text-2xl font-semibold mb-3 text-stone-100">
                {it.title}
              </h3>

              {/* Description - Better contrast and slightly larger font */}
              <p className="text-base font-light text-stone-400 leading-relaxed">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
