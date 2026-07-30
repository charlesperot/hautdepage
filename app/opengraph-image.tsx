import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — L'actu Google Ads passée au crible`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Image OG 1200×630 générée depuis le concept du logo (bloc 3 barres + marque).
 * PLACEHOLDER visuel : reconstitué en éléments simples. Peut être remplacé par
 * un export du logo définitif plus tard.
 */
export default function OpengraphImage() {
  const accent = "#c2410c";
  const gray = "#a8a29e";
  const ink = "#161412";
  const muted = "#57534e";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          fontFamily: "serif",
        }}
      >
        <div style={{ height: 14, width: "100%", backgroundColor: accent }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "72px 80px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: 72,
              }}
            >
              <div style={{ height: 16, borderRadius: 4, backgroundColor: accent }} />
              <div style={{ height: 16, borderRadius: 4, backgroundColor: gray }} />
              <div style={{ height: 16, borderRadius: 4, backgroundColor: gray }} />
            </div>
            <div
              style={{
                fontSize: 40,
                letterSpacing: 4,
                color: ink,
                textTransform: "uppercase",
              }}
            >
              Haut de Page
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 76,
                lineHeight: 1.05,
                color: ink,
              }}
            >
              <span>L&apos;actu Google Ads</span>
              <span>passée au crible.</span>
            </div>
            <div style={{ fontSize: 38, color: muted, marginTop: 24 }}>
              Chaque jeudi, l&apos;essentiel en 3 minutes.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 26,
              color: muted,
            }}
          >
            <div style={{ width: 40, height: 4, backgroundColor: accent }} />
            Par Charles Perot · ~1 M€/mois de budget Google Ads
          </div>
        </div>
      </div>
    ),
    size,
  );
}
