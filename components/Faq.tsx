import { SectionHeading } from "./SectionHeading";

/**
 * FAQ en accordéon natif (<details>) — accessible au clavier, aucun JS.
 */
const items: { q: string; a: string }[] = [
  {
    q: "C'est vraiment gratuit ?",
    a: "Oui, 100 % gratuit. Un email par semaine, c'est tout.",
  },
  {
    q: "À quelle fréquence je la reçois ?",
    a: "Une édition, chaque jeudi. Ni plus, ni moins.",
  },
  {
    q: "C'est pour les débutants ou les experts ?",
    a: "Les deux. Les e-commerçants qui gèrent leurs propres campagnes y trouvent du concret, les praticiens SEA plus techniques y trouvent des avis tranchés.",
  },
  {
    q: "Je peux me désinscrire facilement ?",
    a: "En un clic, via le lien en bas de chaque email. Effet immédiat.",
  },
  {
    q: "Tu vas spammer mon adresse ?",
    a: "Non. Un email par semaine, jamais revendu ni cédé. Voir la politique de confidentialité.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-wide px-5 pt-16 sm:pt-24">
      <SectionHeading eyebrow="Questions">Avant de t&apos;inscrire.</SectionHeading>

      <div className="mt-8 max-w-3xl divide-y divide-border border-t border-border">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink marker:content-none">
              {item.q}
              <span
                aria-hidden="true"
                className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
