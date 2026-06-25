import { experience } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="section-pad border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Work Experience</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Professional journey
          </h2>
        </div>

        <div className="mt-10 space-y-0">
          {experience.map((item, i) => (
            <article
              key={`${item.company}-${item.period}`}
              className={`grid gap-4 border-t border-border py-8 md:grid-cols-[200px_1fr] md:gap-12 ${i === 0 ? "border-t-0 pt-0" : ""}`}
            >
              <div>
                <p className="text-sm font-medium text-accent">{item.period}</p>
                <p className="mt-1 text-sm text-ink-muted">{item.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  {item.company}
                </p>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
