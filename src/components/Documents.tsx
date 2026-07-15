import { Download, ExternalLink, FileText, FolderOpen } from 'lucide-react'
import {
  certificates,
  cvDocument,
  documentUrl,
  type DocumentItem,
} from '../data/documents'
import { SectionBadge } from './SectionBadge'

export function Documents() {
  return (
    <section id="documents" className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>CV &amp; certificates</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Everything in <span className="gradient-text">one place</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          No need to email separate files — view or download my CV and
          certificates directly from here.
        </p>

        {cvDocument && (
          <div className="mt-10">
            <CvCard doc={cvDocument} />
          </div>
        )}

        {certificates.length > 0 && (
          <>
            <h3 className="mt-14 flex items-center gap-2 text-xl font-bold text-white">
              <FolderOpen size={22} className="text-violet-400" />
              Certificates &amp; credentials
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          </>
        )}

        <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
          CV opens in a new tab — use Print / PDF to save. Add certificate PDFs
          to <code className="text-violet-300">public/documents/certificates/</code>{' '}
          when ready.
        </p>
      </div>
    </section>
  )
}

function CvCard({ doc }: { doc: DocumentItem }) {
  const url = documentUrl(doc.file)

  return (
    <article className="card-hover overflow-hidden rounded-2xl glass">
      <div className={`h-1.5 w-full bg-gradient-to-r ${doc.accent}`} />
      <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-5">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-3xl">
            {doc.emoji}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">
              Primary document
            </p>
            <h3 className="mt-1 text-2xl font-bold text-white">{doc.title}</h3>
            <p className="mt-2 max-w-lg text-[var(--color-muted)]">
              {doc.description}
            </p>
            {doc.date && (
              <p className="mt-2 font-mono text-xs text-cyan-300/80">
                Updated {doc.date}
              </p>
            )}
          </div>
        </div>
        <DocumentActions url={url} title={doc.title} primary />
      </div>
    </article>
  )
}

function DocumentCard({ doc }: { doc: DocumentItem }) {
  const url = documentUrl(doc.file)

  return (
    <article className="card-hover flex flex-col overflow-hidden rounded-2xl glass">
      <div className={`h-1 w-full bg-gradient-to-r ${doc.accent}`} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lg">
            {doc.emoji}
          </span>
          <div>
            <h4 className="font-bold text-white">{doc.title}</h4>
            {doc.issuer && (
              <p className="text-xs text-cyan-300/80">{doc.issuer}</p>
            )}
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm text-[var(--color-muted)]">
          {doc.description}
        </p>
        {doc.date && (
          <p className="mt-2 font-mono text-xs text-[var(--color-muted)]">
            {doc.date}
          </p>
        )}
        <div className="mt-4 border-t border-white/10 pt-4">
          <DocumentActions url={url} title={doc.title} />
        </div>
      </div>
    </article>
  )
}

function DocumentActions({
  url,
  primary = false,
}: {
  url: string
  title: string
  primary?: boolean
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${primary ? 'shrink-0' : ''}`}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={
          primary
            ? 'btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm'
            : 'inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-white'
        }
      >
        <ExternalLink size={primary ? 16 : 14} />
        View
      </a>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={
          primary
            ? 'btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium'
            : 'inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-white'
        }
      >
        <Download size={primary ? 16 : 14} />
        {url.endsWith('.html') ? 'Print / PDF' : 'Download'}
      </a>
    </div>
  )
}

export function CvDownloadButton({ className = '' }: { className?: string }) {
  if (!cvDocument) return null
  const url = documentUrl(cvDocument.file)

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`btn-ghost inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium ${className}`}
    >
      <FileText size={16} />
      View CV
    </a>
  )
}
