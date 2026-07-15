import { createContext, useContext, useState, type ReactNode } from 'react'

type InquiryKind = 'demo' | 'certificate' | 'cv-print' | 'cv-download' | 'general'

type InquiryContextValue = {
  selectedProject: string
  inquiryKind: InquiryKind
  requestDemo: (project: string) => void
  requestCertificate: (label: string) => void
  requestCvAccess: (kind: 'print' | 'download') => void
}

const InquiryContext = createContext<InquiryContextValue | null>(null)

function scrollToConnect() {
  document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState('')
  const [inquiryKind, setInquiryKind] = useState<InquiryKind>('general')

  const requestDemo = (project: string) => {
    setSelectedProject(project)
    setInquiryKind('demo')
    scrollToConnect()
  }

  const requestCertificate = (label: string) => {
    setSelectedProject(label)
    setInquiryKind('certificate')
    scrollToConnect()
  }

  const requestCvAccess = (kind: 'print' | 'download') => {
    setSelectedProject(
      kind === 'print' ? 'CV print access' : 'CV PDF download',
    )
    setInquiryKind(kind === 'print' ? 'cv-print' : 'cv-download')
    scrollToConnect()
  }

  return (
    <InquiryContext.Provider
      value={{
        selectedProject,
        inquiryKind,
        requestDemo,
        requestCertificate,
        requestCvAccess,
      }}
    >
      {children}
    </InquiryContext.Provider>
  )
}

export function useDemoRequest() {
  const ctx = useContext(InquiryContext)
  if (!ctx) throw new Error('useDemoRequest must be used within DemoProvider')
  return ctx
}
