import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/mentions-legales" className="hover:text-ink">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="hover:text-ink">
            Confidentialité
          </Link>
          <a href={`mailto:${site.contactEmail}`} className="hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
