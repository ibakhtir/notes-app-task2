import React from "react";

import { Item, TableProps } from "./types";

const TableBody: React.FC<TableProps> = ({ items, columns }) => {
  return (
    <tbody>
      {items.map((item: Item) => (
        <tr key={item.id}>
          {columns.map((el) => (
            <td key={el.name}>{el.content(item)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
