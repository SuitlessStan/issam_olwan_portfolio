/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primio: "#5C62EC",
        Rellenos: "#1C1E22",
        Gris: "#A0A0A1",
        Borders: "#26292D",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu"],
        PlayfairDisaply: ["PlayfairDisplay"],
        Montserrat: ["Montserrat"],
        DMSans: ["DMSans"],
      },
    },
  },
  api: {
    bodyParser: false,
    externalResolver: true,
  },
  plugins: [],
}
