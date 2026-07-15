import { Menu, X } from 'lucide-react'
import { GITHUB_URL, LINKEDIN_URL } from '../data/profile'
import { GitHubIcon } from './GitHubIcon'
import { useState } from 'react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#documents', label: 'CV' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 header-bar">
      <div className="section-inner flex items-center justify-between px-6 py-3.5">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold">
            MK
          </span>
          Mitch
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
          {LINKEDIN_URL ? (
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost rounded-xl px-3 py-2 text-sm font-medium"
            >
              LinkedIn
            </a>
          ) : null}
          <a
            href="#request-demo"
            className="btn-primary rounded-xl px-5 py-2.5 text-sm"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="rounded-xl p-2 text-[var(--color-muted)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-medium text-[var(--color-muted)] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#request-demo"
                className="block font-medium text-indigo-300"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-[var(--color-muted)]"
                onClick={() => setOpen(false)}
              >
                <GitHubIcon size={16} /> GitHub
              </a>
            </li>
            {LINKEDIN_URL ? (
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium text-[var(--color-muted)]"
                  onClick={() => setOpen(false)}
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      )}
    </header>
  )
}
