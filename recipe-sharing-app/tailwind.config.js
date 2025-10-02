/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",     // ✅ include public folder index.html
    "./index.html",            // ✅ include root index.html (for Vite/other setups)
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

