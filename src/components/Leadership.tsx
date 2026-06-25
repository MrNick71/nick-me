import { leadership } from "@/data/site";

export function Leadership() {
  return (
    <section id="leadership" className="section-pad border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Leadership Impact</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Positions held & impact made
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            From school prefect to department head and team supervisor — leadership has been a through-line across my career.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((item) => (
            <article
              key={`${item.title}-${item.organization}`}
              className="card-hover rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-accent">
                {item.organization}
              </p>
              <p className="mt-1 text-xs text-ink-muted">{item.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
