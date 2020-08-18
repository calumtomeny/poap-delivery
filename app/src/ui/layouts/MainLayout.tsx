import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';

// Components
import Header from 'ui/components/Header';
import Footer from 'ui/components/Footer';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box as={'main'} pt={[60, 60, 60, 60, 80]} minH={'100vh'}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
