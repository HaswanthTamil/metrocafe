// Simple Icons for visual separation
const PinIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PhoneIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72L9.63 9a2 2 0 0 1-.41 1.6L6.5 13.5a12 12 0 0 0 6 6l1.9-1.92a2 2 0 0 1 1.6-.41l5.24.64a2 2 0 0 1 1.72 2z" />
  </svg>
);

export default function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28 bg-stone-900 text-stone-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-amber-500">
          Visit Us
        </h2>

        {/* Single Column Layout */}
        <div className="max-w-2xl lg:max-w-3xl">
          <div className="visit-info">
            {/* Address */}
            <div className="flex items-start mb-6">
              <PinIcon className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold mb-1">Our Location</h3>
                <p className="text-lg text-stone-300">
                  123 Brew Street, Coffee City, CO 80000
                </p>
                <a
                  href="https://maps.app.goo.gl/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-amber-400 hover:text-amber-300 text-sm font-medium transition"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start mb-6">
              <ClockIcon className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold mb-1">Opening Hours</h3>
                <p className="text-lg text-stone-300">
                  Mon–Fri: <strong>7:00 AM – 7:00 PM</strong>
                </p>
                <p className="text-lg text-stone-300">
                  Sat–Sun: <strong>8:00 AM – 8:00 PM</strong>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-10">
              <PhoneIcon className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold mb-1">Contact</h3>
                <a
                  href="tel:5551234567"
                  className="text-lg font-medium text-stone-300 hover:text-amber-400 transition"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact-form"
              className="inline-block px-12 py-4 text-base tracking-wide font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-all duration-300 rounded-lg shadow-xl"
            >
              Reserve Your Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
