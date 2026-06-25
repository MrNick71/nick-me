import { principles } from "@/data/site";

export function Principles() {
  return (
    <section id="principles" className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Principles & Ideologies</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            What guides my work
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            The beliefs and standards behind every business, project, and leadership role.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {principles.map((principle, i) => (
            <article
              key={principle.title}
              className="card-hover group rounded-2xl border border-border p-8"
            >
              <span className="font-serif text-5xl font-bold text-border transition-colors group-hover:text-accent/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
