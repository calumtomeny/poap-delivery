import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Box, PseudoBox, Flex, Image, Button, Grid } from '@chakra-ui/core';
import { Link as LinkUI } from '@chakra-ui/core';

// UI
import Card from 'ui/components/Card';

// Assets
import yam from 'assets/images/events/yam.png';
import resuscitator from 'assets/images/events/resuscitator.png';
import medalla from 'assets/images/events/medalla-validators.png';
import question from 'assets/images/events/question.png';

const Events: FC = () => {
  const events = [
    {
      image: <Image src={yam} rounded={'full'} size={'150px'} m={'20px auto'} />,
      name: 'Yam Heroes',
      description: (
        <Flex color={'font'} m={'20px 0'} flexDirection={'column'} justifyContent={'space-between'}>
          <Box>
            <Box mb={'10px'} as={'p'}>
              YAM, an experiment in fair farming, governance and elasticity, took Ethereum by storm
              and lived thrilling first 24 hours.
            </Box>
            <Box mb={'10px'} as={'p'}>
              Crazy game theoretical dynamics created the cohort of $YAM Heroes, that are now
              awarded this rare POAP to hold with pride.
            </Box>
          </Box>
        </Flex>
      ),
      button: (
        <Link to={'/yam'}>
          <Button bg={'tertiaryColor'} color={'white'} fontFamily={'var(--alt-font)'} w={'100%'}>
            Claim your POAP!
          </Button>
        </Link>
      ),
      margin: ['-75px'],
    },
    {
      image: <Image src={resuscitator} rounded={'full'} size={'150px'} m={'20px auto'} />,
      name: 'Medalla Resuscitators',
      description: (
        <Flex color={'font'} m={'20px 0'} flexDirection={'column'} justifyContent={'space-between'}>
          <Box>
            <Box mb={'10px'} as={'p'}>
              An unexpected bug on the Medalla testnet kept the network at peril. Once again the
              community participation was required to sort this issue and finalize the network once
              again.
            </Box>
            <Box mb={'10px'} as={'p'}>
              Anyone who attested from the 75,000th to the 115,000th block is qualified to claim
              this POAP.
            </Box>
          </Box>
        </Flex>
      ),
      button: (
        <Link to={'/medalla-resuscitator'}>
          <Button bg={'tertiaryColor'} color={'white'} fontFamily={'var(--alt-font)'} w={'100%'}>
            Claim your POAP!
          </Button>
        </Link>
      ),
      margin: ['25px', '25px', '-75px'],
    },
    {
      image: <Image src={medalla} rounded={'full'} size={'150px'} m={'20px auto'} />,
      name: 'Medalla Validator',
      description: (
        <Flex color={'font'} m={'20px 0'} flexDirection={'column'} justifyContent={'space-between'}>
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
        </Flex>
      ),
      button: (
        <Button
          bg={'tertiaryColor'}
          color={'white'}
          fontFamily={'var(--alt-font)'}
          isDisabled={true}
          w={'100%'}
        >
          Coming soon!
        </Button>
      ),
      margin: ['25px', '25px', '25px', '25px', '-75px'],
    },
    {
      image: <Image src={question} rounded={'full'} size={'150px'} m={'20px auto'} />,
      name: 'Have a suggestion?',
      description: (
        <Flex color={'font'} m={'20px 0'} flexDirection={'column'} justifyContent={'space-between'}>
          <Box mb={'10px'} as={'p'}>
            We love celebrating the community and these fantastic events. If you know about any
            other similar event, please let us know!
          </Box>
        </Flex>
      ),
      button: (
        <a href={'mailto:info@poap.xyz'}>
          <Button bg={'tertiaryColor'} color={'white'} fontFamily={'var(--alt-font)'} w={'100%'}>
            Contact us!
          </Button>
        </a>
      ),
      margin: ['25px', '25px', '25px', '25px', '-75px'],
    },
  ];

  return (
    <PseudoBox w={'100%'} bg={'white'} pb={'100px'} mt={'150px'}>
      <PseudoBox w={['100%', ' 100%', '100%', '100%', '100%', '85%']} maxW={1600} m={'0 auto'}>
        <Grid
          templateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
          padding={['0', '0', '0 50px', '0 150px', '0']}
        >
          {events.map((event) => {
            return (
              <Flex mt={event.margin} flex={1} justifyContent={'center'} key={event.name}>
                <Card>
                  <Flex
                    maxWidth={['300px', '300px', '300px', '300px', '250px', '270px']}
                    p={'10px 0'}
                    h={'100%'}
                    textAlign={'center'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                  >
                    <Box>
                      {event.image}
                      <PseudoBox
                        as={'h5'}
                        fontSize={'3xl'}
                        fontFamily={'var(--alt-font)'}
                        color={'primaryColor'}
                      >
                        {event.name}
                      </PseudoBox>
                      {event.description}
                    </Box>
                    <Box w={'100%'}>{event.button}</Box>
                  </Flex>
                </Card>
              </Flex>
            );
          })}
        </Grid>
      </PseudoBox>
    </PseudoBox>
  );
};

export default Events;
