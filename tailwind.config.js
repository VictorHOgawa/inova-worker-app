/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#182D53",
        },
        secondary: {
          400: "#ED6842",
          500: "#F45300",
          800: "#3E1B0E",
        },
      },
      fontFamily: {
        "poppins-regular": "Poppins_400Regular",
        "poppins-medium": "Poppins_500Medium",
        "poppins-semi-bold": "Poppins_600SemiBold",
        "poppins-bold": "Poppins_700Bold",
      },
    },
  },
  plugins: [],
};
