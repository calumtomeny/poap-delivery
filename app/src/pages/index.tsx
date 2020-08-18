import React from 'react';

// Lib
import PageWrapper from 'lib/hoc/PageWrapper';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import Hero from 'ui/components/Hero';
import Welcome from 'ui/components/Welcome';

const Home = () => {
  return (
    <PageWrapper>
      <MainLayout>
        <Hero />
        <Welcome />
      </MainLayout>
    </PageWrapper>
  );
};

export default Home;
