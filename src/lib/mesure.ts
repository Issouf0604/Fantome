declare global {
  interface Window { umami?: { track: (e: string, d?: Record<string, string | number>) => void } }
}
export function mesurer(evenement: string, donnees?: Record<string, string | number>) {
  try { window.umami?.track(evenement, donnees); } catch {}
}
