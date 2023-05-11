import React from 'react';
import styled from 'styled-components';
import { WithClass } from '../../types';
import Content from './Content';
import { BREAKPOINTS } from '../../styles/breakpoints';

const Container = styled.header`
  width: 100vw;
  height: 100%;
  display: grid;
  background: ${(props) => props.theme.components.header.bgColor};
  color: ${(props) => props.theme.palette.primary};
  font-weight: bold;

  ${Content} {
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 1.5rem;

    @media (${BREAKPOINTS.tablet}) {
      justify-items: start;
      font-size: 2rem;
    }
  }
`;

const Header = ({ className }: WithClass) => {
  return (
    <Container className={className}>
      <Content>Code Example</Content>
    </Container>
  );
};

export default styled(Header)``;
