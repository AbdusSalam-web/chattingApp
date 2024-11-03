/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"," serif"],
    },
    extend: {
      colors: {
        brandClr: "#B0D8DA",
      },
    },
  },
  plugins: [],
};
