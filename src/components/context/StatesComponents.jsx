import { globalContext } from "./globalContext";
import { useState } from "react";

const StatesComponents = ({ children }) => {
  const [name, setName] = useState("sebasstian Ahr");
  const [password, setPassword] = useState("jcpastas@dayrep.com");

  return (
    <globalContext.Provider value={{ name, setName, password, setPassword }}>
      {children}
    </globalContext.Provider>
  );
};

export default StatesComponents;
