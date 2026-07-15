# Mitchell Kinoti — Portfolio

Personal portfolio site showcasing projects from [GitHub @Kinoti-mitchell](https://github.com/Kinoti-mitchell).

## Projects featured

- **TRace** — Intern activity tracking (React, Supabase)
- **SAMAKI** — Fish supply chain management
- **E-commerce Big Data Analytics** — ML pipelines & Streamlit dashboard
- **Medical Problem Identification** — Knowledge-based system
- **Animal Identification KBS** — Expert system
- **Fish Management** — GitHub Pages app

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a repo named `portfolio` (or `Kinoti-mitchell.github.io` for a user site)
2. Push this project to `main`
3. In repo **Settings → Pages**, set source to **GitHub Actions**
4. Push to `main` — the workflow deploys automatically

Live URL will be:
- `https://kinoti-mitchell.github.io/portfolio/` (project site)
- or `https://kinoti-mitchell.github.io/` (if repo is named `Kinoti-mitchell.github.io`)

If using a project site, update `base` in `vite.config.ts` to `'/portfolio/'`.
