import { SectionBadge } from './SectionBadge'
import { skills } from '../data/projects'

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/10 bg-gradient-to-b from-violet-500/[0.06] to-transparent px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionBadge>For recruiters</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          My <span className="gradient-text">toolkit</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          Core skills across software, county revenue systems, client support,
          data reporting, and technical operations — matched to ICT and
          customer-experience roles.
        </p>

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

        <p className="mt-10 text-center">
          <a
            href="#request-demo"
            className="text-sm font-medium text-violet-300 underline-offset-4 hover:text-white hover:underline"
          >
            Ready to talk? Connect at the bottom of this page →
          </a>
        </p>
      </div>
    </section>
  )
}
