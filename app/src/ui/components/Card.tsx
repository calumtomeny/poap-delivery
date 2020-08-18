import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';

const Card: FC = ({ children }) => {
  return (
    <Box
      bg={'white'}
      boxShadow={'rgba(101, 52, 255, 0.15) 0px 4px 18px'}
      borderRadius={'20px'}
      p={'10px'}
    >
      {children}
    </Box>
  );
};

export default Card;
