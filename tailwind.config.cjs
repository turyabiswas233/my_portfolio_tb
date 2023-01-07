/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        basictext: "#DCDCDC",
        basicgreen: "#20BE43",
        hovergreen: "#20fc43",
        basicyellow: "#ffc700",
        btngray: "#D9D9D96B",
        btnhover: "#07f",
        basicblue: "#1F93E7",
        darkbg: "#040917",
      },
      fontFamily: {
        basicfont: "'Noto Sans', sans-serif",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg_cover.jpg')",
      },
      animation: {
        bounce_x: "bounce_x 1s infinite",
      },
    },
  },
  plugins: [],
};
