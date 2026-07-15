import { ExternalLink, Star } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import { projects } from '../data/projects'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-[var(--color-accent)]">Portfolio</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Selected projects
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          Pulled from my GitHub repositories — full-stack apps, expert systems,
          and data analytics work.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} large />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-16 text-xl font-semibold text-white">
              More projects
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {others.map((project) => (
                <ProjectCard key={project.title} project={project} />
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
  large = false,
}: {
  project: (typeof projects)[number]
  large?: boolean
}) {
  return (
    <article
      className={`card-hover flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 ${large ? 'lg:col-span-1' : ''}`}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {project.featured && (
          <Star
            size={16}
            className="shrink-0 fill-[var(--color-accent)] text-[var(--color-accent)]"
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
            className="rounded-md bg-[var(--color-surface)] px-2 py-1 font-mono text-xs text-[var(--color-accent)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4 border-t border-[var(--color-border)] pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-white"
        >
          <GitHubIcon size={14} />
          Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] transition-colors hover:text-white"
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
      </div>
    </article>
  )
}
