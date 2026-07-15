export type DocumentAccess = 'public' | 'private'

export type DocumentItem = {
  id: string
  title: string
  description: string
  type: 'cv' | 'certificate' | 'other'
  access: DocumentAccess
  /** Only for public documents — never commit private certs to public/ */
  file?: string
  issuer?: string
  date?: string
  result?: string
  emoji: string
  accent: string
}

/** Public CV — safe to share with recruiters */
export const documents: DocumentItem[] = [
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    description:
      'Full CV — experience at Craft Silicon, education, competencies, systems developed, and referees.',
    file: 'documents/mitchell-kinoti-cv.html',
    type: 'cv',
    access: 'public',
    date: 'July 2026',
    emoji: '📄',
    accent: 'from-violet-500 to-indigo-600',
  },
  {
    id: 'diploma-ict',
    title: 'Diploma in Information Communication Technology',
    description:
      'KNEC-accredited diploma completed at Meru National Polytechnic. Overall result: Credit.',
    type: 'certificate',
    access: 'private',
    issuer: 'Kenya National Examinations Council (KNEC)',
    date: 'July 2022',
    result: 'Credit',
    emoji: '🎓',
    accent: 'from-cyan-500 to-teal-600',
  },
]

export const cvDocument = documents.find((d) => d.type === 'cv')
export const publicDocuments = documents.filter((d) => d.access === 'public')
export const privateDocuments = documents.filter((d) => d.access === 'private')
export const certificates = documents.filter((d) => d.type === 'certificate')

export function documentUrl(file: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${file}`
}

export function certificateRequestLabel(doc: DocumentItem): string {
  return `Certificate request: ${doc.title}`
}
