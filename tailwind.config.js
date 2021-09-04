module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['motion-safe']
    }
  },
  plugins: []
}
