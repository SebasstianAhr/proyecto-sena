import Worker from "./Worker";

const TablesWorkers = () => {
  return (
    <div className="container-tables">
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
