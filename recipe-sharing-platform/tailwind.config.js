/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {}, // Put your custom theme settings here (colors, fonts, spacing, etc.)
  },
  plugins: [], // Add plugins here (like forms, typography, etc.)
}
