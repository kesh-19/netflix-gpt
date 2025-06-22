import { Provider } from "react-redux";
import Home from "./components/Content/Home";
import Login from "./components/Login/Login";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./components/store/appStore";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRoutes} />
      </Provider>
    </div>
  );
}

export default App;
