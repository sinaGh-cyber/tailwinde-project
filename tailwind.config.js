/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['vazir'],
      },
      keyframes: {
        hiddenToVisible: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'hidden-to-visible': 'hiddenToVisible 0.5s linear',
      },
    },
  },
  plugins: [],
};
