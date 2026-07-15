import { EMAIL } from '../data/profile'

export type ActivityEvent =
  | 'cv-view'
  | 'cv-print'
  | 'certificate-request'

const COOLDOWN_MS = 4 * 60 * 60 * 1000 // one alert per event per browser session window

/**
 * Sends a lightweight email alert via FormSubmit when someone opens your CV
 * or requests a certificate. Does NOT capture visitor identity (no name/email)
 * unless they also submit the connect form separately.
 *
 * Rate-limited in localStorage to avoid inbox spam from repeat clicks.
 */
export async function notifyActivity(
  event: ActivityEvent,
  documentName: string,
): Promise<void> {
  const storageKey = `portfolio-activity-${event}-${documentName}`
  const lastSent = localStorage.getItem(storageKey)
  if (lastSent && Date.now() - Number(lastSent) < COOLDOWN_MS) return

  localStorage.setItem(storageKey, String(Date.now()))

  const labels: Record<ActivityEvent, string> = {
    'cv-view': 'CV opened',
    'cv-print': 'CV print/save clicked',
    'certificate-request': 'Certificate requested',
  }

  const data = new FormData()
  data.append('_subject', `[Portfolio] ${labels[event]} — ${documentName}`)
  data.append('_captcha', 'false')
  data.append('_template', 'table')
  data.append('Activity', labels[event])
  data.append('Document', documentName)
  data.append('Time (UTC)', new Date().toISOString())
  data.append(
    'Note',
    'Anonymous portfolio activity. Visitor name/email unknown unless they submit the connect form.',
  )

  try {
    await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    })
  } catch {
    // Never block the visitor if notification fails
  }
}
