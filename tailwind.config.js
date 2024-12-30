/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "san-serif "],
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744838",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeUp: {
          from: {
            opacity: 0,
            transform: "translateY(20%)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out",
        fadeUp: "fadeUp 0.5s forwards",
      },
      backgroundImage: {
        "slider-bg": 'url("./img/slider-bg.jpg")',
        "pink-ceramic": 'url("./img/pink-ceramic.jpg")',
        "golden-mug": 'url("./img/golden-mug.jpg")',
      },
      letterSpacing: {
        widest: ".2em",
      },
    },
  },
  plugins: [],
};
