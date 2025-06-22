import { useSelector } from "react-redux";
import SellStocksCard from "./SellStockCard";

const MyStocks = () => {
  const myStocks = useSelector((state) => state.myStocks);
  const funds = useSelector((state) => state.myFunds.value);
  return (
    <div>
      <h3>Current balance = Rs. {funds}</h3>
      {Object.keys(myStocks).map((stockName) => {
        const stock = myStocks[stockName];
        return <SellStocksCard key={stock.company} stock={stock} />;
      })}
    </div>
  );
};

export default MyStocks;
