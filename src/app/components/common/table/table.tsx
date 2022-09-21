import React from "react";

import { TableProps } from "./types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table: React.FC<TableProps> = ({ items, columns }) => {
  return (
    <table className="notes__table list-table">
      <TableHeader columns={columns} />
      <TableBody items={items} columns={columns} />
    </table>
  );
};

export default Table;
