import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';
import { buttonCommons } from '../Button';
import { WithTestId } from '../../types';

export type Option = { label: string; value: string };

interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
}

const StyledSelect = styled.select`
  ${buttonCommons};

  min-width: 4rem;
  text-transform: capitalize;
  padding-right: 2rem;

  &:hover {
    background-color: ${(props) =>
      `${props.theme.components.button.colors.hover}20`};
    border-color: ${(props) => props.theme.components.button.colors.hover};
  }

  &:active {
    border-color: ${(props) => props.theme.components.button.colors.active};
  }
`;

const Select = ({
  id,
  label,
  options,
  onChange,
  testId,
  ...props
}: { id: string } & WithTestId & Select) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledSelect id={id} data-testid={testId} onChange={onChange} {...props}>
        {options.map(({ value, label }, id) => (
          <option value={value} key={id}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default styled(Select)``;
