/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        black: "#161616",
      },
      container: {
        center: true,
      },
      screens: {
        xxs: "375px",
        xs: "431px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1440px",
        xxl: "1920px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
