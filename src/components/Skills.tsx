import { SectionBadge } from './SectionBadge'
import { skills } from '../data/projects'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>Skills</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          My <span className="gradient-text">toolkit</span>
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className={`card-hover rounded-2xl border p-6 ${group.accent}`}
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                <span>{group.emoji}</span>
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${group.tagAccent}`}
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
