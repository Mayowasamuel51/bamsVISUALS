/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#B68302",
        button: "#B68302"
      },
      fontFamily: {
        poppins: ['Poppins'], // Add Poppins font
      },
    },
  },
  plugins: [],

}

