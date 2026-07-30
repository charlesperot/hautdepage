/**
 * Limitation de débit basique par IP, en mémoire.
 *
 * Caveat assumé : sur un hébergement serverless (Vercel), chaque instance a sa
 * propre mémoire et les compteurs sont remis à zéro au recyclage. C'est une
 * première barrière anti-abus, pas une protection forte. Pour du costaud, il
 * faudrait un store partagé (Upstash / KV) — hors périmètre volontairement.
 */
type Hit = { count: number; resetAt: number };

const WINDOW_MS = 60_000; // 1 minute
const MAX_HITS = 5; // 5 tentatives / IP / minute

const store = new Map<string, Hit>();

export function rateLimit(ip: string): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const hit = store.get(ip);

  if (!hit || now > hit.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfterSec: 0 };
  }

  if (hit.count >= MAX_HITS) {
    return { ok: false, retryAfterSec: Math.ceil((hit.resetAt - now) / 1000) };
  }

  hit.count += 1;
  return { ok: true, retryAfterSec: 0 };
}

/** Nettoyage opportuniste pour éviter que la Map grossisse indéfiniment. */
export function pruneRateLimit(): void {
  const now = Date.now();
  for (const [ip, hit] of store) {
    if (now > hit.resetAt) store.delete(ip);
  }
}
