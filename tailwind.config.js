/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#0A7A42',
            light: '#16A34A',
            dark: '#06532C',
            subtle: '#E8F5E9'
          },
          yellow: {
            DEFAULT: '#FFC107',
            bright: '#FACC15',
            hover: '#E0A800',
            subtle: '#FEF9C3'
          },
          charcoal: '#1A1A1A',
          body: '#4B5563',
          bgLight: '#F8F9FA'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px -4px rgba(0, 0, 0, 0.08)',
        'brand-glow': '0 10px 25px -5px rgba(10, 122, 66, 0.25)',
      }
    },
  },
  plugins: [],
}

