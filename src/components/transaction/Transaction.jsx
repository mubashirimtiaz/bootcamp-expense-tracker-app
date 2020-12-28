import React, { useContext } from "react";
import trashcan from "../../assets/icons/trash-can.png";
import { TransactionContext } from "../../context/TransactionContext";
import "./Transaction.css";

const Transation = ({ id, amount, text }) => {
  const { dispatch } = useContext(TransactionContext);
  const handleClick = (event) => {
    dispatch({ type: "REMOVE_TRANSACTION", payload: id });
  };
  const sign = amount > 0 ? "+" : "-";
  return (
    <li
      className={
        sign === "+"
          ? "list-group-item px-4 d-flex text-muted justify-content-between align-items-center transaction income"
          : "list-group-item px-4 d-flex text-muted justify-content-between align-items-center transaction expense"
      }
    >
      <span>{text}</span>
      <span>
        {sign}${Math.abs(amount)}
      </span>

      <img
        onClick={handleClick}
        src={trashcan}
        alt="trash"
        className="p-2 bg-danger rounded delete-icon"
      />
    </li>
  );
};

export default Transation;
