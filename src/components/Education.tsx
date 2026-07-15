import { education } from '../data/profile'
import { SectionBadge } from './SectionBadge'

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>Education</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Academic <span className="gradient-text">background</span>
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.qualification}
              className="card-hover glass-strong rounded-2xl p-6"
            >
              <div
                className={`mb-3 inline-block rounded-full bg-gradient-to-r ${item.accent} px-3 py-1 font-mono text-xs text-white`}
              >
                {item.period}
              </div>
              <h3 className="text-lg font-bold text-white">
                {item.qualification}
              </h3>
              <p className="mt-1 text-cyan-300/90">{item.institution}</p>
              {'note' in item && item.note && (
                <p className="mt-2 text-sm text-violet-300">{item.note}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
