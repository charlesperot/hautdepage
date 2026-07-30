/**
 * Le bloc de 3 barres du logo (1ère orange, 2 grises) — le "bloc d'annonces"
 * en haut d'une SERP. Réutilisé comme marqueur d'index devant chaque titre de
 * section (motif de signature).
 *
 * PLACEHOLDER : reconstitué en SVG d'après la description de la marque. À
 * remplacer par le fichier définitif si besoin (un seul endroit à éditer).
 */
export function ThreeBars({
  className = "",
  size = 20,
  "aria-hidden": ariaHidden = true,
}: {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
}) {
  const barHeight = size * 0.24;
  const gap = size * 0.14;
  const radius = barHeight * 0.35;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden={ariaHidden}
      focusable="false"
      className={className}
    >
      <rect
        x="0"
        y={size / 2 - barHeight * 1.5 - gap}
        width={size}
        height={barHeight}
        rx={radius}
        fill="var(--color-accent)"
      />
      <rect
        x="0"
        y={size / 2 - barHeight / 2}
        width={size}
        height={barHeight}
        rx={radius}
        fill="#a8a29e"
      />
      <rect
        x="0"
        y={size / 2 + barHeight / 2 + gap}
        width={size}
        height={barHeight}
        rx={radius}
        fill="#a8a29e"
      />
    </svg>
  );
}
