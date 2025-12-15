export default function Signatures() {
  const items = [
    {
      title: "Signature Coffee",
      desc: "House blend pour-overs and espresso creations.",
    },
    {
      title: "Fresh Pastries",
      desc: "Baked daily — flaky, buttery, and irresistible.",
    },
    {
      title: "All-Day Breakfast",
      desc: "Comfort plates served from morning till evening.",
    },
    {
      title: "Chef's Specials",
      desc: "Seasonal small plates crafted by our chef.",
    },
  ];

  return (
    <section className="signatures-section py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--brand)" }}
        >
          Our Signatures
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="signature-card p-6">
              <div className="signature-icon mb-4" aria-hidden />
              <h3
                className="text-xl font-medium mb-2"
                style={{ color: "var(--cream)" }}
              >
                {it.title}
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,247,230,0.9)" }}>
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
