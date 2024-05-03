/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "600px",
    },
    fontFamily: {
      poppins: "poppins",
    },
    colors: {
      Red: "hsl(0, 78%, 62%)",
      Cyan: "hsl(180, 62%, 55%)",
      Orange: "hsl(34, 97%, 64%)",
      Blue: "hsl(212, 86%, 64%)",
      VeryDarkBlue: "hsl(234, 12%, 34%)",
      GrayishBlue: "hsl(229, 6%, 66%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
};
