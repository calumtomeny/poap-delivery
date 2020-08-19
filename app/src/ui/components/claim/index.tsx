import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';

// Types
import { AirdropEventData } from 'lib/types';

// Components
import AddressForm from './AddressForm';
import BadgeHolder from './BadgeHolder';
import Transactions from './Transactions';

import CardWithBadges from 'ui/components/CardWithBadges';

// Types
import { Transaction } from 'lib/types';
type ClaimProps = {
  event: AirdropEventData;
};

const Claim: FC<ClaimProps> = ({ event }) => {
  const transactions: Transaction[] = [
    {
      address: '0xC55E5DADfA858cA2048D5bB0b536F84913cF4f19',
      hash: '0xa06c0c9ab24df446853d7c402e4d4b897b6a70c74572e421bd6640c036c646bc',
      status: 'passed',
    },
    {
      address: '0xC55E5DADfA858cA2048D5bB0b536F84913cF4f19',
      hash: '0xa06c0c9ab24df446853d7c402e4d4b897b6a70c74572e421bd6640c036c646bc',
      status: 'failed',
    },
    {
      address: '0xC55E5DADfA858cA2048D5bB0b536F84913cF4f19',
      hash: '0xa06c0c9ab24df446853d7c402e4d4b897b6a70c74572e421bd6640c036c646bc',
      status: 'pending',
    },
  ];

  return (
    <Box maxW={['90%', '90%', '90%', '600px']} m={'0 auto'} p={'50px 0'}>
      <CardWithBadges>
        <AddressForm />
      </CardWithBadges>

      <br />
      <br />
      <br />

      <CardWithBadges>
        <BadgeHolder />
      </CardWithBadges>
      <Transactions transactions={transactions} />
    </Box>
  );
};

export default Claim;
