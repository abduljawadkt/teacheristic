/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6e9f0',
          100: '#bfc7db',
          200: '#99a5c6',
          300: '#7383b1',
          400: '#4d619c',
          500: '#273f87',
          600: '#1e3270',
          700: '#162559',
          800: '#0d1842',
          900: '#050b2b',
          950: '#030720',
        },
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b69fa',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
    },
  },
  plugins: [],
};
