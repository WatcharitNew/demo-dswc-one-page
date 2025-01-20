/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          100: "#F8F8FA",
          200: "#E5E7EB",
          300: "#999DA6",
          400: "#9CA3AF",
          600: "#6B7280",
          900: "#252525",
        },
        blue: {
          50: "#F4F9FD",
          800: "#1473E6",
          900: "#213166",
        },
      },
    },
  },
  plugins: [],
};
