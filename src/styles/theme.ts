import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: '#1b1d20',
    gray: {
      900: '#2d2e31',
      700: '#5d5f63',
      300: '#747474',
      200: '#868686',
      100: '#c8c8c8',
    },
    green: {
      800: 'rgba(0, 154, 52, 0.85)',
      300: '#09cb6e',
      275: '#86ff73',
      250: '#4ff2a5',
      200: 'rgba(0, 255, 117, 0.85)',
      10: 'rgba(9, 203, 110, 0.055)',
    },
    cyan: {
      800: '#0167b1',
      600: '#00e0ee',
      400: '#73d4ff',
      300: '#6cd9fc',
      10: 'rgba(108, 217, 252, 0.1)',
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
  components: {
    Heading: {
      variants: {
        shift: {
          color: 'gray.100',
          fontSize: '3xl',
          fontWeight: 'semibold',
          letterSpacing: '0.5px',
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
        display: 'flow-root',
      },
      '#__next': {
        display: 'grid',
        placeItems: 'center',
        overflowX: 'hidden',
      },
      'body, #__next': {
        minHeight: '100vh',
      },
    },
  },
});
