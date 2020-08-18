import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme } from '@chakra-ui/core';

// Components
import BuiltWith from 'ui/components/BuiltWith';
import Community from 'ui/components/Community';
import Credits from 'ui/components/Credits';
import Logo from 'ui/components/Logo';
import Container from 'ui/components/Container';

const FooterWrap = styled.div<{ theme: ITheme }>`
  box-shadow: inset 0px 1px 0px #eaedf4;
  padding: 50px 0 24px;
  background: white;
  .footer-table-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints['sm']}) {
      flex-direction: column-reverse;
    }

    .footer-table-cell {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;

      @media (max-width: ${({ theme }) => theme.breakpoints['md']}) {
        padding: 10px 0;
      }

      .logo {
        width: 60px;
        margin: 0 auto 20px;
      }
      .built-on-eth {
        width: 120px;
        margin: 0 auto;
      }
    }
  }
`;

const CreditsWrap = styled.div`
  width: 100%;
  text-align: center;
`;

const Footer: FC = () => {
  const theme = useTheme();
  return (
    <FooterWrap theme={theme}>
      <Container>
        <div className={'footer-table-row'}>
          <div className={'footer-table-cell'}>
            <a href={'https://www.poap.xyz'} target={'_blank'} rel="noopener noreferrer">
              <Logo />
            </a>
            <BuiltWith />
          </div>
          <div className={'footer-table-cell'}>
            <Community />
          </div>
        </div>
        <CreditsWrap>
          <Credits />
        </CreditsWrap>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
