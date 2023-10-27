/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter, sans-serif',
      },
      colors: {
        'car-primary': '#FF3811',
        'car-black': '#151515',
        'car-gray': '#737373',
      }
    },
  },
  plugins: [require("daisyui")],
}

