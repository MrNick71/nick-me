import {
  aboutHeadline,
  aboutParagraphs,
  aboutStats,
  contractServices,
} from "@/data/site";

export function About() {
  return (
    <section id="about" className="section-pad border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="section-label">Professional biography</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {aboutHeadline}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Who I am, what I build, and the standard I hold myself to.
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:col-span-3 md:text-lg">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="section-label">Engagement model</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Available on a contract basis for corporate, residential, and
                commercial clients. Projects are scoped for precision,
                cost-effectiveness, and on-time delivery.
              </p>
              <p className="mt-6 font-serif text-lg font-semibold text-ink">
                Seeking a reliable, tech-savvy professional to elevate your
                security, branding, or digital presence?
              </p>
              <a
                href="#contact"
                className="btn-primary mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-semibold"
              >
                Start a conversation
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <p className="font-serif text-4xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section-pad border-b border-border bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Contract services</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            What I deliver
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Specialized, scalable services across design, print, security, and
            technology — tailored to each client&apos;s needs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contractServices.map((service) => (
            <article
              key={service.title}
              className="card-hover rounded-2xl border border-border p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
