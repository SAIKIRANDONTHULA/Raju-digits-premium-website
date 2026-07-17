import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0F0F0F",
        noir2: "#161616",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F1D77A",
          dark: "#A8842A",
        },
        ivory: "#F7F5F0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F1D77A 0%, #D4AF37 50%, #A8842A 100%)",
        "noir-radial": "radial-gradient(circle at 50% 20%, rgba(212,175,55,0.12), transparent 60%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(212,175,55,0.45)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.37)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        shutter: {
          "0%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(0.2) rotate(180deg)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        shutter: "shutter 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
