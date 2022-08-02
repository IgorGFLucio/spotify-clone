module.exports = {
  content: [`./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    screens: {
      xs: `320px`,
      sm: `375px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      '2xl': `1440px`,
    },
    extend: {
      width: {},
      backgroundColor: {},
      borderColor: {},
      colors: {
        black: {
          0: `#000`,
          200: `#33313A`,
        },
        green: {
          200: `#C9E265`,
        },
        orange: {
          400: `#F8AF41`,
          600: `#F47133`,
        },
        salmon: {
          200: `#FFD4BA`,
          300: `#FFB587`,
        },
        beige: {
          50: `#FFEAC6`,
          100: `#FFEDD2`,
          200: `#FEF3E3`,
          300: `#FBEAD2`,
          400: `#F9C374`,
          500: `#EAD0A9`,
          600: `#FDDEAD`,
        },
        grey: {
          50: `#d9d9d9`,
          100: `#F8F8F8`,
          900: `#101828`,
        },
        brown: {
          500: `#A47459`,
        },
        red: {
          400: `#e52510`,
        },
      },
      textColor: {},
      fontSize: {},
      fontFamily: {
        montserrat: `montserrat`,
        sacramento: `sacramento`,
        luckiestGuy: `luckiest guy`,
        raleway: `Raleway`,
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
