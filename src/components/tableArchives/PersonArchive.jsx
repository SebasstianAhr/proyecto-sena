import { useContext, useState } from "react";
import { globalContext } from "../context/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";

const PersonArchive = () => {
  const { nameArchives, dateArchives, processArchives, machineArchives } = useContext(globalContext);

  return (
    <tr>
      <td>{nameArchives}</td>
      <td>{dateArchives}</td>
      <td>{processArchives}</td>
      <td>{machineArchives}</td>
      <td className="icon-table-center">
        <span>
          <FontAwesomeIcon icon={faDownload} />
        </span>
      </td>
      <td className="icon-table-center">
        <span>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </td>
    </tr>
  );
};

export default PersonArchive;
