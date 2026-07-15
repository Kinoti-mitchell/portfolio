import { Play } from 'lucide-react'
import { SectionHeader, SectionShell } from './SectionShell'
import { useDemoRequest } from '../context/DemoContext'
import { projects } from '../data/projects'
import { GitHubIcon } from './GitHubIcon'

export function Projects() {
  const { requestDemo } = useDemoRequest()
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <SectionShell id="projects">
      <SectionHeader
        badge="Projects"
        title={
          <>
            Selected <span className="gradient-text">work</span>
          </>
        }
        description="Code on GitHub — walkthrough demos available on request."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
    </SectionShell>
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
    <article className="card-hover surface-card group flex flex-col overflow-hidden">
      <div className={`project-accent bg-gradient-to-r ${project.accent}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">
            {project.emoji}
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            {project.subtitle && (
              <p className="text-xs text-indigo-300/80">{project.subtitle}</p>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold"
          >
            <GitHubIcon size={14} />
            Code
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
