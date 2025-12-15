export default function About() {
  return (
    // Applied a light background for visual break, but kept text dark for contrast
    <section id="about" className="py-20 md:py-28 bg-white text-stone-900">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Two-Column Grid - Text on the left, Image on the right (reversed on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Column - Visible first on mobile, moved right on desktop (order-1 lg:order-2) */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/coffee-warm.jpg"
              alt="Cozy cafe interior with warm lighting"
              // Applied modern styling: object cover, rounded corners, and a subtle shadow
              className="w-full h-auto rounded-xl object-cover shadow-2xl shadow-stone-300/60"
              loading="lazy"
            />
          </div>

          {/* Text Column - Visible second on mobile, moved left on desktop (order-2 lg:order-1) */}
          <div className="order-2 lg:order-1">
            {/* Heading - Increased size and applied consistent amber accent */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-amber-500">
              Our Story
            </h2>

            {/* Main Paragraph - Increased size and strong contrast */}
            <p className="mt-4 text-lg md:text-xl font-normal leading-relaxed text-stone-700">
              At **Brew Lounge**, we celebrate slow mornings and the ritual of a
              well-made cup. We source beans with care, craft each drink by
              hand, and create a cozy atmosphere where neighbors linger and
              conversations unfold. Our passion is rooted in **community,
              craftsmanship, and comfort** — every detail is curated so you can
              slow down and savor the moment.
            </p>

            {/* Secondary Paragraph - Slightly smaller text for supporting detail */}
            <p className="mt-6 text-base md:text-lg font-light leading-relaxed text-stone-600 border-l-4 border-amber-300 pl-4">
              We believe great coffee brings people together. From the bar to
              the pastry case, our team focuses on quality ingredients, warm
              hospitality, and an inviting space for everyone. We're more than a
              cafe; we're your daily retreat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
