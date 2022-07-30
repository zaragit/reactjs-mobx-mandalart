import { action, makeObservable, observable } from "mobx";
import { Goal } from "../Goal";

export class Plan {
  goals: Goal[];
  coreGoal: Goal;

  constructor(
    coreGoal: Goal = new Goal(),
    goals: Goal[] = Array.from({ length: 8 }).map((_) => new Goal())
  ) {
    this.coreGoal = coreGoal;
    this.goals = goals;

    makeObservable(this, {
      coreGoal: observable,
      goals: observable,
      setCoreGoalContent: action,
      setGoalContent: action,
    });
  }

  setCoreGoalContent(content: string) {
    this.coreGoal.setContent(content);
  }

  setGoalContent(i: number, content: string) {
    this.goals[i].setContent(content);
  }
}
