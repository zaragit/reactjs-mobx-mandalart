import { Goal } from ".";

describe("Goal", () => {
  it("generates correctly", () => {
    const goal = new Goal("Hello Mobx", "", "Placeholder");

    expect(goal).toBeTruthy();
    expect(typeof goal).toBe("object");

    expect(goal.content).toBe("Hello Mobx");
    expect(typeof goal.setContent).toBe("function");

    goal.setContent("Bye Mobx");
    expect(goal.content).toBe("Bye Mobx");

    expect(goal.placeholder).toBe("Placeholder");
    expect(typeof goal.setPlaceholder).toBe("function");

    goal.setPlaceholder("Change Placeholder");
    expect(goal.placeholder).toBe("Change Placeholder");
  });

  it("synchronized parent and child", () => {
    const parent = new Goal("Parent");
    const child1 = new Goal("Child1");
    const child2 = new Goal("Child2");

    expect(parent.content).toBe("Parent");
    expect(child1.content).toBe("Child1");
    expect(child2.content).toBe("Child2");

    child1.setParent(parent);
    expect(parent.child).toEqual(child1);
    expect(parent.content).toBe("Child1");

    parent.setChild(child2);
    expect(child2.parent).toEqual(parent);
    expect(child2.content).toBe("Child1");

    child1.setContent("Change Child1");
    expect(parent.content).toBe("Change Child1");

    parent.setContent("Change Parent");
    expect(child2.content).toBe("Change Parent");
  });
});
