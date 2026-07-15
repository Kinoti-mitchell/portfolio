import { ArrowDown, ExternalLink } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'

export function Hero() {
  return (
    <section className="hero-glow px-6 pb-20 pt-16 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-mono text-sm text-[var(--color-accent)]">
          Hello, I'm Mitchell Kinoti
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Full-stack developer building{' '}
          <span className="gradient-text">real-world systems</span> with React,
          Python &amp; data.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          I build web applications, knowledge-based expert systems, and big-data
          analytics pipelines — from intern tracking platforms to fish supply
          chain management and ML-powered dashboards.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent-dim)]"
          >
            View my work
            <ArrowDown size={16} />
          </a>
          <a
            href="https://github.com/Kinoti-mitchell"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-elevated)]"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://kinoti-mitchell.github.io/attachment"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-elevated)]"
          >
            <ExternalLink size={16} />
            Live demo
          </a>
        </div>
      </div>
    </section>
  )
}
