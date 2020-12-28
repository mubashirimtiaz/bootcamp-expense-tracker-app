import React, { createContext, useReducer, useEffect } from "react";
import { transactionReducer } from "../reducer/transactionReducer";

const initialState = {
  transactions: [],
};

export const TransactionContext = createContext(initialState);

const TransactionContextProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(
    transactionReducer,
    initialState,
    () => {
      return JSON.parse(
        localStorage.getItem("transactions") || "}{transactions: []"
      );
    }
  );
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  return (
    <TransactionContext.Provider value={{ transactions, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
