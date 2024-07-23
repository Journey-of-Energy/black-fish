/** @type {import('tailwindcss').Config} */
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "200px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1025px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        "plex-serif": ["Bodoni Moda SC", "serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontStyle: {
        italic: "italic",
        normal: "normal",
      },
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
