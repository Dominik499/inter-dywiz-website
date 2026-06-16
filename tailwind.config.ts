import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071936",
        ink: "#121820",
        graphite: "#252B33",
        gold: "#C8A45D",
        champagne: "#F6F0E4"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 25, 54, 0.14)",
        gold: "0 16px 42px rgba(200, 164, 93, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
