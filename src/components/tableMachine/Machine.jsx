import { useState, useContext } from "react";
import { globalComponentMachine } from "../contextMachine/globalComponentMachine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";

const Machine = () => {
  const { name } = useContext(globalComponentMachine);
  return (
    <tr>
      <td>{name}</td>

      <td className="action-icon-from-processes icon-table-center">
        <span className="color-active-workers">ACTIVO</span>
        <span className="general-icons-tables-workers-info">
          <FontAwesomeIcon icon={faCircleInfo} />
        </span>
        <span className="color-icon-trash-processes">
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </td>
    </tr>
  );
};

export default Machine;
