import { Briefcase, Rocket, Target, Users } from 'lucide-react'
import { hiringHighlights } from '../data/profile'
import { SectionBadge } from './SectionBadge'

const icons = [Rocket, Target, Users, Briefcase]

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>For hiring managers</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Why teams <span className="gradient-text">work with me</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          More than a GitHub profile — I build products people use, document my
          work, and can walk you through any project live.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {hiringHighlights.map((item, i) => {
            const Icon = icons[i] ?? Rocket
            return (
              <div
                key={item.title}
                className={`card-hover rounded-2xl border bg-gradient-to-br p-6 ${item.accent}`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl">
                    {item.emoji}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-white/60" />
                      <h3 className="font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
