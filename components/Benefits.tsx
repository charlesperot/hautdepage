import { SectionHeading } from "./SectionHeading";

const items = [
  {
    n: "01",
    title: "Le sujet de la semaine, décrypté",
    body: "Un thème creusé à fond, avec ce que ça change concrètement sur tes campagnes — pas de la théorie.",
  },
  {
    n: "02",
    title: "Les news qui comptent, triées",
    body: "Le SEA bouge tout le temps. Je garde ce qui a un impact réel et je jette le reste. Pas un flux d'annonces Google recopiées.",
  },
  {
    n: "03",
    title: "Un avis tranché",
    body: "Tiré de comptes réels que je gère au quotidien, pas de la documentation officielle. Tu sais ce que j'en pense, et pourquoi.",
  },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-wide px-5 pt-16 sm:pt-24">
      <SectionHeading eyebrow="Ce que tu reçois">
        Un email, trois choses utiles.
      </SectionHeading>

      <ul className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {items.map((item) => (
          <li
            key={item.n}
            className="border-t-2 border-accent pt-4 sm:border-t-0 sm:border-l-2 sm:pl-5 sm:pt-0"
          >
            <span className="font-serif text-sm text-accent">{item.n}</span>
            <h3 className="mt-1 font-serif text-xl text-ink">{item.title}</h3>
            <p className="mt-2 text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
