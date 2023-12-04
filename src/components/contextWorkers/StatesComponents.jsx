import { globalContext } from "./globalContext";
import { useState } from "react";

const StatesComponents = ({ children }) => {
  const [name, setName] = useState("sebasstian Ahr");
  const [correo, setCorreo] = useState("jcpastas@dayrep.com");
  const [idusuario, setIdusuario] = useState("sebas117");

  return (
    <globalContext.Provider value={{ name, correo, idusuario }}>
      {children}
    </globalContext.Provider>
  );
};

export default StatesComponents;
