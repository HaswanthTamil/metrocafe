type Item = { name: string; price: string; desc?: string };

const items: Item[] = [
  {
    name: "The Gold Rush Latte",
    price: "$5.50",
    desc: "House espresso, steamed milk, hint of maple and cinnamon.",
  },
  {
    name: "Artisan Pour-Over",
    price: "$4.00",
    desc: "Single-origin bean, meticulously hand-brewed (ask for current selection).",
  },
  {
    name: "Iced Caramel Macchiato",
    price: "$6.00",
    desc: "Layers of vanilla syrup, milk, espresso, and rich caramel drizzle.",
  },
  {
    name: "Chai Tea Latte",
    price: "$4.50",
    desc: "Spicy black tea concentrate blended with steamed oat milk.",
  },
  // Adding food items for a balanced section
  {
    name: "Avocado Sourdough Toast",
    price: "$9.00",
    desc: "Thick-cut sourdough, fresh lime, chili flakes, and sea salt.",
  },
  {
    name: "Prosciutto Panini",
    price: "$14.00",
    desc: "Grilled focaccia with prosciutto, mozzarella, arugula, and balsamic glaze.",
  },
  {
    name: "Seasonal Quiche",
    price: "$10.50",
    desc: "Flaky crust filled with local vegetables and artisan cheese.",
  },
  {
    name: "Buttermilk Waffles",
    price: "$11.00",
    desc: "Served with fresh berries, maple syrup, and whipped cream.",
  },
];

// Helper component for a visually distinct menu item
const MenuItem = ({ item }: { item: Item }) => (
  <div
    key={item.name}
    className="py-4 border-b border-stone-800 last:border-b-0"
  >
    <div className="flex items-start justify-between">
      {/* Item Name & Description */}
      <div className="mr-4">
        <h4 className="text-xl font-medium tracking-wide text-stone-50">
          {item.name}
        </h4>
        {item.desc && (
          <p className="mt-1 text-base font-light text-stone-400 max-w-xl">
            {item.desc}
          </p>
        )}
      </div>

      {/* Price - Highlighted with the accent color */}
      <div className="flex-shrink-0 ml-4">
        <p className="text-xl font-bold tracking-wide text-amber-500">
          {item.price}
        </p>
      </div>
    </div>
  </div>
);

export default function Menu() {
  // Split items into two categories (Coffee and Food) for better presentation
  const coffeeItems = items.slice(0, 4);
  const foodItems = items.slice(4, 8);

  return (
    // Dark background for a premium, consistent look
    <section id="menu" className="py-20 bg-stone-900 text-stone-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Main Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold text-amber-400">
            Our Signature Menu
          </h3>
          <p className="mt-4 text-lg text-stone-400 max-w-2xl mx-auto">
            Discover a selection of our most popular artisan beverages and
            carefully crafted brunch essentials.
          </p>
        </div>

        {/* Menu Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Column 1: Coffee & Drinks */}
          <div>
            <h4 className="text-3xl font-bold mb-6 text-stone-50 border-b border-amber-500/50 pb-2">
              ☕ Espresso & Brews
            </h4>
            {coffeeItems.map((it) => (
              <MenuItem key={it.name} item={it} />
            ))}
          </div>

          {/* Column 2: Food & Pastries */}
          <div>
            <h4 className="text-3xl font-bold mb-6 text-stone-50 border-b border-amber-500/50 pb-2">
              🍽️ Bites & Brunch
            </h4>
            {foodItems.map((it) => (
              <MenuItem key={it.name} item={it} />
            ))}
          </div>
        </div>

        {/* Optional Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="/full-menu.pdf"
            target="_blank"
            className="inline-flex items-center group relative overflow-hidden px-8 py-3 text-base tracking-wide font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-all duration-300 rounded-lg shadow-xl"
          >
            <span className="relative z-10">View Full Menu PDF</span>
            {/* Optional visual cue like an arrow icon */}
          </a>
        </div>
      </div>
    </section>
  );
}
