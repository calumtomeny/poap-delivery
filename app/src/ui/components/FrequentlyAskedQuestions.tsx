import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme, Flex, Box } from '@chakra-ui/core';

// UI
import Container from 'ui/components/Container';

// Assets
import faq1 from 'assets/images/faq1.svg';
import faq2 from 'assets/images/faq2.svg';
import faq3 from 'assets/images/faq3.svg';
import faq4 from 'assets/images/faq4.svg';
import faq5 from 'assets/images/faq5.svg';

// Styled component
const Title = styled.div<{ theme: ITheme }>`
  font-family: var(--alt-font);
  color: ${({ theme }) => theme.colors['primaryColor']};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: 0.5em;
`;
const Content = styled.div<{ theme: ITheme }>`
  padding: 20px;
  p {
    width: 100%;
    display: block;
    a {
      color: ${({ theme }) => theme.colors['primaryColor']};
    }
    @media (max-width: 400px) {
      max-width: 100%;
    }
    .bold-p {
      font-weight: bold;
      font-size: 22px;
    }
  }
  ul {
    padding-top: 20px;
    padding-left: 20px;
  }
`;
const ImageContent = styled.div`
  padding: 20px;
  text-align: center;
  img {
    width: 100%;
    max-width: 300px;
    margin: auto;
  }
`;

const FrequentlyAskedQuestions: FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Flex width={'100%'} flexDirection={'column'} color={'font'}>
        <Box
          width={'100%'}
          textAlign={'center'}
          p={'125px 0'}
          color={theme.colors['primaryColor']}
          fontSize={'40px'}
          lineHeight={'44px'}
          fontWeight={'bold'}
        >
          <h1>FAQ</h1>
        </Box>
        <div>
          <Flex pb={'50px'} flexDirection={['column', 'column', 'row']}>
            <Box flex={1}>
              <ImageContent>
                <img src={faq1} alt={'FAQs'} />
              </ImageContent>
            </Box>
            <Box flex={1}>
              <Content theme={theme}>
                <Title theme={theme}>What is POAP again?</Title>
                <p>
                  It's a system that event organizers can easily use to distribute attendance
                  crypto-badges to people that show up, a tool for attendees to display and share
                  the badges they have obtained and an open standard for Dapp developers to build on
                  top of.
                </p>

                <p>
                  If you have 5 whole minutes, you can watch{' '}
                  <a
                    href={'https://twitter.com/gomox_ar'}
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    @gomox_ar
                  </a>{' '}
                  <a
                    href={'https://www.youtube.com/watch?v=VZlmQjhz3ko'}
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    explain POAP at an EthCC Lightning Talk in March 2019
                  </a>
                </p>
              </Content>
            </Box>
          </Flex>
          <Flex pb={'50px'} flexDirection={['column-reverse', 'column-reverse', 'row']}>
            <Box flex={1}>
              <Content theme={theme}>
                <Title theme={theme}>Why would I want to get badges?</Title>
                <p>Here are some things that could happen when you obtain POAP badges:</p>
                <ul>
                  <li>Collect cool badges</li>
                  <li>Impress your crypto buddies(*)</li>
                  <li>Enter a Lambo giveaway(*)</li>
                </ul>
                <p>
                  <small>
                    (*) Results not guaranteed. Any expectations of recognition, prizes, privileges
                    or earnings are your own.
                  </small>
                </p>
              </Content>
            </Box>
            <Box flex={1}>
              <ImageContent>
                <img src={faq2} alt={'FAQs'} />
              </ImageContent>
            </Box>
          </Flex>
          <Flex pb={'50px'} flexDirection={['column', 'column', 'row']}>
            <Box flex={1}>
              <ImageContent>
                <img src={faq3} alt={'FAQs'} />
              </ImageContent>
            </Box>
            <Box flex={1}>
              <Content theme={theme}>
                <Title theme={theme}>How are POAP badges implemented?</Title>
                <p>
                  POAP badges are ERC-721 tokens. Once minted, they can be viewed on{' '}
                  <a href={'https://app.poap.xyz/'} target={'_blank'} rel="noopener noreferrer">
                    POAP scan
                  </a>{' '}
                  or any NFT-enabled interface (
                  <a href={'https://etherscan.io/'} target={'_blank'} rel="noopener noreferrer">
                    Etherscan
                  </a>
                  ,{' '}
                  <a href={'https://opensea.io/'} target={'_blank'} rel="noopener noreferrer">
                    OpenSea
                  </a>
                  ) and most mobile wallets.
                </p>
              </Content>
            </Box>
          </Flex>
          <Flex pb={'50px'} flexDirection={['column-reverse', 'column-reverse', 'row']}>
            <Box flex={1}>
              <Content theme={theme}>
                <Title theme={theme}>How do I get badges?</Title>
                <p>
                  How you actually get the badges depends on the alternative(s) chosen by the event
                  organizer to attest your presence.
                </p>
                <p>Current options include:</p>
                <p>
                  <span className={'bold-p'}>Batch delivery of badges</span>
                  <br />
                  (if you gave a wallet address when you signed up, an organizer can airdrop you a
                  badge)
                </p>
                <p>
                  <span className={'bold-p'}>Manual sending</span>
                  <br />
                  (an organizer can scan your wallet address and send you a badge on the spot)
                </p>
                <p>
                  <span className={'bold-p'}>Self service claim</span>
                  <br />
                  (an intranet-only Dapp that is available within the event's WiFi will give you
                  your badge)
                </p>
              </Content>
            </Box>
            <Box flex={1}>
              <ImageContent>
                <img src={faq4} alt={'FAQs'} />
              </ImageContent>
            </Box>
          </Flex>
          <Flex pb={'50px'}>
            <Box flex={1}>
              <ImageContent>
                <img src={faq5} alt={'FAQs'} />
              </ImageContent>
            </Box>
          </Flex>
          <Flex pb={'50px'} flexDirection={['column', 'column', 'row']}>
            <Box flex={1}>
              <Content theme={theme}>
                <Title theme={theme}>How can I use POAP for my event?</Title>
                <p>
                  If you want to use POAP to distribute attendance badges at your event,{' '}
                  <a
                    href={'https://www.poap.xyz/#contact'}
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    contact us
                  </a>{' '}
                  so we can hook you up. All you need to provide is a badge design and some event
                  metadata (event name, location, date).
                </p>
              </Content>
            </Box>
            <Box flex={1}>
              <Content theme={theme}>
                <Title>How much does POAP cost?</Title>
                <p>POAP is free! It's an open source community initiative.</p>
              </Content>
            </Box>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
