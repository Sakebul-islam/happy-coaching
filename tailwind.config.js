/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        'theme-color': '#20ad96',
        'secondary-color': '#333461',
        'banner-color': '#faf8f6',
        'gold-color': '#fec84b',
        'gray-color': '#e0e2e8',
      },
      fontFamily: {
        AvertaStdB: ['AvertaStd-Black'],
        AvertaStdR: ['AvertaStd-Regular'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        movement: 'wiggle 3s linear infinite',
        preloader: 'preloaderFx 1.6s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0px)' },
          '33.33%': { transform: 'translateX(30px) translateY(30px)' },
          '66.66%': { transform: 'translateX(30px) translateY(-30px)' },
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
        },
        preloaderFx: {
          '0%': {
            '-webkit-transform': 'scale(0, 0)',
            transform: 'scale(0, 0)',
            opacity: '0.5',
          },
          '100%': {
            '-webkit-transform': 'scale(1, 1)',
            transform: 'scale(1, 1)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
