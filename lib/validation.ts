/**
 * Validation d'email partagée entre le client et le serveur — même source de
 * vérité pour éviter les divergences. Volontairement stricte-mais-simple :
 * on rejette l'évidemment invalide, beehiiv fait la validation finale.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const email = value.trim();
  if (email.length < 5 || email.length > 254) return false;
  return EMAIL_RE.test(email);
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}
