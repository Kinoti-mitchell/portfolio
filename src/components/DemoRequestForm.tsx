import { CheckCircle, Loader2, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import { useDemoRequest } from '../context/DemoContext'
import { SectionBadge } from './SectionBadge'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function DemoRequestForm() {
  const { selectedProject } = useDemoRequest()
  const [project, setProject] = useState('')
  const [status, setStatus] = useState<FormState>('idle')

  useEffect(() => {
    if (selectedProject) setProject(selectedProject)
  }, [selectedProject])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formsubmit.co/ajax/kinotimitchell@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (!res.ok) throw new Error('Submit failed')

      setStatus('success')
      form.reset()
      setProject('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="request-demo" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <SectionBadge>Request a demo</SectionBadge>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            See a project <span className="gradient-text">in action</span>
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Live demos are available by request. Fill out the form and I'll get
            back to you with access or a walkthrough.
          </p>
        </div>

        {status === 'success' ? (
          <div className="glass-strong mt-10 rounded-2xl p-10 text-center">
            <CheckCircle className="mx-auto text-emerald-400" size={48} />
            <h3 className="mt-4 text-xl font-bold text-white">Request sent!</h3>
            <p className="mt-2 text-[var(--color-muted)]">
              Thanks — I'll reply to your email within 24 hours with demo
              details.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="btn-ghost mt-6 rounded-xl px-6 py-2.5 text-sm font-medium"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-strong mt-10 space-y-5 rounded-2xl p-8"
          >
            <input type="hidden" name="_subject" value="Portfolio demo request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-white">
                  Full name *
                </span>
                <input
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="form-input"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-white">
                  Email *
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="form-input"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-white">
                Company / Organization
              </span>
              <input
                name="company"
                placeholder="Optional"
                className="form-input"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-white">
                Project you'd like to see *
              </span>
              <select
                name="project"
                required
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="form-input"
              >
                <option value="">Select a project…</option>
                {projects.map((p) => (
                  <option key={p.title} value={p.title}>
                    {p.emoji} {p.title}
                  </option>
                ))}
                <option value="General inquiry">General inquiry</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-white">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me what you're interested in — a live walkthrough, access credentials, or specific features…"
                className="form-input resize-none"
              />
            </label>

            {status === 'error' && (
              <p className="text-sm text-rose-400">
                Something went wrong. Please email{' '}
                <a
                  href="mailto:kinotimitchell@gmail.com"
                  className="underline"
                >
                  kinotimitchell@gmail.com
                </a>{' '}
                directly.
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
                  Request demo
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
