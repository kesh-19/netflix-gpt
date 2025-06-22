import { useEffect, useState } from "react";
import StocksCard from "./StocksCard";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);
  const funds = useSelector((state) => state.myFunds.value);

  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/db12a41f8.json"
    )
      .then((raw) => raw.json())
      .then((result) => setData(result.stocks));
    // setInterval(() => {
    // }, 1000);
  }, []);

  return (
    <div>
      <h3>Rs. {funds}</h3>
      {data.map((item) => (
        <StocksCard key={item.company} stock={item} />
      ))}
      <div>end</div>
    </div>
  );
};

export default Home;
