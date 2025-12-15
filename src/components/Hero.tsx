export default function Hero() {
  return (
    // Set a high-contrast background for the whole section
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-900 text-stone-50">
      {/* Background layer (optional: use for background image/pattern) */}
      <div className="hero-bg absolute inset-0 opacity-10" />

      {/* Main content container - everything is centered here */}
      <div className="mx-auto max-w-5xl text-center px-6 md:px-8 z-10 py-20">
        {/* Sub-heading Group */}
        <div className="mb-6 md:mb-8">
          {/* Subtle Divider (better contrast and visibility) */}
          <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-4 opacity-70"></div>
          <p className="text-sm md:text-base uppercase tracking-widest font-medium text-amber-400 opacity-90">
            Artisan Coffee & Culinary Excellence
          </p>
        </div>

        {/* Main Title - Significantly Bigger and Bolder */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight leading-tight mb-4 text-stone-50">
          Brew Lounge
        </h1>

        {/* Main Slogan - Bigger and more prominent */}
        <p className="mt-6 text-2xl sm:text-3xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed text-stone-200">
          Where Coffee Meets Comfort
        </p>

        {/* Detailed Description */}
        <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg font-normal leading-relaxed text-stone-400">
          Meticulously crafted brews, artisanal bites, and a sanctuary to savor
          the moment. Every bean tells a story, and every cup is an experience.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="#menu"
            // Primary Button: High contrast color (Amber)
            className="group relative overflow-hidden px-10 py-4 text-base tracking-wider font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-all duration-300 rounded-lg shadow-xl hover:scale-[1.02]"
          >
            <span className="relative z-10">Explore Menu</span>
          </a>
          <a
            href="#contact"
            // Secondary Button: Outline style for less visual dominance
            className="px-10 py-4 text-base tracking-wider font-semibold border-2 border-stone-600 text-stone-200 hover:border-stone-500 hover:text-stone-50 transition-all duration-300 rounded-lg"
          >
            Reserve Your Table
          </a>
        </div>
      </div>

      {/* Grain Overlay - Kept this for texture, but ensure it's subtle */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-20" />
    </section>
  );
}
