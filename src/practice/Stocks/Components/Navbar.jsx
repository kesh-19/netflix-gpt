import { useNavigate } from "react-router-dom";
import { navItems } from "../StocksApp";
import { useDispatch } from "react-redux";
import { increaseFunds } from "../Store/myFundsSlice";
import { useEffect } from "react";

const Navbar = () => {
  console.log("rendered nav");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increaseFunds(5000));
  }, [dispatch]);

  return (
    <div>
      {navItems.map((item) => (
        <button key={item.path} onClick={() => navigate(item.path)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
