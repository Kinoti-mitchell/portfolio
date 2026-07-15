import { Mail, Phone, Send } from 'lucide-react'
import { EMAIL, PHONE, LOCATION } from '../data/profile'
import { GitHubIcon } from './GitHubIcon'
import { SectionBadge } from './SectionBadge'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-600/20" />
          <div className="relative">
            <SectionBadge>Contact</SectionBadge>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-muted)]">
              Quick contact — for demos, certificates, or roles use the{' '}
              <a href="#request-demo" className="text-violet-300 underline">
                connect form below
              </a>
              .
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm"
              >
                <Mail size={18} />
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-medium"
              >
                <Phone size={18} />
                {PHONE}
              </a>
              <a
                href="https://github.com/Kinoti-mitchell"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-medium"
              >
                <GitHubIcon size={18} />
                GitHub
              </a>
            </div>

            <p className="mt-6 text-sm text-[var(--color-muted)]">{LOCATION}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-violet-300/80">
              <Send size={14} />
              Usually responds within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
