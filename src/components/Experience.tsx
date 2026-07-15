import { experience } from '../data/profile'
import { SectionBadge } from './SectionBadge'

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>Experience</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          What I've <span className="gradient-text">built & shipped</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          Full-stack apps, data systems, and AI projects — source code and live
          walkthroughs available on request.
        </p>

        <div className="relative mt-12 space-y-6 pl-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-cyan-500 before:to-fuchsia-500">
          {experience.map((item) => (
            <article key={item.role} className="relative">
              <div
                className={`absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[var(--color-surface)] ${item.accent}`}
              />
              <div className="glass-strong card-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <span className="font-mono text-xs text-violet-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-cyan-300/80">{item.org}</p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      <span className="text-violet-400">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
