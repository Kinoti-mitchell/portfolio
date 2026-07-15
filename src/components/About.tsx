export function About() {
  return (
    <section id="about" className="border-y border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-[var(--color-accent)]">About</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Developer &amp; problem solver
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="leading-relaxed text-[var(--color-muted)]">
            I'm Mitchell Kinoti, a software developer focused on building
            practical applications that solve real problems. My work spans
            modern React frontends with Supabase backends, Python data pipelines,
            and classical AI knowledge-based systems.
          </p>
          <p className="leading-relaxed text-[var(--color-muted)]">
            Recent projects include TRace — an intern activity tracking PWA,
            SAMAKI — a fish supply chain platform with role-based permissions,
            and an e-commerce big-data analytics suite with fraud detection and
            ML recommendations. I enjoy shipping end-to-end products from
            database schema to deployed UI.
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: 'Projects', value: '6+' },
            { label: 'Stack', value: 'Full-stack' },
            { label: 'Focus', value: 'Web & Data' },
            { label: 'Location', value: 'Kenya' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-[var(--color-muted)]">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
