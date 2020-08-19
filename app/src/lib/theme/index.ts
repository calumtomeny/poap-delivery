import { css } from '@emotion/core';

export const mainStyles = css`
  :root {
    /* fonts */
    --main-font: 'Archivo', sans-serif;
    --alt-font: 'Archivo Narrow', sans-serif;
    --mix-font: 'Roboto', sans-serif;
  }

  a:hover {
    text-decoration: none !important;
  }

  ::placeholder {
    color: #ccced9 !important;
  }
`;
