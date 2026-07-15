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
            Available for work
          </SectionBadge>
        </div>

        <h1 className="animate-fade-up delay-1 mt-8 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-7xl">
          Hey, I'm{' '}
          <span className="gradient-text">Mitchell Kinoti</span>
        </h1>

        <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-xl leading-relaxed text-[var(--color-muted)] md:text-2xl">
          Full-stack developer crafting{' '}
          <span className="font-semibold text-violet-300">web apps</span>,{' '}
          <span className="font-semibold text-cyan-300">expert systems</span>{' '}
          &amp;{' '}
          <span className="font-semibold text-pink-300">data pipelines</span>{' '}
          that solve real problems.
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm"
          >
            Explore projects
            <ArrowDown size={16} />
          </a>
          <button
            type="button"
            onClick={() => requestDemo('')}
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm"
          >
            <Play size={16} fill="currentColor" />
            Request a demo
          </button>
          <CvDownloadButton />
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
          {['React', 'Python', 'Supabase', 'Streamlit', 'TypeScript', 'ML'].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
