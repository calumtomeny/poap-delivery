import React, { FC } from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/core';

// Types
import { AirdropEventData } from 'lib/types';
type YamHeaderPageProps = {
  event: AirdropEventData;
};

const YamHeaderPage: FC<YamHeaderPageProps> = ({ event }) => {
  return (
    <Flex
      p={['50px 45px', '50px 45px', '50px 45px', '50px 100px']}
      align={'center'}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Box color={'font'} fontFamily={'var(--alt-font)'} fontSize={'xl'}>
        <Heading
          as={'h1'}
          color={'primaryColor'}
          fontFamily={'body'}
          fontWeight={'bold'}
          fontSize={'40px'}
          lineHeight={'80px'}
          textAlign={'center'}
        >
          🍠 YAM Heroes
        </Heading>
        <Box mb={'10px'} as={'p'}>
          <Link href={'https://yam.finance'} color={'primaryColor'} isExternal>
            YAM
          </Link>
          , an experiment in fair farming, governance and elasticity, took Ethereum by storm and
          lived thrilling first 24 hours.
        </Box>
        <Box mb={'10px'} as={'p'}>
          Crazy game theoretical dynamics created the cohort of $YAM Heroes, that are now awarded
          this rare POAP to hold with pride.
        </Box>
        <Box mb={'10px'} as={'p'}>
          <Link href={event.githubLink} color={'primaryColor'} isExternal>
            View elegible addresses
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default YamHeaderPage;
