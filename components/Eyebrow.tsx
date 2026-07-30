/** Petit sur-titre éditorial (majuscules, lettré, discret). */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
      {children}
    </p>
  );
}
