/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",    // Extra small (optional)
      sm: "640px",    // Small devices (phones)
      md: "768px",    // Medium devices (tablets)
      lg: "1024px",   // Large devices (laptops)
      xl: "1280px",   // Extra large (desktops)
      "2xl": "1536px" // Very large screens
    },
  },
  plugins: [],
};
