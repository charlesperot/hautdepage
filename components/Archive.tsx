import { SectionHeading } from "./SectionHeading";
import { archiveUrl } from "@/lib/site";

/**
 * Dernières éditions. Rendue uniquement si NEXT_PUBLIC_ARCHIVE_URL est défini —
 * sinon on ne rend rien du tout (pas d'état vide).
 */
export function Archive() {
  if (!archiveUrl) return null;

  return (
    <section className="mx-auto max-w-wide px-5 pt-16 sm:pt-24">
      <SectionHeading>Dernières éditions</SectionHeading>
      <p className="mt-6 text-muted">
        Tu veux voir le niveau avant de t&apos;abonner ? Les éditions passées
        sont en accès libre.
      </p>
      <a
        href={archiveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
      >
        Lire les dernières éditions
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
