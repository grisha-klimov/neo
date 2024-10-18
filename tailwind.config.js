/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
