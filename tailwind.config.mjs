import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Inter", "serif"],
      },
      colors: {
        primary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
          DEFAULT: "#3DE4C1",
        },
        teal: {
          500: "#3DE4C1",
          600: "#2db3a1",
          700: "#1f8074",
        },
        transparent: "transparent",
        current: "currentColor",
        slate: colors.slate,
        stone: colors.stone,
        blue: colors.blue,
        green: colors.green,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        amber: colors.amber,
      },
      translate: ["dark"],
      animation: {
        "skew-scroll": "skew-scroll 20s linear infinite",
        loopScroll: "loopScroll 50s linear infinite",
        "loopScroll-second": "loopScroll 50s linear infinite",
        "infinite-scroll": "infinite-scroll 50s linear infinite",
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
      keyframes: {
        "skew-scroll": {
          "0%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)",
          },
          "100%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        loopScroll: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "loopScroll-second": {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin"), typography],
};
