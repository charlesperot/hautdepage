import { SubscribeForm } from "./SubscribeForm";
import { ConsentNote } from "./ConsentNote";
import { CredibilityCard } from "./CredibilityCard";
import { Eyebrow } from "./Eyebrow";

export function Hero() {
  return (
    <section className="mx-auto max-w-wide px-5 pt-10 sm:pt-16">
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Colonne principale */}
        <div>
          <Eyebrow>Newsletter Google Ads · Chaque jeudi · 3 min · Gratuit</Eyebrow>

          <h1 className="mt-4 font-serif text-[2.1rem] leading-[1.08] text-ink sm:text-5xl">
            L&apos;actu Google Ads <em className="not-italic">passée</em>{" "}
            <em className="italic">au crible.</em>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Chaque jeudi, un email. Ce qui a bougé sur Google Ads, ce que ça
            change pour tes campagnes, et quoi faire. Zéro blabla, zéro
            communiqué Google recopié, zéro résumé d&apos;IA du travail des
            autres.
          </p>

          <div className="mt-7">
            <SubscribeForm formId="hero" />
            <ConsentNote />
          </div>
        </div>

        {/* Carte de crédibilité */}
        <div className="lg:pt-9">
          <CredibilityCard />
        </div>
      </div>
    </section>
  );
}
