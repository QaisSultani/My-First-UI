/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belleza: ['belleza'],
        roboto: ['roboto']
      },
      screens: {
        '3xl': '1440px',
        'bg-img-width': '1340px',
        'mb': '374px'
      }
    },
  },
  plugins: [],
}
