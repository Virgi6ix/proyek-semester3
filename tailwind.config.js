/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#49362B',
          deep: '#34261F',
          cream: '#F7F1E7',
          paper: '#FFFCF7',
          army: '#65704D',
          sage: '#E7EBDD',
          sand: '#E8DCCB',
          muted: '#8D8176'
        }
      },
      boxShadow: {
        soft: '0 12px 34px rgba(73, 54, 43, 0.07)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}