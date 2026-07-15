import { openTo } from '../data/profile'
import { SectionBadge } from './SectionBadge'

export function OpenTo() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-2xl p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <SectionBadge>Currently open to</SectionBadge>
              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                Let's connect — I'm actively looking
              </h2>
              <p className="mt-2 max-w-lg text-[var(--color-muted)]">
                ICT roles, software support, customer experience positions, and
                demo requests welcome. Based in Meru; current employer Craft Silicon Payments is in Nairobi.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
              {openTo.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
                >
                  {item.emoji} {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
