import React from 'react';

// Lib
import PageWrapper from 'lib/hoc/PageWrapper';

// Constants
import events from 'lib/constants/events';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import Container from 'ui/components/Container';
import ResuscitatorHeaderPage from 'ui/components/ResuscitatorHeaderPage';
import Claim from 'ui/components/claim';

const Yam = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🚑️ Medalla Resuscitators'}
      description={'An unexpected bug on the Medalla testnet kept the network at peril.'}
    >
      <MainLayout>
        <Container>
          <ResuscitatorHeaderPage event={events['resuscitator']} />
          <Claim event={events['resuscitator']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Yam;
