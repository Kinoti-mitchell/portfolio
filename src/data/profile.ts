export const FULL_NAME = 'Mitchell Ntinyari Kinoti'
export const SHORT_NAME = 'Mitchell Kinoti'
export const EMAIL = 'kinotimitchell@gmail.com'
export const PHONE = '+254 743 814 752'
export const LOCATION = 'Meru, Kenya'
export const ADDRESS = 'P.O. Box 1208-60200, Meru, Kenya'
export const TITLE = 'ICT · Customer Experience · Software Support'
export const CURRENT_ROLE = 'Customer Experience & Junior Software Developer'
export const CURRENT_COMPANY = 'Craft Silicon Payments'

export const profileSummary =
  'ICT and customer-experience professional with hands-on expertise in software support, county revenue systems, and network administration, currently completing a part-time BSc in Information Technology while working. Experienced in deploying and supporting revenue-management platforms for major public-sector clients, training end users, and resolving technical challenges under pressure, with a strong record in technical sales and customer relations.'

export const hiringHighlights = [
  {
    emoji: '🏛️',
    title: 'Public-sector systems',
    description:
      'Deploy and support County Revenue Management Systems for Meru, Homa Bay, Kajiado, and Turkana — including JamboPay and CIROM platforms.',
    accent: 'from-violet-500/20 to-purple-500/10 border-violet-500/30',
  },
  {
    emoji: '🎓',
    title: 'Training & onboarding',
    description:
      'Train county staff, onboard new users, and translate technical detail for non-technical audiences — English & Kiswahili.',
    accent: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
  },
  {
    emoji: '💻',
    title: 'Developer & support',
    description:
      'Built Craft Trail (intern tracking) and Rio Fish Farm management systems while delivering day-to-day client support at Craft Silicon.',
    accent: 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30',
  },
  {
    emoji: '📊',
    title: 'Data & reporting',
    description:
      'Analyse client usage, prepare performance reports for management, and turn operational data into actionable insights.',
    accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
  },
]

export const experience = [
  {
    period: '2024 — Present',
    role: 'Customer Experience & Junior Software Developer',
    org: 'Craft Silicon Payments',
    highlights: [
      'Deploy and support the County Revenue Management System for Meru, Homa Bay, Kajiado, and Turkana County Revenue Boards',
      'Train county staff and onboard new users for smooth system adoption',
      'Analyse client usage data and prepare internal performance reports',
      'Diagnose and resolve system incidents, minimising client downtime',
      'Built Craft Trail — internal intern & attaché tracking system',
    ],
    accent: 'bg-violet-500',
  },
  {
    period: '2023 — 2024',
    role: 'Computer Technician & Sales Associate',
    org: 'Rikel Technologies',
    highlights: [
      'Diagnosed and repaired computer hardware and software faults',
      'Advised customers on laptops and accessories; closed sales matched to budget',
      'Built lasting relationships through attentive after-sales support',
    ],
    accent: 'bg-cyan-500',
  },
  {
    period: '2022 — 2023',
    role: 'ICT Intern',
    org: 'Meru County Revenue Board',
    highlights: [
      'Configured and maintained network, Ethernet, and internet infrastructure',
      'Installed, serviced, and troubleshot POS machines and parking systems',
      'Supported revenue-collection systems and front-desk customer support',
    ],
    accent: 'bg-emerald-500',
  },
  {
    period: '2018 — Present',
    role: 'ICT Personnel',
    org: "MCK St Paul's Church, Meru",
    highlights: [
      'Manage projection, typesetting, and preparation of service materials',
      'Maintain church computers, printers, and related equipment',
    ],
    accent: 'bg-fuchsia-500',
  },
  {
    period: 'Jan — May 2022',
    role: 'Field Data Collector',
    org: 'Pula Insurance Company',
    highlights: [
      'Collected farmer and produce data in the field using CommCare mobile app',
      'Compiled reports and logged farmer complaints for follow-up',
    ],
    accent: 'bg-amber-500',
  },
  {
    period: 'Feb — May 2021',
    role: 'ICT Attaché (Industrial Attachment)',
    org: 'Meru County Revenue Board',
    highlights: [
      'Terminated network cabling, configured connectivity, repaired POS machines',
      'Data entry, analysis, and maintenance of JamboPay and CIROM systems',
    ],
    accent: 'bg-sky-500',
  },
  {
    period: 'May — Dec 2019',
    role: 'ICT Officer',
    org: 'Meru Homes Security Company',
    highlights: [
      'Company IT support — office machines and network cabling',
      'Weekly operational reports and marketing material design',
    ],
    accent: 'bg-rose-500',
  },
]

export const education = [
  {
    period: '2023 — 2026',
    qualification: 'Bachelor of Science in Information Technology',
    institution: 'Meru University of Science and Technology',
    note: 'Part-time, in progress',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    period: '2018 — 2022',
    qualification: 'Diploma in Information Communication Technology',
    institution: 'Meru National Polytechnic',
    accent: 'from-cyan-500 to-teal-600',
  },
  {
    period: '2014 — 2017',
    qualification: 'Kenya Certificate of Secondary Education (KCSE)',
    institution: "Nkuene Girls' High School",
    accent: 'from-fuchsia-500 to-pink-600',
  },
  {
    period: '2010 — 2013',
    qualification: 'Kenya Certificate of Primary Education (KCPE)',
    institution: "St. Theresa Primary School",
    accent: 'from-amber-500 to-orange-600',
  },
]

export const openTo = [
  { label: 'ICT & software roles', emoji: '💼' },
  { label: 'Customer experience', emoji: '🤝' },
  { label: 'Technical support', emoji: '🛠️' },
  { label: 'Junior development', emoji: '💻' },
  { label: 'Meru / remote', emoji: '📍' },
  { label: 'Demo walkthroughs', emoji: '🖥️' },
]

export const interestOptions = [
  'Software support',
  'County revenue systems',
  'Customer experience',
  'Junior development',
  'ICT / technical roles',
  'Training & onboarding',
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
    : `Portfolio inquiry — ${SHORT_NAME}`

  const interestLine =
    draft.interests.length > 0
      ? draft.interests.join(', ')
      : '[What interested you]'

  const body = `Hi ${SHORT_NAME.split(' ')[0]},

I'm reaching out from ${draft.company || '[Company / Organization]'}.

━━━ ABOUT ME ━━━
Name: ${draft.name || '[Your full name]'}
Email: [Your email]
Company: ${draft.company || '[Company]'}
Role I'm hiring for: ${draft.role || '[e.g. ICT Officer, Software Support]'}

━━━ WHAT I'M LOOKING FOR ━━━
Opportunity type: ${draft.opportunity || '[Full-time / Internship / Demo]'}
Project of interest: ${draft.project || '[Pick a project or General inquiry]'}
What caught my attention: ${interestLine}

━━━ MESSAGE ━━━
${draft.message || "[Tell Mitchell what you'd like — a live demo, interview, or CV review]"}

━━━ NEXT STEPS ━━━
I'd love to:
☐ Schedule a 15-min intro call
☐ Get a live demo walkthrough
☐ Review CV & certificates on portfolio
☐ Discuss a specific role

Best time to connect: [Your availability]

Best regards,
${draft.name || '[Your name]'}`

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
