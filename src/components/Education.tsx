import { education } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Education & Certifications</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Continuous learning
          </h2>
        </div>

        <div className="mt-16 grid gap-4">
          {education.map((item) => (
            <article
              key={`${item.title}-${item.institution}`}
              className="card-hover flex flex-col justify-between gap-4 rounded-xl border border-border p-6 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{item.institution}</p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {item.type}
                </span>
                <span className="text-sm text-ink-muted">{item.period}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
