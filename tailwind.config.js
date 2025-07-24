/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'montserrat': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'sans': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      colors: {
        'accent-green': '#A4FF14',
        'accent-green-light': '#A4FF14',
        'accent-green-dark': '#A4FF14',
        'navy-blue': '#0B1F3D',
        'rich-gold': '#D4AF37',
        'burnt-orange': '#CC5500',
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(to right, #A4FF14, #B8FF47)',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 0.8s linear infinite'
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '700': '700ms'
      },
    },
  },
  plugins: [],
};