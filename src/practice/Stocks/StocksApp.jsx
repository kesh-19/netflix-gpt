import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Home from "./Components/Home";
import MyStocks from "./Components/MyStocks";
import MyFunds from "./Components/MyFunds";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./Store/store";

export const navItems = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "My Stocks",
    path: "stocks",
  },
  {
    name: "My Funds",
    path: "funds",
  },
];

const getComponent = (path) => {
  switch (path) {
    case "":
      return <Home />;
    case "stocks":
      return <MyStocks />;
    case "funds":
      return <MyFunds />;

    default:
      return <Home />;
  }
};

const StocksApp = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {navItems.map((item, index) => (
              <Route
                exact={index === 0}
                key={item.path}
                path={item.path}
                element={getComponent(item.path)}
              />
            ))}
          </Routes>
        </BrowserRouter>
        <Outlet />
      </div>
    </Provider>
  );
};

export default StocksApp;
