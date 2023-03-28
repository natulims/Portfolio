/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stiletto: "#a13d36",
        antique: "#cb9378",
        light: "#f0efe1",
        vivid: "#fda285",
        apricot: "#ef8a60",
        seashell: "#fdf6ee",
        carnation: "#f5654b",
      },
    },
  },
  plugins: [],
};
