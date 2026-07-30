/**
 * Bande de faits (remplace la "stats bar" à compteur d'abonnés des références).
 * Que des faits vérifiables — rien d'inventé.
 */
const facts: { value: string; label: string }[] = [
  { value: "Chaque jeudi", label: "un seul email" },
  { value: "3 min", label: "de lecture" },
  { value: "~1 M€/mois", label: "de budget géré" },
  { value: "100 %", label: "gratuit" },
];

export function FactsStrip() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-wide grid-cols-2 gap-x-4 gap-y-6 px-5 py-8 sm:grid-cols-4">
        {facts.map((f) => (
          <div key={f.value} className="text-center sm:text-left">
            <div className="font-serif text-2xl text-ink sm:text-3xl">
              {f.value}
            </div>
            <div className="mt-1 text-sm text-muted">{f.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
