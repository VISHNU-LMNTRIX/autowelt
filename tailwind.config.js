/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#121414",
        "surface-container": "#1e2020",
        "surface-container-high": "#282a2b",
        "surface-container-low": "#1a1c1c",
        primary: "#c9c6c5",
        "brand-crimson": "#b91c1c",
        "brand-silver": "#e5e7eb",
        outline: "#8e9192",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c4c7c7"
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      maxWidth: {
        container: "1440px"
      }
    }
  },
  plugins: []
}
