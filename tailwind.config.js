/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage:{
        headerImg:"url('/src/assets/img/7 1.png')",
        footerImg:"url('/src/assets/img/headerbg.png')",
        mobileApp:"url('/src/assets/img/Banner-3.png')"
      }
    },
  },
  plugins: [
    
]
}
