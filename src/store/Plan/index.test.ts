import { Plan } from ".";
import { Goal } from "../Goal";

describe("Plan", () => {
  it("generates correctly", () => {
    const coreGoal = new Goal("Core Goal");
    const goals = Array.from({ length: 8 }).map(
      (_, i) => new Goal(`Goal ${i}`)
    );

    const plan = new Plan(coreGoal, goals);

    expect(plan.coreGoal).toBeTruthy();
    expect(plan.coreGoal.content).toBe("Core Goal");

    expect(plan.goals).toHaveLength(8);
    plan.goals.forEach((goal, i) => expect(goal.content).toBe(`Goal ${i}`));

    plan.setCoreGoalContent("Change Core Goal");
    expect(plan.coreGoal.content).toBe("Change Core Goal");

    plan.setGoalContent(3, "Change Goal by index");
    expect(plan.goals[3].content).toBe("Change Goal by index");
  });
});
