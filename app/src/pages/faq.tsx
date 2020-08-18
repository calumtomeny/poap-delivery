import React from 'react';
import { Global } from '@emotion/core';

// Lib
import { mainStyles } from 'lib/theme';

// UI
import MainLayout from 'ui/layouts/MainLayout';

const Faq = () => {
  return (
    <MainLayout>
      <h1> Frequently asked questions!</h1>
      <Global styles={mainStyles} />
    </MainLayout>
  );
};

export default Faq;
