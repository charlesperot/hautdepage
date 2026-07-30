import { SubscribeForm } from "./SubscribeForm";
import { ConsentNote } from "./ConsentNote";

export function Hero() {
  return (
    <section className="mx-auto max-w-content px-5 pt-10 sm:pt-16">
      <h1 className="font-serif text-[2rem] leading-[1.1] text-ink sm:text-5xl">
        L&apos;actu Google Ads passée au crible.
      </h1>
      <p className="mt-4 text-lg text-muted sm:text-xl">
        Chaque jeudi, l&apos;essentiel en 3 minutes.
      </p>

      <div className="mt-7">
        <SubscribeForm formId="hero" />
        <ConsentNote />
      </div>

      <p className="mt-6 border-l-2 border-accent pl-3 text-sm text-muted">
        Écrit par <span className="text-ink">Charles Perot</span> — je pilote
        environ 1&nbsp;M€/mois de budget Google Ads pour mes clients.
      </p>
    </section>
  );
}
