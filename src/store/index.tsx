import React, { createContext, useContext } from 'react';
import { MandalartStore } from './mandalart';

const MandalartContext = createContext<{ store: MandalartStore } | null>(null);

export function useMandalartStore() {
  const store = useContext(MandalartContext);

  if (!store) {
    throw new Error('Not implemented.');
  }

  return store;
}

export const MandalartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const store = new MandalartStore();

  return (
    <MandalartContext.Provider value={{ store }}>
      {children}
    </MandalartContext.Provider>
  );
};
