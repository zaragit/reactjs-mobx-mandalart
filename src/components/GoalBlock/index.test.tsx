import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import GoalBlock from ".";
import { Goal } from "../../store";

describe("<GoalBlock />", () => {
  it("renders component correctly", async () => {
    const goal = new Goal("Hello", "rgba(80,80,80,0.62)");
    goal.setContent = jest.fn();

    render(<GoalBlock goal={goal} />);

    expect(screen.getByTestId("goal_block")).toHaveStyleRule(
      "background-color",
      "rgba(80,80,80,0.62)"
    );

    const editableEl = screen.getByTestId("editable");
    expect(editableEl).toBeInTheDocument();
    expect(editableEl).toHaveTextContent("Hello");
    expect(goal.setContent).toHaveBeenCalledTimes(0);

    userEvent.click(editableEl);
    userEvent.keyboard(" World");

    expect(editableEl).toHaveTextContent("Hello World");
    expect(goal.setContent).toHaveBeenCalledTimes(6);
  });

  it("changes Goal", async () => {
    const goal = new Goal("Hello");
    render(<GoalBlock goal={goal} />);

    const editableEl = screen.getByTestId("editable");

    fireEvent.blur(editableEl, { target: { textContent: "Hello World" } });

    expect(goal.content).toBe("Hello World");
  });
});
