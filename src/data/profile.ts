export const EMAIL = 'kinotimitchell@gmail.com'

export const hiringHighlights = [
  {
    emoji: '🚀',
    title: 'Ships end-to-end',
    description:
      'From database schema and API design to deployed UI — I own the full delivery cycle, not just one layer.',
    accent: 'from-violet-500/20 to-purple-500/10 border-violet-500/30',
  },
  {
    emoji: '🧩',
    title: 'Real-world products',
    description:
      'Intern tracking, supply chain management, ML dashboards — built for actual users, not tutorial clones.',
    accent: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
  },
  {
    emoji: '📈',
    title: 'Data & logic',
    description:
      'Comfortable with analytics pipelines, fraud detection, and rule-based AI systems — strong problem-solving depth.',
    accent: 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30',
  },
  {
    emoji: '⚡',
    title: 'Fast learner',
    description:
      'Picks up new stacks quickly — React, Supabase, Streamlit, PySpark — and documents work clearly on GitHub.',
    accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
  },
]

export const experience = [
  {
    period: '2025 — Present',
    role: 'Full-stack Developer',
    org: 'Personal & client projects',
    highlights: [
      'Built TRace — intern activity tracking PWA with Supabase auth & RLS',
      'Developed SAMAKI fish supply chain platform with role-based permissions',
      'Deployed production apps to GitHub Pages with CI/CD workflows',
    ],
    accent: 'bg-violet-500',
  },
  {
    period: '2024 — 2025',
    role: 'Data & ML Developer',
    org: 'Academic & portfolio work',
    highlights: [
      'E-commerce big-data suite: fraud detection, churn, recommendations',
      'Streamlit dashboards with simulated data lakes and MapReduce rollups',
      'GitHub Actions CI for automated testing and deployment',
    ],
    accent: 'bg-cyan-500',
  },
  {
    period: '2024',
    role: 'AI / KBS Developer',
    org: 'Knowledge-based systems',
    highlights: [
      'Medical & animal identification expert systems with inference engines',
      'Forward-chaining rule engines with confidence scoring & explanations',
      'JSON knowledge bases with validation and admin interfaces',
    ],
    accent: 'bg-fuchsia-500',
  },
]

export const openTo = [
  { label: 'Internships', emoji: '🎓' },
  { label: 'Junior / Entry roles', emoji: '💼' },
  { label: 'Freelance projects', emoji: '🤝' },
  { label: 'Remote & hybrid', emoji: '🌍' },
  { label: 'Demo walkthroughs', emoji: '🖥️' },
  { label: 'Collaborations', emoji: '✨' },
]

export const interestOptions = [
  'Full-stack development',
  'React / frontend',
  'Python / data',
  'ML & analytics',
  'Expert systems / AI',
  'Internship opportunity',
  'Just exploring',
]

export type EmailDraft = {
  name: string
  company: string
  role: string
  project: string
  opportunity: string
  interests: string[]
  message: string
}

export function buildEmailLink(draft: EmailDraft): string {
  const subject = draft.project
    ? `Portfolio inquiry — ${draft.project}`
    : 'Portfolio inquiry — Mitchell Kinoti'

  const interestLine =
    draft.interests.length > 0
      ? draft.interests.join(', ')
      : '[What interested you]'

  const body = `Hi Mitchell,

I'm reaching out from ${draft.company || '[Company / Organization]'}.

━━━ ABOUT ME ━━━
Name: ${draft.name || '[Your full name]'}
Email: [Your email]
Company: ${draft.company || '[Company]'}
Role I'm hiring for: ${draft.role || '[e.g. Junior Developer, Intern]'}

━━━ WHAT I'M LOOKING FOR ━━━
Opportunity type: ${draft.opportunity || '[Internship / Full-time / Freelance / Demo]'}
Project of interest: ${draft.project || '[Pick a project or General inquiry]'}
What caught my attention: ${interestLine}

━━━ MESSAGE ━━━
${draft.message || "[Tell Mitchell what you'd like — a live demo, interview chat, resume request, or project deep-dive]"}

━━━ NEXT STEPS ━━━
I'd love to:
☐ Schedule a 15-min intro call
☐ Get a live demo walkthrough
☐ Receive your resume / CV
☐ Discuss a specific role

Best time to connect: [Your availability]

Looking forward to hearing from you!

Best regards,
${draft.name || '[Your name]'}`

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
