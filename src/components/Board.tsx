import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ size: number; gap: number }>`
  display: inline-block;

  ${({ size, gap }) => css`
    width: ${size}px;
    height: ${size}px;

    > div {
      display: flex;
      flex-wrap: wrap;
      margin: -${gap}px;

      > div {
        margin: ${gap}px;
      }
    }
  `}
`;

export type BoardProps = {
  size: number;
  gap: number;
  children?: ReactNode;
};

function Board({ size, gap, children }: BoardProps) {
  return (
    <Container size={size} gap={gap}>
      <div>{children}</div>
    </Container>
  );
}

export default Board;
