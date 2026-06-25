import { linkedinArticles, siteConfig } from "@/data/site";

export function Articles() {
  return (
    <section id="articles" className="section-pad border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Writing & Insights</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Articles on LinkedIn
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Long-form reflections on design, entrepreneurship, resilience, and
            technology — published on LinkedIn.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {linkedinArticles.map((article) => (
            <article
              key={article.url}
              className="card-hover group flex flex-col rounded-2xl border border-border bg-surface p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <time
                  dateTime={article.date}
                  className="text-sm font-medium text-accent"
                >
                  {article.dateLabel}
                </time>
                <span className="rounded-full border border-border bg-surface-alt px-3 py-0.5 text-xs font-medium text-ink-muted">
                  {article.topic}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-ink transition-colors group-hover:text-accent md:text-2xl">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {article.title}
                </a>
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                {article.excerpt}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
              >
                Read on LinkedIn
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`${siteConfig.linkedin}recent-activity/articles/`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            View all articles on LinkedIn
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
