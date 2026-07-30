import { ThreeBars } from "./ThreeBars";
import { Eyebrow } from "./Eyebrow";

/**
 * En-tête de section : motif 3 barres (signature) + sur-titre optionnel +
 * titre serif. `tone="dark"` pour les sections à fond sombre.
 */
export function SectionHeading({
  eyebrow,
  children,
  id,
  tone = "light",
}: {
  eyebrow?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <ThreeBars size={18} className="shrink-0" />
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </div>
      <h2
        id={id}
        className={`mt-3 font-serif text-2xl sm:text-3xl ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
