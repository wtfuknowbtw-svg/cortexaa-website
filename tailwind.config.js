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
          DEFAULT: "#030303", // Near-black, deeper than before
          50: "#0a0a0a",
          100: "#121212",
          200: "#1a1a1a",
          300: "#2a2a2a",
        },
        brand: {
          primary: "#7c3aed", // Violet/Electric Purple
          secondary: "#06b6d4", // Cyan
          accent: "#a78bfa", // Soft Neon Violet
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

