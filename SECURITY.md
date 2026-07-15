# Portfolio security notes

## What is public

- **CV (HTML)** — intentionally public for job applications
- **Profile, experience, skills** — public
- **GitHub links** — public

## What is private

- **Certificate scans** — stored only in `private-documents/` (gitignored, never deployed)
- Certificate **metadata** on the site (title, result, date) — no serial numbers or images

## View notifications

When someone opens your CV or clicks "Request certificate", you may receive an email alert via FormSubmit.

- Alerts are **anonymous** — you do not get the visitor's name or email unless they submit the connect form
- Alerts are **rate-limited** (once per 4 hours per action per browser) to reduce spam
- Requires FormSubmit to be activated on your email (first form submission)

## Limitations (static GitHub Pages)

- Cannot truly "lock" a public CV file — anyone with the URL can open it
- View tracking is best-effort, not forensic-grade
- Do not put API secrets in the frontend

## Recommendations

1. Keep certificates out of `public/`
2. Consider removing referee phone numbers from the public CV if you prefer email-only contact
3. For stronger analytics later: Plausible, Google Analytics, or Supabase logging
