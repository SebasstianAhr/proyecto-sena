import { useContext, useState } from "react";
import { globalContextArchives } from "../contextArchives/globalcontextArchives";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";

const PersonArchive = () => {
  const { name, date, process, machine } = useContext(globalContextArchives);

  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{process}</td>
      <td>{machine}</td>
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
