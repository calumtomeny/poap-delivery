const path = require('path');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const folderPaths = ['pages', 'ui', 'assets', 'sections', 'lib'];

const rootImportOptions = folderPaths.reduce(
  (acc, folderPath) => ({ ...acc, [folderPath]: path.join(__dirname, `src/${folderPath}`) }),
  {},
);

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isUsingColorMode: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: rootImportOptions,
    },
  ],
};
