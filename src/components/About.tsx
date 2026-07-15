import { profileSummary, CURRENT_COMPANY, CURRENT_ROLE, EMPLOYER_LOCATION, LOCATION } from '../data/profile'
import { SectionBadge } from './SectionBadge'

const stats = [
  { label: 'Experience', value: '7+ yrs', color: 'from-violet-400 to-purple-500' },
  { label: 'Employer HQ', value: 'Nairobi', color: 'from-cyan-400 to-blue-500' },
  { label: 'Education', value: 'BSc IT', color: 'from-pink-400 to-rose-500' },
  { label: 'Based in', value: 'Meru 🇰🇪', color: 'from-amber-400 to-orange-500' },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>About me</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          ICT professional who{' '}
          <span className="gradient-text">delivers for users</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass-strong card-hover rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">
              {profileSummary}
            </p>
          </div>
          <div className="glass-strong card-hover rounded-2xl p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">
              Currently
            </p>
            <p className="mt-2 text-xl font-bold text-white">{CURRENT_ROLE}</p>
            <p className="text-cyan-300">{CURRENT_COMPANY}</p>
            <p className="text-sm text-violet-300/90">Head office · {EMPLOYER_LOCATION}</p>
            <p className="mt-4 text-[var(--color-muted)]">
              Deploying county revenue systems, supporting clients across Kenya,
              and building internal tools like{' '}
              <strong className="text-violet-300">Craft Trail</strong> while
              completing my BSc in IT part-time at Meru University.
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              📍 Personal base: {LOCATION}
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass card-hover rounded-2xl p-6 text-center"
            >
              <dt className="text-sm font-medium text-[var(--color-muted)]">
                {stat.label}
              </dt>
              <dd
                className={`mt-2 bg-gradient-to-r ${stat.color} bg-clip-text text-xl font-extrabold text-transparent md:text-2xl`}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
