/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10per': '10%',
        '90per': '90%',
        '70per': '70%',
      },
      margin: {
        '22': '5.5rem',
      },
      inset: {
        '9per': '9%',
      }
    },
  },
  plugins: [],
}
