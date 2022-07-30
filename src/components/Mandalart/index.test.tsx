import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Mandalart from ".";
import { Goal, Plan, Store } from "../../store";
import {} from "mobx-react-lite";
import userEvent from "@testing-library/user-event";

describe("<Mandalart />", () => {
  it("renders component correctly", () => {
    const store = new Store();
    render(<Mandalart store={store} />);

    const planEls = screen.getAllByTestId("plan_block");
    expect(planEls).toHaveLength(9);

    const goalEls = screen.getAllByTestId("editable");
    expect(goalEls).toHaveLength(81);
  });

  it("observe store", () => {
    const store = new Store(new Plan(new Goal("Main Goal")));

    render(<Mandalart store={store} />);

    expect(screen.getByText("Main Goal")).toBeInTheDocument();
  });
});
