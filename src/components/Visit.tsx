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
    // Applied dark background and padding
    <section id="visit" className="py-20 md:py-28 bg-stone-900 text-stone-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header - Aligned left (since this is often a utility section) */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-amber-500">
          Visit Us
        </h2>

        {/* Two-Column Grid for Info and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Column 1: Contact Information */}
          <div className="visit-info">
            {/* Address */}
            <div className="flex items-start mb-6">
              <PinIcon className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-stone-50">
                  Our Location
                </h3>
                <p className="text-lg text-stone-300">
                  123 Brew Street, Coffee City, CO 80000
                </p>
                <a
                  href="https://maps.app.goo.gl/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-amber-400 hover:text-amber-300 text-sm font-medium transition duration-200"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start mb-6">
              <ClockIcon className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-stone-50">
                  Opening Hours
                </h3>
                <div className="text-lg text-stone-300">
                  Mon–Fri: **7:00 AM – 7:00 PM**
                </div>
                <div className="text-lg text-stone-300">
                  Sat–Sun: **8:00 AM – 8:00 PM**
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-10">
              <PhoneIcon className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-stone-50">
                  Contact
                </h3>
                <a
                  href="tel:5551234567"
                  className="text-lg font-medium text-stone-300 hover:text-amber-400 transition duration-200"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <a
              href="#contact-form" // Assuming a contact form is below or on another page
              className="group relative overflow-hidden px-12 py-4 text-base tracking-wide font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-all duration-300 rounded-lg shadow-xl"
            >
              <span className="relative z-10">Reserve Your Table</span>
            </a>
          </div>

          {/* Column 2: Map Placeholder */}
          <div className="visit-map">
            <div className="map-placeholder w-full h-80 lg:h-full bg-stone-800 rounded-xl shadow-2xl flex items-center justify-center border border-stone-700">
              <p className="text-stone-500 italic">
                Interactive Map Widget Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
