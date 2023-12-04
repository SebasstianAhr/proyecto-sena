import Processes from "./Processes";

const TableProcesses = () => {
  return (
    <div className="container-tables">
      <table>
        <thead>
          <tr>
            <th>NOMBRE PROCESO</th>
            <th>ESTADO</th>
            <th className="icon-table-center">ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          <Processes />
          <Processes />
          <Processes />
        </tbody>
      </table>
    </div>
  );
};

export default TableProcesses;
