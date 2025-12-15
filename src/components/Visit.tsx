export default function Visit() {
  return (
    <section className="visit-section py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{ color: "var(--cream)" }}
        >
          Visit Us
        </h2>

        <div className="visit-grid">
          <div className="visit-info">
            <p
              className="mb-3"
              style={{ color: "var(--cream)", fontWeight: 600 }}
            >
              123 Brew Street, Coffee City, CO 80000
            </p>

            <div className="mb-3" style={{ color: "rgba(255,247,230,0.95)" }}>
              <div>
                <strong>Hours</strong>
              </div>
              <div>Mon–Fri: 7:00 AM – 7:00 PM</div>
              <div>Sat–Sun: 8:00 AM – 8:00 PM</div>
            </div>

            <div className="mb-6" style={{ color: "rgba(255,247,230,0.95)" }}>
              <div>
                <strong>Phone</strong>
              </div>
              <div>(555) 123-4567</div>
            </div>

            <a href="#contact" className="btn-reserve">
              Reserve a Table
            </a>
          </div>

          <div className="visit-map">
            <div className="map-placeholder">Map placeholder</div>
          </div>
        </div>
      </div>
    </section>
  );
}
