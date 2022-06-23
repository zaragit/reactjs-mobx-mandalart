import { observer } from 'mobx-react-lite';

import Board from './Board';
import { Plan } from '../store/mandalart';
import MandalartTarget from './MandalartTarget';
import styled, { css } from 'styled-components';

const PlanContainer = styled(Board)<{
  gap: number;
}>`
  ${({ gap }) => css`
    margin: ${gap}px;
  `}
`;

export type MandalartPlanProps = {
  size: number;
  gap: number;
  plan: Plan;
};

function MandalartPlan({ size, gap, plan }: MandalartPlanProps) {
  const halfGap = gap / 2;
  const itemSize = (size - gap * 2) / 3;

  return (
    <PlanContainer size={size} gap={halfGap}>
      {plan.all.map((target, index) => (
        <MandalartTarget
          key={index}
          size={itemSize}
          margin={halfGap}
          target={target}
        />
      ))}
    </PlanContainer>
  );
}

export default observer(MandalartPlan);
