export type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  featured?: boolean
  accent: string
  emoji: string
}

export const projects: Project[] = [
  {
    title: 'TRace',
    emoji: '📋',
    accent: 'from-cyan-500 to-blue-600',
    description:
      'Intern and industrial attachment daily activity tracking with role-based dashboards, charts, and admin communication. Built as a PWA with Supabase auth and row-level security.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'Vite'],
    github: 'https://github.com/Kinoti-mitchell/attachment',
    featured: true,
  },
  {
    title: 'SAMAKI — Fish System',
    emoji: '🐟',
    accent: 'from-emerald-500 to-teal-600',
    description:
      'Full-stack fish supply chain management: outlet distribution, user roles, permissions, storage, vehicles, and audit trails. React frontend with Express API and Supabase.',
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Leaflet'],
    github: 'https://github.com/Kinoti-mitchell/SAMAKI',
    featured: true,
  },
  {
    title: 'E-commerce Big Data Analytics',
    emoji: '📊',
    accent: 'from-violet-500 to-purple-600',
    description:
      'Simulated data lake with ML pipelines for fraud detection, sentiment analysis, basket analysis, churn prediction, and recommendations. Includes MapReduce-style rollups and a Streamlit dashboard.',
    tags: ['Python', 'Streamlit', 'PySpark', 'Machine Learning', 'Pandas'],
    github: 'https://github.com/Kinoti-mitchell/ecommerce',
    featured: true,
  },
  {
    title: 'Medical Problem Identification',
    emoji: '🏥',
    accent: 'from-rose-500 to-pink-600',
    description:
      'Classical knowledge-based system for medical knowledge exploration. Forward-chaining inference engine, rule-based reasoning, confidence scoring, and explanation facility.',
    tags: ['Python', 'Streamlit', 'KBS', 'Inference Engine'],
    github: 'https://github.com/Kinoti-mitchell/medicalproblemidentification',
  },
  {
    title: 'Animal Identification KBS',
    emoji: '🦁',
    accent: 'from-amber-500 to-orange-600',
    description:
      'Rule-based expert system that identifies animals by traits. Guided step-by-step identification, confidence scoring, top-3 suggestions, and a knowledge management interface.',
    tags: ['Python', 'Streamlit', 'Expert Systems', 'JSON'],
    github: 'https://github.com/Kinoti-mitchell/animal-identification-kb',
  },
  {
    title: 'Fish Management',
    emoji: '🌊',
    accent: 'from-sky-500 to-indigo-600',
    description:
      'Earlier fish management web application deployed on GitHub Pages, covering inventory tracking and disposal workflows.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/Kinoti-mitchell/fish-management',
  },
]

export const skills = [
  {
    category: 'Frontend',
    emoji: '⚡',
    accent: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
    tagAccent: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/25',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend',
    emoji: '🔧',
    accent: 'border-violet-500/40 bg-violet-500/10 text-violet-300',
    tagAccent: 'bg-violet-500/15 text-violet-200 border-violet-500/25',
    items: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Data & ML',
    emoji: '🧠',
    accent: 'border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300',
    tagAccent: 'bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-500/25',
    items: ['Python', 'Streamlit', 'Pandas', 'PySpark', 'Scikit-learn'],
  },
  {
    category: 'AI / KBS',
    emoji: '🤖',
    accent: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    tagAccent: 'bg-amber-500/15 text-amber-200 border-amber-500/25',
    items: ['Expert Systems', 'Forward Chaining', 'Rule Engines', 'Inference'],
  },
  {
    category: 'Tools',
    emoji: '🛠️',
    accent: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    tagAccent: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/25',
    items: ['Git', 'GitHub Actions', 'GitHub Pages', 'Vercel', 'CI/CD'],
  },
]
