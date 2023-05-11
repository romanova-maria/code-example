import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { WithTestId } from '../../types';
import { focusStyles } from '../../styles/helpers';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary};

  &:hover {
    color: ${(props) => props.theme.components.button.colors.hover};
  }

  &:active {
    color: ${(props) => props.theme.components.button.colors.active};
  }

  ${focusStyles};
`;

const TextLink = ({
  children,
  href,
  testId,
  ...props
}: { children: string } & WithTestId &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <StyledLink href={href} data-testid={testId} {...props}>
      {children}
    </StyledLink>
  );
};

export default styled(TextLink)``;
