export type Project = {
  title: string
  subtitle?: string
  description: string
  tags: string[]
  github: string
  featured?: boolean
  accent: string
  emoji: string
}

export const projects: Project[] = [
  {
    title: 'Craft Trail',
    subtitle: 'TRace — Craft Silicon',
    emoji: '📋',
    accent: 'from-cyan-500 to-blue-600',
    description:
      'Internal intern & attaché tracking system built at Craft Silicon. Records daily logs, tracks progress, and supports admin communication — deployed as a React PWA with Supabase.',
    tags: ['React', 'TypeScript', 'Supabase', 'PWA', 'Craft Silicon'],
    github: 'https://github.com/Kinoti-mitchell/attachment',
    featured: true,
  },
  {
    title: 'Rio Fish Farm',
    subtitle: 'SAMAKI Fish System',
    emoji: '🐟',
    accent: 'from-emerald-500 to-teal-600',
    description:
      'Fish-farm management system for operations and record keeping — evolved into a full supply chain platform with outlet distribution, roles, and audit trails.',
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Leaflet'],
    github: 'https://github.com/Kinoti-mitchell/SAMAKI',
    featured: true,
  },
  {
    title: 'E-commerce Big Data Analytics',
    emoji: '📊',
    accent: 'from-violet-500 to-purple-600',
    description:
      'Academic data-lake project with ML pipelines for fraud detection, sentiment analysis, churn prediction, and recommendations — Streamlit dashboard included.',
    tags: ['Python', 'Streamlit', 'PySpark', 'Machine Learning', 'Pandas'],
    github: 'https://github.com/Kinoti-mitchell/ecommerce',
    featured: true,
  },
  {
    title: 'Medical Problem Identification',
    emoji: '🏥',
    accent: 'from-rose-500 to-pink-600',
    description:
      'Knowledge-based system for medical knowledge exploration with forward-chaining inference, confidence scoring, and explanation facility.',
    tags: ['Python', 'Streamlit', 'KBS', 'Inference Engine'],
    github: 'https://github.com/Kinoti-mitchell/medicalproblemidentification',
  },
  {
    title: 'Animal Identification KBS',
    emoji: '🦁',
    accent: 'from-amber-500 to-orange-600',
    description:
      'Rule-based expert system identifying animals by traits — guided identification, confidence scoring, and knowledge management UI.',
    tags: ['Python', 'Streamlit', 'Expert Systems', 'JSON'],
    github: 'https://github.com/Kinoti-mitchell/animal-identification-kb',
  },
  {
    title: 'Fish Management',
    emoji: '🌊',
    accent: 'from-sky-500 to-indigo-600',
    description:
      'Earlier fish management web app on GitHub Pages — inventory tracking and disposal workflows.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/Kinoti-mitchell/fish-management',
  },
]

export const skills = [
  {
    category: 'Software & Systems',
    emoji: '🖥️',
    accent: 'border-violet-500/40 bg-violet-500/10 text-violet-300',
    tagAccent: 'bg-violet-500/15 text-violet-200 border-violet-500/25',
    items: [
      'Craft Silicon Payments',
      'County revenue systems',
      'Payment systems',
      'Junior software development',
      'React & Supabase',
    ],
  },
  {
    category: 'Client Support',
    emoji: '🤝',
    accent: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
    tagAccent: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/25',
    items: [
      'Training & onboarding',
      'Customer experience',
      'Incident resolution',
      'Stakeholder engagement',
      'Technical support',
    ],
  },
  {
    category: 'Data & Reporting',
    emoji: '📊',
    accent: 'border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300',
    tagAccent: 'bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-500/25',
    items: [
      'Client performance analysis',
      'Data analysis & reporting',
      'Management insights',
      'Python & Streamlit',
      'Record keeping',
    ],
  },
  {
    category: 'Technical',
    emoji: '🔧',
    accent: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    tagAccent: 'bg-amber-500/15 text-amber-200 border-amber-500/25',
    items: [
      'Windows 7–11',
      'IP & router config',
      'Network cabling',
      'POS maintenance',
      'OS installation',
    ],
  },
  {
    category: 'Professional',
    emoji: '⭐',
    accent: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    tagAccent: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/25',
    items: [
      'Sales & customer relations',
      'Team collaboration',
      'English & Kiswahili',
      'Working under pressure',
      'Attention to detail',
    ],
  },
]
