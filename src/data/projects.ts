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
    accent: 'from-indigo-500 to-violet-600',
    description:
      'Internal intern & attaché tracking system built at Craft Silicon. Daily logs, progress tracking, and admin communication — shipped as a React PWA with Supabase.',
    tags: ['React', 'TypeScript', 'Supabase', 'PWA'],
    github: 'https://github.com/Kinoti-mitchell/attachment',
    featured: true,
  },
  {
    title: 'Rio Fish Farm',
    subtitle: 'SAMAKI Fish System',
    emoji: '🐟',
    accent: 'from-slate-500 to-indigo-600',
    description:
      'Fish-farm operations and record keeping that grew into a supply-chain platform with outlet distribution, roles, and audit trails.',
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Leaflet'],
    github: 'https://github.com/Kinoti-mitchell/SAMAKI',
    featured: true,
  },
  {
    title: 'E-commerce Big Data Analytics',
    emoji: '📊',
    accent: 'from-violet-500 to-indigo-600',
    description:
      'Academic data-lake project with ML pipelines for fraud detection, sentiment analysis, churn prediction, and recommendations — Streamlit dashboard included.',
    tags: ['Python', 'Streamlit', 'PySpark', 'Machine Learning'],
    github: 'https://github.com/Kinoti-mitchell/ecommerce',
    featured: true,
  },
  {
    title: 'Medical Problem Identification',
    emoji: '🏥',
    accent: 'from-rose-500 to-pink-600',
    description:
      'Knowledge-based system for medical exploration with forward-chaining inference, confidence scoring, and an explanation facility.',
    tags: ['Python', 'Streamlit', 'KBS'],
    github: 'https://github.com/Kinoti-mitchell/medicalproblemidentification',
  },
  {
    title: 'Animal Identification KBS',
    emoji: '🦁',
    accent: 'from-amber-500 to-orange-600',
    description:
      'Rule-based expert system identifying animals by traits — guided identification, confidence scoring, and knowledge management UI.',
    tags: ['Python', 'Streamlit', 'Expert Systems'],
    github: 'https://github.com/Kinoti-mitchell/animal-identification-kb',
  },
]

export const techStack = {
  languages: [
    'Python',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'SQL',
  ],
  frontend: ['React', 'Streamlit', 'Tailwind CSS', 'Vite', 'Leaflet', 'PWA'],
  backend: ['Node.js', 'Express', 'Supabase', 'REST APIs'],
  data: ['Pandas', 'PySpark', 'Machine Learning', 'Data analysis'],
  platforms: [
    'Windows',
    'Git',
    'County revenue systems',
    'POS & networking',
    'Technical support',
  ],
}
