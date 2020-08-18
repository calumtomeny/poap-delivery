import { theme } from '@chakra-ui/core';

// lib
const sm = '480px';
const md = '800px';
const lg = '960px';
const xl = '1200px';
const xxl = '1500px';

const breakpointMap = { sm, md, lg, xl, xxl };
const breakpoints = Object.assign(Object.values(breakpointMap), breakpointMap);

export default {
  ...theme,
  global: {
  },
  radii: {
    ...theme.radii,
  },
  sizes: {
    ...theme.sizes,
  },
  icons: {
    ...theme.icons,
  },
  shadows: {
    ...theme.shadows,
  },
  fonts: {
    ...theme.fonts,
    body: 'Archivo',
  },
  lineHeights: {
    ...theme.lineHeights,
  },
  fontSizes: {
    ...theme.fontSizes,
  },
  fontWeights: {
    ...theme.fontWeights,
  },
  colors: {
    ...theme.colors,
    primaryColor: '#6534ff',
    secondaryColor: '#94a0d4',
    tertiaryColor: '#e98d9b',
    gray: {
      dark: '#CCCED9',
      medium: '#D9D9D9',
      light: '#eaedf4',
      veryLight: '#FAFBFD',
      text: '#959DA6',
    },
  },
  breakpoints,
};
