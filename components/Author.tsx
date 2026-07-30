import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

/**
 * Photo optionnelle. Quand Charles fournit une photo :
 *   1. déposer le fichier dans /public/charles.jpg (ou .webp)
 *   2. passer AUTHOR_PHOTO ci-dessous à son chemin ("/charles.jpg")
 * Tant que c'est null, la section s'affiche proprement sans photo.
 */
const AUTHOR_PHOTO: string | null = null;

export function Author() {
  return (
    <section className="mx-auto max-w-content px-5 pt-16 sm:pt-24">
      <SectionHeading>Qui écrit</SectionHeading>
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        {AUTHOR_PHOTO && (
          <Image
            src={AUTHOR_PHOTO}
            alt="Charles Perot"
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full object-cover"
          />
        )}
        <div className="text-lg leading-relaxed text-ink">
          <p>
            Moi c&apos;est Charles. Je gère une agence Google Ads qui dépense
            environ <span className="whitespace-nowrap">1&nbsp;M€/mois</span>{" "}
            pour ses clients.
          </p>
          <p className="mt-3 text-muted">
            Haut de Page, c&apos;est ce que j&apos;apprends sur ces comptes,
            passé au crible et écrit noir sur blanc. Pas de blabla, pas de
            recopiage de la doc Google.
          </p>
        </div>
      </div>
    </section>
  );
}
