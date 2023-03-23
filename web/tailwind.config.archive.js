/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.tsx'],
  darkMode: ['class', '[data-theme="dark"]'], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customPrimary: 'rgb(250 52 243)',
        customPrimaryDark: '#0891b2',
        customSecondary: '#6b25e7',
        customDarkBg1: 'rgb(31, 32, 35)',
        customDarkBg2: 'rgb(38, 39, 43)',
        customDarkBg3: 'rgb(48, 49, 54)',
        customDarkBg3Hover: 'rgb(55, 56, 62)',
        customContentSubtitle: 'rgb(178, 184, 205)',
        customGrayBorder: 'rgb(255,255,255,0.1)',
        customGrayText: 'rgb(174, 178, 183)',
        customDarkBgTransparent: 'rgb(31, 32, 35, 0.7)',
        customDarkBgTransparentDarker: 'rgb(0,0,0,0.5)',
        customDarkBgTransparentLighter: 'rgb(48, 49, 54, 0.7)',
        'gotchi-pink': 'rgb(250 52 243)',
        'gotchi-purple': '#6b25e7',
      },
      fontFamily: {
        inter: 'Inter',
        display: '"Baloo 2", cursive',
        sans: 'Pixelar, sans-serif',
        body: 'Pixelar, sans-serif',
      },
      screens: {
        xs: '530px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xll: '1400px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
