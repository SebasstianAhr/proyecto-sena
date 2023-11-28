import { FaCheckCircle } from "react-icons/fa";
const TablesWorkers = () => {
  return (
    <div className="container-tables">
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>ID USUARIO</th>
            <th>CONTRASEÑA</th>
            <th>ESTADO</th>
          </tr>
        </thead>

        <tr>
          <td>JUAN PASTAS VALENCIA</td>
          <td>jcpastas@dayrep.com</td>
          <td>Juan12345</td>
          <td>Activo</td>
          <td>
            <FaCheckCircle />
          </td>
          <td>
            <FaCheckCircle />
          </td>
        </tr>
        <tr>
          <td>JUAN ANDRES CASTAÑO</td>
          <td>jacastaño@dayrep.com</td>
          <td>JuanAndres12345</td>
          <td>Inactivo</td>
          <td>
            <FaCheckCircle />
          </td>
          <td>
            <FaCheckCircle />
          </td>
        </tr>
        <tr>
          <td>DANIEL CAMILO PALADINES</td>
          <td>dapaladinez@dayrep.com</td>
          <td>Daniel12345</td>
          <td>Activo</td>
          <td>
            <FaCheckCircle />
          </td>
          <td>
            <FaCheckCircle />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TablesWorkers;
/*los estilos de este componente estan en la linea 337 de css*/
