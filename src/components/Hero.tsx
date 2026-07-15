import {
  CURRENT_COMPANY,
  CURRENT_ROLE,
  EMPLOYER_LOCATION,
  FULL_NAME,
  LOCATION,
  profileSummary,
  TITLE,
} from '../data/profile'
import { ArrowDown, Briefcase, Wrench } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import { SectionBadge } from './SectionBadge'

export function Hero() {
  return (
    <section className="relative px-6 pb-16 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <SectionBadge>
            {CURRENT_ROLE} · {CURRENT_COMPANY} · {EMPLOYER_LOCATION}
          </SectionBadge>
        </div>

        <h1 className="animate-fade-up delay-1 mt-8 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
          {FULL_NAME.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="gradient-text">
            {FULL_NAME.split(' ').slice(-1)[0]}
          </span>
        </h1>

        <p className="animate-fade-up delay-2 mt-4 text-lg font-medium text-violet-300 md:text-xl">
          {TITLE}
        </p>

        <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          {profileSummary.slice(0, 200)}…
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-3">
          <a
            href="#documents"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm"
          >
            View CV &amp; documents
            <ArrowDown size={16} />
          </a>
          <a
            href="#skills"
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium"
          >
            <Wrench size={16} />
            My toolkit
          </a>
          <a
            href="#experience"
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium"
          >
            <Briefcase size={16} />
            Experience
          </a>
          <a
            href="https://github.com/Kinoti-mitchell"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
        </div>

        <div className="animate-fade-up delay-3 mt-12 flex flex-wrap gap-2">
          {[
            'Craft Silicon Payments',
            'County Revenue',
            'React',
            'Supabase',
            'Python',
            LOCATION,
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
