/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-main)",
        secondary: "var(--bg-two)",
        accent: "var(--color-main)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
