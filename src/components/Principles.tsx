import {
  coreValues,
  personalMission,
  principles,
  strengths,
} from "@/data/site";

export function Principles() {
  return (
    <section id="principles" className="section-pad border-b border-border bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Principles & Ideologies</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            What guides my work
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            The beliefs, standards, and mission behind every business, project,
            and leadership role.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {principles.map((principle, i) => (
            <article
              key={principle.title}
              className="card-hover group rounded-2xl border border-border bg-surface p-8"
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

        <div className="mt-10 rounded-2xl bg-deep p-8 text-cream md:p-10">
          <p className="section-label text-accent-glow">Personal mission</p>
          <h3 className="mt-3 font-serif text-2xl font-semibold md:text-3xl">
            Building freedom that lifts others
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-cream/75">
            {personalMission.statement}
          </p>
          <ul className="mt-8 space-y-3">
            {personalMission.commitments.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-cream/80 md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-glow" />
                {item}
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 border-l-2 border-accent-glow/50 pl-5 text-sm italic leading-relaxed text-cream/60 md:text-base">
            {personalMission.pledge}
          </blockquote>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink">
              Core values
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              How I lead, decide, treat people, and measure success.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {coreValues.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-ink"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink">
              Natural strengths
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Abilities developed and applied in service of others.
            </p>
            <ul className="mt-5 space-y-3">
              {strengths.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
