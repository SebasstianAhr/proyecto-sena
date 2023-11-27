import "./index.css";

import { BrowserRouter, useRoutes } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import HomePage from "./pages/HomePage";
import Statistics from "./pages/Statistics";
import Workers from "./pages/Workers";
import Archives from "./pages/Archives";
import Processes from "./pages/Processes";
import Suppliers from "./pages/Suppliers";
import Machines from "./pages/Machines";

const App = () => {
  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/login", element: <FormLogin /> },
      { path: "/", element: <HomePage /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/workers", element: <Workers /> },
      { path: "/archives", element: <Archives /> },
      { path: "/processes", element: <Processes /> },
      { path: "/suppliers", element: <Suppliers /> },
      { path: "/machines", element: <Machines /> },
    ]);

    return routes;
  };

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
