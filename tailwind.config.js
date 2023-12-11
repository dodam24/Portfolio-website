/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      // Update deprecated color names
      sky: colors.lightBlue,
      stone: colors.warmGray,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      // Use the new color names
      primary: colors.sky,
      secondary: colors.blue,
    },
  },
  plugins: [],
};
