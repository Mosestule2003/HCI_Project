import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        minecraft: {
          green: "#50C878",
          "green-dark": "#3da85f",
          emerald: "#17DD62",
          dirt: "#8B6914",
          stone: "#9FA3A8",
          obsidian: "#1A1A2E",
          creeper: "#4CAF50",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pixel-pulse": "pixelPulse 2s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pixelPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
