import { heroQuotes, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-banner relative overflow-hidden">
      <div className="hero-banner__base" aria-hidden="true" />
      <div className="hero-banner__mesh" aria-hidden="true" />
      <div className="hero-banner__grid" aria-hidden="true" />
      <div className="hero-banner__shine" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-6 md:pt-14 md:pb-10">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">
          <div>
            <p className="section-label-light animate-fade-up">
              Personal site of
            </p>

            <h1 className="animate-fade-up animate-delay-1 mt-4 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>

            <p className="animate-fade-up animate-delay-2 mt-4 text-sm font-medium uppercase tracking-[0.2em] text-accent-glow md:text-base">
              Visionary entrepreneur &amp; problem solver
            </p>

            <p className="animate-fade-up animate-delay-2 mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              {siteConfig.tagline}
            </p>

            <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="btn-primary rounded-full px-7 py-3 text-sm font-semibold shadow-lg shadow-black/20"
              >
                View services
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light rounded-full px-7 py-3 text-sm font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[260px] shrink-0 sm:max-w-[280px] md:mx-0 md:max-w-[300px]">
            <div className="hero-portrait-ring overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.portrait}
                alt={`Portrait of ${siteConfig.name}`}
                width={300}
                height={400}
                className="aspect-[3/4] h-auto w-full object-cover object-top"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {heroQuotes.map((quote, i) => (
            <blockquote
              key={i}
              className="hero-quote-card card-hover rounded-2xl border p-8"
            >
              <span
                className="quote-mark block text-accent"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-2 font-serif text-lg leading-relaxed text-ink">
                {quote.text}
              </p>
              <footer className="mt-4 text-sm text-ink-muted">
                — {quote.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
