/** @type {import('tailwindcss').Config} */

import colors from "./src/style/colors";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 33.23%, rgba(0, 0, 0, 0.72) 100%)",
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
