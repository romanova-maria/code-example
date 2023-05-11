import React from 'react';
import styled from 'styled-components';
import { WithClass } from '../../types';
import Content from './Content';
import { TextLink } from '../TextLink';

const Container = styled.footer`
  width: 100vw;
  height: 100%;
  display: grid;
  background: ${(props) => props.theme.components.footer.bgColor};

  ${Content} {
    display: grid;
    justify-content: center;
    align-content: center;
  }

  ${TextLink} {
    filter: brightness(
      80%
    ); // for a11y: to increase a contrast between footer background and link
  }
`;

const Footer = ({ className }: WithClass) => {
  return (
    <Container className={className}>
      <Content>
        <div>
          Github link to{' '}
          <TextLink
            href="https://github.com/romanova-maria/code-example"
            testId="code-example"
          >
            code-example
          </TextLink>
        </div>
      </Content>
    </Container>
  );
};

export default styled(Footer)``;
