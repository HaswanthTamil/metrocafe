type MenuItem = { name: string; price: string };

const coffee: MenuItem[] = [
  { name: "House Espresso", price: "$3.5" },
  { name: "Pour Over", price: "$4.5" },
  { name: "Cappuccino", price: "$4" },
];

const food: MenuItem[] = [
  { name: "Avocado Toast", price: "$9" },
  { name: "Grilled Panini", price: "$12" },
];

const desserts: MenuItem[] = [
  { name: "Almond Croissant", price: "$4" },
  { name: "Chocolate Tart", price: "$5.5" },
];

export default function MenuPreview() {
  return (
    <section className="menu-preview-section py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--brand)" }}
        >
          Menu Highlights
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3
              className="text-xl font-medium mb-3"
              style={{ color: "var(--brand)" }}
            >
              Coffee
            </h3>
            <ul className="space-y-2">
              {coffee.map((it) => (
                <li key={it.name} className="flex items-center justify-between">
                  <span>{it.name}</span>
                  <span style={{ color: "var(--brand)", fontWeight: 600 }}>
                    {it.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xl font-medium mb-3"
              style={{ color: "var(--brand)" }}
            >
              Food
            </h3>
            <ul className="space-y-2">
              {food.map((it) => (
                <li key={it.name} className="flex items-center justify-between">
                  <span>{it.name}</span>
                  <span style={{ color: "var(--brand)", fontWeight: 600 }}>
                    {it.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xl font-medium mb-3"
              style={{ color: "var(--brand)" }}
            >
              Desserts
            </h3>
            <ul className="space-y-2">
              {desserts.map((it) => (
                <li key={it.name} className="flex items-center justify-between">
                  <span>{it.name}</span>
                  <span style={{ color: "var(--brand)", fontWeight: 600 }}>
                    {it.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a className="btn-explore" href="/menu">
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
