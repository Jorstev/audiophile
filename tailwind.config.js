/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope"],
      },
      fontWeight: {
        200: "200", // Light
        400: "400", // Normal
        600: "600", // Semi-bold
        800: "800", // Bold
      },
      scale: {
        170: "1.7",
      },
    },
  },
  plugins: [],
};
