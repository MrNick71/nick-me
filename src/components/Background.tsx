import {
  aspirations,
  aspirationsClosing,
  familyValues,
  heritage,
  milestones,
} from "@/data/site";

export function Background() {
  return (
    <section id="background" className="section-pad border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Background & vision</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
            The story behind the work
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Heritage, family values, and a clear vision for the future — the
            personal foundations that inform every professional endeavour.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-border p-8 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              {heritage.title}
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted md:text-base">
              {heritage.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border p-8 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              {familyValues.title}
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted md:text-base">
              {familyValues.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10">
          <h3 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Personal journey & milestones
          </h3>
          <p className="mt-3 max-w-2xl text-ink-muted">
            A continuous pursuit of growth, innovation, and self-mastery.
          </p>

          <ol className="mt-10 space-y-6">
            {milestones.map((item, i) => (
              <li
                key={item.title}
                className="grid gap-4 border-t border-border pt-6 md:grid-cols-[3rem_1fr]"
              >
                <span className="font-serif text-2xl font-bold text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-semibold text-ink">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 rounded-2xl bg-deep p-8 text-cream md:p-10">
          <h3 className="font-serif text-2xl font-semibold md:text-3xl">
            Looking forward
          </h3>
          <p className="mt-3 text-cream/70">
            A clear vision for the years ahead.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aspirations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-cream/10 bg-cream/5 p-6"
              >
                <h4 className="font-semibold text-cream">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-cream/60 md:text-base">
            {aspirationsClosing}
          </p>
        </div>
      </div>
    </section>
  );
}
