export default function Hero() {
  return (
    <section className="hero-full relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-bg absolute inset-0" />

      <div className="mx-auto max-w-4xl text-center px-8">
        <div className="mb-8 inline-block">
          <div className="w-16 h-px bg-current opacity-30 mx-auto mb-6"></div>
          <p className="text-sm uppercase tracking-widest font-light hero-sub opacity-80">
            Artisan Coffee & Culinary Excellence
          </p>
        </div>

        <h1 className="text-7xl md:text-8xl font-light tracking-tight leading-none hero-title mb-6">
          Brew Lounge
        </h1>

        <p className="mt-8 text-xl md:text-2xl font-light tracking-wide hero-sub opacity-90 max-w-2xl mx-auto leading-relaxed">
          Where Coffee Meets Comfort
        </p>

        <p className="mt-8 mx-auto max-w-xl text-base md:text-lg font-light leading-relaxed hero-desc opacity-75">
          Meticulously crafted brews, artisanal bites, and a sanctuary to savor
          the moment.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#menu"
            className="btn-primary group relative overflow-hidden px-10 py-4 text-base tracking-wide transition-all duration-300"
          >
            <span className="relative z-10">Explore Menu</span>
          </a>
          <a
            href="#contact"
            className="btn-secondary px-10 py-4 text-base tracking-wide transition-all duration-300"
          >
            Reserve Your Table
          </a>
        </div>
      </div>

      <div className="grain-overlay pointer-events-none" />

      <svg
        className="steam-svg pointer-events-none"
        width="320"
        height="260"
        viewBox="0 0 320 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g
          opacity="0.06"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <path d="M40 220 C30 160 70 140 60 90" />
          <path d="M90 220 C80 160 120 140 110 90" />
          <path d="M140 220 C130 160 170 140 160 90" />
        </g>
      </svg>
    </section>
  );
}
