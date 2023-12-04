import Machine from "./Machine";

const TableMachine = () => {
  return (
    <div className="container-tables-archives container-tables">
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th className="icon-table-center">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <Machine />
          <Machine />
          <Machine />
        </tbody>
      </table>
    </div>
  );
};

export default TableMachine;
