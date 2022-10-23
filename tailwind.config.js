/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      dblue: "#1E3161",
      mblue: "#3A4D7C",
      skyblue: "#5AC1D8",
    },
    extend: {
      fontFamily: {
        ibm: "'IBM Plex Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
