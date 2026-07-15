import { Play, Star } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import { SectionBadge } from './SectionBadge'
import { useDemoRequest } from '../context/DemoContext'
import { projects } from '../data/projects'

export function Projects() {
  const { requestDemo } = useDemoRequest()
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>Portfolio</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Featured <span className="gradient-text">projects</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          Real apps I've built — request a demo to see any project live.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onRequestDemo={() => requestDemo(project.title)}
            />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-16 text-2xl font-bold text-white">More work</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {others.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onRequestDemo={() => requestDemo(project.title)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  onRequestDemo,
}: {
  project: (typeof projects)[number]
  onRequestDemo: () => void
}) {
  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-2xl glass">
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">
              {project.emoji}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              {project.subtitle && (
                <p className="text-xs text-cyan-300/80">{project.subtitle}</p>
              )}
            </div>
          </div>
          {project.featured && (
            <Star
              size={16}
              className="shrink-0 fill-amber-400 text-amber-400"
            />
          )}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-lg border bg-gradient-to-r px-2.5 py-1 font-mono text-xs ${project.accent} border-white/10 bg-white/5 text-white/80`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
          >
            <GitHubIcon size={14} />
            Source
          </a>
          <button
            type="button"
            onClick={onRequestDemo}
            className={`inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r px-3 py-1.5 text-sm font-semibold text-white ${project.accent} transition-opacity hover:opacity-90`}
          >
            <Play size={13} fill="currentColor" />
            Request demo
          </button>
        </div>
      </div>
    </article>
  )
}
