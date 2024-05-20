/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        customBlue : "#5d60ef",
        customLightRed : "#ffe2e6",
        customLightYellow : "#fff4de",
        customLightGreen : "#dcfce7",
        customLightPurple : "#f4e8fe",
        customRed : "#e6758f",
        customYellow : "#fd967e",
        customGreen : "#31dc58",
        customPurple : "#c185fc",
        customWhite : "#f0f0f0",
        customBG : "#fafbfd"
      }
    },
  },
  plugins: [],
}

