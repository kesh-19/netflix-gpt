import { useDispatch, useSelector } from "react-redux";
import { decreaseFunds, increaseFunds } from "../Store/myFundsSlice";
import { useState } from "react";

const MyFunds = () => {
  const funds = useSelector((state) => state.myFunds.value);
  const [transactionAmount, setTransactionAmount] = useState(0);

  const dispatch = useDispatch();
  const addFunds = () => {
    dispatch(increaseFunds(transactionAmount));
  };
  const withdrawFunds = () => {
    dispatch(decreaseFunds(transactionAmount));
  };

  return (
    <div>
      <h3>Current balance = Rs. {funds}</h3>
      <input
        type="number"
        onKeyUp={(e) => setTransactionAmount(Number(e.target.value))}
      />
      <button onClick={addFunds}>add</button>
      <button onClick={withdrawFunds}>withdraw</button>
    </div>
  );
};

export default MyFunds;
