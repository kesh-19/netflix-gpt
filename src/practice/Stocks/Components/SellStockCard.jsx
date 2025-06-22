import styled from "styled-components";
import { StyledStockCard } from "./StocksCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sellStocks } from "../Store/myStocksSlice";
import { increaseFunds } from "../Store/myFundsSlice";

const StyledSell = styled.div`
  display: flex;
`;

const SellStocksCard = ({ stock }) => {
  const [stockQuantity, setStockQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleSell = () => {
    dispatch(
      sellStocks({
        company: stock.company,
        quantity: stockQuantity,
      })
    );

    dispatch(increaseFunds(stockQuantity * stock.price));
  };
  return (
    <StyledStockCard>
      <div>{stock.company}</div>
      <div>{stock.price}</div>
      <div>{stock.quantity}</div>
      <StyledSell>
        <button
          onClick={() => setStockQuantity((prevQuantity) => prevQuantity + 1)}
          disabled={stockQuantity === stock.quantity}
        >
          +
        </button>
        <button
          onClick={() => setStockQuantity((prevQuantity) => prevQuantity - 1)}
          disabled={stockQuantity === 0}
        >
          -
        </button>
        <div>amount = {stockQuantity}</div>
      </StyledSell>
      <button disabled={stockQuantity < 1} onClick={handleSell}>
        Sell
      </button>
    </StyledStockCard>
  );
};

export default SellStocksCard;
