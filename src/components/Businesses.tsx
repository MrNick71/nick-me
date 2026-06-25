import { businesses } from "@/data/site";
import { VenturePortfolio } from "@/components/VenturePortfolio";

export function Businesses() {
  return (
    <section id="businesses" className="section-pad border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-label">Business Portfolio</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Ventures I&apos;ve built
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              From SaaS platforms to security systems and print services — each
              venture reflects a different facet of my expertise.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {businesses.map((business) => (
            <article
              key={business.name}
              className="card-hover overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="grid lg:grid-cols-3">
                <div className="border-b border-border bg-deep p-8 text-cream lg:border-b-0 lg:border-r">
                  <span className="inline-block rounded-full bg-accent-soft/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-glow">
                    {business.tag}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl font-bold">
                    {business.name}
                  </h3>
                  <p className="mt-2 text-sm text-cream/70">{business.role}</p>
                  <p className="mt-1 text-sm text-cream/50">
                    {business.period}
                  </p>
                </div>

                <div className="p-8 lg:col-span-2">
                  <p className="text-base leading-relaxed text-ink-muted">
                    {business.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {business.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <VenturePortfolio
                ventureName={business.name}
                slug={business.slug}
                media={business.media}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
