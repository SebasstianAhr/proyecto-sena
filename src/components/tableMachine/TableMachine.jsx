import Machine from "./Machine";
import { globalContext } from "../context/globalContext";
import Card from "../componentsHome/componentes/Card";
import Card_eliminar_maquinas from "../componentsHome/componentes/card_eliminar_maquina";
import { useContext } from "react";

const TableMachine = () => {
  const {show, deleteMachines} = useContext(globalContext)
  return (
    <div className="container-tables-archives container-tables">
       {show?<Card/>:""}
       {deleteMachines?<Card_eliminar_maquinas/>:""}
      
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th className="icon-table-center">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <Machine />
          <Machine />
          <Machine />
        </tbody>
      </table>
    </div>
  );
};

export default TableMachine;
