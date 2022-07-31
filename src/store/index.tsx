import React, { createContext, useCallback, useContext, useState } from "react";
import { Store } from "./Store";

export * from "./Goal";
export * from "./Plan";
export * from "./Store";

const MandalartContext =
  createContext<{
    store: Store;
    fileName: string;
    changeFileName: (fileName: string) => void;
  } | null>(null);

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
  const [fileName, setFileName] = useState("만다라트");
  const store = new Store();

  store.corePlan.coreGoal.setPlaceholder("핵심목표");
  store.corePlan.coreGoal.setBackgroundColor("#816797");
  store.corePlan.goals.forEach((goal, i) => {
    goal.setPlaceholder(`세부목표 #${i + 1}`);
    goal.setBackgroundColor("#FFD369");
  });

  store.plans.forEach((plan, i) => {
    plan.coreGoal.setPlaceholder(`세부목표 #${i + 1}`);
    plan.coreGoal.setBackgroundColor("#FFD369");
  });

  const changeFileName = useCallback((fileName: string) => {
    setFileName(fileName);
  }, []);

  return (
    <MandalartContext.Provider value={{ store, fileName, changeFileName }}>
      {children}
    </MandalartContext.Provider>
  );
};
