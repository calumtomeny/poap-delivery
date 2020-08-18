import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme, Box, Icon } from '@chakra-ui/core';

// Assets
import Berlin from 'assets/images/cities/berlin.jpg';
import Gibraltar from 'assets/images/cities/gibraltar.jpg';
import London from 'assets/images/cities/london.jpg';
import Pittsburg from 'assets/images/cities/pittsburg.jpg';

// Styled component
const Background = styled.img<{ theme: ITheme }>`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints['md']}) {
    &.berlin {
      top: -120px;
    }
    &.gibraltar {
      top: -20px;
    }
    &.london {
      top: -170px;
    }
    &.pittsburg {
      top: -120px;
    }
  }
`;
const IconHolder = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(50% - 16px);
  animation: MoveUpDown 1.5s ease-in-out infinite;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
  }
`;

const Hero: FC = () => {
  const backgrounds = [
    { image: Berlin, className: 'berlin' },
    { image: Gibraltar, className: 'gibraltar' },
    { image: London, className: 'london' },
    { image: Pittsburg, className: 'pittsburg' },
  ];
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const theme = useTheme();
  return (
    <Box w={'100%'} h={'calc(100vh - 90px)'} pt={'25px'} pos={'relative'}>
      <Box textAlign={'center'} pt={'100px'}>
        <Box
          as={'h1'}
          color={theme.colors['primaryColor']}
          fontSize={'40px'}
          lineHeight={'44px'}
          fontWeight={'bold'}
          m={'0 0 0.5em'}
        >
          POAP Airdrop
        </Box>
      </Box>
      <Background
        theme={theme}
        alt={background.className.toUpperCase()}
        src={background.image}
        className={background.className}
      />
      <IconHolder>
        <Icon name={'chevron-down'} size="32px" color={theme.colors['primaryColor']} />
      </IconHolder>
    </Box>
  );
};

export default Hero;
