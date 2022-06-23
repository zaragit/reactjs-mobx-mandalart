import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import styled, { css } from 'styled-components';
import { useCallback, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import { Target } from '../store/mandalart';

const TargetContainer = styled.div<{
  size: number;
  margin: number;
  placeholder: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #1c1c1c;
  border-radius: 8px;
  overflow: auto;

  ${({ size, margin }) => css`
    width: ${size}px;
    height: ${size}px;
    margin: ${margin}px;
  `}

  > div {
    display: inline-block;
    width: 100%;
    text-align: center;
    text-overflow: ellipsis;

    outline: 0px solid transparent;

    font-size: 1.125rem;
    line-height: 1.125rem;
    min-height: 1.125rem;

    ${({ placeholder }) => css`
      :not(:focus):empty::before {
        content: '${placeholder}';
        font-size: 1.125rem;
        opacity: 0.9;
      }
    `}
  }
`;

export type MandalartItemProps = {
  size: number;
  margin: number;
  target: Target;
};

function MandalartTarget({ size, margin, target }: MandalartItemProps) {
  const contentEditableRef = useRef<HTMLDivElement>(null);

  const handleChangeContent = useCallback(
    (event: ContentEditableEvent) => {
      target.setContent(event.target.value);
    },
    [target]
  );

  return (
    <TargetContainer
      size={size}
      margin={margin}
      placeholder={target.placeholder}
      style={{ backgroundColor: target.backgroundColor }}
    >
      <ContentEditable
        innerRef={contentEditableRef}
        html={target.content}
        onChange={handleChangeContent}
      />
    </TargetContainer>
  );
}

export default observer(MandalartTarget);
