import React, { FC } from 'react';
import { Flex, Heading, Box, Button, Image, Link, Icon } from '@chakra-ui/core';

// Helpers
import { etherscanLinks } from 'lib/helpers/etherscan';

// Asset
import whiteStar from 'assets/images/white-star.svg';

// Types
type BadgeHolderProps = {
  backAction: () => void;
  address: string;
  ens: string;
  claimed?: boolean;
};

const BadgeHolder: FC<BadgeHolderProps> = ({ backAction, address, ens, claimed = false }) => {
  const shortAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;
  let receiver = (
    <Link href={etherscanLinks.address(address)} isExternal color={'primaryColor'}>
      {shortAddress(address)} <Icon name={'external-link'} size={'14px'} mt={'-5px'} />
    </Link>
  );

  if (ens) {
    receiver = (
      <Link href={etherscanLinks.address(address)} isExternal color={'primaryColor'}>
        {ens} ({shortAddress(address)}) <Icon name={'external-link'} size={'14px'} mt={'-5px'} />
      </Link>
    );
  }

  return (
    <Flex h={350} flexDirection={'column'} justifyContent={'space-around'}>
      <Box
        cursor={'pointer'}
        color={'primaryColor'}
        position={'absolute'}
        top={'20px'}
        left={'20px'}
        fontFamily={'var(--alt-font)'}
        onClick={backAction}
      >
        <Icon name={'chevron-left'} size={'20px'} mt={'-2px'} />
        Back
      </Box>
      <Heading as={'h3'} fontFamily={'var(--alt-font)'} color={'primaryColor'} textAlign={'center'}>
        Yam Heroes
      </Heading>
      <Box textAlign={'center'} m={'0 auto'} position={'relative'}>
        <Image
          src={'https://www.poap.xyz/events/badges/devcon5.png'}
          rounded={'full'}
          size={'100px'}
          m={'10px auto'}
          boxShadow={'0 4px 14px 0 rgba(101,52,255,.5)'}
        />
        {claimed && (
          <Image
            src={whiteStar}
            rounded={'full'}
            bg={'tertiaryColor'}
            position={'absolute'}
            bottom={'0'}
            right={'5px'}
            size={'35px'}
            p={'5px'}
          />
        )}
        {!claimed && (
          <Box as={'p'} fontFamily={'var(--alt-font)'} color={'font'} mt={'20px'}>
            POAP will be sent to {receiver}
          </Box>
        )}
      </Box>

      {!claimed && (
        <Box textAlign={'center'}>
          <Button bg={'tertiaryColor'} color={'white'} padding={'0 40px'}>
            Claim POAP Token
          </Button>
          <Box as={'p'} fontFamily={'var(--alt-font)'} color={'secondaryColor'} mt={'10px'}>
            <Link href={'mailto:info@poap.xyz'}>Need help?</Link>
          </Box>
        </Box>
      )}

      {claimed && (
        <Box textAlign={'center'}>
          <Heading
            as={'h4'}
            textAlign={'center'}
            color={'primaryColor'}
            fontFamily={'var(--alt-font)'}
            fontSize={'lg'}
            mb={'20px'}
          >
            Congratulations! <br />
            YAM Heroe badge is now in your wallet
          </Heading>
          <Link href={'https://app.poap.xyz'} isExternal>
            <Button
              bg={'tertiaryColor'}
              color={'white'}
              padding={'0 40px'}
              fontFamily={'var(--alt-font)'}
            >
              Check my badges
            </Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default BadgeHolder;
