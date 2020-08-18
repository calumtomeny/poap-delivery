import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Box, PseudoBox, Flex, Image, Button } from '@chakra-ui/core';
import { Link as LinkUI } from '@chakra-ui/core';

// UI
import Card from 'ui/components/Card';
import Container from 'ui/components/Container';

// Assets
import yam from 'assets/images/events/yam.png';
import medalla from 'assets/images/events/medalla-validators.png';
import question from 'assets/images/events/question.png';

const Events: FC = () => {
  const events = [
    {
      image: <Image src={yam} rounded={'full'} size={'150px'} m={'20px auto'} />,
      name: 'Yam Heros',
      description: (
        <Flex
          color={'font'}
          m={'20px 0'}
          h={'270px'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Box>
            <Box mb={'10px'} as={'p'}>
              YAM, an experiment in fair farming, governance and elasticity, took Ethereum by storm
              and needed saving after a bug was found.
            </Box>
            <Box mb={'10px'} as={'p'}>
              This POAP is for all voters that worked to save the protocol regarding the abrupt
              finale.
            </Box>
          </Box>
          <Link to={'/yam'}>
            <Button bg={'tertiaryColor'} color={'white'} fontFamily={'var(--alt-font)'} w={'100%'}>
              Claim your POAP!
            </Button>
          </Link>
        </Flex>
      ),
      margin: ['-75px'],
    },
    {
      image: <Image src={medalla} rounded={'full'} size={'150px'} m={'20px auto'} />,
      name: 'Medalla Validator',
      description: (
        <Flex
          color={'font'}
          m={'20px 0'}
          h={'270px'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Box mb={'10px'}>
            To celebrate the launch of the Eth2.0 multiclient testnet Medalla, and to encourage as
            much community engagement as possible, we have teamed up with our friends at{' '}
            <LinkUI color={'primaryColor'} href={'https://beaconcha.in/'} isExternal>
              beaconcha.in
            </LinkUI>{' '}
            and{' '}
            <LinkUI color={'primaryColor'} href={'https://www.reddit.com/r/ethstaker/'} isExternal>
              r/ethstaker
            </LinkUI>{' '}
            to create and distribute badges for validators.
          </Box>
          <Button
            bg={'tertiaryColor'}
            color={'white'}
            fontFamily={'var(--alt-font)'}
            isDisabled={true}
          >
            Coming soon!
          </Button>
        </Flex>
      ),
      margin: ['25px', '25px', '25px', '-75px'],
    },
    {
      image: <Image src={question} rounded={'full'} size={'150px'} m={'20px auto'} />,
      name: 'Have a suggestion?',
      description: (
        <Flex
          color={'font'}
          m={'20px 0'}
          h={'270px'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Box>
            <Box mb={'10px'} as={'p'}>
              We love celebrating the community and these fantastic events. If you know about any
              other similar event, please let us know!
            </Box>
          </Box>
          <a href={'mailto:info@poap.xyz'}>
            <Button bg={'tertiaryColor'} color={'white'} fontFamily={'var(--alt-font)'} w={'100%'}>
              Contact us!
            </Button>
          </a>
        </Flex>
      ),
      margin: ['25px', '25px', '25px', '-75px'],
    },
  ];

  return (
    <PseudoBox w={'100%'} bg={'white'} pb={'100px'} mt={'150px'}>
      <Container>
        <Flex justify={'space-around'} flexDirection={['column', 'column', 'column', 'row']}>
          {events.map((event) => {
            return (
              <Flex mt={event.margin} flex={1} justifyContent={'center'} key={event.name}>
                <Card>
                  <Box width={['300px', '300px', '300px', '250px']} textAlign={'center'}>
                    {event.image}
                    <PseudoBox
                      as={'h5'}
                      fontSize={'3xl'}
                      fontFamily={'var(--alt-font)'}
                      color={'primaryColor'}
                    >
                      {event.name}
                    </PseudoBox>
                    <Box>{event.description}</Box>
                  </Box>
                </Card>
              </Flex>
            );
          })}
        </Flex>
      </Container>
    </PseudoBox>
  );
};

export default Events;
