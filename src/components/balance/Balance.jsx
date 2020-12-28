import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const balance = transactions["transactions"].reduce(
    (acc, curr) => (acc += Number(curr.amount)),
    0
  );
  return (
    <div className="mt-3">
      <h4 className="text-muted">
        Balance ={" "}
        <span className="text-info">
          {" "}
          <sup>$</sup>
          {balance}
        </span>
      </h4>
    </div>
  );
};

export default Balance;
