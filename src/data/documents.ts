export type DocumentItem = {
  id: string
  title: string
  description: string
  /** Path inside public/, e.g. documents/mitchell-kinoti-cv.pdf */
  file: string
  type: 'cv' | 'certificate' | 'other'
  issuer?: string
  date?: string
  emoji: string
  accent: string
}

/**
 * Add your PDFs to public/documents/ then list them here.
 * File names must match exactly. Redeploy after adding new files.
 */
export const documents: DocumentItem[] = [
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    description:
      'Full resume — education, experience, skills, and contact details in one document.',
    file: 'documents/mitchell-kinoti-cv.pdf',
    type: 'cv',
    date: '2026',
    emoji: '📄',
    accent: 'from-violet-500 to-indigo-600',
  },
  {
    id: 'cert-1',
    title: 'Certificate 1',
    description: 'Replace title & file name with your actual certificate.',
    file: 'documents/certificates/certificate-1.pdf',
    type: 'certificate',
    issuer: 'Institution name',
    date: 'Year',
    emoji: '🏅',
    accent: 'from-cyan-500 to-teal-600',
  },
  {
    id: 'cert-2',
    title: 'Certificate 2',
    description: 'Replace title & file name with your actual certificate.',
    file: 'documents/certificates/certificate-2.pdf',
    type: 'certificate',
    issuer: 'Institution name',
    date: 'Year',
    emoji: '🎓',
    accent: 'from-fuchsia-500 to-pink-600',
  },
  {
    id: 'cert-3',
    title: 'Certificate 3',
    description: 'Replace title & file name with your actual certificate.',
    file: 'documents/certificates/certificate-3.pdf',
    type: 'certificate',
    issuer: 'Institution name',
    date: 'Year',
    emoji: '📜',
    accent: 'from-amber-500 to-orange-600',
  },
]

export const cvDocument = documents.find((d) => d.type === 'cv')
export const certificates = documents.filter((d) => d.type === 'certificate')

/** Resolves public asset URL for GitHub Pages base path */
export function documentUrl(file: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${file}`
}
