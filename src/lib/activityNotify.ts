import { EMAIL } from '../data/profile'

export type ActivityEvent =
  | 'cv-print-request'
  | 'cv-download-request'
  | 'certificate-request'

const COOLDOWN_MS = 4 * 60 * 60 * 1000 // one alert per event per browser session window

/**
 * Lightweight FormSubmit alert when someone requests CV or certificate access.
 * Does NOT capture visitor identity unless they also submit the connect form.
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
    'cv-print-request': 'CV print access requested',
    'cv-download-request': 'CV PDF download requested',
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
