import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { buyStocks } from "../Store/myStocksSlice";
import { decreaseFunds } from "../Store/myFundsSlice";

export const StyledStockCard = styled.div`
  min-height: 50px;
  display: flex;
  border: 1px solid gray;
  max-width: 300px;
  flex-direction: column;
`;

const StyledQuantity = styled.div`
  display: flex;
`;
const StocksCard = ({ stock }) => {
  const [quantity, setQuantity] = useState(0);
  const funds = useSelector((state) => state.myFunds.value);

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(
      buyStocks({
        ...stock,
        quantity,
      })
    );

    dispatch(decreaseFunds(quantity * stock.price));
    setQuantity(0);
  };
  return (
    <StyledStockCard>
      <div>{stock.company}</div>
      <div>{stock.price}</div>
      <StyledQuantity>
        <button onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}>
          Increment
        </button>
        <button
          disabled={quantity === 0}
          onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
        >
          Decrement
        </button>
      </StyledQuantity>
      <div>quantity = {quantity}</div>
      <div>total price = {quantity * stock.price}</div>
      <h3>
        <button disabled={quantity * stock.price > funds} onClick={handleBuy}>
          buy
        </button>
      </h3>
    </StyledStockCard>
  );
};

export default StocksCard;
