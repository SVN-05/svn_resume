/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        type1: "0 5px 15px rgba(0, 0, 0, 0.35)",
      },
      colors: {
        primary: "#6fc276",
        lightGreen: "#92d198",
        yellow1: "#FFD301",
        yellow2: "#FFB921",
        blue1: "#1497D4",
        blue2: "#0047AC",
        blue3: "#007ced",
        blue4: "#0077B5",
        grey1: "#333333",
        grey2: "#F5F5F5",
        grey3: "#AAA",
        grey4: "#222",
        grey5: "#4e4e4e",
        grey6: "#FEFEFE",
        grey7: "#666",
        grey8: "#E5E5E5",
        grey9: "#D5D5D5",
        grey10: "#FCFCFC",
        grey11: "#eeeeee",
        grey12: "#aaaaaa",
        grey13: "#252525",
        grey14: "#F5F6F9",
        grey15: "#777777",
        grey16: "#888888",
        grey17: "#444",
        grey18: "#9e9e9e",
        grey19: "#999",
        grey20: "#555",
        grey21: "#bfbfbf",
        white: "#FFF",
        black: "#000",
        red: "#dc3545",
        lightBlue3: "#BBDEFF",
        lightGreen2: "#C9E8CB",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        lg: "18px",
        xl: "20px",
        inherit: "inherit",
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: " 1024px",
          xl: "1180px", // gives 130px spacing(margin) on left and right
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
