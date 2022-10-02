import React from "react";

import { Item, TableProps } from "./types";

const TableBody: React.FC<TableProps> = ({ items, columns }) => {
  return (
    <tbody className="text-sm">
      {items.map((item: Item) => (
        <tr
          key={item.id}
          className="border-b border-solid border-gray-200 last:border-b-0"
        >
          {columns.map((el) => (
            <td key={el.name} className="py-3 px-5">
              {el.content(item)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
