import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { useTheme, Flex, Button, PseudoBox, ITheme } from '@chakra-ui/core';

// Components
import Logo from 'ui/components/Logo';
import Container from 'ui/components/Container';

// Styled component
const LogoWrapper = styled.div<{ theme: ITheme }>`
  img {
    top: 10px;
    height: 100px;
    position: absolute;
    @media (max-width: ${({ theme }) => theme.breakpoints['xl']}) {
      top: 10px;
      height: 80px;
    }
  }
`;

const Header = () => {
  const theme = useTheme();
  return (
    <Flex
      align="center"
      pos="absolute"
      as="header"
      zIndex={1}
      top={0}
      right={0}
      left={0}
      height={[60, 60, 60, 60, 80]}
      shadow={'0px 4px 20px rgba(101, 52, 255, 0.2)'}
    >
      <Container>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <LogoWrapper theme={theme}>
              <Link to={'/'}>
                <Logo />
              </Link>
            </LogoWrapper>
          </Flex>

          <Flex align="center">
            <Button
              variant="outline"
              color={theme.colors['secondaryColor']}
              fontFamily={'Archivo Narrow'}
              fontWeight={'normal'}
              fontSize={'sm'}
              letterSpacing={'0.3px'}
              p={'0 2rem'}
              border={`1px solid ${theme.colors['gray']['medium']}`}
              _hover={{
                bg: 'white',
                border: `1px solid ${theme.colors['secondaryColor']}`,
              }}
            >
              Connect wallet
            </Button>
            <Link to={'/faq'}>
              <PseudoBox
                ml={'20px'}
                color={theme.colors['primaryColor']}
                _hover={{
                  color: theme.colors['secondaryColor'],
                }}
              >
                FAQ
              </PseudoBox>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
