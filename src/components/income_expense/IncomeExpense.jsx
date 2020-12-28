import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import "./IncomeExpense.css";

const IncomeExpense = () => {
  const {
    transactions: { transactions },
  } = useContext(TransactionContext);
  console.log(transactions);
  const income = transactions
    .filter(({ amount }) => amount > 0)
    .reduce((acc, curr) => (acc += Number(curr.amount)), 0);
  const expense = transactions
    .filter(({ amount }) => amount < 0)
    .reduce((acc, curr) => (acc += Number(curr.amount)), 0);
  return (
    <div className="d-flex justify-content-between text-muted align-items-center my-3 border border-muted py-3 shadow-lg rounded">
      <div className="text-center w-100">
        <h5 className="text-success">Income</h5>

        <p className="lead font-weight-bold">
          <sup>$</sup>
          {income}
        </p>
      </div>
      <div className="divider"></div>
      <div className="text-center w-100">
        <h5 className="text-danger">Expense</h5>
        <p className="lead font-weight-bold">
          <sup>$</sup>
          {Math.abs(expense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
