import { Mail, Menu, Sparkles, X } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#request-demo', label: 'Connect' },
  { href: '#skills', label: 'Skills' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-black">
            MK
          </span>
          Mitchell
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Kinoti-mitchell"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl p-2.5 text-[var(--color-muted)] transition-all hover:bg-white/10 hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="mailto:kinotimitchell@gmail.com"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
          >
            <Sparkles size={15} />
            Hire me
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
            <li className="flex gap-4 pt-2">
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
                className="flex items-center gap-2 text-sm text-violet-300"
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
