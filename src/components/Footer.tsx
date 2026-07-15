import { GITHUB_URL, SHORT_NAME } from '../data/profile'
import { GitHubIcon } from './GitHubIcon'

export function Footer() {
  return (
    <footer className="footer-bar px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} {SHORT_NAME}
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-teal-300"
        >
          <GitHubIcon size={14} />
          GitHub
        </a>
      </div>
    </footer>
  )
}
