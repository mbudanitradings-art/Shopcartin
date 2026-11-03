/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        silver: {
          50: '#F6F6F7',
          100: '#ECEDEE',
          200: '#D9DBDD',
          300: '#C0C3C6',
          400: '#A3A7AB',
          500: '#7C8085',
          600: '#5B5F63',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
