import { ThreeBars } from "./ThreeBars";

/**
 * Bandeau de thèmes défilant (inspiration NBS), sobre : texte encre, filets
 * orange. L'animation est coupée si prefers-reduced-motion (voir globals.css).
 */
const topics = [
  "Performance Max",
  "Shopping",
  "PMax",
  "Search",
  "Tracking & conversions",
  "YouTube",
  "Demand Gen",
  "Enchères",
  "Feed produits",
  "Consent Mode",
];

function Row() {
  return (
    <>
      {topics.map((t) => (
        <span key={t} className="flex items-center">
          <ThreeBars size={14} className="mx-5 shrink-0 rotate-90" />
          <span className="font-serif text-lg text-ink">{t}</span>
        </span>
      ))}
    </>
  );
}

export function TopicsMarquee() {
  return (
    <section
      aria-label="Thèmes couverts"
      className="marquee mt-14 border-y border-border bg-white py-4 sm:mt-20"
    >
      <div className="marquee__track">
        {/* Contenu dupliqué pour un défilement continu (-50%) */}
        <Row />
        <Row />
      </div>
    </section>
  );
}
