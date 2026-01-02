/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#075e54",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          50: "#121212",
          100: "#1a1a1a",
          200: "#2a2a2a",
          300: "#404040",
        },
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

