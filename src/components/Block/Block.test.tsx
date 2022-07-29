import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Block from ".";

describe("<Block />", () => {
  it("renders component correctly", () => {
    const onChange = jest.fn();
    render(<Block content="Hello" onChange={onChange} />);

    const editableEl = screen.getByTestId("editable");
    expect(editableEl).toBeInTheDocument();
    expect(editableEl.textContent).toBe("Hello");
    expect(onChange).toHaveBeenCalledTimes(0);

    userEvent.click(editableEl);
    userEvent.keyboard(" World");

    expect(editableEl.textContent).toBe("Hello World");
    expect(onChange).toHaveBeenCalledTimes(6);
  });

  it("changes content", () => {
    let testContent = "Hello";
    render(
      <Block
        content={testContent}
        onChange={(newContent) => (testContent = newContent)}
      />
    );

    const editableEl = screen.getByTestId("editable");

    userEvent.click(editableEl);
    userEvent.keyboard(" World");

    expect(testContent).toBe("Hello World");
  });
});
