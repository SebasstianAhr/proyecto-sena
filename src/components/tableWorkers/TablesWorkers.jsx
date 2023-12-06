import { useContext } from "react";
import Card from "../componentsHome/componentes/Card";
import Worker from "./Worker";
import { globalContext } from "../context/globalContext";

const TablesWorkers = () => {

  const {show} = useContext(globalContext)

  return (
    <div className="container-tables">
      
      {show?<Card/>:""}

      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>CORREO</th>
            <th>ID USUARIO</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <Worker />
          <Worker />
          <Worker />
        </tbody>
      </table>
    </div>
  );
};

export default TablesWorkers;
/*los estilos de este componente estan en la linea 337 de css*/
