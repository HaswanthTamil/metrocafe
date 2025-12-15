"use client";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ color: "var(--cream)" }}>
              <div
                className="brand-title"
                style={{ fontSize: "1.25rem", fontWeight: 700 }}
              >
                Brew Lounge
              </div>
              <div
                className="brand-tagline"
                style={{ opacity: 0.9, marginTop: 6 }}
              >
                Where Coffee Meets Comfort
              </div>
            </div>
          </div>

          <div className="footer-subscribe">
            <form
              className="subscribe-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="your@email.com"
                className="subscribe-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </form>
          </div>

          <div className="footer-info">
            <div style={{ color: "rgba(255,247,230,0.9)", marginBottom: 8 }}>
              Contact
            </div>
            <div style={{ color: "rgba(255,247,230,0.85)" }}>
              123 Brew Street, Coffee City
            </div>
            <div style={{ color: "rgba(255,247,230,0.85)" }}>
              (555) 123-4567
            </div>
          </div>
        </div>

        <div
          className="mt-8 copyright"
          style={{ color: "rgba(255,247,230,0.7)" }}
        >
          © {new Date().getFullYear()} Brew Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
