import {
  CURRENT_COMPANY,
  CURRENT_ROLE,
  EMPLOYER_LOCATION,
  FULL_NAME,
  LOCATION,
  profileSummary,
  TITLE,
} from '../data/profile'
import { ArrowDown, Play, Sparkles } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import { SectionBadge } from './SectionBadge'
import { CvDownloadButton } from './Documents'
import { useDemoRequest } from '../context/DemoContext'

export function Hero() {
  const { requestDemo } = useDemoRequest()

  return (
    <section className="relative px-6 pb-24 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <SectionBadge>
            <Sparkles size={12} className="mr-1.5 inline" />
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

        <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
          {profileSummary.slice(0, 180)}…
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#documents"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm"
          >
            View CV
            <ArrowDown size={16} />
          </a>
          <CvDownloadButton />
          <button
            type="button"
            onClick={() => requestDemo('')}
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium"
          >
            <Play size={16} fill="currentColor" />
            Request demo
          </button>
          <a
            href="https://github.com/Kinoti-mitchell"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
        </div>

        <div className="animate-fade-up delay-3 mt-16 flex flex-wrap gap-3">
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
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
