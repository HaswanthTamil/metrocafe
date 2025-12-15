type Item = { name: string; price: string; desc?: string };

const items: Item[] = [
  { name: "Avocado Toast", price: "$9", desc: "Sourdough, lime, chili flakes" },
  { name: "Signature Latte", price: "$4.5", desc: "House espresso blend" },
  { name: "Grilled Panini", price: "$12", desc: "Mozzarella, tomato, basil" },
  { name: "Seasonal Salad", price: "$10", desc: "Local greens, vinaigrette" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-2xl font-semibold">Our Menu</h3>
        <p className="mt-2 text-zinc-600">
          A small selection of customer favorites.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.name} className="rounded-lg border p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-medium">{it.name}</h4>
                  <p className="mt-1 text-sm text-zinc-600">{it.desc}</p>
                </div>
                <div
                  className="ml-4 text-sm font-medium"
                  style={{ color: "var(--brand)" }}
                >
                  {it.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
