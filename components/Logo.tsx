import Link from "next/link";
import { site } from "@/lib/site";
import { ThreeBars } from "./ThreeBars";

/**
 * Mot-marque : le bloc 3 barres + « HAUT DE PAGE » composé en Instrument Serif
 * (la police du logo). Le texte est du vrai texte, donc net, scalable et
 * accessible. Quand le logo définitif arrive, il suffit de le brancher ici.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} — accueil`}
    >
      <ThreeBars size={22} />
      <span className="font-serif text-xl uppercase leading-none tracking-[0.06em] text-ink">
        Haut de Page
      </span>
    </Link>
  );
}
