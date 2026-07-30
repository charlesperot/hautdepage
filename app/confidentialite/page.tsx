import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${site.name}`,
  description: `Politique de confidentialité de ${site.name}.`,
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-content px-5 py-12">
      <Link
        href="/"
        className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-ink"
      >
        ← Retour
      </Link>

      <h1 className="mt-6 font-serif text-3xl text-ink">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm text-muted">
        {/* À compléter / faire relire par Charles. */}
        Contenu de base à compléter.
      </p>

      <div className="mt-8 flex flex-col gap-6 text-ink [&_h2]:font-serif [&_h2]:text-xl [&_li]:mt-1 [&_p]:mt-2 [&_p]:text-muted [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted">
        <section>
          <h2>Quelles données je collecte</h2>
          <p>
            Quand tu t&apos;inscris à la newsletter {site.name}, je collecte
            uniquement ton adresse email. Aucun autre champ n&apos;est demandé.
          </p>
        </section>

        <section>
          <h2>Pourquoi</h2>
          <p>
            Ton email sert uniquement à t&apos;envoyer la newsletter{" "}
            {site.name} chaque {site.publishDay}. Il n&apos;est ni vendu ni
            cédé à des tiers.
          </p>
        </section>

        <section>
          <h2>Où sont stockées ces données</h2>
          <p>
            La gestion des inscriptions et l&apos;envoi des emails sont assurés
            par beehiiv, Inc. Ton adresse est stockée sur leurs serveurs. Voir
            la politique de confidentialité de beehiiv pour le détail.
          </p>
        </section>

        <section>
          <h2>Consentement et désinscription</h2>
          <p>
            L&apos;inscription se fait en double opt-in : tu reçois un email de
            confirmation à valider. Chaque édition contient un lien de
            désinscription en un clic, effectif immédiatement.
          </p>
        </section>

        <section>
          <h2>Tes droits</h2>
          <p>
            Conformément au RGPD, tu disposes d&apos;un droit d&apos;accès, de
            rectification et de suppression de tes données. Pour l&apos;exercer :
          </p>
          <ul>
            <li>
              te désinscrire via le lien présent dans chaque email, ou
            </li>
            <li>
              m&apos;écrire à{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="underline decoration-border underline-offset-2 hover:text-ink"
              >
                {site.contactEmail}
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Ce site n&apos;utilise aucun cookie de suivi ni outil
            d&apos;analytics.
          </p>
        </section>
      </div>
    </main>
  );
}
