import React from "react";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";

import { Store } from "../../store";
import PlanBlock from "../PlanBlock";

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

export interface MandalartProps {
  readonly store: Store;
  readonly size?: number;
  readonly margin?: number;
}

function Mandalart({ store, size = 900, margin = 16 }: MandalartProps) {
  const itemSize = (size - margin * 2) / 3;
  const halfMargin = margin / 2;

  return (
    <Container size={size} margin={margin}>
      <div>
        {store.plans.slice(0, 4).map((plan, i) => (
          <PlanBlock key={i} plan={plan} size={itemSize} margin={halfMargin} />
        ))}
        <PlanBlock plan={store.corePlan} size={itemSize} margin={halfMargin} />
        {store.plans.slice(4).map((plan, i) => (
          <PlanBlock key={i} plan={plan} size={itemSize} margin={halfMargin} />
        ))}
      </div>
    </Container>
  );
}

export default observer(Mandalart);
