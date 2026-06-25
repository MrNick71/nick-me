import Image from "next/image";
import { heroQuotes, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--color-accent)_10%,transparent),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-6 md:pt-12 md:pb-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div>
            <p className="section-label animate-fade-up">Personal site of</p>

            <h1 className="animate-fade-up animate-delay-1 mt-4 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>

            <p className="animate-fade-up animate-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
              {siteConfig.tagline}
            </p>

            <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="btn-primary rounded-full px-7 py-3 text-sm font-semibold"
              >
                View services
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost rounded-full px-7 py-3 text-sm font-semibold text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-2 mx-auto w-full max-w-[280px] shrink-0 lg:mx-0 lg:max-w-[300px]">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_40px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={siteConfig.portrait}
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 280px, 300px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
