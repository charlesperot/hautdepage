import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        brand: "var(--color-brand)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
        border: "var(--color-border)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
