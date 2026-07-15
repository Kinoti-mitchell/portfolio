import { SectionBadge } from './SectionBadge'

const stats = [
  { label: 'Projects', value: '6+', color: 'from-violet-400 to-purple-500' },
  { label: 'Stack', value: 'Full-stack', color: 'from-cyan-400 to-blue-500' },
  { label: 'Focus', value: 'Web & Data', color: 'from-pink-400 to-rose-500' },
  { label: 'Based in', value: 'Kenya 🇰🇪', color: 'from-amber-400 to-orange-500' },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>About me</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Building software that{' '}
          <span className="gradient-text">actually ships</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass-strong card-hover rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">
              I'm Mitchell Kinoti — a developer who loves turning ideas into
              working products. From React PWAs with Supabase to Python ML
              dashboards and classical AI expert systems, I build across the
              full stack.
            </p>
          </div>
          <div className="glass-strong card-hover rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">
              Recent highlights: <strong className="text-violet-300">TRace</strong>{' '}
              for intern tracking, <strong className="text-emerald-300">SAMAKI</strong>{' '}
              for fish supply chains, and a{' '}
              <strong className="text-fuchsia-300">big-data analytics</strong>{' '}
              suite with fraud detection and recommendations.
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
                className={`mt-2 bg-gradient-to-r ${stat.color} bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl`}
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
