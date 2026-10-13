/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrapbook: {
          cream: '#FFF8F2',
          ivory: '#F8EFE7',
          blush: '#F6D9D8',
          rose: '#C98291',
          roseDark: '#9E4D61',
          peach: '#F3C7B7',
          lavender: '#DDD5E8',
          brown: '#4A3532',
          card: '#FFFDF9',
          tape: 'rgba(243, 199, 183, 0.65)',
          tapeRose: 'rgba(201, 130, 145, 0.45)',
          paperYellow: '#FEF9E7',
          paperPink: '#FDF2F4',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(74, 53, 50, 0.15), 0 8px 10px -6px rgba(74, 53, 50, 0.1)',
        'polaroid-hover': '0 20px 35px -5px rgba(74, 53, 50, 0.22), 0 12px 16px -6px rgba(74, 53, 50, 0.15)',
        'paper': '2px 4px 12px rgba(74, 53, 50, 0.08), inset 0 0 20px rgba(74, 53, 50, 0.02)',
        'envelope': '0 15px 30px rgba(74, 53, 50, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        gentlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '0.85' },
          '85%': { opacity: '0.85' },
          '100%': { transform: 'translateY(-120vh) translateX(40px) rotate(360deg)', opacity: '0' },
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-gentle': 'gentlePulse 2.5s ease-in-out infinite',
        'drift': 'drift 18s linear infinite',
      }
    },
  },
  plugins: [],
}
