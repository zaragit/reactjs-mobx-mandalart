import React, { useCallback, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import styled, { css } from "styled-components";

const Container = styled.div<{
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
        content: "${placeholder}";
        font-size: 1.125rem;
        opacity: 0.9;
      }
    `}
  }
`;

export interface BlockProps {
  readonly content?: string;
  readonly onChange?: (content: string) => void;
  readonly size?: number;
  readonly margin?: number;
  readonly placeholder?: string;
}

function Block({
  content = "",
  onChange,
  size = 100,
  margin = 0,
  placeholder = "",
}: BlockProps) {
  const editableRef = useRef<HTMLDivElement>(null);

  const onChangeContent = useCallback(
    (event: ContentEditableEvent) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange]
  );

  return (
    <Container size={size} margin={margin} placeholder={placeholder}>
      <ContentEditable
        data-testid="editable"
        innerRef={editableRef}
        html={content}
        onChange={onChangeContent}
      />
    </Container>
  );
}

export default Block;
