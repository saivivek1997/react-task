/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#ffffff",
        "border-secondary": "#E9EAEB",
        "fg-primary": "#181D27",
        secondary: "#414651",
        "secondary-hover": "#252B37",
        "brand-secondary": "#6941C6",
        teritary: "#535862",
      },
      boxShadow: {
        "custom-shadow": "0px 1px 2px rgba(10, 13, 18, 0.05)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
