/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: ["burtons", "sans-serif"],
        quantico: ["var(--font-quantico)"],
      },
      colors: {
        background: "#FFFFFF",
        surface: "#F8FAFC",
        "surface-alt": "#F1F5F9",
        baseEsp: "#F9F7F2",

        "text-primary": "#0F172A",
        "text-secondary": "#334155",
        "text-muted": "#64748B",

        primary: "#2563EB",
        "primary-soft": "#DBEAFE",
        "primary-dark": "#1E40AF",

        accent: "#0EA5E9",
        "accent-soft": "#E0F2FE",

        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",

        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
