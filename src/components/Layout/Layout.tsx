import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { WithClass } from '../../types';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: ${(props) =>
    `${props.theme.components.header.height} auto ${props.theme.components.footer.height}`};

  ${Header} {
    grid-area: header;
  }

  ${Main} {
    grid-area: main;
  }

  ${Footer} {
    grid-area: footer;
  }
`;

/*
 * Layout component contains a common structure for all the pages
 *
 * */
const Layout = ({ children, className }: PropsWithChildren & WithClass) => {
  return (
    <Container className={className}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
