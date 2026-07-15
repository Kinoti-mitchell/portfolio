import type { ReactNode } from 'react'

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="section-badge inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
      {children}
    </span>
  )
}
