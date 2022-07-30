import React, { createContext, useContext } from "react";
import { Store } from "./Store";

export * from "./Goal";
export * from "./Plan";
export * from "./Store";

const MandalartContext = createContext<{ store: Store } | null>(null);

export function useMandalartStore() {
  const store = useContext(MandalartContext);

  if (!store) {
    throw new Error("Not implemented.");
  }

  return store;
}

export const MandalartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const store = new Store();

  store.corePlan.coreGoal.setPlaceholder("핵심목표");
  store.corePlan.coreGoal.setBackgroundColor("#2727279e");
  store.corePlan.goals.forEach((goal, i) => {
    goal.setPlaceholder(`세부목표 #${i + 1}`);
    goal.setBackgroundColor("#a5a5a59e");
  });

  store.plans.forEach((plan, i) => {
    plan.coreGoal.setPlaceholder(`세부목표 #${i + 1}`);
    plan.coreGoal.setBackgroundColor("#a5a5a59e");
  });

  return (
    <MandalartContext.Provider value={{ store }}>
      {children}
    </MandalartContext.Provider>
  );
};
