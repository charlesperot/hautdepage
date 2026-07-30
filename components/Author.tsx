import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

/** Photo de l'auteur (recadrée/compressée dans public/charles.jpg). */
const AUTHOR_PHOTO: string | null = "/charles.jpg";

export function Author() {
  return (
    <section className="mx-auto max-w-content px-5 pt-16 sm:pt-24">
      <SectionHeading>Qui écrit</SectionHeading>
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
        {AUTHOR_PHOTO && (
          <Image
            src={AUTHOR_PHOTO}
            alt="Charles Perot"
            width={640}
            height={640}
            className="h-28 w-28 shrink-0 rounded-2xl object-cover sm:h-32 sm:w-32"
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
