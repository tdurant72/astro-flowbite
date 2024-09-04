/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#3DE4C1",
      primaryWhite: "#FBFEFE",
      primaryMed: "#17A688",
      primaryDrk: "#0F705B",
      primaryBlk: "#041F1A",
      secondary: "#6403A6",
      secondaryWhite: "#F5F4FD",
      secondaryMed: "#DEADFF",
      secondaryDrk: "#180029",
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
    extend: {
      translate: ["dark"],
      animation: {
        "skew-scroll": "skew-scroll 20s linear infinite",
        loopScroll: "loopScroll 50s linear infinite",
        "loopScroll-second": "loopScroll 50s linear infinite",
        "infinite-scroll": "infinite-scroll 50s linear infinite",
      },
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
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
