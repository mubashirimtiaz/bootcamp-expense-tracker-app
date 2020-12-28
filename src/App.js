import React from "react";
import Balance from "./components/balance/Balance";
import Header from "./components/header/Header";
import "./App.css";
import IncomeExpense from "./components/income_expense/IncomeExpense";
import TransactionsList from "./components/trasactionsList/TransactionsList";
import TransactionContextProvider from "./context/TransactionContext";
import NewTransactionForm from "./components/newTrasactionForm/NewTransactionForm";
function App() {
  return (
    <div className="container AppContainer">
      <TransactionContextProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <NewTransactionForm />
      </TransactionContextProvider>
    </div>
  );
}

export default App;
