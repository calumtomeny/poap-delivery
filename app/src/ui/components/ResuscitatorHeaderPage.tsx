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
          🚑 Medalla Resuscitators
        </Heading>
        <Box mb={'10px'} as={'p'}>
          An unexpected bug on the Medalla testnet kept the network at peril. Once again the
          community participation was required to sort this issue and finalize the network once again.
        </Box>
        <Box mb={'10px'} as={'p'}>
          Anyone who attested from the 75,000th to the 115,000th block is qualified to claim this
          POAP.
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
