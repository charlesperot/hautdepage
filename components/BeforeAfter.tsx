import { SectionHeading } from "./SectionHeading";
import { CheckMark, CrossMark } from "./Markers";

const without = [
  "Tu passes des heures à trier les changelogs et annonces Google.",
  "Tu découvres les changements quand ils t'ont déjà coûté cher.",
  "Tu appliques des conseils tirés de la doc, jamais testés sur un vrai compte.",
  "Tu rates des nouveautés que tes concurrents exploitent déjà.",
];

const withNl = [
  "L'essentiel de la semaine en 3 minutes, chaque jeudi.",
  "Ce qui a changé — et ce que ça change pour tes campagnes.",
  "Des avis tranchés, testés sur des comptes réels (~1 M€/mois).",
  "Tu sais quoi faire avant tes clients et tes concurrents.",
];

export function BeforeAfter() {
  return (
    <section className="mt-16 bg-ink sm:mt-24">
      <div className="mx-auto max-w-wide px-5 py-16 sm:py-20">
        <SectionHeading eyebrow="Avant / après" tone="dark">
          Ce que ça change, concrètement.
        </SectionHeading>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Sans */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/50">
              Sans Haut de Page
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {without.map((line) => (
                <li key={line} className="flex gap-3 text-white/70">
                  <CrossMark className="mt-0.5 shrink-0 text-white/40" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avec */}
          <div className="rounded-2xl border border-brand/40 bg-brand/[0.08] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
              Avec Haut de Page
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {withNl.map((line) => (
                <li key={line} className="flex gap-3 text-white">
                  <CheckMark className="mt-0.5 shrink-0 text-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
