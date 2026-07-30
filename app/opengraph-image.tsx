import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — L'actu Google Ads passée au crible`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Image OG 1200×630. Le logo officiel (public/logo.png) est intégré tel quel,
 * lu au build et encodé en data URI (le runtime Node de cette route permet fs).
 */
export default function OpengraphImage() {
  const brand = "#e8552b";
  const ink = "#161412";
  const muted = "#57534e";

  const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
        <div style={{ height: 14, width: "100%", backgroundColor: brand }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "72px 80px",
            justifyContent: "space-between",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={440} height={110} alt="" />

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
            <div style={{ width: 40, height: 4, backgroundColor: brand }} />
            Par Charles Perot · ~1 M€/mois de budget Google Ads
          </div>
        </div>
      </div>
    ),
    size,
  );
}
