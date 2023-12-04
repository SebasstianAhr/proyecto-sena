import { useContext, useState } from "react";
import { globalComponentProcesses } from "../contextProcess/globalComponentProcesses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
const Processes = () => {
  const { nameProcess, state } = useContext(globalComponentProcesses);

  return (
    <tr>
      <td>{nameProcess}</td>
      <td>{state}</td>
      <td className="action-icon-from-processes icon-table-center">
        <span>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span className="color-icon-trash-processes">
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </td>
    </tr>
  );
};

export default Processes;
