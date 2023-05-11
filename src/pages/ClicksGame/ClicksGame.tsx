import React, { useState } from 'react';
import { Button, Variants } from '../../components/Button';
import styled from 'styled-components';
import Select, { Option } from '../../components/Select/Select';
import { Checkbox } from '../../components/Checkbox';
import { BREAKPOINTS } from '../../styles/breakpoints';
import { Message } from './Message';
import Result from './Result';

interface ButtonState {
  variant: Variants;
  disabled: boolean;
}

export interface Points {
  message: string;
  current: number;
  record: number;
}

const getOptions = (): Option[] => {
  const options: Option[] = [];
  for (const variant in Variants) {
    options.push({ value: variant, label: variant });
  }
  return options;
};

const SettingsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;

  @media (${BREAKPOINTS.tablet}) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ClicksGame = () => {
  const [buttonState, setButtonState] = useState<ButtonState>({
    variant: Variants.primary,
    disabled: false
  });

  const [points, setPoints] = useState<Points>({
    message: '',
    current: 0,
    record: 0
  });

  const text = 'Click! ';
  const textLength = text.length;

  const onClick = () => {
    setPoints((p) => {
      return {
        record:
          (p.message + text).length / textLength > points.record
            ? p.record + 1
            : p.record,
        current: p.current + 1,
        message: p.message + text
      };
    });

    setTimeout(() => {
      setPoints((p) => {
        return {
          ...p,
          current: p.current - 1,
          message: p.message.replace(text, '')
        };
      });
    }, 2000);
  };

  return (
    <>
      <Message>
        {points.message
          ? `${points.message} ...`
          : 'How many clicks can you do per two seconds?'}
      </Message>
      <Result
        points={points}
        onReload={() => setPoints({ ...points, record: 0 })}
      />
      <Button
        variant={buttonState.variant}
        disabled={buttonState.disabled}
        testId="test-button"
        onClick={onClick}
        areaLabel="Produce click"
      >
        Click me
      </Button>

      <SettingsArea>
        <Select
          id="btn-variants"
          label="Button appearance:"
          options={getOptions()}
          testId="btn-variants-select"
          onChange={(event) =>
            setButtonState({
              ...buttonState,
              variant: event.target.value as Variants
            })
          }
        />

        <Checkbox
          id="btn-disabled-toggle"
          label="Disable button"
          testId="disabled-toggle"
          onChange={(event) =>
            setButtonState({ ...buttonState, disabled: event.target.checked })
          }
        />
      </SettingsArea>
    </>
  );
};

export default ClicksGame;
