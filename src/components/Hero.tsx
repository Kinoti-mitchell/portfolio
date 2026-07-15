import { ArrowDown, Code2 } from 'lucide-react'
import {
  CURRENT_COMPANY,
  CURRENT_ROLE,
  FULL_NAME,
  LOCATION,
  PROFILE_PHOTO,
  profileSummary,
  RELOCATION,
  TITLE,
  TITLE_SUPPORT,
} from '../data/profile'
import { SectionBadge } from './SectionBadge'

export function Hero() {
  return (
    <section className="section-shell pt-24 md:pt-28">
      <div className="section-inner">
        <div className="grid items-start gap-10 lg:grid-cols-[220px_1fr] lg:gap-12 xl:gap-16">
          <div className="animate-fade-up mx-auto w-full max-w-[220px] lg:mx-0">
            <div className="hero-photo">
              <div className="hero-photo-inner">
                <img src={PROFILE_PHOTO} alt={FULL_NAME} />
              </div>
            </div>
          </div>

          <div className="min-w-0 text-left">
            <div className="animate-fade-up">
              <SectionBadge>
                {CURRENT_ROLE} · {CURRENT_COMPANY}
              </SectionBadge>
            </div>

            <h1 className="animate-fade-up delay-1 mt-5 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              {FULL_NAME.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">
                {FULL_NAME.split(' ').slice(-1)[0]}
              </span>
            </h1>

            <p className="animate-fade-up delay-2 mt-3 text-lg font-semibold text-indigo-200 md:text-xl">
              {TITLE}
            </p>
            <p className="animate-fade-up delay-2 mt-1.5 text-sm text-[var(--color-muted)] md:text-base">
              {TITLE_SUPPORT}
            </p>

            <p className="animate-fade-up delay-2 prose-block mt-4 max-w-xl">
              {profileSummary}
            </p>

            <p className="animate-fade-up delay-2 mt-3 text-sm text-gray-400">
              {LOCATION} · {RELOCATION}
            </p>

            <div className="animate-fade-up delay-3 mt-7 flex flex-wrap gap-2.5">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm"
              >
                <Code2 size={15} />
                View projects
              </a>
              <a
                href="#documents"
                className="btn-ghost inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm"
              >
                Request CV
                <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
