import { createContext, useContext, useState, type ReactNode } from 'react'

type DemoContextValue = {
  selectedProject: string
  requestDemo: (project: string) => void
}

const DemoContext = createContext<DemoContextValue | null>(null)

export function DemoProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState('')

  const requestDemo = (project: string) => {
    setSelectedProject(project)
    document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <DemoContext.Provider value={{ selectedProject, requestDemo }}>
      {children}
    </DemoContext.Provider>
  )
}

export function useDemoRequest() {
  const ctx = useContext(DemoContext)
  if (!ctx) throw new Error('useDemoRequest must be used within DemoProvider')
  return ctx
}
