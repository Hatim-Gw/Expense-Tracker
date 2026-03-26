import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const TransactionList = () => {
  const context = useContext(GlobalContext);

  console.log(context);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$4.00</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
