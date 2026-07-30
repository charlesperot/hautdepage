/**
 * Le bloc de 3 barres du logo : 1ère orange (marque), 2e et 3e grises, la 3e
 * plus courte. C'est le "bloc d'annonces" en haut d'une SERP. Réutilisé comme
 * marqueur d'index devant chaque titre de section (motif de signature).
 *
 * Reconstitué en SVG d'après le logo fourni — vectoriel, net à toutes les
 * tailles, un seul endroit à éditer.
 */
export function ThreeBars({
  className = "",
  size = 22,
  "aria-hidden": ariaHidden = true,
}: {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden={ariaHidden}
      focusable="false"
      className={className}
    >
      {/* Barre 1 — orange de marque, pleine largeur */}
      <rect x="6" y="10" width="88" height="19" rx="4.5" fill="rgb(var(--brand))" />
      {/* Barre 2 — grise, pleine largeur */}
      <rect x="6" y="40.5" width="88" height="19" rx="4.5" fill="rgb(var(--brand-gray))" />
      {/* Barre 3 — grise, plus courte */}
      <rect x="6" y="71" width="60" height="19" rx="4.5" fill="rgb(var(--brand-gray))" />
    </svg>
  );
}
