import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon PLACEHOLDER : le bloc 3 barres du logo. À remplacer par le favicon
 * définitif fourni (déposer /app/icon.png ou /app/favicon.ico).
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 4,
          padding: 5,
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ height: 5, borderRadius: 1.5, backgroundColor: "#c2410c" }} />
        <div style={{ height: 5, borderRadius: 1.5, backgroundColor: "#a8a29e" }} />
        <div style={{ height: 5, borderRadius: 1.5, backgroundColor: "#a8a29e" }} />
      </div>
    ),
    size,
  );
}
