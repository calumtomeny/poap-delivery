import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme } from '@chakra-ui/core';

// Assets
import twitter from 'assets/images/twitter.svg';
import github from 'assets/images/github.svg';
import telegram from 'assets/images/telegram.svg';
import reddit from 'assets/images/reddit.svg';
import discord from 'assets/images/discord.svg';

const CommunityWrapper = styled.div<{ theme: ITheme }>`
  display: flex;
  flex-direction: column;

  .title {
    color: ${({ theme }) => theme.colors['primaryColor']};
  }

  .networks {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 200px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoints['sm']}) {
      max-width: 100%;
      justify-content: space-evenly;
      margin: 0;
      padding-top: 10px;
    }
    .network {
      margin: 0 5px;
      img {
        width: 24px;
        @media (max-width: ${({ theme }) => theme.breakpoints['sm']}) {
          width: 40px;
        }
      }
    }
  }
`;

const Community: FC = () => {
  const theme = useTheme();
  return (
    <CommunityWrapper theme={theme}>
      <div className={'title'}>Join our community</div>
      <div className={'networks'}>
        <div className={'network'}>
          <a href={'https://twitter.com/poapxyz'} target={'_blank'} rel="noopener noreferrer">
            <img src={twitter} alt={'Twitter'} />
          </a>
        </div>
        <div className={'network'}>
          <a href={'https://github.com/poapxyz'} target={'_blank'} rel="noopener noreferrer">
            <img src={github} alt={'Github'} />
          </a>
        </div>
        <div className={'network'}>
          <a href={'https://t.me/poapxyz'} target={'_blank'} rel="noopener noreferrer">
            <img src={telegram} alt={'Telegram'} />
          </a>
        </div>
        <div className={'network'}>
          <a
            href={'https://discord.com/invite/9s8U8Bn'}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <img src={discord} alt={'Discord'} />
          </a>
        </div>
        <div className={'network'}>
          <a href={'https://www.reddit.com/r/poap/'} target={'_blank'} rel="noopener noreferrer">
            <img src={reddit} alt={'Reddit'} />
          </a>
        </div>
      </div>
    </CommunityWrapper>
  );
};

export default Community;
