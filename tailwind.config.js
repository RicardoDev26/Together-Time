/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "black": "#000000",
      "bright-yellow": {
        400: "#f5ebe4",
        500: "#f6e9da",
        600: "#f4d199", // No use.
        700: "#f4d199",
        800: "#fad69a",
        900: "#f9a823"
      },
      "dark-charcoal": "#333333",
      "dim-gray": {
        700: "#ada8a8",
        800: "#727171",
        900: "#736e6e"
      },      
      "gray": "#e5e5e5",
      "han-purple": {
        500: "#ece8fd",
        600: "#e4ddf3",
        700: "#cec6e8",
        800: "#b19cfa",
        900: "#5726f9"
      },
      "light-gray": {
        600: "#f9f9f9",
        700: "#f6f5f5",
        800: "#efefef",
        900: "#d9d9d9"
      },
      "pastel-red": "#f56464",
      "pigment-red": {
        700: "#f3d4ce",
        800: "#f2c3be",
        900: "#e72727"
      },
      "snow": {
        600: "#fdfaf9",
        700: "#f8f4f3",
        800: "#f5f0ed",
        900: "#f2edec"
      },
      "white": "#ffffff",
      "red": {
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
      }
    }
  },
  plugins: []
};
