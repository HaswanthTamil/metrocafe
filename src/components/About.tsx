export default function About() {
  return (
    <section className="about-section py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="about-grid gap-8 items-center">
          <div>
            <h2
              className="text-3xl font-semibold"
              style={{ color: "var(--brand)" }}
            >
              Our Story
            </h2>

            <p className="mt-4 text-lg" style={{ color: "rgba(11,7,6,0.85)" }}>
              At Brew Lounge, we celebrate slow mornings and the ritual of a
              well-made cup. We source beans with care, craft each drink by
              hand, and create a cozy atmosphere where neighbors linger and
              conversations unfold. Our passion is rooted in community,
              craftsmanship, and comfort — every detail is curated so you can
              slow down and savor the moment.
            </p>

            <p
              className="mt-4 text-base"
              style={{ color: "rgba(11,7,6,0.75)" }}
            >
              We believe great coffee brings people together. From the bar to
              the pastry case, our team focuses on quality ingredients, warm
              hospitality, and an inviting space for everyone.
            </p>
          </div>

          <div>
            <img
              src="/images/coffee-warm.jpg"
              alt="Cozy cafe interior"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
