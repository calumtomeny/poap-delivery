import React, { FC } from 'react';
import { useTheme, Box } from '@chakra-ui/core';

// UI Components
import Card from 'ui/components/Card';

const Welcome: FC = () => {
  const theme = useTheme();
  return (
    <Box m={'0 auto'} maxW={'600px'} p={'50px 0'}>
      <Card>
        <Box
          fontSize={theme.fontSizes['md']}
          fontFamily={'var(--alt-font)'}
          color={theme.colors['primaryColor']}
          textAlign={'center'}
          p={'30px'}
        >
          <Box fontSize={theme.fontSizes['xl']} fontWeight={'bold'}>
            Some events are worth remembering and honouring
          </Box>
          <p>
            The airdrop based on Merkle trees allow us to honor the participants of those events
            with special POAPs. Check out the events below and claim yours!
          </p>
        </Box>
      </Card>
    </Box>
  );
};

export default Welcome;
