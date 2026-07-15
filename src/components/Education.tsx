import { education } from '../data/profile'
import { SectionHeader, SectionShell } from './SectionShell'

export function Education() {
  return (
    <SectionShell id="education">
      <SectionHeader
        badge="Education"
        title={
          <>
            Academic <span className="gradient-text">background</span>
          </>
        }
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.qualification}
            className="surface-card p-6 text-left"
          >
            <p className="font-mono text-xs text-teal-300/90">{item.period}</p>
            <h3 className="mt-2 text-lg font-bold text-white">
              {item.qualification}
            </h3>
            <p className="mt-1 text-sm text-cyan-300/90">{item.institution}</p>
            {'note' in item &&
              typeof item.note === 'string' &&
              item.note && (
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {item.note}
                </p>
              )}
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
