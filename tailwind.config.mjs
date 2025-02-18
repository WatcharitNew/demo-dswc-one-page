/** @type {import('tailwindcss').Config} */

import colors from "./src/styles/colors";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 33.23%, rgba(0, 0, 0, 0.72) 100%)",
      },
      boxShadow: {
        report: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      transitionProperty: {
        "margin-transform": "margin, transform",
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
