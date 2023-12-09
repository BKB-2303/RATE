/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
      },
    },
  },
  plugins: [],
}
