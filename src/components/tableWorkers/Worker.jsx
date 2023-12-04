import { useContext, useState } from "react";
import { globalContext } from "../contextWorkers/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faBan,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const Worker = () => {
  const { name, correo, idusuario } = useContext(globalContext);
  const [workerState, setWorkerState] = useState(false);

  const changeWorkerStateActive = () => setWorkerState(true);
  const changeWorkerStateInactive = () => setWorkerState(false);

  return (
    <tr>
      <td>{name}</td>
      <td>{correo}</td>
      <td>{idusuario}</td>
      <td>
        <span
          onClick={
            workerState ? changeWorkerStateInactive : changeWorkerStateActive
          }
          className={
            workerState ? "color-active-workers" : "color-inactive-workers"
          }
        >
          {workerState ? "Activo" : "Inactivo"}
        </span>
      </td>
      <td className="icon-table-center">
        <span className="general-icons-tables-workers general-icons-tables-workers-info">
          <FontAwesomeIcon icon={faCircleInfo} />
        </span>
      </td>
      <td className="icon-table-center">
        <span className="general-icons-tables-workers general-icons-tables-workers-switch">
          <FontAwesomeIcon icon={faBan} />
        </span>
      </td>
    </tr>
  );
};

export default Worker;
