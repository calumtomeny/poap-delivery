const path = require('path');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const folderPaths = ['pages', 'ui', 'assets', 'sections', 'lib'];

const rootImportOptions = folderPaths.reduce(
  (acc, folderPath) => ({ ...acc, [folderPath]: path.join(__dirname, `src/${folderPath}`) }),
  {},
);

module.exports = {
  plugins: [
    // Helmet (metadata)
    'gatsby-plugin-react-helmet',

    // Chakra
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isUsingColorMode: false,
      },
    },

    // Google fonts
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Archivo:\ 400,500,700',
            'Archivo Narrow:\ 400,500,700',
            'Roboto:\ 400,500,700'
          ],
        },
      },
    },

    // Absolute imports
    {
      resolve: 'gatsby-plugin-root-import',
      options: rootImportOptions,
    },

    //* PWA Capabilities
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'POAP Delivery',
        short_name: 'POAP Delivery',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#6534ff',
        display: 'standalone',
        icon: 'src/assets/images/POAP.png',
      },
    },

    // Analytics

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: process.env.TRACKING_ID },
    },
  ],
  siteMetadata: {
    author: 'POAP',
    title: 'POAP - Delivery ✈️',
    description: 'POAP.delivery the place where events earn their place in history',
    siteUrl: process.env.SITE_URL,
  },
};
