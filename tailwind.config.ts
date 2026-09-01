import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#f5f5f7",
        apple: {
          dark: "#000000",
          card: "#121214",
          surface: "#18181b",
          border: "#27272a",
          borderSubtle: "rgba(255, 255, 255, 0.08)",
          textPrimary: "#ffffff",
          textSecondary: "#86868b",
          textMuted: "#636366",
          blue: "#2997ff",
          green: "#30d158",
          orange: "#ff9f0a",
          purple: "#bf5af2",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "SF Pro",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        tight: "-0.01em",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
        window: "0 20px 70px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        hud: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
