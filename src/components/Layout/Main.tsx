import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { WithClass } from '../../types';
import Content from './Content';
import { BREAKPOINTS } from '../../styles/breakpoints';

const Container = styled.main`
  display: flex;
  justify-content: center;

  ${Content} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (${BREAKPOINTS.tablet}) {
      gap: 2rem;
    }
  }
`;

const Main = ({ className, children }: WithClass & PropsWithChildren) => {
  return (
    <Container className={className}>
      <Content>{children}</Content>
    </Container>
  );
};

export default styled(Main)``;
