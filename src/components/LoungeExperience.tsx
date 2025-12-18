import Image from "next/image";

export default function LoungeExperience() {
  // Using more descriptive photo data for better context
  const photos = [
    {
      id: 1,
      label: "Cozy Seating Area",
      span: "lg:col-span-2 lg:row-span-2",
      ratio: "aspect-square lg:aspect-[3/2]",
      href: "/cafe2.png",
      width: 600,
      height: 700,
    },
    {
      id: 2,
      label: "Barista Station",
      span: "lg:col-span-1",
      ratio: "aspect-square",
      href: "/barista.png",
      width: 300,
      height: 200,
    },
    {
      id: 3,
      label: "Quiet Workspace",
      span: "lg:col-span-1",
      ratio: "aspect-[4/3]",
      href: "/cafe3.png",
      width: 300,
      height: 200,
    },
    {
      id: 4,
      label: "Pastry Case Display",
      span: "lg:col-span-2",
      ratio: "aspect-video",
      href: "/cake.png",
      width: 300,
      height: 200,
    },
  ];

  return (
    // Light background for visual break
    <section
      id="lounge-experience"
      className="py-20 md:py-28 bg-stone-50 text-stone-900"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header - Centered, strong typography with amber accent */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-amber-500">
            The Lounge Experience
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            Perfect for work, meeting a date, or simply unwinding with a book.
          </p>
        </div>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              // Applied dynamic sizing for a staggered/masonry effect
              className={`lounge-photo group relative overflow-hidden rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.01] ${photo.span}`}
            >
              {/* Image Placeholder with aspect ratio */}
              <div
                className={`relative w-full h-full ${photo.ratio}`}
                role="img"
                aria-label={photo.label}
              >
                <Image
                  src={photo.href}
                  alt={photo.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={photo.id === 1}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-10 transition duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Optional Call to Action */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="group relative overflow-hidden px-12 py-4 text-base tracking-wide font-semibold border-2 border-amber-500 text-stone-900 hover:bg-amber-500 transition-all duration-300 rounded-full"
          >
            <span className="relative z-10 group-hover:text-stone-900">
              Book a Table Now
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
