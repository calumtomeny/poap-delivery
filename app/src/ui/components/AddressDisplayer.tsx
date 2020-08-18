import React, { FC } from 'react';
import styled from '@emotion/styled';
import Blockies from 'react-blockies';
import { useTheme, ITheme } from '@chakra-ui/core';

// Hooks
import { useStateContext } from 'lib/hooks/useCustomState';

// Styled Components
const UserWrapper = styled.div<{ theme: ITheme }>`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors['gray']['light']};
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 8px 0 8px 8px;
  align-items: center;

  .blockie {
    canvas {
      border-radius: 24px;
    }
  }

  .address {
    color: ${({ theme }) => theme.colors['secondaryColor']};
    font-family: var(--alt-font);
    font-size: 16px;
    padding: 0 10px 0 5px;

    .short-address {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints['sm']}) {
      .full-address {
        display: none;
      }
      .short-address {
        display: flex;
      }
    }
  }

  .poaps {
    background: ${({ theme }) => theme.colors['gray']['light']};
    border-radius: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 90px;
    flex-direction: row;

    .badge {
      background: white;
      height: 26px;
      width: 26px;
      padding: 1px;
      border-radius: 20px;
      position: absolute;

      &:first-of-type {
        left: 10px;
      }

      &:nth-of-type(2) {
        left: 20px;
      }

      &:nth-of-type(3) {
        left: 30px;
      }

      img {
        width: 100%;
        vertical-align: top;
        border-radius: 50%;
      }
    }

    .extra-badges {
      position: absolute;
      right: 10px;
      font-family: var(--alt-font);
      font-size: ${({ theme }) => theme.fontSizes['sm']};
      color: ${({ theme }) => theme.colors['secondaryColor']};
    }
  }
`;

// Utils
const shortAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const AddressDisplayer: FC = () => {
  const { account, poaps } = useStateContext();
  const theme = useTheme();

  return (
    <UserWrapper theme={theme}>
      <div className={'blockie'}>
        <Blockies seed={account} size={6} />
      </div>
      <div className={'address'}>
        <span className={'full-address'}>{account}</span>
        <span className={'short-address'}>{shortAddress(account)}</span>
      </div>
      {poaps && poaps.length > 0 && (
        <div className={'poaps'}>
          {poaps.slice(0, 3).map((poap) => {
            return (
              <div className={'badge'} key={poap.tokenId}>
                <img src={poap.event.image_url} alt={poap.event.name} />
              </div>
            );
          })}
          {poaps.length > 3 && <div className={'extra-badges'}>+ {poaps.slice(3).length}</div>}
        </div>
      )}
    </UserWrapper>
  );
};

export default AddressDisplayer;
