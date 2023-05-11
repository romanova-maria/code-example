import React from 'react';
import styled from 'styled-components';
import { Points } from './ClicksGame';
import { Button, Variants } from '../../components/Button';
import { BREAKPOINTS } from '../../styles/breakpoints';

const PointsVariants = {
  bad: 'bad',
  average: 'average',
  good: 'good'
} as const;

type PointsVariants = typeof PointsVariants;

const CurrentPoints = styled.div<{ evaluation?: keyof PointsVariants }>`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: ${({ evaluation, ...props }) =>
    evaluation
      ? evaluation === PointsVariants.bad
        ? props.theme.palette.danger
        : evaluation === PointsVariants.good
        ? props.theme.palette.success
        : props.theme.palette.primary
      : props.theme.palette.primary};
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 1rem;

  @media (${BREAKPOINTS.tablet}) {
    gap: 1.5rem;
  }
`;

const getEvaluation = (record: number) => {
  if (record <= 5) {
    return PointsVariants.bad;
  } else if (record <= 10) {
    return PointsVariants.average;
  } else {
    return PointsVariants.good;
  }
};

const Result = ({
  points,
  onReload
}: {
  points: Points;
  onReload: () => void;
}) => {
  return (
    <>
      <CurrentPoints
        evaluation={getEvaluation(points.current)}
        data-testid="current-points"
      >
        {points.current}
      </CurrentPoints>
      <RecordContainer data-testid="record">
        <CurrentPoints>Record: {points.record}</CurrentPoints>
        {!!points.record && (
          <Button
            variant={Variants.danger}
            onClick={onReload}
            testId="reset-record"
            areaLabel="Reset the record"
          >
            Reset
          </Button>
        )}
      </RecordContainer>
    </>
  );
};

export default Result;
