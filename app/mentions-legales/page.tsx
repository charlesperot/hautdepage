import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Mentions légales — ${site.name}`,
  description: `Mentions légales de ${site.name}.`,
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-content px-5 py-12">
      <Link
        href="/"
        className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-ink"
      >
        ← Retour
      </Link>

      <h1 className="mt-6 font-serif text-3xl text-ink">Mentions légales</h1>
      <p className="mt-2 text-sm text-muted">
        {/* À compléter par Charles. */}
        Contenu à compléter.
      </p>

      <div className="mt-8 flex flex-col gap-6 text-ink [&_h2]:font-serif [&_h2]:text-xl [&_p]:mt-2 [&_p]:text-muted">
        <section>
          <h2>Éditeur du site</h2>
          <p>
            {site.name}, édité par {site.author}.
            <br />
            {/* Adresse / statut juridique / SIREN à compléter. */}
            [Statut juridique, adresse et numéro SIREN à compléter.]
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="underline decoration-border underline-offset-2 hover:text-ink"
            >
              {site.contactEmail}
            </a>
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
            91789, États-Unis.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site est la propriété
            de {site.author}, sauf mention contraire. Toute reproduction sans
            autorisation est interdite.
          </p>
        </section>
      </div>
    </main>
  );
}
