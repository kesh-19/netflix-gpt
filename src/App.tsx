import Home from "./components/Content/Home";
import Login from "./components/Login/Login";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      <RouterProvider router={appRoutes} />
    </div>
  );
}

export default App;
