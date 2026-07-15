import { FULL_NAME } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white">{FULL_NAME}</span>
          {' · '}
          ICT · Customer Experience · Software Support
        </p>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-mono text-xs text-emerald-400/80">
            Portfolio live on GitHub Pages
          </span>
        </div>
      </div>
    </footer>
  )
}
