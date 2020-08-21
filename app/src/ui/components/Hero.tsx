import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme, Box, Icon } from '@chakra-ui/core';

// Assets
import Berlin from 'assets/images/cities/berlin.png';
import BuenosAires from 'assets/images/cities/buenosaires.png';
import SanFrancisco from 'assets/images/cities/francisco.png';
import Gibraltar from 'assets/images/cities/gibraltar.png';
import London from 'assets/images/cities/london.png';
import Moscow from 'assets/images/cities/moscow.png';
import Paris from 'assets/images/cities/paris.png';
import Pittsburg from 'assets/images/cities/pittsburg.png';
import Rio from 'assets/images/cities/rio.png';
import Shangai from 'assets/images/cities/shangai.png';
import Sydney from 'assets/images/cities/sydney.png';
import Toronto from 'assets/images/cities/toronto.png';

// Styled component
const Background = styled.img<{ theme: ITheme }>`
  position: absolute;
  z-index: -1;
  width: 100%;
  opacity: 0.6;
  top: 25%;

  @media (min-width: ${({ theme }) => theme.breakpoints['md']}) {
    top: 0;
    opacity: 1;
    &.berlin,
    &.pittsburg,
    &.buenos-aires,
    &.rio,
    &.shangai {
      top: -120px;
    }
    &.gibraltar,
    &.san-fran,
    &.toronto {
      top: -20px;
    }
    &.london,
    &.sydney {
      top: -170px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints['xxl']}) {
    &.toronto,
    &.buenos-aires,
    &.san-fran {
      top: -160px;
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
    { image: BuenosAires, className: 'buenos-aires' },
    { image: SanFrancisco, className: 'san-fran' },
    { image: Gibraltar, className: 'gibraltar' },
    { image: London, className: 'london' },
    { image: Moscow, className: 'london' },
    { image: Paris, className: 'london' },
    { image: Pittsburg, className: 'pittsburg' },
    { image: Rio, className: 'rio' },
    { image: Shangai, className: 'shangai' },
    { image: Sydney, className: 'sydney' },
    { image: Toronto, className: 'toronto' },
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
          POAP Delivery
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
