import React from 'react';
import { Flex } from '@chakra-ui/core';

// Assets
import Poap from 'assets/images/POAP.svg';

const Header = () => (
  <Flex
    justify="space-between"
    align="center"
    pos="absolute"
    as="header"
    zIndex={1}
    top={[0, 0, 0, 6]}
    right={[0, 0, 0, 12]}
    left={[0, 12]}
    pl={[6, 0]}
    backgroundColor={['darkBlue.dark', 'darkBlue.dark', 'darkBlue.dark', 'transparent']}
  >
    <Flex align="center">
      <img src={Poap} alt={'POAP'} />
    </Flex>
  </Flex>
);

export default Header;
