import Link from "next/link";

/** Mention de consentement obligatoire sous le champ email. */
export function ConsentNote() {
  return (
    <p className="mt-3 text-xs leading-relaxed text-muted">
      En t&apos;inscrivant, tu acceptes de recevoir Haut de Page chaque jeudi.
      Désinscription en un clic.{" "}
      <Link
        href="/confidentialite"
        className="underline decoration-border underline-offset-2 hover:decoration-ink"
      >
        Politique de confidentialité
      </Link>
      .
    </p>
  );
}
