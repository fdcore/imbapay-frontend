const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: [
    './html/**/*.{html,js}',
    './build/imbapay/html/**/*.{html,js}',
    './dist/**/*.{html,js}',
    './apps/**/templates/**/*.html',
    './apps/**/templates/**/**/*.html'
  ],

  theme: {
    fontFamily: {
      AProR: ['AeonikPro-R', 'sans-serif'],
      AProM: ['AeonikPro-M', 'sans-serif'],
      AProL: ['AeonikPro-L', 'sans-serif'],
      AProBl: ['AeonikPro-Bl', 'sans-serif'],
      AProBo: ['AeonikPro-Bo', 'sans-serif'],
      ABl: ['Aeonik-Bl', 'sans-serif'],
      AM: ['Aeonik-M', 'sans-serif'],
      AR: ['Aeonik-R', 'sans-serif'],
      SFProBo: ['SF-Pro-Bo', 'sans-serif'],
      SFProM: ['SF-Pro-M', 'sans-serif'],
      SFProR: ['SF-Pro-R', 'sans-serif'],
      PJakarBo: ['PlusJakartaDisplay-Bo', 'sans-serif'],
      PJakarR: ['PlusJakartaDisplay-R', 'sans-serif']
    },
    spacing: {
      sm: '0.5rem', // 8px
      md: '0.75rem', // 12px
      lg: '1rem', // 16px
      xl: '1.5rem', // 24px // 6
      ...defaultTheme.spacing
    },
    screens: {
      // => @media (min-width: 375px) { ... }
      // 'xs': '375px',
      ss: {
        max: '320px'
      },
      xs: {
        min: '343px'
      },
      // => @media (min-width: 375px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      ml: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1320px',
      // => @media (min-width: 1024px) { ... }
      xl: '1500px'
      // => @media (min-width: 1460px) { ... }
    },
    fontSize: {
      '2xs': [
        '0.625rem',
        {
          lineHeight: '14px'
        }
      ], // 10px
      xs: [
        '0.75rem',
        {
          lineHeight: '16px'
        }
      ], // 12px
      sm: [
        '0.875rem',
        {
          lineHeight: '32px'
        }
      ], // 14px
      base: [
        '1rem',
        {
          lineHeight: '24px'
        }
      ], // 16px
      lg: [
        '1.125rem',
        {
          lineHeight: '1.75rem'
        }
      ], // 20px
      xl: [
        '1.5rem',
        {
          lineHeight: '32px'
        }
      ], // 24px
      '2xl': [
        '1.7rem',
        {
          lineHeight: '28px'
        }
      ] // 28px
    },
    colors: {
      current: colors.current,
      transparent: colors.transparent,
      stroke20: 'rgba(232, 235, 230, 0.2)',
      bgdark: 'rgba(34, 34, 34, 0.1)',
      stroke50: 'rgba(232, 235, 230, 0.5)',
      black: '#000',
      grey: '#9b9b9b',
      main: '#d7ff00',
      black2: ' #090a08',
      white: '#e8ebe6',
      white2: '#fff',
      white10: 'rgba(255, 255, 255, 0.1)',
      white15: 'rgba(255, 255, 255, 0.15)',
      red: '#a8200d',
      bg1: '#161617',
      bg3: '#27272a',
      bg2: '#18181b',
      red2: '#ff2102'
    },
    fill: (theme) => theme('colors'),
    extend: {
      backgroundImage: {
        backgroundImg: "url('../html/home_page/img/bg.jpg')"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
