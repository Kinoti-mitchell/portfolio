import { Mail, Phone } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  PHONE,
  PHONE_TEL,
  SHORT_NAME,
} from '../data/profile'
import { useDemoRequest } from '../context/DemoContext'
import { GitHubIcon } from './GitHubIcon'
import { SectionHeader, SectionShell } from './SectionShell'

function buildMailtoLink({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  const body = `Hi ${SHORT_NAME.split(' ')[0]},

${message}

—
${name}
${email}`

  return `mailto:${EMAIL}?subject=${encodeURIComponent('Message from portfolio')}&body=${encodeURIComponent(body)}`
}

export function DemoRequestForm() {
  const { selectedProject, inquiryKind } = useDemoRequest()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!selectedProject) return
    if (inquiryKind === 'certificate') {
      setMessage(`I would like a copy of: ${selectedProject}.`)
      return
    }
    if (inquiryKind === 'cv-print') {
      setMessage(
        'I would like print access to your CV (permission to print a copy for hiring review).',
      )
      return
    }
    if (inquiryKind === 'cv-download') {
      setMessage(
        'I would like a PDF download of your CV for our hiring process.',
      )
      return
    }
    if (inquiryKind === 'demo') {
      setMessage(`I would like a demo of ${selectedProject}.`)
    }
  }, [selectedProject, inquiryKind])

  const mailtoLink = useMemo(
    () =>
      buildMailtoLink({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    [name, email, message],
  )

  const canSend = name.trim() && email.trim() && message.trim()

  return (
    <SectionShell id="request-demo" alt>
      <div className="max-w-xl">
        <SectionHeader
          badge="Contact"
          title={
            <>
              Let's <span className="gradient-text">talk</span>
            </>
          }
          description="Email or call directly — or send a short message from your mail app."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm"
          >
            <Mail size={16} />
            {EMAIL}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm"
          >
            <Phone size={16} />
            {PHONE}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          {LINKEDIN_URL ? (
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
        <p className="mt-3 text-sm text-[var(--color-muted)]">{LOCATION}</p>

        <form className="surface-card mt-8 space-y-5 p-6 md:p-8">
          <label className="block text-left">
            <span className="mb-1.5 block text-sm font-medium text-white">
              Your name
            </span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="block text-left">
            <span className="mb-1.5 block text-sm font-medium text-white">
              Your email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="block text-left">
            <span className="mb-1.5 block text-sm font-medium text-white">
              Message
            </span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="form-input resize-none"
            />
          </label>
          <a
            href={canSend ? mailtoLink : undefined}
            aria-disabled={!canSend}
            onClick={(e) => {
              if (!canSend) e.preventDefault()
            }}
            className={`btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm ${
              canSend ? '' : 'pointer-events-none opacity-50'
            }`}
          >
            <Mail size={16} />
            Open in email app
          </a>
          <p className="text-center text-xs text-[var(--color-muted)]">
            Prefer a quicker path?{' '}
            <a href={`mailto:${EMAIL}`} className="text-teal-300 hover:underline">
              Email me directly
            </a>
          </p>
        </form>
      </div>
    </SectionShell>
  )
}
