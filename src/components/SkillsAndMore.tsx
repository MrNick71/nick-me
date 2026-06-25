import { achievements, interests, skills } from "@/data/site";

export function SkillsAndMore() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-3">
          <div>
            <p className="section-label">Skills & Talents</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink">
              Core competencies
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Achievements</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink">
              Awards & honors
            </h2>
            <ul className="mt-8 space-y-6">
              {achievements.map((item) => (
                <li key={item.title} className="border-l-2 border-accent pl-4">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="text-sm text-accent">{item.year}</p>
                  <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Interests</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink">
              Beyond work
            </h2>
            <ul className="mt-8 space-y-3">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="flex items-center gap-3 text-sm text-ink-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
