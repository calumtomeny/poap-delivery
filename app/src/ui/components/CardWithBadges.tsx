import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/core';

// Components
import Card from 'ui/components/Card';

// Assets
import badgesLeft from 'assets/images/badge-party-left.svg';
import badgesRight from 'assets/images/badge-party-right.svg';

const CardWithBadges: FC = ({ children }) => {
  return (
    <Box pos={'relative'}>
      <Box pos={'absolute'} left={'-110px'} top={'75px'}>
        <Image w={120} src={badgesLeft} alt={'badges'} />
      </Box>
      <Box zIndex={10} position={'relative'}>
        <Card>{children}</Card>
      </Box>
      <Box pos={'absolute'} right={'-50px'} top={'75px'}>
        <Image src={badgesRight} alt={'badges'} w={50} />
      </Box>
    </Box>
  );
};

export default CardWithBadges;
