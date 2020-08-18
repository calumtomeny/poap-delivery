const path = require('path');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const folderPaths = ['pages', 'ui', 'assets', 'sections', 'lib'];

const rootImportOptions = folderPaths.reduce(
  (acc, folderPath) => ({ ...acc, [folderPath]: path.join(__dirname, `src/${folderPath}`) }),
  {},
);

module.exports = {
  plugins: [

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
  ],
};
