import { heroQuotes, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,92,38,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="section-label animate-fade-up">Personal site of</p>

        <h1 className="animate-fade-up animate-delay-1 mt-4 max-w-4xl font-serif text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="animate-fade-up animate-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#businesses"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Explore my work
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {heroQuotes.map((quote, i) => (
            <blockquote
              key={i}
              className="card-hover rounded-2xl border border-border bg-surface p-8"
            >
              <span className="quote-mark block" aria-hidden="true">
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
