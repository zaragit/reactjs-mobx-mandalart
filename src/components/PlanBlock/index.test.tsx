import React from "react";
import { render, screen } from "@testing-library/react";

import PlanBlock from ".";
import { Plan, Goal } from "../../store";

describe("<PlanBlock />", () => {
  const given = () => {
    const coreGoal = new Goal("Core Goal");
    const goals = Array.from({ length: 8 }).map(
      (_, i) => new Goal(`Goal ${i}`)
    );
    const plan = new Plan(coreGoal, goals);
    return plan;
  };

  it("renders component correctly", () => {
    const plan = given();

    render(<PlanBlock plan={plan} />);

    const goalEls = screen.getAllByTestId("editable");
    expect(goalEls).toHaveLength(9);

    expect(goalEls[4]).toHaveTextContent("Core Goal");

    expect(goalEls[4]).toHaveTextContent(plan.coreGoal.content);
    plan.goals.map((goal, i) =>
      expect(goalEls[i >= 4 ? i + 1 : i]).toHaveTextContent(goal.content)
    );
  });
});
