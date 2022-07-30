import { Store } from ".";
import { Goal } from "../Goal";
import { Plan } from "../Plan";

describe("Store", () => {
  it("generates correctly", () => {
    const corePlan = new Plan(
      new Goal("Core Goal"),
      Array.from({ length: 8 }).map((_, i) => new Goal(`Plan_${i} Core Goal`))
    );

    const store = new Store(corePlan);

    expect(store.corePlan.coreGoal.content).toBe("Core Goal");
    store.plans.forEach((plan, i) =>
      expect(plan.coreGoal.content).toBe(`Plan_${i} Core Goal`)
    );

    store.plans[2].coreGoal.setContent("Change");
    expect(store.corePlan.goals[2].content).toBe("Change");
  });
});
