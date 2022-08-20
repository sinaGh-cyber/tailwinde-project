/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    screens: {
      xsm: '430px',
      sm: '640px',
      md: '851px',
      lg: '1124px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
      colors: {
        orange: {
          100: '#FFCBCB',
          300: '#FF9F8E',
          400: '#FF755C',
          500: '#F25E57',
          600: '#FC5858',
          700: '#DE3618',
        },
        slate: {
          700: '#606060',
          800: '#222F5D',
          900: '#161D25',
          200: '#E2E2E2',
        },
        stone: {
          50: '#FDFDFD',
          100: '#F4F4F4',
        },
        gray: {
          200: '#EBEBEB',
          300: '#AFAFAF',
        },
        indigo: {
          600: '#8750FB',
        },
        yellow: {
          400: '#FFDE74',
        },
      },
    },
  },
  plugins: [],
};
