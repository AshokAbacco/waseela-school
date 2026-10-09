/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Text & dark accents — deep navy
        navy: { 950: "#0A1530", 900: "#0F1E3D", 800: "#172A52", 700: "#223A6B", 600: "#2E4C85" },
        // Brand accent — warm amber gold
        gold: { DEFAULT: "#E9A23B", light: "#F6CB7E", dark: "#95590A", soft: "#FDE9C8" },
        // Backgrounds — warm cream & peach
        cream: { DEFAULT: "#FFF9F0", deep: "#FCEFD9" },
        peach: "#FFF3E2",
        ink: "#0F1E3D",
        muted: "#5A6478",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1240px" },
      boxShadow: {
        card: "0 1px 2px rgba(15,30,61,0.04), 0 10px 30px -14px rgba(15,30,61,0.16)",
        lift: "0 2px 4px rgba(15,30,61,0.05), 0 24px 44px -20px rgba(15,30,61,0.30)",
        glow: "0 12px 28px -12px rgba(233,162,59,0.65)",
      },
    },
  },
  plugins: [],
};
