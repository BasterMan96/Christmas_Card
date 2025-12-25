/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'santa-red': '#e63946',
        'soft-red': '#ff6b6b',
        'evergreen': '#2d6a4f',
        'soft-green': '#52b788',
        'warm-gold': '#ffd166',
        'soft-gold': '#f9c74f',
        'warm-white': '#fff9f0',
        'frost-blue': '#a8dadc',
        'cozy-brown': '#d4a276',
      },
      fontFamily: {
        'cursive': ['"Caveat"', 'cursive'],
        'handwriting': ['"Pangolin"', 'cursive'],
        'sans': ['"Quicksand"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
}

