import { Mail, Menu, X } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          MK<span className="text-[var(--color-accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Kinoti-mitchell"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-elevated)] hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="mailto:kinotimitchell@gmail.com"
            className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent-dim)]"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[var(--color-muted)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-border)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-[var(--color-muted)] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <a
                href="https://github.com/Kinoti-mitchell"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-muted)]"
              >
                <GitHubIcon size={16} /> GitHub
              </a>
              <a
                href="mailto:kinotimitchell@gmail.com"
                className="flex items-center gap-2 text-sm text-[var(--color-accent)]"
              >
                <Mail size={16} /> Email
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
