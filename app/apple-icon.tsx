import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Icône Apple PLACEHOLDER : le bloc 3 barres du logo. À remplacer par l'icône
 * générée depuis le favicon définitif fourni.
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
          padding: 40,
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ height: 26, borderRadius: 8, backgroundColor: "#c2410c" }} />
        <div style={{ height: 26, borderRadius: 8, backgroundColor: "#a8a29e" }} />
        <div style={{ height: 26, borderRadius: 8, backgroundColor: "#a8a29e" }} />
      </div>
    ),
    size,
  );
}
