import Image from "next/image";

/**
 * Carte de crédibilité (colonne droite du hero). Uniquement des faits
 * légitimes — aucun compteur d'abonnés, aucune preuve sociale inventée.
 */
const rows: { label: string; value: string }[] = [
  { label: "Rythme", value: "Chaque jeudi" },
  { label: "Lecture", value: "3 minutes" },
  { label: "Budget géré", value: "~1 M€/mois" },
  { label: "Source", value: "Comptes réels" },
  { label: "Prix", value: "Gratuit" },
];

export function CredibilityCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-6">
      <div className="flex items-center gap-3">
        <Image
          src="/charles.jpg"
          alt="Charles Perot"
          width={640}
          height={640}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div className="leading-tight">
          <p className="font-serif text-lg text-ink">Charles Perot</p>
          <p className="text-sm text-muted">Agence Google Ads</p>
        </div>
      </div>

      <dl className="mt-5 divide-y divide-border border-t border-border">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-2.5 text-sm"
          >
            <dt className="text-muted">{row.label}</dt>
            <dd
              className={
                row.value === "Gratuit"
                  ? "font-medium text-accent"
                  : "font-medium text-ink"
              }
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
