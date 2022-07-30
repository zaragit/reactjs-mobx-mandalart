import { makeObservable, observable } from "mobx";
import { Plan } from "../Plan";

export class Store {
  corePlan: Plan;
  plans: Plan[];

  constructor(
    corePlan: Plan = new Plan(),
    plans: Plan[] = Array.from({ length: 8 }).map((_) => new Plan())
  ) {
    this.corePlan = corePlan;
    this.plans = plans;

    this.corePlan.goals.forEach((goal, i) => {
      goal.setChild(this.plans[i].coreGoal);
    });

    makeObservable(this, {
      corePlan: observable,
      plans: observable,
    });
  }
}
