export default function Reviews() {
  const reviews = [
    {
      text: "Perfect cappuccino and a cozy corner to get work done — I come weekly.",
      name: "— Alex P.",
      stars: 5,
    },
    {
      text: "Lovely atmosphere, friendly staff, and the pastries are divine.",
      name: "— Maria L.",
      stars: 5,
    },
    {
      text: "Great spot for dates or a quiet afternoon with a book.",
      name: "— Jordan K.",
      stars: 4,
    },
  ];

  return (
    <section className="reviews-section py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{ color: "var(--brand)" }}
        >
          Loved by Our Guests
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <article key={idx} className="review-card p-6">
              <div className="quote-icon" aria-hidden>
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0h6v8.5C12 13 8 22 0 22V14.5C0 10 3 0 6 0zM22 0h6v8.5C28 13 24 22 16 22V14.5C16 10 19 0 22 0z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <p className="mt-4 review-text">{r.text}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="stars" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <div
                  className="reviewer text-sm"
                  style={{ color: "rgba(11,7,6,0.6)" }}
                >
                  {r.name}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
