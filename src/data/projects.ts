export type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  live?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'TRace',
    description:
      'Intern and industrial attachment daily activity tracking with role-based dashboards, charts, and admin communication. Built as a PWA with Supabase auth and row-level security.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'Vite'],
    github: 'https://github.com/Kinoti-mitchell/attachment',
    live: 'https://kinoti-mitchell.github.io/attachment',
    featured: true,
  },
  {
    title: 'SAMAKI — Fish System',
    description:
      'Full-stack fish supply chain management: outlet distribution, user roles, permissions, storage, vehicles, and audit trails. React frontend with Express API and Supabase.',
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Leaflet'],
    github: 'https://github.com/Kinoti-mitchell/SAMAKI',
    featured: true,
  },
  {
    title: 'E-commerce Big Data Analytics',
    description:
      'Simulated data lake with ML pipelines for fraud detection, sentiment analysis, basket analysis, churn prediction, and recommendations. Includes MapReduce-style rollups and a Streamlit dashboard.',
    tags: ['Python', 'Streamlit', 'PySpark', 'Machine Learning', 'Pandas'],
    github: 'https://github.com/Kinoti-mitchell/ecommerce',
    featured: true,
  },
  {
    title: 'Medical Problem Identification',
    description:
      'Classical knowledge-based system for medical knowledge exploration. Forward-chaining inference engine, rule-based reasoning, confidence scoring, and explanation facility — read-only and non-diagnostic.',
    tags: ['Python', 'Streamlit', 'KBS', 'Inference Engine'],
    github: 'https://github.com/Kinoti-mitchell/medicalproblemidentification',
  },
  {
    title: 'Animal Identification KBS',
    description:
      'Rule-based expert system that identifies animals by traits. Guided step-by-step identification, confidence scoring, top-3 suggestions, and a knowledge management interface.',
    tags: ['Python', 'Streamlit', 'Expert Systems', 'JSON'],
    github: 'https://github.com/Kinoti-mitchell/animal-identification-kb',
  },
  {
    title: 'Fish Management',
    description:
      'Earlier fish management web application deployed on GitHub Pages, covering inventory tracking and disposal workflows.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/Kinoti-mitchell/fish-management',
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Data & ML',
    items: ['Python', 'Streamlit', 'Pandas', 'PySpark', 'Scikit-learn'],
  },
  {
    category: 'AI / KBS',
    items: ['Expert Systems', 'Forward Chaining', 'Rule Engines', 'Inference'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub Actions', 'GitHub Pages', 'Vercel', 'CI/CD'],
  },
]
