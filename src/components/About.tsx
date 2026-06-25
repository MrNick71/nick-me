import { aboutParagraphs } from "@/data/site";

export function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="section-label">About</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Builder, designer, and leader from Tema, Ghana
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-ink-muted md:text-lg">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Businesses founded", value: "3" },
            { label: "Years in design", value: "9+" },
            { label: "Team members led", value: "10+" },
            { label: "AWS certifications", value: "2" },
          ].map((stat) => (
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
