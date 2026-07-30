import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Icône Apple : le bloc 3 barres du logo (3e plus courte), reconstitué d'après
 * le logo fourni. Fond blanc, coins arrondis pour l'écran d'accueil iOS.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          padding: "0 34px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ height: 30, borderRadius: 8, backgroundColor: "#e8552b" }} />
        <div style={{ height: 30, borderRadius: 8, backgroundColor: "#d6d6d6" }} />
        <div style={{ width: "66%", height: 30, borderRadius: 8, backgroundColor: "#d6d6d6" }} />
      </div>
    ),
    size,
  );
}
