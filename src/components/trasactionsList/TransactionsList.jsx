import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Transaction from "../transaction/Transaction";
const TransactionsList = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="mt-3">
      <h4 className="text-muted">History</h4>
      {transactions["transactions"].length ? (
        <ul className="list-group">
          {transactions["transactions"].map(({ id, text, amount }) => (
            <Transaction key={id} text={text} amount={amount} id={id} />
          ))}
        </ul>
      ) : (
        <p className="lead text-info text-center my-2">
          There is no transaction to display :)
        </p>
      )}
    </div>
  );
};

export default TransactionsList;
