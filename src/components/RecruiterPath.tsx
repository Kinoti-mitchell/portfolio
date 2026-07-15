import { Briefcase, FileText, MessageSquare, Wrench } from 'lucide-react'

const steps = [
  {
    step: '1',
    label: 'View CV',
    href: '#documents',
    icon: FileText,
    desc: 'Resume & credentials',
  },
  {
    step: '2',
    label: 'Toolkit',
    href: '#skills',
    icon: Wrench,
    desc: 'Skills & competencies',
  },
  {
    step: '3',
    label: 'Experience',
    href: '#experience',
    icon: Briefcase,
    desc: 'Work history',
  },
  {
    step: '4',
    label: 'Connect',
    href: '#request-demo',
    icon: MessageSquare,
    desc: 'Demo or interview',
  },
]

export function RecruiterPath() {
  return (
    <section
      aria-label="Recruiter quick start"
      className="border-b border-white/10 px-6 py-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-2xl p-6 md:p-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-violet-300">
            Recruiting? Start here
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="card-hover group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-500/40 hover:bg-violet-500/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600 text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-white group-hover:text-violet-200">
                      <Icon size={15} />
                      {item.label}
                    </div>
                    <p className="text-xs text-[var(--color-muted)]">
                      {item.desc}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
