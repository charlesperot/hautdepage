import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Mot-marque officiel (fichier fourni : bloc 3 barres + « HAUT DE PAGE »).
 * Le PNG fait 1000×250 ; on l'affiche à hauteur fixe, largeur auto.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex ${className}`}
      aria-label={`${site.name} — accueil`}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={1000}
        height={250}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
