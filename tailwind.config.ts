import type { Config } from 'tailwindcss';

export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f5f0ec',
          100: '#e9dabb',
          200: '#d2b48c',
          300: '#b88668',
          400: '#a67b5b',
          500: '#8b4513',
          600: '#654321',
          700: '#4e342e',
          800: '#3e2723',
          900: '#211814',
        },
        secondary: '#D2B48C', // A lighter tan or beige, for backgrounds or accents
        accent: '#654321', // A dark brown, for details and highlights
        neutral: '#F5F5DC', // A very light beige, for text contrast on darker backgrounds
        base: '#E9DABB', // A soft, muted tan, for general use
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
