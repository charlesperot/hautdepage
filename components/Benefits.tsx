import { SectionHeading } from "./SectionHeading";

const items = [
  {
    title: "Le sujet de la semaine, décrypté",
    body: "Un thème creusé à fond, avec ce que ça change concrètement sur tes campagnes — pas de la théorie.",
  },
  {
    title: "Les news qui comptent, triées",
    body: "Le SEA bouge tout le temps. Je garde ce qui a un impact réel et je jette le reste. Pas un flux d'annonces Google recopiées.",
  },
  {
    title: "Un avis tranché",
    body: "Tiré de comptes réels que je gère au quotidien, pas de la documentation officielle. Tu sais ce que j'en pense, et pourquoi.",
  },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-content px-5 pt-16 sm:pt-24">
      <SectionHeading>Ce que tu reçois</SectionHeading>
      <ul className="mt-8 flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.title}>
            <h3 className="font-serif text-xl text-ink">{item.title}</h3>
            <p className="mt-2 text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
