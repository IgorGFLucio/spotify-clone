import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Props } from './types';

const ChakraUIProvider = ({ children }: Props) => {
  const breakpoints = {
    sm: `23.4375em`, // 375px
    md: `48em`, // 768px
    lg: `64em`, // 1024px
    xl: `80em`, // 1280px
    '2xl': `90em`, // 1440px
  };

  const theme = extendTheme({
    breakpoints,
    fontFamily: `Raleway`,
    components: {
      Button: {
        variants: {
          green: {
            background: `linear-gradient(180deg, #03CB74 0%, #009E59 100%)`,
            color: `#fff`,
            _focus: {
              background: `linear-gradient(180deg, #03CB74 0%, #009E59 100%) !important`,
            },
          },
          orange: {
            background: `#F58C00`,
            color: `#411B6C`,
            _focus: {
              background: `#F58C00 !important`,
            },
          },
          purple: {
            background: `#5C2E91`,
            color: `#FFD33B`,
            _focus: {
              background: `#411B6C !important`,
            },
          },
        },
      },
      Radio: {
        variants: {
          default: {
            display: `flex`,
            alignItems: `flex-start`,
            fontSize: `1.125rem`,
            lineHeight: `1.687rem`,
            color: `#411B6C`,
            background: `#fff`,
            border: `1px solid`,
            size: `lg`,
          },
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
