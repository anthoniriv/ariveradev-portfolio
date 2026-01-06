/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        primary: '#6D28D9',
        secondary: '#2563EB',
        accent: '#0EA5E9',
        bg: '#0B1020',
        surface: '#111A33',
        text: '#E8EEFF',
        muted: '#A9B4D0',
      },
    },
  },
  plugins: [],
};
