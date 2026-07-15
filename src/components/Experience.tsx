import { experience } from '../data/profile'
import { SectionHeader, SectionShell } from './SectionShell'

export function Experience() {
  return (
    <SectionShell id="experience" bordered alt>
      <SectionHeader
        badge="Experience"
        title={
          <>
            Recent <span className="gradient-text">roles</span>
          </>
        }
        description="Focus on Craft Silicon and the path into software — earlier roles are on the CV."
      />

      <div className="relative mt-10 space-y-5 border-l border-white/10 pl-6 md:pl-8">
        {experience.map((item) => (
          <article key={item.role + item.period} className="relative">
            <div
              className={`timeline-dot absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full md:-left-[calc(2rem+5px)] ${item.accent}`}
            />
            <div className="surface-card p-5 md:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-bold text-white">{item.role}</h3>
                <span className="font-mono text-xs text-teal-300/90">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-cyan-300/85">{item.org}</p>
              <ul className="mt-3 space-y-2 text-left">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm leading-relaxed text-[var(--color-muted)]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
