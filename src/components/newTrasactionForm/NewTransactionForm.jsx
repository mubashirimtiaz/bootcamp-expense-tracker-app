import React, { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const NewTransactionForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TransactionContext);
  const [amount, setAmount] = useState(0);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TRANSACTION", payload: { text, amount } });
    setText("");
    setAmount(0);
  };
  return (
    <form className="text-muted mt-3" onSubmit={handleSubmit}>
      <label htmlFor="text">Text</label>
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        className="form-control"
        onChange={handleTextChange}
        required
      />
      <label htmlFor="text" className="mt-2">
        Amount{" "}
        <span className="text-info small">
          ( - for expense value, + for income value )
        </span>
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount}
        className="form-control"
        onChange={handleAmountChange}
        required
      />
      <div className="text-right mt-2">
        <input
          type="submit"
          value="Add"
          className="px-5 btn btn-outline-info"
        />
      </div>
    </form>
  );
};

export default NewTransactionForm;
