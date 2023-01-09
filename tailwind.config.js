module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.tsx'],
  darkMode: 'class',

  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },

  plugins: [],
}
