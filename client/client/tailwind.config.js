/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgheader: "#131921",
        bg2header: "#232F3E"
      }
    },
  },
  plugins: [],
}

