import { Mail } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-sm text-[var(--color-accent)]">Contact</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Let's work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
          Open to internships, freelance projects, and collaborations. Reach
          out via email or check my GitHub for the latest code.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kinotimitchell@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent-dim)]"
          >
            <Mail size={16} />
            kinotimitchell@gmail.com
          </a>
          <a
            href="https://github.com/Kinoti-mitchell"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--color-accent)]"
          >
            <GitHubIcon size={16} />
            @Kinoti-mitchell
          </a>
        </div>
      </div>
    </section>
  )
}
