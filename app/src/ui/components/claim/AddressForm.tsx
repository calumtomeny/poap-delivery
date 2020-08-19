import React, { FC } from 'react';
import { Flex, Heading, Box, Input, Button } from '@chakra-ui/core';

const AddressForm: FC = () => {
  return (
    <Flex h={250} flexDirection={'column'} justifyContent={'space-around'}>
      <Heading
        as={'h3'}
        fontFamily={'var(--alt-font)'}
        color={'tertiaryColor'}
        textAlign={'center'}
      >
        Search address
      </Heading>
      <Box textAlign={'center'} m={'0 auto'} w={'90%'}>
        <Input
          placeholder={'Input your Ethereum address or ENS name'}
          size={'lg'}
          textAlign={'center'}
          borderColor={'gray.light'}
          color={'font'}
          _focus={{
            borderColor: 'secondaryColor',
          }}
        />
        <Box as={'p'} color={'red.500'} fontWeight={'bold'}>
          Address not found
        </Box>
      </Box>
      <Box textAlign={'center'}>
        <Button
          bg={'tertiaryColor'}
          color={'white'}
          padding={'0 40px'}
          fontFamily={'var(--alt-font)'}
        >
          Search
        </Button>
      </Box>
    </Flex>
  );
};

export default AddressForm;
