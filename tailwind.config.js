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
      inset: {
        '9per': '9%',
      }
    },
  },
  plugins: [],
}
