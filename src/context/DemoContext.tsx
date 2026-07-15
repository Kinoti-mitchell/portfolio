import { createContext, useContext, useState, type ReactNode } from 'react'

type InquiryKind = 'demo' | 'certificate' | 'cv' | 'general'

type InquiryContextValue = {
  selectedProject: string
  inquiryKind: InquiryKind
  requestDemo: (project: string) => void
  requestCertificate: (label: string) => void
  requestCv: () => void
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

  const requestCv = () => {
    setSelectedProject('Curriculum Vitae')
    setInquiryKind('cv')
    scrollToConnect()
  }

  return (
    <InquiryContext.Provider
      value={{
        selectedProject,
        inquiryKind,
        requestDemo,
        requestCertificate,
        requestCv,
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
