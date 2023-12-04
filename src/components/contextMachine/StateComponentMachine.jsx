import { useState } from "react";
import { globalComponentMachine } from "./globalComponentMachine";

const StateComponentMachine = ({ children }) => {
  const [name, setName] = useState("Maquina 1");

  return (
    <globalComponentMachine.Provider value={{ name }}>
      {children}
    </globalComponentMachine.Provider>
  );
};

export default StateComponentMachine;
