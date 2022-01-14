import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';

import styles from './styles';

import breakpoints from './foundation/breakpoints';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const overrides: Theme & any = {
  config,
  styles,
  // breakpoints,
  colors: {
    gray: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
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
