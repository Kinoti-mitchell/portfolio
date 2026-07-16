import { SectionHeader, SectionShell } from './SectionShell'
import { techStack } from '../data/projects'

const groups = [
  {
    title: 'Frontend & UI',
    items: techStack.frontend,
    accent: 'border-indigo-500/30 bg-indigo-500/8',
  },
  {
    title: 'Backend & data',
    items: [...techStack.backend, ...techStack.data],
    accent: 'border-slate-500/30 bg-slate-500/8',
  },
  {
    title: 'Platforms & ops',
    items: techStack.platforms,
    accent: 'border-violet-500/25 bg-violet-500/6',
  },
]

export function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeader
        badge="Tech stack"
        title={
          <>
            Languages & <span className="gradient-text">tools</span>
          </>
        }
      />

      <div className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300/90">
          Languages
        </p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {techStack.languages.map((lang) => (
            <li key={lang}>
              <span className="tech-pill tech-pill-lang">{lang}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.title}
            className={`surface-card border p-6 ${group.accent}`}
          >
            <h3 className="text-base font-bold text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="tech-pill">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
