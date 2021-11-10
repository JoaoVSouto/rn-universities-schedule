import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: '#1b1d20',
    gray: {
      900: '#2d2e31',
      700: '#5d5f63',
      500: '#606060',
      300: '#747474',
      100: '#c8c8c8',
    },
    green: {
      800: 'rgba(0, 154, 52, 0.85)',
      300: '#09cb6e',
      200: 'rgba(0, 255, 117, 0.85)',
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
