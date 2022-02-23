module.exports = {
  content: [
    './public/index.html',
    './public/main.js'
  ],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
        "custom-white": "#f7f7f7",
      }
    },
    fontFamily: {
      rubik: ["Rubik, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px;"
      },
    },
  },
  plugins: [],
}
