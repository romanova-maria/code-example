import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { focusStyles } from '../../styles/helpers';
import { WithTestId } from '../../types';

interface Checkbox {
  id: string; // id could be used as testId, but then it is more than one particular attribute to think about, so it adds chaos to communication between QA and Dev teams
  label: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  height: 2rem;
  width: 2rem;
  accent-color: ${(props) => props.theme.palette.primary};

  ${focusStyles};
`;

// TODO: checkbox appearance needs to be changed so that it can be properly customised
const Checkbox = ({
  id,
  label,
  testId,
  onChange,
  ...props
}: Checkbox & WithTestId & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container data-testid={testId}>
      <Input id={id} type="checkbox" onChange={onChange} {...props} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default styled(Checkbox)``;
