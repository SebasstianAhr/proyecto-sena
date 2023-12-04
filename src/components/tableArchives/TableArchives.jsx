import React from "react";
import PersonArchive from "./PersonArchive";

const TableArchives = () => {
  return (
    <div className="container-tables-archives container-tables">
      <table>
        <thead>
          <tr>
            <th>ENCARGADO</th>
            <th>FECHA</th>
            <th>PROCESO</th>
            <th>MAQUINA</th>
            <th className="icon-table-center">DESCARGA</th>
            <th className="icon-table-center">BORRAR</th>
          </tr>
        </thead>
        <tbody>
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
          <PersonArchive />
        </tbody>
      </table>
    </div>
  );
};

export default TableArchives;
