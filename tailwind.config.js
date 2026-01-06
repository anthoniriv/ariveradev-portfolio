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
        // Base colors
        background: '#FFFFFF',
        surface: '#F8FAFC',
        'surface-alt': '#F1F5F9',
        
        // Text colors
        'text-primary': '#0F172A',
        'text-secondary': '#334155',
        'text-muted': '#64748B',
        
        // Brand blues
        primary: '#2563EB',
        'primary-soft': '#DBEAFE',
        'primary-dark': '#1E40AF',
        
        // Accents
        accent: '#0EA5E9',
        'accent-soft': '#E0F2FE',
        
        // States
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
        
        // Borders
        border: '#E2E8F0',
      },
    },
  },
  plugins: [],
};
