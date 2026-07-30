/**
 * Constantes centrales du site. Un seul endroit à éditer pour l'URL de prod,
 * les libellés de marque et l'accroche.
 */
export const site = {
  name: "Haut de Page",
  domain: "hautdepage.fr",
  url: "https://hautdepage.fr",
  tagline: "L'actu Google Ads passée au crible.",
  subtitle: "Chaque jeudi, l'essentiel en 3 minutes.",
  description:
    "Newsletter hebdomadaire francophone sur Google Ads. Chaque jeudi, l'actualité Google Ads et le SEA décryptés pour les e-commerçants et les praticiens, par Charles Perot.",
  author: "Charles Perot",
  contactEmail: "charles@hautdepage.fr",
  publishDay: "jeudi",
} as const;

/** URL de l'archive beehiiv, optionnelle. Section masquée si absente. */
export const archiveUrl = process.env.NEXT_PUBLIC_ARCHIVE_URL?.trim() || null;
