export type DocumentItem = {
  id: string
  title: string
  description: string
  file: string
  type: 'cv' | 'certificate' | 'other'
  issuer?: string
  date?: string
  emoji: string
  accent: string
}

/**
 * Add PDFs to public/documents/ and list them here.
 * CV is available as HTML; add certificate PDFs when ready.
 */
export const documents: DocumentItem[] = [
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    description:
      'Full CV — experience at Craft Silicon, education, competencies, systems developed, and referees.',
    file: 'documents/mitchell-kinoti-cv.html',
    type: 'cv',
    date: 'July 2026',
    emoji: '📄',
    accent: 'from-violet-500 to-indigo-600',
  },
]

export const cvDocument = documents.find((d) => d.type === 'cv')
export const certificates = documents.filter((d) => d.type === 'certificate')

export function documentUrl(file: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${file}`
}
