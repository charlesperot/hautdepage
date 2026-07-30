import { SectionHeading } from "./SectionHeading";
import { CheckMark } from "./Markers";

const profiles = [
  {
    title: "Tu vends en ligne",
    tag: "E-commerçants (Shopify & co)",
    points: [
      "Tu gères toi-même tes campagnes Search et Shopping.",
      "Tu es débutant ou intermédiaire et tu veux progresser vite.",
      "Tu veux savoir où tu perds de l'argent, sans jargon.",
    ],
  },
  {
    title: "Tu fais du SEA pour des clients",
    tag: "Freelances & agences",
    points: [
      "Tu gères des comptes Google Ads au quotidien.",
      "Tu veux rester à jour sans y passer des heures.",
      "Tu veux des avis tranchés, pas des communiqués Google.",
    ],
  },
];

export function ForWhom() {
  return (
    <section className="mx-auto max-w-wide px-5 pt-16 sm:pt-24">
      <SectionHeading eyebrow="Pour qui">C&apos;est pour toi si…</SectionHeading>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {profiles.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border p-6">
            <h3 className="font-serif text-xl text-ink">{p.title}</h3>
            <p className="mt-1 text-sm text-muted">{p.tag}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {p.points.map((point) => (
                <li key={point} className="flex gap-3 text-ink">
                  <CheckMark className="mt-0.5 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
