/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:theme=>({
        'custom-background': "url('https://img.freepik.com/premium-photo/vibrant-twisted-paper-background_851755-5157.jpg?w=740')",
      }),
    },
  },
  plugins: [],
}