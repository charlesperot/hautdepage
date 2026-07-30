import { SubscribeForm } from "./SubscribeForm";
import { ConsentNote } from "./ConsentNote";
import { SectionHeading } from "./SectionHeading";

/** Second formulaire, identique au premier, en fin de page. */
export function FinalCta() {
  return (
    <section className="mx-auto max-w-content px-5 pt-16 sm:pt-24">
      <SectionHeading>Reçois-la dès jeudi prochain</SectionHeading>
      <p className="mt-6 text-muted">
        Un email par semaine, l&apos;essentiel du Google Ads, rien de plus.
      </p>
      <div className="mt-6">
        <SubscribeForm formId="footer" />
        <ConsentNote />
      </div>
    </section>
  );
}
