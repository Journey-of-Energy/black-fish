/** @type {import('tailwindcss').Config} */
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backround: {
          light: "#050505",
        },
        primary: {
          light: "#460B0B",
        },
        secondary: {
          light: "#C5C5C5",
        },
      },
    },
  },
  plugins: [tailwindcss(), autoprefixer()],
};
