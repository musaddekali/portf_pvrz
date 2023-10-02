/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    // screens: {
    //   sm: "576px",
    //   md: "768px",
    //   lg: "992px",
    //   xl: "1200px",
    //   xxl: "1400px",
    // },
    container: {
      center: true,
      padding: ".75rem",
    },
    extend: {
      fontFamily: {
        Charm : ["Charm"]
      },
      colors: {
        primary: "#418ec6",
        secondary: "#1e2762",
        accent: "#7b2049",
      },
    },
  },
  plugins: [],
};
