import React, { PropsWithChildren } from 'react';
import RBButton, { ButtonProps } from 'react-bootstrap/Button';
import { WithTestId } from '../../types';
import styled, { css } from 'styled-components';
import { focusStyles } from '../../styles/helpers';

/*
 * Object with Variants helps developers to avoid mistakes.
 * Thanks to Type Script, only options from this list can be used for button appearance,
 * so it is impossible to forget to add needed class.
 * */
export const Variants = {
  primary: 'primary',
  danger: 'danger'
} as const;

export type Variants = keyof typeof Variants;

interface Button extends WithTestId, PropsWithChildren {
  variant?: Variants;
  areaLabel: string;
}

/*
 * Css object encapsulates specific styles, so it is easier to refactor and read.
 * It keeps the component clean, so it's easier to understand
 * what is going on in the component.
 * Also, it can be exported and reused if needed. For instance, it can be used for
 * styling a third party library.
 * For instance, it can be the case when the app uses CMS and the authorisation
 * goes directly from there. In this case developer can export the app button
 * styles and apply them to authorisation form
 * */
const primaryStyles = css`
  background: ${(props) => props.theme.components.button.colors.primary};
  border-color: ${(props) => props.theme.components.button.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.components.button.colors.hover};
    border-color: ${(props) => props.theme.components.button.colors.hover};
  }

  &:active {
    background-color: ${(props) => props.theme.components.button.colors.active};
    border-color: ${(props) => props.theme.components.button.colors.active};
  }
`;

const dangerStyles = css`
  background: ${(props) => props.theme.palette.danger};
  border-color: ${(props) => props.theme.palette.danger};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkRed};
    border-color: ${(props) => props.theme.colors.darkRed};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.theDarkestRed};
    border-color: ${(props) => props.theme.colors.theDarkestRed};
  }
`;

/*
 * Common styles can be encapsulated in reusable objects.
 * According to the design system (my random wish) all the elements
 * should have common appearance with a button. So, the object contains a rule set
 * with some styles which is used here and also used for other places, e.g. Select component.
 * It can be moved to styles/helpers.ts section, if Button component is not
 * the reference to styles anymore
 *  */
export const buttonCommons = css`
  height: ${(props) => props.theme.components.button.height};
  border-radius: 0.4rem;
  padding: 0.75rem 0.375rem;
  font-size: 1rem;
  white-space: nowrap;

  /* A11y: adding focus styles because button is an interactive element */
  ${focusStyles};
`;

/*
 * React Bootstrap button is used, but located only inside the component.
 * Therefore, the component has all the advantages of third party library button,
 * but encapsulates the dependency.
 * With that it is easier to change/update components library
 * With that approach it is clear what styles were overwritten.
 *  */
const StyledButton = styled(RBButton)`
  && {
    ${buttonCommons};
    text-transform: uppercase;
    font-weight: bold;
    max-width: 20rem;

    &.btn-${Variants.primary} {
      ${primaryStyles};
    }

    &.btn-${Variants.danger} {
      ${dangerStyles};
    }
  }
`;

/*
 * The component helps to encapsulate logic and appearance of the button.
 *
 * variant - helps to be sure that buttons won't have random styles here and there.
 * testId - helps to communicate with QA. Have to be required and added to all
 * interactive components. If QA team works with data-testid only, then dev team
 * can change component markup without concerns. At the same time, if testId was changed,
 * then dev team have to inform QA team and put a comment about changes
 * to the pull request
 * areaLabel - must be required for button element, works for a11y
 * */
const Button = ({
  children,
  variant = Variants.primary,
  testId,
  areaLabel,
  ...props
}: Button & ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      area-label={areaLabel}
      data-testid={testId}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default styled(Button)``;
