export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} Mitchell Kinoti. Built with React &amp; Vite.</p>
        <p className="font-mono text-xs">kinotimitchell@gmail.com</p>
      </div>
    </footer>
  )
}
