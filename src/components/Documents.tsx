import {
  Download,
  ExternalLink,
  FileText,
  FolderOpen,
  Lock,
  Shield,
} from 'lucide-react'
import {
  certificateRequestLabel,
  cvDocument,
  documentUrl,
  privateDocuments,
  type DocumentItem,
} from '../data/documents'
import { useDemoRequest } from '../context/DemoContext'
import { SectionBadge } from './SectionBadge'

export function Documents() {
  return (
    <section id="documents" className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionBadge>CV &amp; certificates</SectionBadge>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Documents <span className="gradient-text">hub</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          My CV is public for recruiters. Sensitive certificates are{' '}
          <strong className="text-white">not posted online</strong> — verified
          employers can request a copy through the connect form.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
          <Shield className="mt-0.5 shrink-0 text-emerald-400" size={20} />
          <p className="text-sm text-[var(--color-muted)]">
            <strong className="text-emerald-300">Privacy:</strong> Certificate
            scans are never uploaded to this public website. They are shared
            privately by email only after you submit a request — protecting
            serial numbers and personal details.
          </p>
        </div>

        {cvDocument && (
          <div className="mt-10">
            <CvCard doc={cvDocument} />
          </div>
        )}

        {privateDocuments.length > 0 && (
          <>
            <h3 className="mt-14 flex items-center gap-2 text-xl font-bold text-white">
              <Lock size={20} className="text-amber-400" />
              Protected credentials
            </h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Metadata only — full document shared on verified request.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {privateDocuments.map((doc) => (
                <PrivateDocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          </>
        )}

        <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
          CV opens in a new tab — use Print / PDF to save. To add more protected
          certificates, list them in{' '}
          <code className="text-violet-300">src/data/documents.ts</code> with{' '}
          <code className="text-violet-300">access: &apos;private&apos;</code>.
        </p>
      </div>
    </section>
  )
}

function CvCard({ doc }: { doc: DocumentItem }) {
  const url = documentUrl(doc.file!)

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
              Public · safe to share
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
        <DocumentActions url={url} primary />
      </div>
    </article>
  )
}

function PrivateDocumentCard({ doc }: { doc: DocumentItem }) {
  const { requestCertificate } = useDemoRequest()

  return (
    <article className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
      <div className={`h-1 w-full bg-gradient-to-r ${doc.accent}`} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">
              {doc.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white">{doc.title}</h4>
                <Lock size={14} className="text-amber-400" />
              </div>
              {doc.issuer && (
                <p className="text-xs text-cyan-300/80">{doc.issuer}</p>
              )}
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-300">
            Private
          </span>
        </div>

        <p className="mt-3 text-sm text-[var(--color-muted)]">{doc.description}</p>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {doc.date && (
            <div className="rounded-lg bg-white/5 px-3 py-2">
              <dt className="text-[var(--color-muted)]">Awarded</dt>
              <dd className="font-medium text-white">{doc.date}</dd>
            </div>
          )}
          {doc.result && (
            <div className="rounded-lg bg-white/5 px-3 py-2">
              <dt className="text-[var(--color-muted)]">Result</dt>
              <dd className="font-medium text-emerald-300">{doc.result}</dd>
            </div>
          )}
        </dl>

        <div className="mt-5 border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => requestCertificate(certificateRequestLabel(doc))}
            className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm"
          >
            <FolderOpen size={16} />
            Request certificate copy
          </button>
          <p className="mt-2 text-center text-xs text-[var(--color-muted)]">
            I will email the document after reviewing your request.
          </p>
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
  if (!cvDocument?.file) return null
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
