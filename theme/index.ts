import { extendTheme, Theme } from '@chakra-ui/react';

import styles from './styles';

import breakpoints from './foundation/breakpoints';

const overrides: Theme & any = {
  styles,
  // breakpoints,
  colors: {
    discord: {
      50: '#e8eeff',
      100: '#c0ccf3',
      200: '#99aae5',
      300: '#7289da',
      400: '#4a67ce',
      500: '#314db5',
      600: '#253c8d',
      700: '#1a2b66',
      800: '#0d1a40',
      900: '#01091b',
    },
    docker: '#2396ED',
    nestjs: '#e0234e',
    react: '#00D8FF',
  },
  components: {
    Heading: {
      baseStyle: {
        opacity: 0.8,
        fontWeight: 'light',
      },
      variants: {
        'page-title': {
          opacity: 1,
          fontWeight: 'normal',
        },
      },
      defaultProps: {
        size: 'lg',
      },
    },
  },
};

export default extendTheme(overrides);
