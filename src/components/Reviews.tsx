// Star component for rendering ratings
const StarRating = ({ count }: { count: number }) => (
  <div className="flex text-amber-500">
    {/* Full Stars */}
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.277L12 18.896l-7.416 3.847 1.48-8.277L.001 9.306l8.332-1.151L12 .587z" />
      </svg>
    ))}
    {/* Empty Stars (for a full 5-star view) */}
    {Array.from({ length: 5 - count }).map((_, i) => (
      <svg
        key={i + count}
        className="w-5 h-5 fill-current text-stone-300" // Use a muted color for empty stars
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.277L12 18.896l-7.416 3.847 1.48-8.277L.001 9.306l8.332-1.151L12 .587z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  const reviews = [
    {
      text: "Perfect cappuccino and a cozy corner to get work done—I come weekly for the atmosphere and excellent service.",
      name: "Alex P.",
      stars: 5,
    },
    {
      text: "Lovely atmosphere, friendly staff, and the pastries are divine. The almond croissant is a must-try!",
      name: "Maria L.",
      stars: 5,
    },
    {
      text: "Great spot for dates or a quiet afternoon with a book. The food menu is simple but perfectly executed.",
      name: "Jordan K.",
      stars: 4,
    },
  ];

  return (
    // Light background for visual break
    <section id="reviews" className="py-20 bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header - Centered and prominent */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-amber-500">
            Loved by Our Guests
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            See what our community is saying about the Brew Lounge experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <article
              key={idx}
              className="review-card p-8 border border-stone-200 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Quote Icon - Styled with the accent color */}
              <div className="quote-icon mb-4 text-amber-500" aria-hidden>
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

              {/* Review Text - Increased size and contrast */}
              <p className="mt-4 text-lg italic text-stone-700 leading-relaxed">
                "{r.text}"
              </p>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                {/* Star Rating Component */}
                <StarRating count={r.stars} />

                {/* Reviewer Name - Bold and high-contrast */}
                <div className="reviewer text-base font-semibold text-stone-900">
                  — {r.name}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
