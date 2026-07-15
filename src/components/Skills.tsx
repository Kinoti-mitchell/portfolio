import { skills } from '../data/projects'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-[var(--color-accent)]">Skills</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Technologies I work with
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5"
            >
              <h3 className="font-semibold text-white">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-sm text-[var(--color-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
