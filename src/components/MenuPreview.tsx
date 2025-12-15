type MenuItem = { name: string; price: string };

const coffee: MenuItem[] = [
  { name: "House Espresso", price: "$3.50" },
  { name: "Pour Over", price: "$4.50" },
  { name: "Cappuccino", price: "$4.00" },
  { name: "Signature Iced Tea", price: "$3.50" },
];

const food: MenuItem[] = [
  { name: "Avocado Toast", price: "$9.00" },
  { name: "Grilled Panini", price: "$12.00" },
  { name: "Soup of the Day", price: "$6.00" },
  { name: "Local Greens Salad", price: "$10.50" },
];

const desserts: MenuItem[] = [
  { name: "Almond Croissant", price: "$4.00" },
  { name: "Chocolate Tart", price: "$5.50" },
  { name: "Blueberry Muffin", price: "$3.50" },
  { name: "Gluten-Free Brownie", price: "$4.50" },
];

// Reusable component for a menu list item with a dotted line separator
const MenuItemDisplay = ({ name, price }: MenuItem) => (
  <li className="flex items-baseline justify-between py-2">
    {/* Item Name - Light text for contrast */}
    <span className="text-lg font-normal text-stone-200 tracking-wide">
      {name}
    </span>

    {/* Separator - Lighter dashed line for contrast against dark background */}
    <span className="flex-1 border-b border-dashed border-stone-700 mx-2 sm:mx-4"></span>

    {/* Price - Highlighted with accent color */}
    <span className="text-lg font-bold text-amber-500 flex-shrink-0">
      {price}
    </span>
  </li>
);

export default function MenuPreview() {
  return (
    // Applied stone-900 background and light text
    <section id="menu-preview" className="py-20 bg-stone-900 text-stone-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Main Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-amber-400">
            Menu Highlights
          </h2>
          <p className="mt-2 text-lg text-stone-400">
            A glimpse into our most beloved offerings, hand-picked by our
            regulars.
          </p>
        </div>

        {/* Menu Grid - Three columns on larger screens */}
        <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Coffee Column - Card styling adjusted for dark background */}
          <div className="p-4 border-2 border-stone-800 rounded-lg shadow-xl shadow-stone-950/50">
            <h3 className="text-2xl font-bold mb-4 text-stone-50 border-b border-amber-500/50 pb-2">
              ☕ Coffee & Tea
            </h3>
            <ul className="space-y-1">
              {coffee.map((it) => (
                <MenuItemDisplay
                  key={it.name}
                  name={it.name}
                  price={it.price}
                />
              ))}
            </ul>
          </div>

          {/* Food Column */}
          <div className="p-4 border-2 border-stone-800 rounded-lg shadow-xl shadow-stone-950/50">
            <h3 className="text-2xl font-bold mb-4 text-stone-50 border-b border-amber-500/50 pb-2">
              🍽️ Savory Bites
            </h3>
            <ul className="space-y-1">
              {food.map((it) => (
                <MenuItemDisplay
                  key={it.name}
                  name={it.name}
                  price={it.price}
                />
              ))}
            </ul>
          </div>

          {/* Desserts Column */}
          <div className="p-4 border-2 border-stone-800 rounded-lg shadow-xl shadow-stone-950/50">
            <h3 className="text-2xl font-bold mb-4 text-stone-50 border-b border-amber-500/50 pb-2">
              🍰 Fresh Pastries
            </h3>
            <ul className="space-y-1">
              {desserts.map((it) => (
                <MenuItemDisplay
                  key={it.name}
                  name={it.name}
                  price={it.price}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action - Primary button style retained */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="group relative overflow-hidden px-12 py-4 text-base tracking-wide font-semibold bg-amber-500 text-stone-900 hover:bg-amber-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Explore Our Full Menu</span>
          </a>
        </div>
      </div>
    </section>
  );
}
