/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'blanka': ['Blanka', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
        'sans': ['Rajdhani', 'Exo 2', 'Orbitron', 'sans-serif'],
      },
      colors: {
        'raftaar-red': '#ff0000',
        'raftaar-black': '#000000',
        'raftaar-white': '#ffffff',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'hero-fade-in': 'heroFadeIn 1s ease-out 0.5s forwards',
        'hero-slide-up': 'heroSlideUp 1s ease-out 0.8s forwards',
      },
      keyframes: {
        fadeIn: {
          'to': { opacity: '1' }
        },
        slideUp: {
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        heroFadeIn: {
          'to': { opacity: '0.3' }
        },
        heroSlideUp: {
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
