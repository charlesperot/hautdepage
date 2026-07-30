import { SubscribeForm } from "./SubscribeForm";
import { ConsentNote } from "./ConsentNote";
import { Eyebrow } from "./Eyebrow";

/** Bande finale : second formulaire, identique au premier. */
export function FinalCta() {
  return (
    <section className="mt-16 border-y border-border bg-surface sm:mt-24">
      <div className="mx-auto max-w-content px-5 py-16 text-center sm:py-20">
        <div className="flex justify-center">
          <Eyebrow>Reçois la prochaine édition</Eyebrow>
        </div>
        <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
          Rendez-vous jeudi.
        </h2>
        <p className="mt-3 text-muted">
          Un email par semaine, l&apos;essentiel du Google Ads, rien de plus.
        </p>

        <div className="mx-auto mt-7 max-w-xl text-left">
          <SubscribeForm formId="footer" />
          <ConsentNote />
        </div>
      </div>
    </section>
  );
}
