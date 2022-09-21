import React from "react";

import { Column } from "./types";

type Columns = {
  columns: Column[];
};

const TableHeader: React.FC<Columns> = ({ columns }) => {
  return (
    <thead>
      <tr className="list-table__header-sticky">
        {columns.map((el) => (
          <th key={el.name}>{el.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
