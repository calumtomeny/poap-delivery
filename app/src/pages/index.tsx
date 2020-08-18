import React from 'react';

// Lib
import PageWrapper from 'lib/hoc/PageWrapper';

// UI
import MainLayout from 'ui/layouts/MainLayout';

const Home = () => {
  return (
    <PageWrapper>
      <MainLayout>
        <h1> Hello Gatsby!</h1>
      </MainLayout>
    </PageWrapper>
  );
};

export default Home;
