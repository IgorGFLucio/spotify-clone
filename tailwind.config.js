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
          700: `#121212`,
          900: `#000000`,
        },
        gray: {
          300: `#b3b3b3`,
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
