import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Decorative blur */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />

      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-3xl">
          
          {/* Project name */}
          <p className="mb-3 text-md font-semibold uppercase tracking-widest text-primary-200">
            Aurbina Scholars Hub
          </p>

          {/* Headline */}
          <h1 className="mb-6 leading-tight">
            Rebuilding Lives Through
            <span className="block text-primary-200">
              Education, Dignity, and Hope
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 indent-8 text-lg text-white/90 leading-relaxed text-justify tracking-wider">
            A youth-led, non-profit organization supporting refugees from all
            backgrounds by creating inclusive and safe learning spaces. Through
            education, empowerment, and community-driven initiatives, we help
            rebuild confidence, resilience, and pathways to a better future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-800 hover:bg-gray-100 transition"
              aria-label="Support Aurbina Scholars Hub"
            >
              Support Our Mission
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary-800 transition"
              aria-label="Learn more about Aurbina Scholars Hub"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;