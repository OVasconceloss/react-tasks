/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'l-blue': '#3B82F6',
        'd-blue': '#1E3A8A',
        'd-black': '#0F0F0F',
      }
    },
  },
  plugins: [],
}

