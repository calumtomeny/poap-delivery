import React from 'react';

// Lib
import PageWrapper from 'lib/hoc/PageWrapper';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import FrequentlyAskedQuestions from 'ui/components/FrequentlyAskedQuestions';

const Faq = () => {
  return (
    <PageWrapper>
      <MainLayout>
        <FrequentlyAskedQuestions />
      </MainLayout>
    </PageWrapper>
  );
};

export default Faq;
