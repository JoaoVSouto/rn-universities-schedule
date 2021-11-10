import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: '#1b1d20',
    gray: {
      700: '#5d5f63',
      500: '#606060',
      300: '#747474',
      100: '#c8c8c8',
    },
    green: {
      800: '#009a34',
      300: '#09cb6e',
      200: '#00ff75',
    },
    cyan: {
      300: '#6cd9fc',
    },
    blue: {
      700: '#003498',
      500: '#0018f3',
      300: '#4e5fff',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
        overflowX: 'hidden',
      },
    },
  },
});
