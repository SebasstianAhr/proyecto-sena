import { useState } from "react";
import { globalComponentProcesses } from "./globalComponentProcesses";

const StateComponentProcesses = ({ children }) => {
  const [nameProcess, setNameProcess] = useState("GEISHA");
  const [state, setState] = useState("ACTIVO");
  return (
    <globalComponentProcesses.Provider value={{ nameProcess, state }}>
      {children}
    </globalComponentProcesses.Provider>
  );
};

export default StateComponentProcesses;
