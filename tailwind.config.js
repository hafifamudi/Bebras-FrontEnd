module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        outline: "0 0 0 1px rgba(66, 153, 225, 0.5)",
      },
      colors: {
        "orange-button": "#FF872E",
        "green-button": "#1ABC9C",
        "purple-hover": "#4C52F8",
        "purple-hover-stroke": "#8286FF",
        "purple-progress": "#3B41E3",
        "yellow-card":"#fdca40",
        "red-footer":"#fb3640",
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
