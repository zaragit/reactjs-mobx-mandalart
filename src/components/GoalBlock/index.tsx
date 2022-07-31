import React, { ClipboardEvent, MouseEvent, useCallback, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import styled, { css } from "styled-components";
import { observer } from "mobx-react-lite";
import { Goal } from "../../store";

const Container = styled.div<{
  size: number;
  margin: number;
  backgroundColor?: string;
  placeholder?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #1c1c1c;
  border-radius: 8px;
  overflow: auto;
  background-color: ${({ backgroundColor }) => backgroundColor};

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

    ${({ placeholder }) =>
      placeholder &&
      css`
        :empty::before {
          content: "${placeholder}";
          color: #222831;
          font-size: 1.125rem;
          opacity: 0.9;
        }

        :focus:empty::before {
          content: "";
        }
      `}
  }
`;

export interface GoalBlockProps {
  readonly goal: Goal;
  readonly size?: number;
  readonly margin?: number;
  readonly placeholder?: string;
  readonly backgroundColor?: string;
}

function GoalBlock({
  goal,
  size = 100,
  margin = 0,
  placeholder,
  backgroundColor,
}: GoalBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const editableRef = useRef<HTMLDivElement>(null);

  const onChangeContent = useCallback(
    (event: ContentEditableEvent) => {
      goal.setContent(event.target.value);
    },
    [goal]
  );

  const onClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    console.log("??");
    editableRef.current?.click();
  }, []);

  /**
   * ? - contentEditable paste 테스트 코드
   */
  const onPaste = useCallback((event: ClipboardEvent) => {
    event.preventDefault();

    const clipboardData = event.clipboardData;
    const planText = clipboardData.getData("text/plain");

    editableRef.current!.textContent = planText;
  }, []);

  return (
    <Container
      ref={blockRef}
      data-testid="goal_block"
      {...{
        size,
        margin,
        placeholder: goal.placeholder || placeholder,
        backgroundColor: goal.backgroundColor || backgroundColor,
      }}
      onClick={onClick}
    >
      <ContentEditable
        data-testid="editable"
        innerRef={editableRef}
        html={goal.content}
        onChange={onChangeContent}
        onPaste={onPaste}
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.focus();
        }}
      />
    </Container>
  );
}

export default observer(GoalBlock);
