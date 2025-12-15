export default function LoungeExperience() {
  const photos = [1, 2, 3, 4];

  return (
    <section className="lounge-section py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className="text-3xl font-semibold mb-2"
          style={{ color: "var(--cream)" }}
        >
          The Lounge Experience
        </h2>
        <p className="text-lg text-cream-muted mb-6">
          Perfect for work, dates, or unwinding.
        </p>

        <div className="lounge-grid">
          {photos.map((n) => (
            <div
              key={n}
              className="lounge-photo"
              role="img"
              aria-label={`Interior ${n}`}
            >
              <div className="photo-inner">
                <div className="photo-placeholder">Photo {n}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
