import { Download, FileText, FolderOpen, Lock, Printer, Shield } from 'lucide-react'
import {
  certificateRequestLabel,
  cvDocument,
  privateDocuments,
  type DocumentItem,
} from '../data/documents'
import { notifyActivity } from '../lib/activityNotify'
import { useDemoRequest } from '../context/DemoContext'
import { SectionHeader, SectionShell } from './SectionShell'

export function Documents() {
  return (
    <SectionShell id="documents" bordered alt>
      <SectionHeader
        badge="CV"
        title={
          <>
            Documents & <span className="gradient-text">credentials</span>
          </>
        }
        description="Request print access or a PDF copy — nothing downloads automatically."
      />

      <div className="alert-info mt-6 flex items-start gap-3 p-4 text-left">
        <Shield className="mt-0.5 shrink-0 text-emerald-400" size={20} />
        <p className="text-sm text-[var(--color-muted)]">
          CV and certificate files are not posted publicly. Send a request and I
          will share by email after I review it.
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
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {privateDocuments.map((doc) => (
              <PrivateDocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </>
      )}
    </SectionShell>
  )
}

function CvCard({ doc }: { doc: DocumentItem }) {
  const { requestCvAccess } = useDemoRequest()

  function requestPrint() {
    void notifyActivity('cv-print-request', doc.title)
    requestCvAccess('print')
  }

  function requestDownload() {
    void notifyActivity('cv-download-request', doc.title)
    requestCvAccess('download')
  }

  return (
    <article className="card-hover surface-card overflow-hidden border-amber-500/15">
      <div className={`project-accent bg-gradient-to-r ${doc.accent}`} />
      <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-5">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-3xl">
            {doc.emoji}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="mt-1 text-2xl font-bold text-white">{doc.title}</h3>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-300">
                Request access
              </span>
            </div>
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
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
          <button
            type="button"
            onClick={requestPrint}
            className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm"
          >
            <Printer size={16} />
            Request print access
          </button>
          <button
            type="button"
            onClick={requestDownload}
            className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium"
          >
            <Download size={16} />
            Request PDF download
          </button>
        </div>
      </div>
    </article>
  )
}

function PrivateDocumentCard({ doc }: { doc: DocumentItem }) {
  const { requestCertificate } = useDemoRequest()

  function handleRequest() {
    void notifyActivity('certificate-request', doc.title)
    requestCertificate(certificateRequestLabel(doc))
  }

  return (
    <article className="surface-card relative overflow-hidden border-amber-500/20">
      <div className={`project-accent bg-gradient-to-r ${doc.accent}`} />
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
            onClick={handleRequest}
            className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm"
          >
            <FolderOpen size={16} />
            Request certificate copy
          </button>
        </div>
      </div>
    </article>
  )
}

/** @deprecated Use #documents section instead */
export function CvDownloadButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="#documents"
      className={`btn-ghost inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium ${className}`}
    >
      <FileText size={16} />
      CV &amp; documents
    </a>
  )
}
