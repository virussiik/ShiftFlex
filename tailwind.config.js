/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#17231F',
          graphite: '#24332D',
          'graphite-light': '#2F423B',
          lime: '#C8F169',
          'lime-hover': '#BCE757',
          'lime-light': '#E9F9C3',
          'light-bg': '#F7F8F5',
          white: '#FFFFFF',
          'text-primary': '#202923',
          'text-secondary': '#69736D',
          'text-dark-primary': '#F3F6F4',
          'text-dark-secondary': '#9CA8A1',
          'border-light': '#E6EAE4',
          'border-dark': '#2B3C35',
          'card-dark': '#1C2924',
          'card-dark-hover': '#23342E',
          success: '#238653',
          warning: '#A76B13',
          error: '#C43D45',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(23, 35, 31, 0.05), 0 1px 2px rgba(23, 35, 31, 0.03)',
        'card': '0 4px 20px -2px rgba(23, 35, 31, 0.06), 0 2px 6px -1px rgba(23, 35, 31, 0.03)',
        'card-hover': '0 12px 32px -4px rgba(23, 35, 31, 0.12), 0 4px 12px -2px rgba(23, 35, 31, 0.05)',
        'card-dark': '0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 2px 8px -1px rgba(0, 0, 0, 0.25)',
        'card-dark-hover': '0 12px 36px -4px rgba(0, 0, 0, 0.6), 0 4px 14px -2px rgba(0, 0, 0, 0.35)',
        'glow-lime': '0 0 24px rgba(200, 241, 105, 0.35)',
        'glow-lime-sm': '0 0 12px rgba(200, 241, 105, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
