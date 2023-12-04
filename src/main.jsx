import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StatesComponents from "./components/context/StatesComponents.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StatesComponents>
      <App />
    </StatesComponents>
  </React.StrictMode>
);
