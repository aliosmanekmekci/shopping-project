/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom1: ["Avenir", "sans-serif"],
      custom2: ["Montserrat", "sans-serif"],
      extend: {},
    },
    plugins: [],
  },
};
