import type { ReactNode } from 'react'

type SectionShellProps = {
  id?: string
  children: ReactNode
  className?: string
  bordered?: boolean
  alt?: boolean
}

export function SectionShell({
  id,
  children,
  className = '',
  bordered = false,
  alt = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-shell ${alt ? 'section-alt' : ''} ${bordered ? 'section-bordered' : ''} ${className}`}
    >
      <div className="section-inner">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  badge: string
  title: ReactNode
  description?: string
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-badge inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
        {badge}
      </span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </header>
  )
}
