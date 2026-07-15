import {
  CheckCircle,
  Copy,
  Loader2,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import {
  buildEmailLink,
  EMAIL,
  interestOptions,
  type EmailDraft,
} from '../data/profile'
import { useDemoRequest } from '../context/DemoContext'
import { SectionBadge } from './SectionBadge'

type FormState = 'idle' | 'submitting' | 'success' | 'error'
type Tab = 'form' | 'email'

const emptyDraft: EmailDraft = {
  name: '',
  company: '',
  role: '',
  project: '',
  opportunity: '',
  interests: [],
  message: '',
}

export function DemoRequestForm() {
  const { selectedProject, inquiryKind } = useDemoRequest()
  const [draft, setDraft] = useState<EmailDraft>(emptyDraft)
  const [tab, setTab] = useState<Tab>('email')
  const [status, setStatus] = useState<FormState>('idle')
  const [replyEmail, setReplyEmail] = useState('')

  useEffect(() => {
    if (selectedProject) {
      setDraft((d) => ({
        ...d,
        project: selectedProject,
        opportunity:
          inquiryKind === 'certificate'
            ? 'Certificate / credential request'
            : d.opportunity,
        message:
          inquiryKind === 'certificate' && !d.message
            ? 'I am requesting a verified copy of this certificate for recruitment or verification purposes. My organisation/role: [please fill in].'
            : d.message,
      }))
      setTab('email')
    }
  }, [selectedProject, inquiryKind])

  const [copied, setCopied] = useState(false)

  const displayName = draft.name

  const emailLink = buildEmailLink({ ...draft, name: displayName })

  function update(field: keyof EmailDraft, value: string) {
    setDraft((d) => ({ ...d, [field]: value }))
  }

  function toggleInterest(interest: string) {
    setDraft((d) => ({
      ...d,
      interests: d.interests.includes(interest)
        ? d.interests.filter((i) => i !== interest)
        : [...d.interests, interest],
    }))
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const data = new FormData()
    data.append('_subject', 'Portfolio inquiry from hiring manager')
    data.append('_captcha', 'false')
    data.append('_template', 'table')
    data.append('_replyto', replyEmail)
    data.append('name', displayName)
    data.append('email', replyEmail)
    data.append('company', draft.company)
    data.append('role', draft.role)
    data.append('project', draft.project)
    data.append('opportunity', draft.opportunity)
    data.append('interests', draft.interests.join(', '))
    data.append('message', draft.message)

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('Submit failed')
      setStatus('success')
      setDraft(emptyDraft)
      setReplyEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="request-demo" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
            <SectionBadge>Connect — last step</SectionBadge>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Get in <span className="gradient-text">touch</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
              Reviewed my CV and toolkit? Request a demo, certificate copy, or
              discuss a role — email or submit the form below.
            </p>
        </div>

        {status === 'success' ? (
          <SuccessPanel onReset={() => setStatus('idle')} />
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            {/* Left — what hiring managers get */}
            <aside className="space-y-5 lg:col-span-2">
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="flex items-center gap-2 font-bold text-white">
                  <Sparkles size={18} className="text-violet-400" />
                  What you'll get from me
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'Live walkthrough of any project — I will screen-share and explain architecture',
                    'CV & certificates available on this site — no extra emails needed',
                    'Honest answers about my stack, process, and availability',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-[var(--color-muted)]"
                    >
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/15 to-cyan-600/10 p-6">
                <p className="text-sm font-medium text-violet-200">
                  Prefer email? That's great — hiring managers often do.
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Fill in the details on the right, then hit{' '}
                  <strong className="text-white">Open in email</strong> — your
                  mail app opens with a professional message ready to send to:
                </p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-sm font-mono text-cyan-300 transition-colors hover:bg-white/10"
                >
                  {copied ? (
                    <>
                      <CheckCircle size={14} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> {EMAIL}
                    </>
                  )}
                </button>
              </div>
            </aside>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="mb-5 flex rounded-xl border border-white/10 bg-white/5 p-1">
                <TabButton
                  active={tab === 'email'}
                  onClick={() => setTab('email')}
                  icon={<Mail size={15} />}
                  label="Send via email"
                />
                <TabButton
                  active={tab === 'form'}
                  onClick={() => setTab('form')}
                  icon={<Send size={15} />}
                  label="Submit form"
                />
              </div>

              <div className="glass-strong space-y-5 rounded-2xl p-8">
                <Fields
                  draft={draft}
                  update={update}
                  toggleInterest={toggleInterest}
                />

                {tab === 'email' ? (
                  <div className="space-y-4">
                    <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.03] p-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
                        Email preview
                      </p>
                      <p className="mt-2 line-clamp-4 font-mono text-xs leading-relaxed text-[var(--color-muted)]">
                        {decodeURIComponent(
                          emailLink.split('body=')[1] ?? '',
                        ).slice(0, 280)}
                        …
                      </p>
                    </div>
                    <a
                      href={emailLink}
                      className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm"
                    >
                      <Mail size={18} />
                      Open in email app — send to {EMAIL}
                    </a>
                    <p className="text-center text-xs text-[var(--color-muted)]">
                      Your email app opens with a pre-written message. Just hit
                      send — no account needed.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-white">
                        Your email (so I can reply) *
                      </span>
                      <input
                        type="email"
                        required
                        value={replyEmail}
                        onChange={(e) => setReplyEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="form-input"
                      />
                    </label>

                    {status === 'error' && (
                      <p className="text-sm text-rose-400">
                        Form failed — use the{' '}
                        <strong>Send via email</strong> tab instead.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
        active
          ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg'
          : 'text-[var(--color-muted)] hover:text-white'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}

function Fields({
  draft,
  update,
  toggleInterest,
}: {
  draft: EmailDraft
  update: (field: keyof EmailDraft, value: string) => void
  toggleInterest: (interest: string) => void
}) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-white">
            Your name *
          </span>
          <input
            required
            value={draft.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Jane Smith"
            className="form-input"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-white">
            Company / Organization
          </span>
          <input
            value={draft.company}
            onChange={(e) => update('company', e.target.value)}
            placeholder="Acme Corp"
            className="form-input"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-white">
            Role you're hiring for
          </span>
          <input
            value={draft.role}
            onChange={(e) => update('role', e.target.value)}
            placeholder="Junior Developer, Intern…"
            className="form-input"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-white">
            Opportunity type
          </span>
          <select
            value={draft.opportunity}
            onChange={(e) => update('opportunity', e.target.value)}
            className="form-input"
          >
            <option value="">Select…</option>
            <option value="Internship">Internship</option>
            <option value="Full-time role">Full-time role</option>
            <option value="Freelance / contract">Freelance / contract</option>
            <option value="Live demo request">Live demo request</option>
            <option value="Resume / CV request">Resume / CV request</option>
            <option value="General networking">General networking</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-white">
          Project you'd like to explore
        </span>
        <select
          value={draft.project}
          onChange={(e) => update('project', e.target.value)}
          className="form-input"
        >
          <option value="">Select a project…</option>
          {projects.map((p) => (
            <option key={p.title} value={p.title}>
              {p.emoji} {p.title}
            </option>
          ))}
          <option value="General — all projects">General — all projects</option>
          <option value="Resume only">Resume only — no demo</option>
        </select>
      </label>

      <div>
        <span className="mb-2 block text-sm font-medium text-white">
          What interested you? (pick any)
        </span>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                draft.interests.includes(interest)
                  ? 'border-violet-400 bg-violet-500/25 text-violet-200'
                  : 'border-white/10 bg-white/5 text-[var(--color-muted)] hover:border-white/20'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-white">
          Your message
        </span>
        <textarea
          value={draft.message}
          onChange={(e) => update('message', e.target.value)}
          rows={4}
          placeholder="Tell me about the role, what you'd like to see in a demo, or when you're free for a quick call…"
          className="form-input resize-none"
        />
      </label>
    </>
  )
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="glass-strong mx-auto mt-10 max-w-lg rounded-2xl p-10 text-center">
      <CheckCircle className="mx-auto text-emerald-400" size={52} />
      <h3 className="mt-4 text-2xl font-bold text-white">You're all set!</h3>
      <p className="mt-2 text-[var(--color-muted)]">
        Inquiry received — check your inbox for my response.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm"
      >
        <Mail size={16} />
        Or email me directly
      </a>
      <button
        type="button"
        onClick={onReset}
        className="btn-ghost mt-3 block w-full rounded-xl py-2.5 text-sm"
      >
        Send another inquiry
      </button>
    </div>
  )
}
