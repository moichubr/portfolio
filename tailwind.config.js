/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{jsx,html,js,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        
      },
      screens: {
        'sm': '320px',  // Cambiar el valor para sm
        'md': '768px',  // Cambiar el valor para md
        'lg': '976px',  // Cambiar el valor para lg
        'xl': '1440px', // Cambiar el valor para xl
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

