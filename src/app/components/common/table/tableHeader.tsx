import React from "react";

import { Column } from "./types";

type Columns = {
  columns: Column[];
};

const TableHeader: React.FC<Columns> = ({ columns }) => {
  return (
    <thead className="text-sm text-left uppercase tracking-wider">
      <tr className="sticky top-0 z-10 bg-gray-100 shadow">
        {columns.map((el) => (
          <th key={el.name} className="py-3 px-5">
            {el.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
