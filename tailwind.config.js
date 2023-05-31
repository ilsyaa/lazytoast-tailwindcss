/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      sans: [
        'Inter var',
        {
          fontFeatureSettings: '"cv02","cv03","cv04","cv11"',
          fontVariationSettings: 'normal'
        },
      ],
    },
    extend: {},
  },
  plugins: [],
}

