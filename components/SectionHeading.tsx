import { ThreeBars } from "./ThreeBars";

/**
 * Titre de section précédé du motif 3 barres (marqueur d'index de la signature).
 */
export function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="flex items-center gap-3 font-serif text-2xl text-ink sm:text-3xl"
    >
      <ThreeBars size={22} className="shrink-0" />
      {children}
    </h2>
  );
}
