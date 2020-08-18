import React, { FC } from 'react';
import { useTheme, ITheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

// Styled component
const ContainerWrap = styled.div<{ theme: ITheme }>`
  width: 100%;
  padding: 0 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints['xl']}) {
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    width: ${({ theme }) => theme.breakpoints['xl']};
  }
`;

const Container: FC = ({ children }) => {
  const theme = useTheme();
  return <ContainerWrap theme={theme}>{children}</ContainerWrap>;
};

export default Container;
