import { useContext } from "react";
import { globalContext } from "../context/globalContext";
import { FcInfo, FcCancel } from "react-icons/fc";

const Worker = () => {
  const { name, setName } = useContext(globalContext);
  const { password, setPassword } = useContext(globalContext);

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{password}</td>
        <td>Juan12345</td>
        <td>
          <span className="color-active-workers"> Activo</span>
        </td>
        <td>
          <span className="general-icons-tables-workers">
            <FcCancel />
          </span>
        </td>
        <td>
          <span className="general-icons-tables-workers">
            <FcInfo />
          </span>
        </td>
      </tr>
    </div>
  );
};

export default Worker;
