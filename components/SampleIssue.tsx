import { SectionHeading } from "./SectionHeading";
import { ThreeBars } from "./ThreeBars";

/**
 * Aperçu d'une édition (inspiration "Past issues" de PPC Mastery). Faute de
 * vraies archives ici, c'est un exemple représentatif — clairement étiqueté.
 */
export function SampleIssue() {
  return (
    <section className="mx-auto max-w-wide px-5 pt-16 sm:pt-24">
      <SectionHeading eyebrow="Aperçu">À quoi ça ressemble.</SectionHeading>

      <article className="mt-8 max-w-2xl overflow-hidden rounded-2xl border border-border bg-white">
        {/* En-tête façon email */}
        <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
          <div className="flex items-center gap-2">
            <ThreeBars size={16} />
            <span className="font-serif text-sm uppercase tracking-[0.06em] text-ink">
              Haut de Page
            </span>
          </div>
          <span className="text-xs text-muted">Jeudi · 3 min</span>
        </div>

        {/* Corps */}
        <div className="px-5 py-6 sm:px-7">
          <h3 className="font-serif text-xl text-ink sm:text-2xl">
            Performance Max ouvre (enfin) le reporting par canal
          </h3>

          <p className="mt-4 text-sm font-medium uppercase tracking-[0.1em] text-accent">
            Ce que ça change
          </p>
          <p className="mt-1 text-muted">
            Tu peux voir où part vraiment ton budget PMax — Search, Shopping,
            YouTube. Concrètement, comment j&apos;utilise ces données pour
            arrêter de financer les placements qui ne convertissent pas.
          </p>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.1em] text-accent">
            L&apos;avis
          </p>
          <blockquote className="mt-1 border-l-2 border-accent pl-4 text-ink">
            « Sur les comptes que je gère, ça a surtout servi à confirmer une
            intuition : la moitié du budget partait sur du trafic de marque
            déguisé. Voilà quoi regarder en premier. »
          </blockquote>
        </div>
      </article>

      <p className="mt-3 text-xs text-muted">
        Exemple représentatif d&apos;une édition.
      </p>
    </section>
  );
}
