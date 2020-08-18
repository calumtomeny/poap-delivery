import React from 'react';
import { Box, PseudoBox, Flex, Image, Heading } from '@chakra-ui/core';
import { Link as LinkUI } from '@chakra-ui/core';

// Lib
import PageWrapper from 'lib/hoc/PageWrapper';

// Assets
import yam from 'assets/images/events/yam.png';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import Container from 'ui/components/Container';

const Yam = () => {
  return (
    <PageWrapper
      title={'✈️ | 🍠 Yam Heroes'}
      description={
        'YAM, an experiment in fair farming, governance and elasticity, took Ethereum by storm and needed saving after a bug was found.'
      }
    >
      <MainLayout>
        <Container>
          <Flex p={'50px 100px'} align={'center'}>
            <Box flex={1}>
              <Image src={yam} rounded={'full'} size={'150px'} m={'20px auto'} />
            </Box>
            <Box flex={4} color={'font'} fontFamily={'var(--alt-font)'} fontSize={'xl'}>
              <Heading
                as={'h1'}
                color={'primaryColor'}
                fontFamily={'body'}
                fontWeight={'bold'}
                fontSize={'40px'}
                lineHeight={'80px'}
              >
                YAM Heroes
              </Heading>
              <Box mb={'10px'} as={'p'}>
                <LinkUI href={'https://yam.finance'} color={'primaryColor'} isExternal>
                  YAM
                </LinkUI>
                , an experiment in fair farming, governance and elasticity, took Ethereum by storm
                and needed saving after a bug was found.
              </Box>
              <Box mb={'10px'} as={'p'}>
                This POAP is for all voters that worked to save the protocol regarding the abrupt
                finale.
              </Box>
            </Box>
          </Flex>
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Yam;
