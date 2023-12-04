import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StatesComponents from "./components/contextWorkers/StatesComponents.jsx";
import StateComponentArchives from "./components/contextArchives/StateComponentArchives.jsx";
import StateComponentProcesses from "./components/contextProcess/StateComponentProcesses.jsx";
import StateComponentMachine from "./components/contextMachine/StateComponentMachine.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StatesComponents>
      <StateComponentArchives>
        <StateComponentProcesses>
          <StateComponentMachine>
            <App />
          </StateComponentMachine>
        </StateComponentProcesses>
      </StateComponentArchives>
    </StatesComponents>
  </React.StrictMode>
);
