import React, { FC } from 'react';
import { Global } from '@emotion/core';
import { ReactQueryConfigProvider } from 'react-query';
import { ModalProvider } from 'react-modal-hook';
import { ReactQueryDevtools } from 'react-query-devtools';

// Hooks
import { StateProvider } from 'lib/hooks/useCustomState';

// Components
import SEO from 'ui/components/SEO';

// Lib
import { mainStyles } from 'lib/theme';

// Types
type PageProps = {
  title?: string;
  description?: string;
};

const queryConfig = { mutations: { throwOnError: true } };
const isDevelopment = process.env.NODE_ENV === 'development';

const PageWrapper: FC<PageProps> = ({ children, title, description }) => (
  <StateProvider>
    <ReactQueryConfigProvider config={queryConfig}>
      <ModalProvider>
        <SEO title={title} description={description} />
        {children}
        <Global styles={mainStyles} />
        {isDevelopment && <ReactQueryDevtools />}
      </ModalProvider>
    </ReactQueryConfigProvider>
  </StateProvider>
);

export default PageWrapper;
