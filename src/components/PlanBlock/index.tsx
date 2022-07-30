import { observer } from "mobx-react-lite";
import React from "react";
import styled, { css } from "styled-components";
import { Plan } from "../../store";
import Goal from "../GoalBlock";

const Container = styled.div<{ size: number; margin: number }>`
  display: inline-block;
  ${({ size, margin }) => css`
    width: ${size}px;
    height: ${size}px;
    margin: ${margin}px;
  `}

  > div {
    display: flex;
    flex-wrap: wrap;
    ${({ margin }) => css`
      margin: -${margin / 2}px;
    `}
  }
`;

export interface PlanBlockProps {
  readonly plan: Plan;
  readonly size?: number;
  readonly margin?: number;
}

function PlanBlock({ plan, size = 300, margin = 16 }: PlanBlockProps) {
  const itemSize = (size - margin * 2) / 3;
  const halfMargin = margin / 2;

  return (
    <Container data-testid="plan_block" size={size} margin={margin}>
      <div>
        {plan.goals.slice(0, 4).map((goal, i) => (
          <Goal key={i} goal={goal} size={itemSize} margin={halfMargin} />
        ))}
        <Goal goal={plan.coreGoal} size={itemSize} margin={halfMargin} />
        {plan.goals.slice(4).map((goal, i) => (
          <Goal key={i} goal={goal} size={itemSize} margin={halfMargin} />
        ))}
      </div>
    </Container>
  );
}

export default observer(PlanBlock);
