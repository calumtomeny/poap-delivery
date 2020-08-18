import React, { FC } from 'react';
import { Global } from '@emotion/core';
import { ReactQueryConfigProvider } from 'react-query';
import { ModalProvider } from 'react-modal-hook';
import { ReactQueryDevtools } from 'react-query-devtools';

// Hooks
import { StateProvider } from 'lib/hooks/useCustomState';

// Lib
import { mainStyles } from 'lib/theme';

const queryConfig = { mutations: { throwOnError: true } };
const isDevelopment = process.env.NODE_ENV === 'development';

const PageWrapper: FC = ({ children }) => (
  <StateProvider>
    <ReactQueryConfigProvider config={queryConfig}>
      <ModalProvider>
        {children}
        <Global styles={mainStyles} />
        {isDevelopment && <ReactQueryDevtools />}
      </ModalProvider>
    </ReactQueryConfigProvider>
  </StateProvider>
);

export default PageWrapper;
