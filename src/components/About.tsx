import {
  CURRENT_COMPANY,
  CURRENT_ROLE,
  hiringHighlights,
  openTo,
  RELOCATION,
} from '../data/profile'
import { SectionHeader, SectionShell } from './SectionShell'

export function About() {
  return (
    <SectionShell id="about" alt>
      <SectionHeader
        badge="About"
        title={
          <>
            Building software with{' '}
            <span className="gradient-text">client impact</span>
          </>
        }
        description="Junior developer first — customer experience from supporting live systems every day."
      />

      <div className="surface-card mt-10 p-7 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300/90">
          Currently
        </p>
        <p className="mt-2 text-xl font-bold text-white">{CURRENT_ROLE}</p>
        <p className="text-indigo-200">{CURRENT_COMPANY}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
          {RELOCATION}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {openTo.map((item) => (
            <span key={item.label} className="tech-pill">
              {item.emoji} {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {hiringHighlights.map((item) => (
          <article
            key={item.title}
            className={`highlight-card border p-5 ${item.accent}`}
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg">
                {item.emoji}
              </span>
              <div className="min-w-0 text-left">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="prose-block mt-1.5 text-sm">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
