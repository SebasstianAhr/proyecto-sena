import { useContext, useState } from "react";
import { globalContext } from "../context/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
const Processes = () => {
  const { nameProcess, stateProcess } = useContext(globalContext);

  return (
    <tr>
      <td>{nameProcess}</td>
      <td>{stateProcess}</td>
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
