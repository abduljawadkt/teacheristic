/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0eff5',
          100: '#dbd9e8',
          200: '#b7b3d1',
          300: '#938dba',
          400: '#6f67a3',
          500: '#4b418c',
          600: '#3c3470',
          700: '#2d2754',
          800: '#1e194b',
          900: '#16133a',
          950: '#0f0d29',
        },
        lavender: {
          50: '#f7f5fc',
          100: '#eeebf8',
          200: '#ddd6f1',
          300: '#ccc2ea',
          400: '#bbade3',
          500: '#aa99dc',
          600: '#9984d5',
          700: '#8c7ebb',
          800: '#705f99',
          900: '#544777',
          950: '#3a3154',
        },
        border: 'hsl(214.3 31.8% 91.4%)',
        input: 'hsl(214.3 31.8% 91.4%)',
        ring: 'hsl(222.2 84% 4.9%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        primary: {
          DEFAULT: 'hsl(222.2 47.4% 11.2%)',
          foreground: 'hsl(210 40% 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(210 40% 96.1%)',
          foreground: 'hsl(222.2 47.4% 11.2%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84.2% 60.2%)',
          foreground: 'hsl(210 40% 98%)',
        },
        muted: {
          DEFAULT: 'hsl(210 40% 96.1%)',
          foreground: 'hsl(215.4 16.3% 46.9%)',
        },
        accent: {
          DEFAULT: 'hsl(210 40% 96.1%)',
          foreground: 'hsl(222.2 47.4% 11.2%)',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
};
