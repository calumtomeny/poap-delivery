import React from 'react';

// Lib
import PageWrapper from 'lib/hoc/PageWrapper';

// Constants
import events from 'lib/constants/events';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import Container from 'ui/components/Container';
import YamHeaderPage from 'ui/components/YamHeaderPage';
import Claim from 'ui/components/claim';

const Yam = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🍠 Yam Heroes'}
      description={
        'YAM, an experiment in fair farming, governance and elasticity, took Ethereum by storm and needed saving after a bug was found.'
      }
    >
      <MainLayout>
        <Container>
          <YamHeaderPage event={events['yam']} />
          <Claim event={events['yam']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Yam;
