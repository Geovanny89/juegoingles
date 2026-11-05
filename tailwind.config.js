/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(103, 232, 249, 0.08), 0 22px 70px rgba(2, 6, 23, 0.30)',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.8s ease-in-out infinite',
        'shake-in': 'shake-in .38s ease both',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.62', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        'shake-in': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-5px)' },
          '40%': { transform: 'translateX(5px)' },
          '60%': { transform: 'translateX(-3px)' },
          '80%': { transform: 'translateX(3px)' },
        },
      },
    },
  },
  plugins: [],
}
