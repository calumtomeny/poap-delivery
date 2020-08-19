import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/core';

const YamHeaderPage = () => {
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
          needed saving after a bug was found.
        </Box>
        <Box mb={'10px'} as={'p'}>
          This POAP is for all voters that worked to save the protocol regarding the abrupt finale.
        </Box>
        <Box mb={'10px'} as={'p'}>
          <Link href={'https://github.com/poapxyz'} color={'primaryColor'}>
            View elegible addresses
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default YamHeaderPage;
